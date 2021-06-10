import React from 'react';
import { NavigationFrame } from './styles/navigation';

export default function Navigation({children, ...restProps}){

    return <NavigationFrame {...restProps}>{children}</NavigationFrame>

}