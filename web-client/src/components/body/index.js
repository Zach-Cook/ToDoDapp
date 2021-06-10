import React from 'react'
import { BodyFrame } from './styles/body';



export default function Body({children, ...restProps}){

    return <BodyFrame {...restProps}>{children}</BodyFrame>
}