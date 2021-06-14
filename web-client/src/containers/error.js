import React from 'react';

import { Error } from '../components';

export default function ErrorContainer({currentNetwork, activeNetworks}){

    return (

        <Error>
            <Error.ErrorFrameInner>
                <Error.ErrorText>
                    Error: your are interacting on an unsupported network
                    ({currentNetwork ? currentNetwork : null})
                    Please switch to one of the active networks
                </Error.ErrorText>
                {
                    activeNetworks ?
                    activeNetworks.map((network, index) =>(
                        <Error.NetworkText key={index}>{network}</Error.NetworkText>
                    ))
                    :
                    null
                }
            </Error.ErrorFrameInner>
        </Error>
    )


}