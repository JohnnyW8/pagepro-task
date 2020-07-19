import styled from 'styled-components';
import { STYLES } from 'config';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    text-align: center;
    a {
        padding: 25px;
        width: 100%;
        color: ${STYLES.COLOR_GREY_TEXT};
        letter-spacing: 0.25px;
        font-size: 16px;
        background-color: ${STYLES.COLOR_WHITE};
        text-align: center;
        cursor: pointer;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        transition: color .2s ease-in, background-color .2s ease-in;
        border: none;
        text-decoration: none;
        &:hover {
            color: white;
            background-color: ${STYLES.COLOR_BLUE};
        }
        
    }
`