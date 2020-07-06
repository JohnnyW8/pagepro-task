import React from 'react';
import loaderIcon from './loader.svg'
import { StyledLoader, Img } from './style'


export default function ({ minHeight = '100px', position = 'relative' }) {
    return (
        <StyledLoader style={{ position, minHeight }}>
            <Img src={loaderIcon} alt="Loader" />
        </StyledLoader>
    )
}
