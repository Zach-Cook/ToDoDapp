import React from 'react';

import { Header } from '../components';


export default function HeaderContainer({children, ...restProps}){

    return <Header {...restProps}>{children}</Header>

}