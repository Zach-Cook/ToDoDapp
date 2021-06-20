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
    
    
    // returning the chainname
    return { contract }
}