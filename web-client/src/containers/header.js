import React, { useContext } from 'react';

import { Header, Navigation } from '../components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../context/user';


export default function HeaderContainer({children, ...restProps}){

    const { userState } = useContext(UserContext)

    return (
        
        <Header {...restProps}>
            <Navigation>
                <Navigation.NavInnerFrame>
                    
                    <Navigation.Title>To Do Dapp</Navigation.Title>

                        <Navigation.AccountFrame>
                            {
                                userState ?
                                <> 
                                    <Navigation.TitleText>Account: ...{userState.account ? userState.account.slice(-10) : null}</Navigation.TitleText>
                                    <FontAwesomeIcon icon={faUser} color="white" style={{height: "40px", width: "40px", cursor: "pointer"}}/>
                                </>
                                :
                                <> 
                                    <Navigation.TitleText>No Account Detected</Navigation.TitleText>
                                    <FontAwesomeIcon icon={faUser} color="white" style={{height: "40px", width: "40px", cursor: "pointer"}}/>
                                </>
                            }
                        </Navigation.AccountFrame>
                </Navigation.NavInnerFrame>  
            </Navigation>
        </Header>
    )
}