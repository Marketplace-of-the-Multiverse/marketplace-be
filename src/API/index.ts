import { ChainConfig } from "../ChainConfigs/types";
import * as chains from "../ChainConfigs";
import DB from "../DB"
import { AxiosResponse, AxiosRequestHeaders } from "axios";
import {
    axiosCall,
    generateRandomNumberChar,
    getHash,
    getInsertQuery,
} from "../../utils";
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({
    path: path.join(__dirname, '../../.env')
});
import _ from "lodash";
import ContractCall from '../ContractCall';
import { Nft, UserActionLog } from "./types";
import {
    AxelarQueryAPI,
    Environment,
    EvmChain,
    GasToken,
} from "@axelar-network/axelarjs-sdk";
import { ListedToken } from "../ContractCall/types";

const isTestnet = process.env.CHAIN_ENV === "testnet";

const ETHEREUM_ADDRESS_LENGTH = 42;

const AvailableChain = chains.chainConfigs;

const sanitizeAddress = (address : string) => {
    address = address.replace(/ /g, "");
    address = address.trim();

    if (address.length !== ETHEREUM_ADDRESS_LENGTH) {
        return "";
    }

    if (address.substring(0, 2) !== '0x') {
        return "";
    }

    return address;
}

export const insertUserActionLog = async(data: UserActionLog) => {
    const db = new DB();

    const table = 'user_action_log';
    const columns = [
        'address',
        'token_id',
        'from_chain',
        'to_chain',
        'is_crosschain',
        'action',
        'tx_hash'
    ];

    let values: any[][] = [];

    const flattenData = _.values(data);
    values.push(flattenData);

    const query = getInsertQuery(columns, values, table, true);
    return await db.executeQueryForSingleResult(query);
}

/**
 * Mint NFT
 * @date 2022-11-08
 * @param { Nft } data
 */
export const insertNft = async(data: Nft, log: UserActionLog) => {
    const db = new DB();

    const table = 'nft';
    const columns = [
        'chain_id',
        'hash',
        'name',
        'creator',
        'image',
        'description',
    ];
    let values: any[][] = [];

    const flattenData = _.values(data);
    values.push(flattenData);

    await insertUserActionLog(log);
    const query = getInsertQuery(columns, values, table, true);

    return await db.executeQueryForSingleResult(query);
}

/**
 * Get all nft from marketplace using moralis api / evm call
 * @date 2022-11-01
 * @param { string } chainId
 */
export const getAllNftFromMoralis = async (chainId : number) => { // get chain nft contract address
    const chain: ChainConfig = _.find(chains, { id: chainId }) as ChainConfig;

    if (_.isNil(chain) || !_.has(chain, 'nftMarketplace')) {
        throw Error("Invalid Chain");
    }

    // store all tokens
    let nfts: any = [];
    let nextCursor = null;

    do {
        const headers: AxiosRequestHeaders = {
            'accept': 'application/json',
            'X-API-Key': `${
                process.env.MORALIS
            }`
        };

        let config: any = {
            method: 'GET',
            url: `https://deep-index.moralis.io/api/v2/nft/${
                chain.nftMarketplace
            }`,
            params: {
                chain: chainId.toString(16),
                format: 'decimal',
                token_addresses: chain.nftMarketplace,
                // limit: 10
            },
            headers: headers
        }

        // append next cursor if not empty
        if (!_.isNil(nextCursor)) {
            config.params['cursor'] = nextCursor;
        }

        const data: any = await axiosCall(headers, config);

        // merge all result
        if (!_.isNil(data)) {
            nfts = _.concat(nfts, data.result);

            // while next page still available
            nextCursor = data.cursor;
        }

    } while(!_.isNil(nextCursor));

    return nfts;
}

/**
 * Alternative way to get all nft
 * @date 2022-11-08
 * @param { number } chainId
 */
