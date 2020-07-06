import styled from 'styled-components'

export const Element = styled.div`
    border: 2px solid;
    padding: 5px 10px;
    &:not(:last-child) {
        margin-bottom: 15px;
    }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const H3 = styled.h3`
    margin: 0;
    font-size: 18px;
    font-family: OpenSansSemiBold;
    color: #0f1d38;
`

export const A = styled.a`
    text-decoration: underline;
    color: black;
`

export const Paragraph = styled.p`
    font-size: 15px;
`