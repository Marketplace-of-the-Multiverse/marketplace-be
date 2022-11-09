import express from 'express';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import {
    estimateAxelarGasFee,
    getTokenTxs,
    getMintData,
    insertUserActionLog,
    getAllNftFromEvm,
    getHolderNftFromEvm,
    insertNft,
    getMetadata
} from './src/API';
import _ from 'lodash';
import path from 'path';
import dotenv from 'dotenv';
import { Nft, UserActionLog } from './src/API/types';
dotenv.config({ path: path.join(__dirname, '.env')});

process.on('uncaughtException', function (err) {
    //dont stop on uncaught exception
    console.log('Caught exception: ', err);
});

//create app
const port = 8081;
// const whitelists = JSON.parse(process.env.CORS_WHITELIST!);
// console.log(process.env.CORS_WHITELIST!);

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    // origin: whitelists,
    credentials: true
}));

let http = createServer(app);

//api endpoints
app.get('/', function(req, res) {
    res.send('Hello World');
});

// estimate gas for cross-chain swap
app.get('/estimateGas/:fromChainId/:toChainId', async function(req, res) {
    try {
        const fromChainId: number = Number(req.params['fromChainId']);
        const toChainId: number = Number(req.params['toChainId']);
        const data = await estimateAxelarGasFee(fromChainId, toChainId);
        return res.json(data);
    }

    catch(e) {
        return res.status(400).send("Unknown Error");
    }
});

// get token tx history
app.get('/getTokenTxs/:chainId/:tokenId', async function(req, res) {
    try {
        const chainId = Number(req.params['chainId']);
        const tokenId = Number(req.params['tokenId']);
        const data = await getTokenTxs(chainId, tokenId);
        return res.json(data);
    }

    catch(e) {
        return res.status(400).send("Unknown Error");
    }
});

// get new token hash
app.get('/premint/:chainId', async function(req, res) {
    try {
        let chainId = Number(req.params['chainId']);
        const data = await getMintData(chainId);
        return res.json(data);
    }

    catch(e) {
        return res.status(400).send("Unknown Error");
    }
});

// all holder nfts
app.get('/holderNfts/:address', async function(req, res) {
    const address = req.params['address'];
    let listedOnly: any = req.query['listedOnly'] ?? 'false';
    listedOnly = JSON.parse(listedOnly);
    return res.json(await getHolderNftFromEvm(address, listedOnly));
});

// all listed nft
app.get('/gallery', async function(req, res) {
    return res.json(await getAllNftFromEvm(true));
});

// all nft
app.get('/allNft', async function(req, res) {
    return res.json(await getAllNftFromEvm());
});

// get nft metadata
app.get('/metadata/:hash', async function(req, res) {
    return res.json(await getMetadata(req.params['hash']));
});

// logging purpose only
app.post('/mint', async function(req, res) {
    // Images to be uploaded to Moralis IPFS
    // https://www.youtube.com/watch?v=8YGPCNhuyKU
    try {
        // insert action
        const nft: Nft = {
            chain_id: req.body.fromChain,
            hash: req.body.hash,
            name: req.body.name,
            creator: req.body.address,
            image: req.body.image,
            description: req.body.description,
        }

        const log: UserActionLog = {
            address: req.body.address,
            token_id: req.body.tokenId, // get from contract currentToken + 1 (agak-agak first lol)
            from_chain: req.body.fromChain,
            to_chain: req.body.toChain,
            is_crosschain: req.body.fromChain == req.body.toChain,
            action: 'mint',
            tx_hash: req.body.tx
        }

        const insert1: any = await insertNft(nft, log);

        if (_.has(insert1, 'id')) {
            return res.json({ 'success': true });
        }
        return res.json({ 'success': false });
    }

    catch(e) {
        return res.status(400).send("Unknown Error");
    }
});

// logging purpose only
app.post('/listNft', async function(req, res) {
    try {
        // insert action
        const log: UserActionLog = {
            address: req.body.address,
            token_id: req.body.tokenId,
            from_chain: req.body.fromChain,
            to_chain: req.body.toChain,
            is_crosschain: req.body.fromChain == req.body.toChain,
            action: 'list',
            tx_hash: req.body.tx
        }

        const insert1: any = await insertUserActionLog(log);

        if (_.has(insert1, 'id')) {
            return res.json({ 'success': true });
        }
        return res.json({ 'success': false });
    }

    catch(e) {
        return res.status(400).send("Unknown Error");
    }
});

// logging purpose only
app.post('/delistNft', async function(req, res) {
    try {
        // insert action
        const log: UserActionLog = {
            address: req.body.address,
            token_id: req.body.tokenId,
            from_chain: req.body.fromChain,
            to_chain: req.body.toChain,
            is_crosschain: req.body.fromChain == req.body.toChain,
            action: 'delist',
            tx_hash: req.body.tx
        }

        const insert1: any = await insertUserActionLog(log);

        if (_.has(insert1, 'id')) {
            return res.json({ 'success': true });
        }
        return res.json({ 'success': false });
    }

    catch(e) {
        return res.status(400).send("Unknown Error");
    }
});

http.listen(port, () => {
    console.log("I'm alive!");
});