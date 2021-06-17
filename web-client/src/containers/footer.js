import React from 'react';

import { Footer, Navigation } from '../components';


export default function FooterContainer({children, ...restProps}){

    return (
        <Footer {...restProps}>
                <Navigation>
                        <Navigation.NavInnerFrame>
                            <Navigation.Title>To Do Dapp</Navigation.Title>
                                <Navigation.AccountFrame justifyContent="flex-end">
                                    <Navigation.TitleText>Web Dapp Hosted on IPFS</Navigation.TitleText>
                                </Navigation.AccountFrame>
                        </Navigation.NavInnerFrame>  
                    </Navigation>
            </Footer>
    )
    
}