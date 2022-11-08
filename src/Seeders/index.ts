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

    let columns = ['name'];
    let values = [
        []
    ];

    let query = getInsertQuery(columns, values, table);
    try {
        await db.executeQuery(query);
        console.log(`Seeded ${table}`);
        return true;
    }

    catch {
        return false;
    }
}
