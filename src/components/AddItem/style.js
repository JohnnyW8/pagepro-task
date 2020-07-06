import styled, { css } from 'styled-components'


export const WrapperForm = styled.div`
    h2 {
        color: white;
    }
    form {
        display: flex;
        flex-direction: column;
        color: #ff3b00;
        & > *:not(:last-child) {
            position: relative;
            margin-bottom: 30px;
        }
        input {
            width: 100%;
            border-radius: 0;
            border: none;
            padding: 10px;
        }
        label {
            p {
                position: absolute;
                top: calc(100% + 5px);
                margin: 0;
                font-size: 12px;
            }
        }
    }
`;
export const WrapperButtons = styled.div`
    display: flex;
    justify-content: flex-end;
`
export const WrapperTextarea = styled.div`
    textarea {
        width: 100%;
        padding: 10px;
    }
    & + p {
        position: absolute;
        top: 100%;
        margin: 0;
        font-size: 12px;
    }
`

export const StyledTextarea = styled.textarea`
    width: 100%;
    padding: 10px;
`

export const ButtonIcon = styled.button`
    display: flex;
    justify-content: center;
    border: none;
    background: none;
`
export const Button = styled.button`
    padding: 10px;
    border: none;
    background: white;
    color: black;
    text-transform: uppercase;
    cursor: pointer;
    &:not(:first-child) {
        margin-left: 10px;
    }
    ${props => props.color && props.color === 'dark' && css`
        background: black;
        color: white;
    `}
`
