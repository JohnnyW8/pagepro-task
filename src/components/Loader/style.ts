import styled from 'styled-components'

export const StyledLoader = styled.div`
    top: 0;
	left: 0;
	width: 100%;
    height: 100%;
    position: relative;
    min-height: 100px;
`
export const Img = styled.img`
    margin: 0 !important;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    max-height: 75%;
    max-width: 75%;
`