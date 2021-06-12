import React, { Fragment} from 'react';
import HeaderContainer from '../containers/header';
import MainContainer from '../containers/main';
import FooterContainer from '../containers/footer';
import TodoContainer from '../containers/todo';

// custom hooks
import useLoadCurrentUser from '../hooks/useLoadCurrentUser'
import useToDos from '../hooks/useToDos';

export default function Home(){

    const { userState } = useLoadCurrentUser()
    const { todos } = useToDos()

    // console.log(todos.tasks ? todos.tasks.content : null)

    return (
        <Fragment>
            <HeaderContainer userState={userState}/>

            <MainContainer userState={userState}>
                <TodoContainer todos={todos}></TodoContainer>
            </MainContainer>

            <FooterContainer>
            </FooterContainer>
        </Fragment>


    )

}