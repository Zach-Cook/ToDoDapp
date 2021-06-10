# Crypto Base App #

This project is for Quick setup of a ReactJS Frontend application connecting to Smart Contract applications.

## Architechture ##
This app uses a mono-repo structure.
It allows for mulitple package.json files. This is to separate Front End and Smart Contract dependencies.


### Smart Contract ###
The smart contracts artifacts are stored in the ReactJS src/contract-artifacts/ directory.

### Steps for fresh project ###
1. Installation
    1. cd into smart contracts and web-client and run individual npm install
    2. cd into smart contracts
        1. remove contracts/MyStringStore.sol
        2. remove test/MyStringStore.js
        3. remove 2_deploy_contracts.js
    3. cd into web client
        1. remove src/contract-artifacts
            * this dir will be recreated upon migration