export const getAllNftFromEvm = async (listedOnly: boolean = false) => { // get chain nft contract address
    let nfts: ListedToken[][] = [];
    await Promise.all(
        _.map(chains, async(chain: ChainConfig) => {
            try {
                if (_.includes(AvailableChain, chain.id)) {
                    // initiate ethers
                    const etherCall = new ContractCall(chain.id);
                    // raw result which included indexes and key/value pair
                    let result: ListedToken[] = await etherCall.getAllNFTs(listedOnly);

                    // format data, remove all the indexes
                    const formattedResult: ListedToken[] = [];
                    for (let re of result) {
                        const temp: any = {
                            tokenId: (re.tokenId).toString(),
                            owner: re.owner,
                            seller: re.seller,
                            price: (re.price).toString(),
                            currentlyListed: re.currentlyListed,
                            tokenURI: re.tokenURI,
                            hash: (re.tokenURI).substring((re.tokenURI).lastIndexOf('/') + 1)
                        };

                        formattedResult.push(temp);
                        console.log(temp);
                    }


                    let filteredResult: any[] = [];
                    let nftHash: string[] = [];

                    // filter listed or all
                    _.map(formattedResult as any[], (arr) => {
                        if (listedOnly && arr.currentlyListed) {
                            filteredResult.push(arr);
                            nftHash.push(`'${arr.hash}'`);
                        } else if (!listedOnly) {
                            filteredResult.push(arr);
                            nftHash.push(`'${arr.hash}'`);
                        }
                    });

                    const nftQuery = `
                        SELECT
                            *
                        FROM nft
                        WHERE hash IN (${ _.join(nftHash, ', ') });
                    `;

                    const db = new DB();

                    const metadata: any = await db.executeQueryForResults(nftQuery);

                    const sortedMetadata: any = {};
                    _.map(metadata, (md) => {
                        sortedMetadata[md.hash] = md;
                    });

                    // get metadata from db
                    _.map(filteredResult, (farr, fIndex) => {
                        filteredResult[fIndex].metadata = sortedMetadata[farr.hash] || { chain_id: chain.id };
                    });

                    // nft with metadata
                    nfts.push(filteredResult);
                } // if
            } catch {}
        }) // map
    );

    return _.flatten(nfts);
}

export const estimateAxelarGasFee = async(fromChainId: number, toChainId: number) => {
    const axelarEnv = isTestnet ? Environment.TESTNET : Environment.MAINNET;
    const api = new AxelarQueryAPI({ environment: axelarEnv });

    // destination this
    const fromChain: any = _.find(chains, { id: fromChainId });
    const toChain: any = _.find(chains, { id: toChainId });

    // failed, return 0 gas fee
    if (_.isNil(fromChain) || _.isNil(toChain)) {
        return 0;
    }

    // Calculate how much gas to pay to Axelar to execute the transaction at the destination chain
    const gasFee = await api.estimateGasFee(
        fromChain.evmChain,
        toChain.evmChain,
        fromChain.nativeCurrency.symbol,
        1000000,
        2
    );
    console.log(gasFee);

    return gasFee;
}

export const getTokenTxs = async(chainId: number, tokenId: number) => {
    const chain: ChainConfig = _.find(chains, { id: chainId }) as ChainConfig;
    // from db??
    // owner -> marketplace -> new owner
    // owner -> marketplace (can get from contract)
    // marketplace -> new owner (get from moralis)

    // cannot get from covalent (detail)
    // full
    // https://api.covalenthq.com/v1/:chain_id/tokens/:contract_address/nft_transactions/:token_id/?&key=ckey_3b1f248f961d429295f67cd5cf1
    // eg
    // https://api.covalenthq.com/v1/1/tokens/0xe4605d46fd0b3f8329d936a8b258d69276cba264/nft_transactions/123/?quote-currency=USD&format=JSON&page-size=100&page-number=1&key=ckey_3b1f248f961d429295f67cd5cf1

    const headers: AxiosRequestHeaders = {
        'accept': 'application/json',
    };
    // covalent integration
    // covalent only return 300?? results per request and 5req/s
    const config = {
        method: 'GET',
        url: `https://api.covalenthq.com/v1/${ chain.id }/tokens/${ chain.nftMarketplace }/nft_transactions/${ tokenId }/?&key=${ process.env.COVALENT }`,
        headers: headers
    }

    const data: any = await axiosCall(headers, config);

    // do some filter to format nice data output
    // prev.owner -> price -> curr.owner

    if (_.isNil(data)) {
        return []
    }
    return data.data.items;
}

/**
 * Get list of user action / tx from db (list token, )
 * @date 2022-11-08
 * @param { number } chainId
 * @param { string } address
 * @param { number } tokenId
 */
export const getUserActionLog = async(address: string) => {
    address = sanitizeAddress(address);
    // get from db
    // including action: list, sell, etc
    const db = new DB();
    const logQuery = `
        SELECT
            *
        FROM user_action_log
        WHERE address = '${address}'
        ORDER BY created_at DESC
    `;

    const logs: any = await db.executeQueryForResults(logQuery);
    return logs;
}

/**
 * Get wallet's nft (on-chain)
 * Frontend there can direct call marketplaceContract.getAllMyNFT() after connect window.ethereum
 * @date 2022-11-03
 * @param { string } address
 * @param { string } chainId
 */
 export const getHolderNftFromMoralis = async (holder:string, listedOnly: boolean = false) => {
    // got issue where listed token
    holder = sanitizeAddress(holder);

    const headers: AxiosRequestHeaders = {
        'accept': 'application/json',
        'X-API-Key': `${
            process.env.MORALIS
        }`
    };

    // store all nfts
    let nfts: any = [];

    await Promise.all(
        _.map(chains, async(chain: ChainConfig) => {
            let nextCursor = null;

            do {
                let config: any = {
                    method: 'GET',
                    url: `https://deep-index.moralis.io/api/v2/${ holder }/nft`,
                    params: {
                        chain: (chain.id).toString(16),
                        format: 'decimal',
                        token_addresses: chain.nftMarketplace,
                        // limit: 10
                    },
                    headers: headers
                }

                // append next cursor if not empty
                if (!_.isNil(nextCursor)) {
                    config.params['cursor'] = nextCursor;
                }

                const data: any = await axiosCall(headers, config);

                // merge all result
                if (!_.isNil(data)) {
                    nfts = _.concat(nfts, data.result);

                    // while next page still available
                    nextCursor = data.cursor;
                }

            } while(!_.isNil(nextCursor));
        })
    );

    return nfts;
}

