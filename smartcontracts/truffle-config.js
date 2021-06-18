require('dotenv').config()
const path = require('path')
const HDWalletProvider = require('truffle-hdwallet-provider-privkey');

const privateKeys = [`${process.env.KEYS}`]

module.exports = {

  contracts_build_directory: path.join(__dirname, "../web-client/src/contract-artifacts/"),

  networks: {

    // // GANACHE LOCAL TEST NET
    // development: {
    //  host: "127.0.0.1",     // Localhost (default: none)
    //  port: 7545,            // Standard Ethereum port (default: none)
    //  network_id: "*",       // Any network (default: none)
    // },

    // ROPSTEN TEST NET
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys, // Array of account private keys
          `https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`// Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 3
    }

  },

  mocha: {

  },

  compilers: {
    solc: {
      version: "0.8.5",
    }
  },

  db: {
    enabled: false
  }
  
};
