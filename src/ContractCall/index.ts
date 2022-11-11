import { ethers, Contract } from "ethers";
import * as chains from "../ChainConfigs";
import _ from "lodash";
import { ChainConfig } from "../ChainConfigs/types";
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env')});
import MarketplaceContract from '../ABI/NFTMarketplace.json';
import { ListedToken } from "./types";

export default class ContractCall {
    provider: ethers.providers.JsonRpcProvider;
    batchProvider: ethers.providers.JsonRpcBatchProvider;
    chainConfig: ChainConfig;
    signer: ethers.Wallet;
    batchSigner: ethers.Wallet;
    marketplaceContract: Contract;
    batchMarketplaceContract: Contract;

    constructor(chainId: number) {
        // get chain nft contract address
        const chain: any = _.find(chains, { id: chainId });

        this.chainConfig = chain;
        this.provider = new ethers.providers.JsonRpcProvider(chain.rpc);
        this.signer = new ethers.Wallet(`${process.env.PRIVATE_KEY}`, this.provider);
        this.batchProvider = new ethers.providers.JsonRpcBatchProvider(chain.rpc);
        this.batchSigner = new ethers.Wallet(`${process.env.PRIVATE_KEY}`, this.batchProvider);
        this.marketplaceContract = new ethers.Contract(chain.nftMarketplace, MarketplaceContract.abi, this.batchSigner);
        this.batchMarketplaceContract = new ethers.Contract(chain.nftMarketplace, MarketplaceContract.abi, this.batchSigner);
    }

    checkNftClaimed = async(tokenId: string) => {
        const owner = await this.marketplaceContract.ownerOf(tokenId);
        console.log(`claimed by: ${owner}`);
        return await owner != (0).toString(16);
    }

    getAllNFTs = async(listedOnly: boolean = false): Promise<ListedToken[]> => {
        let data: ListedToken[] = await this.marketplaceContract.getAllNFTs(listedOnly);
        data = _.filter(data, (d: ListedToken) => {
            return (d.tokenId).toString() != "0";
        });
        return data;
    }

    getHolderNFTs = async(holder: string, listedOnly: boolean = false) => {
        let data: ListedToken[] = await this.marketplaceContract.getHolderNFTs(holder, listedOnly);
        data = _.filter(data, (d: ListedToken) => {
            return (d.tokenId).toString() != "0";
        });
        return data;
    }

    getApproved = async(tokenId: number) => {
        const approved = await this.marketplaceContract.getApproved(tokenId);
        return approved;
    }

    // checkBulkTokenOrigin = async(tokens: string[]) => {
    //     // Queue some new things...
    //     let promises: any = [];

    //     _.map(tokens, (tk, tkIndex) => {
    //         promises.push(this.batchMarketplaceContract.safeGetOriginalData(tk));
    //     })

    //     // This line won't complete until the 10 above calls are complete, all of which will be sent as a single batch
    //     const results = await Promise.all(promises);

    //     return results;
    // }
}