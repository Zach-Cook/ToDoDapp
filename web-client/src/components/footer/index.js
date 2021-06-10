import React from 'react';

import { FooterFrame } from './styles/footer';


export default function Footer({children, ...restProps}){

    return <FooterFrame {...restProps}>{children}</FooterFrame>
}