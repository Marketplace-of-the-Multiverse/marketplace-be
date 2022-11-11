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
    messageSender: "0x8571E0Cbdc2CB33FfD8F3344f6072e4667991aA3",
    messageReceiver: "0xE69Db53ac6111Ee9dbd3A15Fc6aCDF67e22DC338",
    nftMarketplace: "0x906A2bE621A04e08e2e304F54C3e1866E28DbF27",
    crossChainToken: '0xc2fA98faB811B785b81c64Ac875b31CC9E40F9D2',
    gateway: "0x4D147dCb984e6affEEC47e44293DA442580A3Ec0"
};

export const MUMBAI: ChainConfig = {
    name: 'Mumbai',
    shortName: 'MUMBAI',
    evmChain: EvmChain.POLYGON,
    id: 80001,
    // rpc: 'https://rpc-mumbai.matic.today/',
    // rpc: 'https://polygontestapi.terminet.io/rpc',
    // rpc: 'https://rpc-mumbai.maticvigil.com/',
    rpc: 'https://polygon-testnet.public.blastapi.io',
    nativeCurrency: {
        name: 'MATIC',
        decimals: 18,
        symbol: 'MATIC',
    },
    blockExplorerUrl: 'https://mumbai.polygonscan.com/',
    messageSender: "0x8cDA877E86ab3B49181cbc418Af59761aeAD83a4",
    messageReceiver: "0xBBCfaCC1e911dFc9A2C5dF0AC41457789ecF1dC2",
    nftMarketplace: "0x1519FA548320cD19F6037255183B1E0657F9A954",
    crossChainToken: '0x2c852e740B62308c46DD29B982FBb650D063Bd07',
    gateway: "0xBF62ef1486468a6bd26Dd669C06db43dEd5B849B"
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
    messageSender: "0x7e50DD167eD5FD1e45Baf7c5C87142a96ed0c8B5",
    messageReceiver: "0x156cE9304b9e28c93c02C4BfeFbD09e41b541b94",
    nftMarketplace: "0x4a48877DD59A2E601d8E225Ccd05D4E7d03d094D",
    crossChainToken: '0x57F1c63497AEe0bE305B8852b354CEc793da43bB',
    gateway: "0xC249632c2D40b9001FE907806902f63038B737Ab"
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
    crossChainToken: '',
    gateway: ''
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
    crossChainToken: '',
    gateway: ''
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
    crossChainToken: '',
    gateway: ''
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
    crossChainToken: '',
    gateway: ''
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
    crossChainToken: '',
    gateway: ''
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
    crossChainToken: '',
    gateway: ''
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
    crossChainToken: '',
    gateway: ''
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
    messageSender: "0xfaDAa0Ea134A095a6DafDAfc6fF36812f29e240f",
    messageReceiver: "0x2BBf0108e04599bc581C28E519ddb61324A0b8B9",
    nftMarketplace: "0x6e56C8faAf544aAdB3ffa5fFa38A4d463329852B",
    crossChainToken: '0x75Cc4fDf1ee3E781C1A3Ee9151D5c6Ce34Cf5C61',
    gateway: "0x97837985Ec0494E7b9C71f5D3f9250188477ae14"
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
    crossChainToken: '',
    gateway: ''
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
    crossChainToken: '',
    gateway: ''
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
    crossChainToken: '',
    gateway: ''
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
    crossChainToken: '',
    gateway: ''
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
    crossChainToken: '',
    gateway: ''
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
    crossChainToken: '',
    gateway: ''
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
    crossChainToken: '',
    gateway: ''
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
    crossChainToken: '',
    gateway: ''
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
    crossChainToken: '',
    gateway: ''
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
    crossChainToken: '',
    gateway: ''
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
    crossChainToken: '',
    gateway: ''
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
    messageSender: "0x4B090ae56afCdfaD90D7A34860B8bBf416D1E6De",
    messageReceiver: "0x0E7a28fE7a19d8e578d8AD14b4F59be899524e72",
    nftMarketplace: "0xE402F1CEec34b639c4dB8B9Ab7ed75414bf7e3B0",
    crossChainToken: '0xD1633F7Fb3d716643125d6415d4177bC36b7186b',
    gateway: "0x5769D84DD62a6fD969856c75c7D321b84d455929"
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
    crossChainToken: '',
    gateway: ''
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
    crossChainToken: '',
    gateway: ''
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
    crossChainToken: '',
    gateway: ''
};


export const chainConfigs: number[] = [
    BSCTEST.id,
    MUMBAI.id,
    AVAXFUJI.id,
    MOONBASE.id,
    FANTOM.id
];