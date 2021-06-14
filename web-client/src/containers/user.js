import React from 'react';


import { User } from '../components';

export default function UserContainer(props){


    return (
        <>
            <User>
                <User.LoginButton onClick={props.loadTheUser}>Login</User.LoginButton>
            </User>
        
        </>)
}