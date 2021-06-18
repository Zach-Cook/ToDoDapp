
const path = require('path')


module.exports = {

  contracts_build_directory: path.join(__dirname, "../web-client/src/contract-artifacts/"),

  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
     ropsten:  {
     network_id: 3,
     host: `https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`,
     port:  8545,
     gas:   2900000

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
