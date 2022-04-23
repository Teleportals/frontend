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
    address: '0x98a5F1520f7F7fb1e83Fe3398f9aBd151f8C65ed',
    name: 'WETH',
    protocol: 'aave',
  },
  WBTC: {
    address: '37022f97333df61a61595b7cf43b63205290f8ee',
    name: 'WBTC',
    protocol: 'aave',
  },
  DAI: {
    address: '0x2Ec4c6fCdBF5F9beECeB1b51848fc2DB1f3a26af',
    name: 'DAI',
    protocol: 'aave',
  },
};

export { tokensRinkeby, tokensKovan };
