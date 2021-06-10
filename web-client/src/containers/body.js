import React from 'react';

import { Body } from '../components';

export default function BodyContainer({children, ...restProps}){

    return <Body {...restProps}>{children}</Body>
}