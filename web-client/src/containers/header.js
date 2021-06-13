import React from 'react';

import { Header, Navigation } from '../components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function HeaderContainer({children, ...restProps}){

    return (
        
        <Header {...restProps}>
            <Navigation>
                <Navigation.NavInnerFrame>
                    
                    <Navigation.Title>To Do Dapp</Navigation.Title>

                        <Navigation.AccountFrame>
                            <Navigation.TitleText>Account: ...{restProps.userState.account ? restProps.userState.account.slice(-10) : null}</Navigation.TitleText>
                            <FontAwesomeIcon icon={faUser} color="white" style={{height: "40px", width: "40px", cursor: "pointer"}}/>
                        </Navigation.AccountFrame>
                </Navigation.NavInnerFrame>  
            </Navigation>
        </Header>
    )
}