# Backend for Marketplace of the Multiverse

## Requirements

1. PostgreSQL
2. NodeJS (Node 16 was used in this project)

## How to start

1. Clone this repo
2. Configure .env
3. Add ```motm``` Database to PostgreSQL
4. use ```npm run migrate:seed``` to add tables and seed the needed data.
5. use ```npm run drop:seed``` to reseed your tables. (WARNING: THIS DROPS THE PUBLIC SCHEMA FOR THE SELECTED DB IN .env, MAKE SURE YOU WANT TO DROP THE SCHEMA BEFORE DOING THIS)
6. alternatively, you can use ```npm run rollback``` until you rollbacked to Migrate ID 1 and use ```npm run migrate:seed``` to reseed.
7. use ```npm install``` to install dependencies
8. use ```npm run restart``` to start the backend


## .env Configuration Example

DB_USER=your username

DB_PASSWORD=your password

DB_HOST=localhost

DB_PORT=5432

DB_NAME=motm


SEED_ADDRESSES=["0x123456789..."]

MORALIS=your moralis api key

COVALENT=your covalent api key

PRIVATE_KEY=a random address's private key (needed for querying, please use an empty wallet)

CHAIN_ENV="testnet" or "production"
