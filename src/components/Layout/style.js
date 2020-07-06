import styled from "styled-components";

export const Section = styled.div`
    padding: 30px 0;
    @media (min-width: 992px) {
        padding: 50px 0;
    }
`

export const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
    @media (min-width: 1600px) {
        max-width: 1370px;
    }
`;