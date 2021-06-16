import React, { useContext, Fragment} from 'react';
import HeaderContainer from '../containers/header';
import MainContainer from '../containers/main';
import FooterContainer from '../containers/footer';
import TodoContainer from '../containers/todo';
import UserContainer from '../containers/user';
import ErrorContainer from '../containers/error'

// context
import { UserContext } from '../context/user';

// custom hook
import useToDos from '../hooks/useToDos';

export default function Home(){

    const activeNetworks = process.env.REACT_APP_ACTIVE_NETWORKS.split(",");
    const { todos, createTask, toggleCompletion, removeTask, loading, errors } = useToDos()
    const { userState, loadTheUser } = useContext(UserContext)

    return (
        <Fragment>
            <HeaderContainer/>
            <MainContainer>
                {
                    userState && !errors?
                    <TodoContainer
                        todos={todos} 
                        createTask={createTask}
                        toggleCompletion={toggleCompletion}
                        removeTask={removeTask}
                        loading={loading}
                    />
                    :
                    errors ?
                    <ErrorContainer 
                        currentNetwork={errors} 
                        activeNetworks={activeNetworks}
                    />
                    :
                    <UserContainer loadTheUser={loadTheUser}/>
                }
                
            </MainContainer>

            <FooterContainer>
            </FooterContainer>
        </Fragment>


    )

}