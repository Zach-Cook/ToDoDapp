import { useState, useEffect } from 'react';
import Web3 from 'web3';

export default function useLoadCurrentUser(){

    const [ userState, setUserState ] = useState(null)
    const [ currentChainID, setCurrentChainID ] = useState()


    // this gets the current chain id the user is operating with
    useEffect(()=>{

        // when the network chain changes
        window.ethereum.on('chainChanged', (_chainId) => {
            setCurrentChainID(() => parseInt(_chainId))
          });
        
        // when the account changes reload the user account
        window.ethereum.on('accountsChanged', ()=>{
            loadTheUser()
        })

        
    })



    // this function is used to log in the current user with MetaMask
    async function loadTheUser() {

        const web3 = new Web3(window.ethereum)

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
            window.alert("You must install MetaMask to interact with this application")
        }}


    return { userState, setUserState, loadTheUser, currentChainID}


}