export const getHolderNftFromEvm = async (holder:string, listedOnly: boolean = false) => {
    holder = sanitizeAddress(holder);
    let nfts: ListedToken[][] = [];
    await Promise.all(
        _.map(chains, async(chain: ChainConfig) => {
            try {
                if (_.includes(AvailableChain, chain.id)) {
                    // initiate ethers
                    const etherCall = new ContractCall(chain.id);

                    // get result from evm
                    const result: ListedToken[] = await etherCall.getHolderNFTs(holder, listedOnly);

                    // format data, remove all the indexes
                    const formattedResult: ListedToken[] = [];
                    for (let re of result) {
                        const temp: any = {
                            tokenId: (re.tokenId).toString(),
                            owner: re.owner,
                            seller: re.seller,
                            price: (re.price).toString(),
                            currentlyListed: re.currentlyListed,
                            tokenURI: re.tokenURI,
                            hash: (re.tokenURI).substring((re.tokenURI).lastIndexOf('/') + 1)
                        };

                        formattedResult.push(temp);
                    }

                    let filteredResult: any[] = [];
                    let nftHash: string[] = [];

                    // filter listed or all
                    _.map(formattedResult as any[], (arr) => {
                        if (listedOnly && arr.currentlyListed) {
                            filteredResult.push(arr);
                            nftHash.push(`'${arr.hash}'`);
                        } else if (!listedOnly) {
                            filteredResult.push(arr);
                            nftHash.push(`'${arr.hash}'`);
                        }
                    });

                    const nftQuery = `
                        SELECT
                            *
                        FROM nft
                        WHERE hash IN (${ _.join(nftHash, ', ') });
                    `;

                    const db = new DB();

                    const metadata: any = await db.executeQueryForResults(nftQuery);
                    const sortedMetadata: any = {};
                    _.map(metadata, (md) => {
                        sortedMetadata[md.hash] = md;
                    });

                    // get metadata from db
                    _.map(filteredResult, (farr, fIndex) => {
                        filteredResult[fIndex].metadata = sortedMetadata[farr.hash] || { chain_id: chain.id };
                    });

                    // nft with metadata
                    nfts.push(filteredResult);
                } // if
            } catch {}
        }) // map
    );

    return _.flatten(nfts);
}

/**
 * Get nft metadata (name, creator, images, description, etc)
 * @date 2022-11-07
 * @param { string } hash
 */
export const getMetadata = async(hash: string) => {
    const db = new DB();
    const metaQuery = `
        SELECT
            *
        FROM nft
        WHERE hash = '${hash}'
    `;

    const metadata: any = await db.executeQueryForSingleResult(metaQuery);
    return metadata || {};
}

/**
 * Generate hash for new token
 * @date 2022-11-07
 * @param { string } chainId
 */
export const getMintData = async (chainId : number) => {
    let db = new DB();

    let checkDB = false;
    // let checkContract = false;
    let randomSalt;
    let hash: string = '';

    // check if token id claimed
    // while (! checkDB || ! checkContract) { // generate token between 16 ~ 32 chars
    while (! checkDB) { // generate token between 16 ~ 32 chars
        randomSalt = generateRandomNumberChar(16, 32);

        hash = getHash(`${ new Date().getTime() }_${randomSalt}`);

        // checkDB for duplicated tokenId
        const query = `SELECT count(id) as count FROM nft WHERE hash = "${hash}"`;
        const res = await db.executeQueryForSingleResult<{ count: number }>(query);

        checkDB = Number(res?.count) === 0 || _.isNil(res) ? true : false;

        // checkContract (Ignore first)
        // const claimed = await etherCall.checkNftClaimed(randomSalt);
        // // if not a valid nextTokenId
        // checkContract = claimed == 1 ? false : true;
        // get new token hash (unixtime + random number salt)
    }

    return hash;
}

export const getApproved = async (chainId: number, tokenId: number) => { // get chain nft contract address
    const chain: any = _.find(chains, {id: chainId});
    if (_.isNil(chain) || !_.includes(AvailableChain, chain.id)) {
        return false;
    }

    // initiate ethers
    const etherCall = new ContractCall(chain.id);
    // raw result which included indexes and key/value pair
    const result = await etherCall.getApproved(tokenId);
    console.log(result);
    if (result == '0x0000000000000000000000000000000000000000') {
        return false;
    }
    return true;
}

