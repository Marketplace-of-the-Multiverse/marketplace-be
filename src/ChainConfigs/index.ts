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
    messageSender: "0xa3da6738aE8a948CBe3096ac37b0cb4c17103a75",
    messageReceiver: "0xFe3e0CD741a663e1cb140680142b94d1fCF0066F",
    nftMarketplace: "0x8dD6097470d671C69d48AFc946495d699787608a",
    crossChainToken: '0xc2fA98faB811B785b81c64Ac875b31CC9E40F9D2'
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
    messageSender: "0x57A25f4C779fFE289cc858F9ca2d3A240622EC19",
    messageReceiver: "0x8235E54719E8b0b825a1d15F5df06135fB0a8885",
    nftMarketplace: "0xC52349D185455caDAa02bEF9Fc165A2234017cff",
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
    messageSender: "0xbC34FC51951FC38eC9Bad81a93EA1F53BF34d035",
    messageReceiver: "0x447214f0DEbFf551a7553961585c7493BE657f87",
    nftMarketplace: "0x7E1D1c1EA091B81B1b572aB56B40843B760cD9eD",
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
    messageSender: "0x18012f62c4393900c5F70821839a2fD0e0270781",
    messageReceiver: "0xceb2f6E3fC0c771f56C4d2Bc96DA18b10a9474fD",
    nftMarketplace: "0x80Aea4BCD7c28FBc20624FD154494aE9717aaBc3",
    crossChainToken: '0x75Cc4fDf1ee3E781C1A3Ee9151D5c6Ce34Cf5C61'
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
    messageSender: "0x5611aE4B377D1A9a0933743cb0Ec8b3b6fD95B50",
    messageReceiver: "0xfe4dBE7b4C41079BBD8ad52A238Bd695acF9848d",
    nftMarketplace: "0xb00f1E3188959531Ce0B1955A7719119d49AECA3",
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