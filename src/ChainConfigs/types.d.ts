export type ChainConfig = {
    name: string;
    shortName: string;
    id: number;
    evmChain: string;
    rpc: string;
    nativeCurrency: {
        name: string;
        decimals: number;
        symbol: string;
    };
    blockExplorerUrl?: string;
    linkerContract?: string;
    messageSender: string;
    messageReceiver: string;
    nftMarketplace: string;
    crossChainToken: string;
    gateway: string;
}