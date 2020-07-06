import React from 'react'
import { H2, Paragraph } from './style'

export default function ({title, body}) {
    return (
        <>
            <H2>
                {title}
            </H2>
            <Paragraph>
                {body}  
            </Paragraph>         
        </>
    )
}