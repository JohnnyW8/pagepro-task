import React from 'react';
import { Wrapper } from "./style";
import { Link } from 'react-router-dom';

export default function ({text, to}) {
    return (
        <Wrapper>
            <Link to={to} >
                {text}
            </Link>
        </Wrapper>
    )
}