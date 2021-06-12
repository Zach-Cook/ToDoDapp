import React from 'react';

import { Header, Navigation } from '../components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function HeaderContainer({children, ...restProps}){

    return (
        
        <Header {...restProps}>
            <Navigation>
                <Navigation.NavInnerFrame>
                    <FontAwesomeIcon icon={faUser} color="white" style={{height: "40px", width: "40px"}}/>
                    <Navigation.TitleText>Account: {restProps.userState ? restProps.userState.account : null}</Navigation.TitleText>
                    <Navigation.Title>To Do Dapp</Navigation.Title>
                </Navigation.NavInnerFrame>  
            </Navigation>
        </Header>
    )
}