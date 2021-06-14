import React, { useContext, Fragment} from 'react';
import HeaderContainer from '../containers/header';
import MainContainer from '../containers/main';
import FooterContainer from '../containers/footer';
import TodoContainer from '../containers/todo';
import UserContainer from '../containers/user';


// context
import { UserContext } from '../context/user';

export default function Home(){

    
    const { userState, loadTheUser } = useContext(UserContext)

    return (
        <Fragment>
            <HeaderContainer/>
            <MainContainer>
                {
                    userState ?
                    <TodoContainer/>
                    :
                    <UserContainer loadTheUser={loadTheUser}/>
                }
                
            </MainContainer>

            <FooterContainer>
            </FooterContainer>
        </Fragment>


    )

}