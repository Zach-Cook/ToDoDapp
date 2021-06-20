import { useState, useEffect } from 'react';
import Web3 from 'web3';

// helper
import getNetwork from '../helper/getnework';


export default function useLoadCurrentUser(){

    const [ userState, setUserState ] = useState(null)
    const [ currentChain, setCurrentChain] = useState({
        chainName: null,
        chainID: null
    })

    // this gets the current chain id the user is operating with
    useEffect(()=>{

        async function getData(){

            if (window.ethereum){

                window.ethereum.on('chainChanged', (_chainId) => {                   
                    loadTheUser()
                });
                
                // when the account changes reload the user account
                window.ethereum.on('accountsChanged', ()=>{
                    loadTheUser()
                })
            } else{
                window.alert("Download Metamask Extension to use this Dapp: https://metamask.io/")
            }
        }

        getData()
        

        
    })



    // this function is used to log in the current user with MetaMask
    async function loadTheUser() {

        const web3 = new Web3(window.ethereum)
        const { chainName } = await getNetwork()

        //check if MetaMask exists
        if(window.ethereum){
            const netID = await web3.eth.net.getId()
            const accounts = await web3.eth.requestAccounts()
            let etherBalance = await web3.eth.getBalance(accounts[0])
            etherBalance = web3.utils.fromWei(etherBalance)

            setUserState({
                            account: accounts[0],
                            etherBalance: etherBalance
                        })

            setCurrentChain({
                chainName: chainName,
                chainID: netID,
                
            })
    
        } else {
            window.alert("You must install MetaMask to interact with this application: https://metamask.io/")
        }}


    return { userState, setUserState, loadTheUser, currentChain}


}