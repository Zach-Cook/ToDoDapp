import React from 'react'

// component
import { Navigation } from '../components';


// custom hooks
import useLoadCurrentUser from '../hooks/useLoadCurrentUser'


export default function NavigationContainer() {

    const { userState } = useLoadCurrentUser()

    console.log(userState)


    return (
        <Navigation>

        </Navigation>

    )
}