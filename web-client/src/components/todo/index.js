import React from 'react';
import { TodoFrame } from './styles/todo';

export default function Todo({children, ...restProps}){

    return <TodoFrame {...restProps}>{children}</TodoFrame>

}

// Navigation.NavInnerFrame = function NavigationNavInnerFrame({children, ...restProps}) {
//     return <NavInnerFrame {...restProps}>{children}</NavInnerFrame>
// }