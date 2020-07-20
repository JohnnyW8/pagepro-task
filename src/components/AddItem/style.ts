import styled, { css } from "styled-components";
import { STYLES } from "config";

interface ButtonProps {
    color?: 'dark'
}
interface ErrorProps {
    top?: '100%'
}

export const WrapperForm = styled.div`
    form {
        display: flex;
        flex-direction: column;
        color: ${STYLES.COLOR_ERROR};
        & > *:not(:last-child) {
            position: relative;
            margin-bottom: 30px;
        }
    }
    h2 {
        color: ${STYLES.COLOR_WHITE};
    }
`;

export const Label = styled.label`
    position: relative;
`

export const Input = styled.input`
    width: 100%;
    border-radius: 0;
    border: none;
    padding: 10px;
`

export const WrapperButtons = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Textarea = styled.textarea`
    width: 100%;
    padding: 10px;
`;
export const ErrorBlock = styled.p<ErrorProps>`
    position: absolute;
    top: calc(100% + 5px);
    margin: 0;
    font-size: 12px;
    ${(props) =>
        props.top === "100%" &&
        css`
            top: 100%;
        `}
`;


export const ButtonIcon = styled.button`
    display: flex;
    justify-content: center;
    border: none;
    background: none;
`;

export const Button = styled.button<ButtonProps>`
    padding: 10px;
    border: none;
    background: ${STYLES.COLOR_WHITE};
    color: ${STYLES.COLOR_BLACK};
    text-transform: uppercase;
    cursor: pointer;
    &:not(:first-child) {
        margin-left: 10px;
    }
    ${(props) =>
        props.color === "dark" &&
        css`
            background: ${STYLES.COLOR_BLACK};
            color: ${STYLES.COLOR_WHITE};
        `}
`;
