import React from 'react';

import { Error } from '../components';

export default function ErrorContainer({currentNetwork, activeNetworks}){

    return (

        <Error>
            <Error.ErrorFrameInner>
                <Error.ErrorText>
                    Error: You are currently interacting on an unsupported blockchain network,
                    ({currentNetwork ? currentNetwork : null}).
                    
                </Error.ErrorText>
                <Error.NetworkText>
                    To use this Dapp, please switch to one of our active networks inside your MetaMask app:
                </Error.NetworkText>
                {
                    activeNetworks ?
                    activeNetworks.map((network, index) =>(
                        <Error.NetworkText key={index}>1.) {network}</Error.NetworkText>
                    ))
                    :
                    null
                }
            </Error.ErrorFrameInner>
        </Error>
    )


}