import React from 'react';
import { GetCryptoFrame, GetCryptoButton} from './styles/getcrypto';

export default function GetCrypto({children, ...restProps}){

    return <GetCryptoFrame {...restProps}>{children}</GetCryptoFrame>

}

GetCrypto.GetCryptoButton = function GetCryptoCryptoButton({children, ...restProps}) {
    return <GetCryptoButton {...restProps}>{children}</GetCryptoButton>
}
