import styled from 'styled-components';
import { STYLES } from 'config';

export const Wrapper = styled.div`
    display: grid;
    grid-gap: 50px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    @media (min-width: ${STYLES.MEDIA_SM}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${STYLES.MEDIA_LG}) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: ${STYLES.MEDIA_HD}) {
        grid-template-columns: repeat(4, 1fr);
    }
`;