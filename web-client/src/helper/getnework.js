import Web3 from 'web3'; 




export default async function getNetwork(todoListContract){
    const web3 = new Web3(window.ethereum)
    // get the network id
    const netID = await web3.eth.net.getId()
    // this handles the chain id
    // currently if not on test net then this will cleanup the hook
    let todoList;
    let chainName;

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
            todoList = new web3.eth.Contract(todoListContract.abi, todoListContract.networks[netID].address)
            break;
        default: // Unknown network
            chainName = "Unknown network?"
            todoList = null
            break;
    }
    return { todoList, chainName}
}

