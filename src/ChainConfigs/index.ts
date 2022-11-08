import { ChainConfig } from "./types";
import { EvmChain } from '@axelar-network/axelarjs-sdk';
// chains
export const BSCTEST: ChainConfig = {
    name: 'BscTest',
    shortName: 'BSCTEST',
    evmChain: EvmChain.BINANCE,
    id: 97,
    rpc: 'https://data-seed-prebsc-2-s1.binance.org:8545',
    nativeCurrency: {
        name: 'BNB',
        decimals: 18,
        symbol: 'BNB',
    },
    blockExplorerUrl: 'https://testnet.bscscan.com',
    messageSender: "0xB594Ce6C4d6B2383905A7bCaa1E918919ae3F654",
    messageReceiver: "0x810fAC051229cc9d77EDE88080A08343529bb2E2",
    nftMarketplace: "0x0DBACd0924dCcE6eE085ca96ebd32f9ebd4509eF",
    crossChainToken: '0xc2fA98faB811B785b81c64Ac875b31CC9E40F9D2'
};

export const MUMBAI: ChainConfig = {
    name: 'Mumbai',
    shortName: 'MUMBAI',
    evmChain: EvmChain.POLYGON,
    id: 80001,
    // rpc: 'https://rpc-mumbai.matic.today/',
    // rpc: 'https://polygontestapi.terminet.io/rpc',
    rpc: 'https://rpc-mumbai.maticvigil.com/',
    nativeCurrency: {
        name: 'MATIC',
        decimals: 18,
        symbol: 'MATIC',
    },
    blockExplorerUrl: 'https://mumbai.polygonscan.com/',
    messageSender: "0xF9c072eb54f4C3542bD2CF62Ea4b32545ea93Fbc",
    messageReceiver: "0x8b7D560896f54996C5b70Eb73F36e519301FA9B1",
    nftMarketplace: "0x4Be94D61Ab11d5dbEBb36e4665981808CFecF347",
    crossChainToken: '0x2c852e740B62308c46DD29B982FBb650D063Bd07'
};

export const AVAXFUJI: ChainConfig = {
    name: 'Avalanche C-Chain Testnet',
    shortName: 'AVAX',
    evmChain: EvmChain.AVALANCHE,
    id: 43113,
    rpc: 'https://api.avax-test.network/ext/bc/C/rpc',
    nativeCurrency: {
        name: 'AVAX',
        decimals: 18,
        symbol: 'AVAX',
    },
    blockExplorerUrl: 'https://testnet.snowtrace.io/',
    messageSender: "0x6f6A2fEeC4a2436C44e1956482c824Ca8F1F54C2",
    messageReceiver: "0x25e565d569BEf9baE30EcC963e38eA3C2407b634",
    nftMarketplace: "0xe92cA4Db3c91A010F0472061cB26Ab1d8ae40724",
    crossChainToken: '0x57F1c63497AEe0bE305B8852b354CEc793da43bB'
};

