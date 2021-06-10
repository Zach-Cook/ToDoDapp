import React from 'react';

import { Footer } from '../components';


export default function FooterContainer({children, ...restProps}){

    return <Footer {...restProps}>{children}</Footer>
}