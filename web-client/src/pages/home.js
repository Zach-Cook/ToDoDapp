import React, { Fragment} from 'react';
import HeaderContainer from '../containers/header';
import MainContainer from '../containers/main';
import FooterContainer from '../containers/footer';


// custom hooks
import useLoadCurrentUser from '../hooks/useLoadCurrentUser'


export default function Home(){

    const { userState } = useLoadCurrentUser()


    return (
        <Fragment>
            <HeaderContainer userState={userState}/>

            <MainContainer userState={userState}>

            </MainContainer>

            <FooterContainer>
            </FooterContainer>
        </Fragment>


    )

}