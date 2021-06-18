import  { useEffect, useState} from 'react'

// contracts
import todoListContract from '../contract-artifacts/TodoList.json'


export default function useDeployedNetWorks(){


    const [ deployedNetworks, setDeployedNetWorks ] = useState([])

    useEffect(()=>{

        // from the contract json get the ids of the networks the contract has been deployed to
        const deployedNetworkIDArray = Object.keys(todoListContract.networks)

        const newNetworks = deployedNetworkIDArray.map((netId)=>{
            switch (parseInt(netId)){
                case 1: //ETH
                    return {
                        netWorkID: netId,
                        netWorkName: "Ethereum Mainnet"
                    }
                case 3: //Ropsten
                    return {
                        netWorkID: netId,
                        netWorkName: "Ropsten Testnet"
                    }
                case 4: //Rinkeby
                    return {
                        netWorkID: netId,
                        netWorkName: "Rinkeby Testnet"
                    }
                case 5: //Goerli

                    return {
                        netWorkID: netId,
                        netWorkName: "Goerli Testnet"
                    }
                case 42: //Kovan
                    return {
                        netWorkID: netId,
                        netWorkName: "Kovan Testnet"
                    }
                case 56: //BNB
                    return {
                        netWorkID: netId,
                        netWorkName: "Binance Smart Chain"
                    }
                case 128: //HT
                    return {
                        netWorkID: netId,
                        netWorkName: "Heco"
                    }
                case 100: //xDai
                    return {
                        netWorkID: netId,
                        netWorkName: "xDai Stable Chain"
                    }
                case 137: //Polygon
                    return {
                        netWorkID: netId,
                        netWorkName: "Polygon Network"
                    }
                case 5777: //Ganache
                    return {
                        netWorkID: netId,
                        netWorkName: "Ganache"
                    }
                default: // Unknown network
                    return {
                        netWorkID: netId,
                        netWorkName: "Unknown network?"
                    }
            } 

        })

        setDeployedNetWorks(newNetworks)
    }, [])

    

    return { deployedNetworks }

}