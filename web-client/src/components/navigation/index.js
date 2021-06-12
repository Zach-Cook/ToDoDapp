import React from 'react';
import { NavigationFrame, NavInnerFrame, Title, TitleText } from './styles/navigation';

export default function Navigation({children, ...restProps}){

    return <NavigationFrame {...restProps}>{children}</NavigationFrame>

}

Navigation.NavInnerFrame = function NavigationNavInnerFrame({children, ...restProps}) {
    return <NavInnerFrame {...restProps}>{children}</NavInnerFrame>
}

Navigation.Title = function NavigationTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Navigation.TitleText = function NavigationTitleText({children, ...restProps}) {
    return <TitleText {...restProps}>{children}</TitleText>
}