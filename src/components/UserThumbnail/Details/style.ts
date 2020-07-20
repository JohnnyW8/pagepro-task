import styled from 'styled-components';
import { STYLES } from 'config';

export const Text = styled.div`
    font-size: 14.5px;
    color: ${STYLES.COLOR_GREY_TEXT};
    padding: 0px 15px 10px;
    &:last-child {
        padding-bottom: 30px;
    }
`

export const StyledLink = styled.a`
    font-size: 14.5px;
    color: lighten(${STYLES.COLOR_BLUE}, '20%');
    padding-left: 15px;
`