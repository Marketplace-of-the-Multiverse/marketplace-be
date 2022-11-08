export default [
    {
        id: 1,
        query: `
            CREATE TABLE migrations (
                id serial PRIMARY KEY,
                migration_id int UNIQUE not null,
                migration_group int not null,
                migrated_at timestamp not null
            );`,
        rollback_query: `DROP TABLE migrations;`
    },
    {
        id: 2,
        query: `
            CREATE TABLE nft (
                id serial PRIMARY KEY,
                chain_id int not null,
                owner varchar(50) not null,
                token_id int not null,
                hash varchar(32) NOT NULL default '',
                created_at timestamp default current_timestamp,
                updated_at timestamp
            );`,
        rollback_query: `DROP TABLE nft;`
    },
    {
        id: 3,
        query: `
            CREATE INDEX nft_chain_id ON nft (chain_id);
            CREATE INDEX nft_owner ON nft (owner);
            CREATE INDEX nft_token_id ON nft (token_id);
            CREATE INDEX nft_hash ON nft (hash);
        `,
        rollback_query: `
            DROP INDEX nft_chain_id;
            DROP INDEX nft_owner;
            DROP INDEX nft_token_id;
            DROP INDEX nft_hash;
        `
    },
    {
        id: 4,
        query: `
            CREATE TABLE nft_metadata (
                id serial PRIMARY KEY,
                hash varchar(32) NOT NULL default '',
                name varchar(255) NOT NULL default '',
                creator varchar(50) not null,
                image varchar(255) not null default '',
                description text,
                created_at timestamp default current_timestamp,
                updated_at timestamp
            );`,
        rollback_query: `DROP TABLE nft_metadata;`
    },
    {
        id: 5,
        query: `
            CREATE INDEX nmeta_hash ON nft_metadata (hash);
        `,
        rollback_query: `
            DROP INDEX nmeta_hash;
        `
    },
    {
        id: 6,
        query: `
            CREATE TABLE user_action_log (
                id serial PRIMARY KEY,
                address varchar(50) not null,
                nft_id int not null,
                from_chain int not null,
                to_chain int not null,
                is_crosschain bool not null default false,
                action varchar(50) not null,
                tx_hash varchar(255) not null,
                created_at timestamp default current_timestamp,
                updated_at timestamp
            );`,
        rollback_query: `DROP TABLE user_action_log;`
    },
    {
        id: 7,
        query: `
            CREATE INDEX ua_nft_id ON user_action_log (nft_id);
        `,
        rollback_query: `
            DROP INDEX ua_nft_id;
        `
    }
]