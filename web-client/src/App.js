import React from 'react'
import Home from './pages/home'
import GlobalStyle from './global-styles.js'
import {UserContext} from './context/user';

//hooks
import useLoadCurrentUser from './hooks/useLoadCurrentUser';

function App() { 

  const { userState, loadTheUser } = useLoadCurrentUser()

  return (
    <>
      <UserContext.Provider value={{userState, loadTheUser}}>
        <GlobalStyle/>
        <Home/>
      </UserContext.Provider>
    </>
  );
}

export default App;
