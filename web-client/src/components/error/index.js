import React from 'react';
import { ErrorFrame, ErrorFrameInner,  ErrorText, NetworkText} from './styles/error';

export default function Error({children, ...restProps}){

    return <ErrorFrame {...restProps}>{children}</ErrorFrame>

}

Error.ErrorFrameInner = function ErrorErrorFrameInner({children, ...restProps}) {
    return <ErrorFrameInner {...restProps}>{children}</ErrorFrameInner>
}

Error.ErrorText = function ErrorErrorText({children, ...restProps}) {
    return <ErrorText {...restProps}>{children}</ErrorText>
}

Error.NetworkText = function ErrorNetworkText({children, ...restProps}) {
    return <NetworkText {...restProps}>{children}</NetworkText>
}