import React from 'react';
import { NavigationFrame, NavInnerFrame, AccountFrame, Title, TitleText } from './styles/navigation';

export default function Navigation({children, ...restProps}){

    return <NavigationFrame {...restProps}>{children}</NavigationFrame>

}

Navigation.NavInnerFrame = function NavigationNavInnerFrame({children, ...restProps}) {
    return <NavInnerFrame {...restProps}>{children}</NavInnerFrame>
}

Navigation.AccountFrame = function NavigationAccountFrame({children, ...restProps}) {
    return <AccountFrame {...restProps}>{children}</AccountFrame>
}

Navigation.Title = function NavigationTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Navigation.TitleText = function NavigationTitleText({children, ...restProps}) {
    return <TitleText {...restProps}>{children}</TitleText>
}