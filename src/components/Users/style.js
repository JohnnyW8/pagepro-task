import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-gap: 50px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    @media (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1600px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;