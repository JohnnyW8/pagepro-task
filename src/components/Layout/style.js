import styled from "styled-components";
import { STYLES } from 'config';

export const Section = styled.div`
    padding: 30px 0;
    @media (min-width: ${STYLES.MEDIA_LG}) {
        padding: 50px 0;
    }
`

export const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: ${STYLES.MEDIA_SM}) {
        max-width: 540px;
    }
    @media (min-width: ${STYLES.MEDIA_MD}) {
        max-width: 720px;
    }
    @media (min-width: ${STYLES.MEDIA_LG}) {
        max-width: 960px;
    }
    @media (min-width: ${STYLES.MEDIA_XL}) {
        max-width: 1140px;
    }
    @media (min-width: ${STYLES.MEDIA_HD}) {
        max-width: 1370px;
    }
`;