import React from 'react';
import HeaderContainer from '../containers/header';
import BodyContainer from '../containers/body';
import MainContainer from '../containers/main';
import NavigationContainer from '../containers/navigation';
import FooterContainer from '../containers/footer';


export default function Home(){

    return (
        <>
            <HeaderContainer>
                <NavigationContainer/>
            </HeaderContainer>
            <BodyContainer>
                <MainContainer>
                </MainContainer>
            </BodyContainer>
            <FooterContainer>
                <NavigationContainer/>
            </FooterContainer>
        </>


    )

}