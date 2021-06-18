import  { useEffect, useState} from 'react'


// takes in the contract artifact and returns back an array of all of the deployed networks
export default function useDeployedNetWorks(contract){


    const [ deployedNetworks, setDeployedNetWorks ] = useState([])


    useEffect(()=>{
        // from the contract json get the ids of the networks the contract has been deployed to
        const deployedNetworkIDArray = Object.keys(contract.networks)

        // map over ids and create array of objects
        const newNetworks = deployedNetworkIDArray.map((netId)=>{
            switch (parseInt(netId)){
                case 1: //ETH
                    return {
                        netWorkID: netId,
                        netWorkName: "Ethereum Mainnet",
                    }
                case 3: //Ropsten
                    return {
                        netWorkID: netId,
                        netWorkName: "Ethereum Ropsten Testnet",
                    }
                case 4: //Rinkeby
                    return {
                        netWorkID: netId,
                        netWorkName: "Ethereum Rinkeby Testnet",
                    }
                case 5: //Goerli

                    return {
                        netWorkID: netId,
                        netWorkName: "Ethereum Goerli Testnet",
                    }
                case 42: //Kovan
                    return {
                        netWorkID: netId,
                        netWorkName: "Ethereum Kovan Testnet",
                    }
                case 56: //BNB
                    return {
                        netWorkID: netId,
                        netWorkName: "Binance Smart Chain",
                    }
                case 128: //HT
                    return {
                        netWorkID: netId,
                        netWorkName: "Huobi Eco Chain",
                    }
                case 100: //xDai
                    return {
                        netWorkID: netId,
                        netWorkName: "Ethereum Layer 2 xDai Stable Chain",
                    }
                case 137: //Polygon
                    return {
                        netWorkID: netId,
                        netWorkName: "Ethereum Layer 2 Polygon",
                    }
                case 5777: //Ganache
                    return {
                        netWorkID: netId,
                        netWorkName: "Ethereum Ganache",
                    }
                default: // Unknown network
                    return {
                        netWorkID: netId,
                        netWorkName: "Unknown network?",
                    }
            } 

        })
        setDeployedNetWorks(newNetworks)
    }, [])

    

    return [ deployedNetworks ]

}