import React from 'react';
import { NavigationFrame, NavInnerFrame, AccountFrame, TitleFrame, Title, TitleText, NetworkText, IconDiv} from './styles/navigation';

export default function Navigation({children, ...restProps}){

    return <NavigationFrame {...restProps}>{children}</NavigationFrame>

}

Navigation.NavInnerFrame = function NavigationNavInnerFrame({children, ...restProps}) {
    return <NavInnerFrame {...restProps}>{children}</NavInnerFrame>
}

Navigation.AccountFrame = function NavigationAccountFrame({children, ...restProps}) {
    return <AccountFrame {...restProps}>{children}</AccountFrame>
}

Navigation.TitleFrame = function NavigationTitleFrame({children, ...restProps}) {
    return <TitleFrame {...restProps}>{children}</TitleFrame>
}

Navigation.Title = function NavigationTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Navigation.NetworkText = function NavigationNetworkText({children, ...restProps}) {
    return <NetworkText {...restProps}>{children}</NetworkText>
}

Navigation.TitleText = function NavigationTitleText({children, ...restProps}) {
    return <TitleText {...restProps}>{children}</TitleText>
}

Navigation.IconDiv = function NavigationIconDiv({children, ...restProps}) {
    return <IconDiv {...restProps}>{children}</IconDiv>
}