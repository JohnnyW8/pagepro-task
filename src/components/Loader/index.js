import React from 'react';
import IconLoader from './loader.svg'
import { StyledLoader, Img } from './style'


export default function ({ minHeight = '100px', position = 'relative' }) {
    return (
        <StyledLoader style={{ position, minHeight }}>
            <Img src={IconLoader} alt="Loader" />
        </StyledLoader>
    )
}
