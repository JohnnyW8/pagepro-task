import styled from 'styled-components'

export const Element = styled.div`
    border: 2px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    &:not(:last-child) {
        margin-bottom: 15px;
    }
    a {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 0 0px 0 60px;
        max-width: calc(100% - 60px);
        font-size: 25px;
        text-decoration: none;
    }
    button {
        position: absolute;
        cursor: pointer;
        border: none;
        background: none;
    }
`

export const Text = styled.span`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`