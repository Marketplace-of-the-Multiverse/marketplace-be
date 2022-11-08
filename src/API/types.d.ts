export type Nft = {
    chain_id: number,
    token_id: number,
    hash: string,
    name: string,
    creator: string,
    image: string,
    description: string,
}

export type UserActionLog = {
    address: string,
    nft_id: number,
    from_chain: number,
    to_chain: number,
    is_crosschain: boolean,
    action: string,
    tx_hash: string
}