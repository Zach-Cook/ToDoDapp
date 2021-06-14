import { useState } from 'react';
import Web3 from 'web3';

export default function useLoadCurrentUser(){

    const [ userState, setUserState ] = useState(null)

    async function loadTheUser() {

        console.log("loading user")
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


    return { userState, setUserState, loadTheUser}


}