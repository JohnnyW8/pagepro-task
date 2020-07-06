import styled, { css } from 'styled-components';

export const Box = styled.div`
    box-shadow: 5px 5px 5px 0px rgba(56, 54, 54, 0.4);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    height: auto;
    max-height: 95vh;
    transition: opacity 0.3s, top 0.3s;
    overflow-y: auto;
    @media (min-width: 650px) {
        width: auto;
        min-width: 550px;
        max-width: 800px;
    }
`;

export const BoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 40px 40px;
    background: rgba(60, 60, 60, 0.91);
    width: 100%;
    height: 100%;
`;
export const BoxClose = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    padding: 10px;
    cursor: pointer;  
`;

export const BoxCloseImg = styled.img`
    width: 25px;  
`;
export const BoxItems = styled.div`
    border-bottom: none;
    overflow-y: auto;
`;

export const StyledModal = styled.div`
    width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 3;
	transition: opacity 0.3s;
    ${props => !props.show && css`
        opacity: 0;
        pointer-events: none;
        ${Box} {
            top: 45%;
		    opacity: 0;
        }
    `}
`;
