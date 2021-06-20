import React, { useContext } from 'react';

import { Header, Navigation } from '../components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../context/user';



export default function HeaderContainer({children, ...restProps}){

    const { userState, currentChain } = useContext(UserContext)


    console.log(currentChain)

    return (
        
        <Header {...restProps}>
            <Navigation>
                <Navigation.NavInnerFrame>
                    <Navigation.TitleFrame>
                        <Navigation.Title>To Do Dapp</Navigation.Title>
                        {
                            currentChain.chainName ?
                        <Navigation.NetworkText>Blockchain: {currentChain.chainName}</Navigation.NetworkText>
                            :
                        <Navigation.NetworkText>Not connected:</Navigation.NetworkText>
                        }
                    </Navigation.TitleFrame>
                    

                    <Navigation.AccountFrame>
                        {
                            userState ?
                            <> 
                                <Navigation.TitleText>Account: ...{userState.account ? userState.account.slice(-10) : null}</Navigation.TitleText>
                                <Navigation.IconDiv>
                                    <FontAwesomeIcon icon={faUser} color="white" style={{ width: "100%", height: "40px", cursor: "pointer"}}/>
                                </Navigation.IconDiv>
                            </>
                            :
                            <> 
                                <Navigation.TitleText>No Account Detected</Navigation.TitleText>
                                <Navigation.IconDiv>
                                    <FontAwesomeIcon icon={faUser} color="white" style={{width: "100%", height: "40px", cursor: "pointer"}}/>
                                </Navigation.IconDiv>
                                
                            </>
                        }
                    </Navigation.AccountFrame>
                </Navigation.NavInnerFrame>  
            </Navigation>
        </Header>
    )
}