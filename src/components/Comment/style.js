import styled from "styled-components";
import { STYLES } from "config";

export const Element = styled.div`
    border: 2px solid;
    padding: 5px 10px;
    &:not(:last-child) {
        margin-bottom: 15px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const H3 = styled.h3`
    margin: 0;
    font-size: 18px;
    font-family: ${STYLES.FONT_SEMI_BOLD};
    color: ${STYLES.COLOR_DARK_TEXT};
`;

export const A = styled.a`
    text-decoration: underline;
    color: ${STYLES.COLOR_BLACK};
`;

export const Paragraph = styled.p`
    font-size: 15px;
`;
