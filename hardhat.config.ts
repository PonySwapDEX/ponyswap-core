import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@typechain/ethers-v5"
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-ethers";


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: "0.5.16",
  networks: {
    bscTestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      chainId: 97,
      accounts: ['ef32c08f041b0a64da678a89651d04f6c65850c5831356ab1fae9175bdb7e168']
    },
  },
  etherscan: {
    apiKey: 'Q9ZQ3W73JY63ATR9Y5AIXZTGA3Q68TCZ1C',
  }
};

export default config;
