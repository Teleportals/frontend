const tokensKovan = { 
  ETH: {
    address: '0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF',
    name: 'ETH',
    protocol: 'compound',
  },
  DAI: {
    address: '0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa',
    name: 'DAI',
    protocol: 'compound',
  },
  WBTC: {
    address: '0xd3A691C852CDB01E281545A27064741F0B7f6825',
    name: 'WBTC',
    protocol: 'compound',
  },
};

const tokensRinkeby = { 
  WETH: {
    address: '0xd74047010D77c5901df5b0f9ca518aED56C85e8D',
    name: 'WETH',
    protocol: 'aave',
  },
  WBTC: {
    address: '0x124F70a8a3246F177b0067F435f5691Ee4e467DD',
    name: 'WBTC',
    protocol: 'aave',
  },
  DAI: {
    address: '0x4aAded56bd7c69861E8654719195fCA9C670EB45',
    name: 'DAI',
    protocol: 'aave',
  },
};

export { tokensRinkeby, tokensKovan };
