import React from 'react';

import { Error } from '../components';

export default function ErrorContainer({currentNetwork, deployedNetworks}){

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
                    deployedNetworks ?
                    deployedNetworks.map((network) =>(
                        <Error.NetworkText key={network.netWorkID}>1.) {network.netWorkName}</Error.NetworkText>
                    ))
                    :
                    null
                }
            </Error.ErrorFrameInner>
        </Error>
    )


}