export const ETH: ChainConfig = {
    name: 'Ethereum',
    shortName: 'ETH',
    evmChain: '',
    id: 1,
    rpc: '',
    nativeCurrency: {
        name: 'ETH',
        decimals: 18,
        symbol: 'ETH',
    },
    blockExplorerUrl: 'https://etherscan.io',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const BSC: ChainConfig = {
    name: 'Binance Smart Chain Mainnet',
    shortName: 'BSC',
    evmChain: '',
    id: 56,
    rpc: 'https://bsc-dataseed1.binance.org',
    nativeCurrency: {
        name: 'BNB',
        decimals: 18,
        symbol: 'BNB',
    },
    blockExplorerUrl: 'https://bscscan.com',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const AVAX: ChainConfig = {
    name: 'Avalanche C-Chain',
    shortName: 'AVAX',
    evmChain: '',
    id: 43114,
    rpc: 'https://api.avax.network/ext/bc/C/rpc',
    nativeCurrency: {
        name: 'AVAX',
        decimals: 18,
        symbol: 'AVAX',
    },
    blockExplorerUrl: 'https://snowtrace.io',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const POLYGON: ChainConfig = {
    name: 'Polygon Mainnet',
    shortName: 'Polygon',
    evmChain: '',
    id: 137,
    rpc: 'https://polygon-rpc.com',
    nativeCurrency: {
        name: 'MATIC',
        decimals: 18,
        symbol: 'MATIC',
    },
    blockExplorerUrl: 'https://polygonscan.com',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const ARB: ChainConfig = {
    name: 'Arbitrum One',
    shortName: 'ARB',
    evmChain: '',
    id: 42161,
    rpc: 'https://arb1.arbitrum.io/rpc',
    nativeCurrency: {
        name: 'ETH',
        decimals: 18,
        symbol: 'ETH',
    },
    blockExplorerUrl: 'https://arbiscan.io',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const OP: ChainConfig = {
    name: 'Optimism',
    shortName: 'OP',
    evmChain: '',
    id: 10,
    rpc: 'https://mainnet.optimism.io',
    nativeCurrency: {
        name: 'ETH',
        decimals: 18,
        symbol: 'ETH',
    },
    blockExplorerUrl: 'https://optimistic.etherscan.io',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const CRO: ChainConfig = {
    name: 'Cronos Mainnet',
    shortName: 'CRO',
    evmChain: '',
    id: 25,
    rpc: 'https://evm.cronos.org',
    nativeCurrency: {
        name: 'CRO',
        decimals: 18,
        symbol: 'CRO',
    },
    blockExplorerUrl: 'https://cronos.org/explorer',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const FANTOM: ChainConfig = {
    name: 'FantomTest',
    shortName: 'FTM',
    evmChain: EvmChain.FANTOM,
    id: 4002,
    rpc: 'https://rpc.ankr.com/fantom_testnet',
    nativeCurrency: {
        name: 'FTM',
        decimals: 18,
        symbol: 'FTM',
    },
    blockExplorerUrl: 'https://ftmscan.com',
    messageSender: "0xF5Ac00cE71e1F16bDc1eCE3a21951237db723b17",
    messageReceiver: "0x106b0f43dcF14e4B045022Ad95191d1849BB1d44",
    nftMarketplace: "0xED32E0149996f545469B3eFd3c0c227711d76F92",
    crossChainToken: ''
};

export const KLAYTN: ChainConfig = {
    name: 'Klaytn Mainnet Cypress',
    shortName: 'KLAYTN',
    evmChain: '',
    id: 8217,
    rpc: 'https://public-node-api.klaytnapi.com/v1/cypress',
    nativeCurrency: {
        name: 'KLAY',
        decimals: 18,
        symbol: 'KLAY',
    },
    blockExplorerUrl: 'https://scope.klaytn.com',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const KAVA: ChainConfig = {
    name: 'Kava EVM',
    shortName: 'KAVA',
    evmChain: '',
    id: 2222,
    rpc: 'https://evm.kava.io',
    nativeCurrency: {
        name: 'KAVA',
        decimals: 18,
        symbol: 'KAVA',
    },
    blockExplorerUrl: 'https://explorer.kava.io',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const GNO: ChainConfig = {
    name: 'Gnosis',
    shortName: 'GNO',
    evmChain: '',
    id: 100,
    rpc: 'https://rpc.gnosischain.com',
    nativeCurrency: {
        name: 'xDAI',
        decimals: 18,
        symbol: 'xDAI',
    },
    blockExplorerUrl: 'https://gnosisscan.io',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const AURORA: ChainConfig = {
    name: 'Aurora Mainnet',
    shortName: 'AURORA',
    evmChain: '',
    id: 1313161554,
    rpc: 'https://mainnet.aurora.dev',
    nativeCurrency: {
        name: 'ETH',
        decimals: 18,
        symbol: 'ETH',
    },
    blockExplorerUrl: 'https://aurorascan.dev',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const HECO: ChainConfig = {
    name: 'Huobi ECO Chain Mainnet',
    shortName: 'HECO',
    evmChain: '',
    id: 128,
    rpc: 'https://http-mainnet.hecochain.com',
    nativeCurrency: {
        name: 'HT',
        decimals: 18,
        symbol: 'HT',
    },
    blockExplorerUrl: 'https://hecoinfo.com',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const FUSION: ChainConfig = {
    name: 'Fusion Mainnet',
    shortName: 'FUSION',
    evmChain: '',
    id: 32659,
    rpc: 'https://mainnet.anyswap.exchange',
    nativeCurrency: {
        name: 'FSN',
        decimals: 18,
        symbol: 'FSN',
    },
    blockExplorerUrl: 'https://www.fusion.org/',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const CELO: ChainConfig = {
    name: 'Celo Mainnet',
    shortName: 'CELO',
    evmChain: '',
    id: 42220,
    rpc: 'https://forno.celo.org',
    nativeCurrency: {
        name: 'CELO',
        decimals: 18,
        symbol: 'CELO',
    },
    blockExplorerUrl: 'https://explorer.celo.org',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const EVMOS: ChainConfig = {
    name: 'Evmos',
    shortName: 'EVMOS',
    evmChain: '',
    id: 9001,
    rpc: 'https://eth.bd.evmos.org:8545',
    nativeCurrency: {
        name: 'EVMOS',
        decimals: 18,
        symbol: 'EVMOS',
    },
    blockExplorerUrl: 'https://evm.evmos.org',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const DOGE: ChainConfig = {
    name: 'Dogechain Mainnet',
    shortName: 'DOGE',
    evmChain: '',
    id: 2000,
    rpc: 'https://rpc-sg.dogechain.dog',
    nativeCurrency: {
        name: 'DOGE',
        decimals: 18,
        symbol: 'DOGE',
    },
    blockExplorerUrl: 'https://explorer.dogechain.dog',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const OKX: ChainConfig = {
    name: 'OKXChain Mainnet',
    shortName: 'OKX',
    evmChain: '',
    id: 66,
    rpc: 'https://exchainrpc.okex.org',
    nativeCurrency: {
        name: 'OKT',
        decimals: 18,
        symbol: 'OKT',
    },
    blockExplorerUrl: 'https://www.oklink.com/en/okc',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const BOBA: ChainConfig = {
    name: 'Boba Network',
    shortName: 'BOBA',
    evmChain: '',
    id: 288,
    rpc: 'https://mainnet.boba.network',
    nativeCurrency: {
        name: 'ETH',
        decimals: 18,
        symbol: 'ETH',
    },
    blockExplorerUrl: 'https://blockexplorer.boba.network',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const MOONBASE: ChainConfig = {
    name: 'Moonbase',
    shortName: 'MOBA',
    evmChain: EvmChain.MOONBEAM,
    id: 1287,
    rpc: 'https://moonbase-alpha.public.blastapi.io',
    nativeCurrency: {
        name: 'DEV',
        decimals: 18,
        symbol: 'DEV',
    },
    blockExplorerUrl: 'https://moonbase.moonscan.io',
    messageSender: "0x7e2990415BecD57F52cE2162Ca21C4f7cC685003",
    messageReceiver: "0x4E4d5fd8372F05cACE937127DAb1638fb341ba7B",
    nftMarketplace: "0x89a06c7A6ae0113632A01cEd24495604DA108fa4",
    crossChainToken: '0xD1633F7Fb3d716643125d6415d4177bC36b7186b'
};

export const MOVR: ChainConfig = {
    name: 'Moonriver',
    shortName: 'MOVR',
    evmChain: '',
    id: 1285,
    rpc: 'https://rpc.api.moonriver.moonbeam.network',
    nativeCurrency: {
        name: 'MOVR',
        decimals: 18,
        symbol: 'MOVR',
    },
    blockExplorerUrl: 'https://moonriver.moonscan.io',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const GLMR: ChainConfig = {
    name: 'Moonbeam',
    shortName: 'GLMR',
    evmChain: '',
    id: 1284,
    rpc: 'https://rpc.api.moonbeam.network',
    nativeCurrency: {
        name: 'GLMR',
        decimals: 18,
        symbol: 'GLMR',
    },
    blockExplorerUrl: 'https://moonbeam.moonscan.io',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const ONE: ChainConfig = {
    name: 'Harmony One',
    shortName: 'ONE',
    evmChain: '',
    id: 1666600000,
    rpc: 'https://api.harmony.one',
    nativeCurrency: {
        name: 'ONE',
        decimals: 18,
        symbol: 'ONE',
    },
    blockExplorerUrl: 'https://explorer.harmony.one',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};


export const chainConfigs: number[] = [
    BSCTEST.id,
    MUMBAI.id,
    AVAXFUJI.id,
    MOONBASE.id,
    FANTOM.id
];