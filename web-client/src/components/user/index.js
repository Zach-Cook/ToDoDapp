import React from 'react';
import { DarkContainer, LoginButton} from './styles/user';

export default function User({children, ...restProps}){

    return <DarkContainer {...restProps}>{children}</DarkContainer>

}


User.LoginButton = function UserLoginButton({children, ...restProps}) {
    return <LoginButton {...restProps}>{children}</LoginButton>
}