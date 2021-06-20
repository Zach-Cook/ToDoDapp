import Web3 from 'web3'; 




export default async function getContract(todoListContract){
    const web3 = new Web3(window.ethereum)
    // get the network id
    const netID = await web3.eth.net.getId()

    let contract;
    if (todoListContract){
        // if the contract with the current net id exists than create the new contract 
        contract =  
        todoListContract.networks[netID]
        ? 
        new web3.eth.Contract(todoListContract.abi, todoListContract.networks[netID].address
        ) 
        : 
        null;
    } else {
        contract = null;
    }
    

    let chainName;
    // this handles the chain id
    // currently if not on test net then this will cleanup the hook
    switch (netID){
        case 1: //ETH
            chainName = "Ethereum Mainnet"
            break;
        case 3: //Ropsten
            chainName = "Ropsten Testnet"
            break;
        case 4: //Rinkeby
            chainName = "Rinkeby Testnet"
            break;
        case 5: //Goerli
            chainName = "Goerli Testnet"
            break;
        case 42: //Kovan
            chainName = "Kovan Testnet"
            break;
        case 56: //BNB
            chainName = "Binance Smart Chain"
            break;
        case 128: //HT
            chainName = "Heco"
            break;
        case 100: //xDai
            chainName = "xDai Stable Chain"
            break;
        case 137: //Polygon
            chainName = "Polygon Network"
            break;
        case 5777: //Ganache
            chainName = "Ganache"
            break;
        default: // Unknown network
            chainName = "Unknown network?"
            break;
    }
    
    
    // returning the chainname
    return { contract, chainName}
}