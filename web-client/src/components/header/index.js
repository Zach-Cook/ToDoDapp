import React from 'react';

import { HeaderFrame } from './styles/header';


export default function Header({children, ...restProps}){

    return <HeaderFrame {...restProps}>{children}</HeaderFrame>
}