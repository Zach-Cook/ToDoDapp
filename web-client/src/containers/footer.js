import React from 'react';

import { Footer, Navigation } from '../components';


export default function FooterContainer({children, ...restProps}){

    return (
        <Footer {...restProps}>
                <Navigation>
                        <Navigation.NavInnerFrame>
                            <Navigation.TitleFrame style={{marginTop: "15px"}}>
                                <Navigation.Title>To Do Dapp</Navigation.Title>
                                <Navigation.NetworkText>Blockchain: Ropsten</Navigation.NetworkText>
                            </Navigation.TitleFrame>
                                <Navigation.AccountFrame justifyContent="flex-end">
                                    <Navigation.TitleText>Web Dapp Hosted on IPFS</Navigation.TitleText>
                                </Navigation.AccountFrame>
                        </Navigation.NavInnerFrame>  
                    </Navigation>
            </Footer>
    )
    
}