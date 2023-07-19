require("@nomicfoundation/hardhat-toolbox");

const { mnemonic } = require('./secret.json');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "testnet",
  networks:{
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    testnet:{
      url: "https://practical-floral-patina.bsc-testnet.discover.quiknode.pro/0aae488b3da88e16ba09c4cb07706dc60085c4fc/",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }

};
