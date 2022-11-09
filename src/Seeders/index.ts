import * as ChainConfigs from '../ChainConfigs';
import DB from '../DB';

import { getInsertQuery, getRandomNumber, getHash } from '../../utils';
import _ from 'lodash';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(__dirname, '.env')});


const isTestnet = process.env.CHAIN_ENV === "testnet"

export const seedNft = async() => {
    let db = new DB();
    let table = 'nft';
    let checkerQuery = `SELECT COUNT(*) as count FROM ${table}`;
    let checkerRes = await db.executeQueryForResults<{count: number}>(checkerQuery);

    if(checkerRes && checkerRes[0].count > 0) {
        console.log(`${table} already seeded! Skipping..`);
        return;
    }

    let columns = ['chain_id', 'hash', 'name', 'creator', 'image', 'description'];
    let values = [
        [1287, "037e7c3068fd135337829a585ebde17c", "Moon Art", "0x1cc5F2F37a4787f02e18704D252735FB714f35EC", "https://i.imgur.com/AgFTAZO.jpg", "Moonbeam nft"],
        [43113, "a3e8cd74020705eef14d1920f591348d", "Avax Art", "0x1cc5F2F37a4787f02e18704D252735FB714f35EC", "https://i.imgur.com/j5BCH7O.png", "Avax nft"],
        [97, "c8fc85bd753c79f3ba0b8e9028c6fb66", "BSC Art", "0x1cc5F2F37a4787f02e18704D252735FB714f35EC", "https://i.imgur.com/s0zWhLM.jpg", "BSC nft"],
        [80001, "696e7b1aa0fa2369077a9dcefdf1fc08", "Polygon Art", "0x1cc5F2F37a4787f02e18704D252735FB714f35EC", "https://i.imgur.com/FD4TPkM.png", "Polygon nft"],
        [4002, "80029f46fef3ed6d3c6e036d3ce570d8", "Fantom Art", "0x1cc5F2F37a4787f02e18704D252735FB714f35EC", "https://i.imgur.com/6xwp5sH.png", "Fantom nft"],
    ];

    let query = getInsertQuery(columns, values, table);
    try {
        await db.executeQuery(query);
        console.log(`Seeded ${table}`);
        return true;
    }

    catch(e) {
        console.log(e);
        return false;
    }
}
