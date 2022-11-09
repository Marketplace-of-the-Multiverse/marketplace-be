import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(__dirname, '.env')});

import { seedNft } from './src/Seeders';

(async() => {
    // seed function here

    //only seed these if in testnet
    if(process.env.CHAIN_ENV === 'testnet'){
        await seedNft();
    }

    console.log('Seed ended, press CTRL / CMD + C');
    return;
})();