import styled from "styled-components";
import { STYLES } from 'config';

export const TopBar = styled.div`
    display: flex;
    padding-bottom: 30px;
    align-items: center;
    justify-content: space-between;
    @media (min-width: ${STYLES.MEDIA_LG}) {
        padding-bottom: 50px;
    }
`;
