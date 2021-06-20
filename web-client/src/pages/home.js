import React, { useContext, Fragment} from 'react';
import HeaderContainer from '../containers/header';
import MainContainer from '../containers/main';
import GetCryptoContainer from '../containers/getcrypto';
import FooterContainer from '../containers/footer';
import TodoContainer from '../containers/todo';
import UserContainer from '../containers/user';
import ErrorContainer from '../containers/error'

// context
import { UserContext } from '../context/user';

// custom hook
import useToDos from '../hooks/useToDos';
import useDeployedNetWorks from '../hooks/usedeployednetworks';
// contract
import todoListContract from '../contract-artifacts/TodoList.json'


export default function Home(){
    
    const { todos, createTask, toggleCompletion, removeTask, loading, errors, newTodo, setNewTodo } = useToDos()
    const { userState, loadTheUser } = useContext(UserContext)
    const [ deployedNetworks ] = useDeployedNetWorks(todoListContract)


    return (
        <Fragment>
            <HeaderContainer/>
            <MainContainer>
                {/* <GetCryptoContainer/> */}
                {
                    userState && !errors?
                    <TodoContainer
                        todos={todos} 
                        createTask={createTask}
                        toggleCompletion={toggleCompletion}
                        removeTask={removeTask}
                        loading={loading}
                        setNewTodo={setNewTodo}
                        newTodo={newTodo}
                    />
                    :
                    errors ?
                    <ErrorContainer 
                        currentNetwork={errors} 
                        deployedNetworks={deployedNetworks}
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