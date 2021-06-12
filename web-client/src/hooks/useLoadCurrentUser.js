import { useState, useEffect } from 'react';
import Web3 from 'web3';

export default function useLoadCurrentUser(){

    const [ userState, setUserState ] = useState({})
    // const [ checkUser, setCheckUser ] = useState(false)

    useEffect(()=>{

        const web3 = new Web3(window.ethereum)
        async function loadUser() {
            
            //check if MetaMask exists
            if(typeof window.ethereum !== "undefined"){
                const netID = await web3.eth.net.getId()
                const accounts = await web3.eth.requestAccounts()
                let etherBalance = await web3.eth.getBalance(accounts[0])
                etherBalance = web3.utils.fromWei(etherBalance)

                setUserState({
                                account: accounts[0],
                                etherBalance: etherBalance, 
                                web3: web3,
                                netID: netID
                            })
        
        
            } else {
              window.alert("Please install Metamask")
            }}

            loadUser()
            
            // NEED TO CHECK IF USER IS STILL CONNECTED AND ON THE RIGHT NETWORK
            // setInterval(()=> {
            //     if (web3.eth.accounts[0] !== userState.account) {
            //       const account = web3.eth.accounts[0];
            //       setCheckUser(!checkUser)
            //     }
            //   }, 100);


            return ()=> setUserState(null)

    }, [])



    return { userState, setUserState}


}