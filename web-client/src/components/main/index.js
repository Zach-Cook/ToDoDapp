import React from 'react';
import { MainFrame } from './styles/main'

export default function Main({children, ...restProps}) {
    return <MainFrame {...restProps}>{children}</MainFrame>
}