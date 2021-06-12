import React from 'react'

// component
import { Navigation } from '../components';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


export default function NavigationContainer(props) {



    return (
        <Navigation>
            <FontAwesomeIcon icon={faUser} color="white"/> 
        </Navigation>
    )
}