import React from 'react';
import { User } from '../components';

import MetaMaskIcon from '../images/MetaMaskFox.svg'

export default function UserContainer(props){


    return (
        <>
            <User>
                <User.LoginButton onClick={props.loadTheUser}>
                    <img src={MetaMaskIcon} style={{height: "40px", width: "40px", marginRight: "10px"}} alt="metamask"></img>
                    Login
                </User.LoginButton>
            </User>
        
        </>)
}