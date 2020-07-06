import styled from 'styled-components';

export const Block = styled.div`
    position: relative;
    border-radius: 4px;
    box-shadow: 0px 3px 13px 0 rgba(231, 234, 247, 0.35);
    border: solid 1px white;
    transition: border .2s ease-in, box-shadow .2s ease-in, transform .2s ease-in;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:hover {
        transform: scale(1.04);
        box-shadow: 0px 3px 16px 0 #d8dced;
        border: solid 1px #3540ff;
        z-index: 1;
    }
`
export const Header = styled.div`
    background-color: #ffffff;
    margin-bottom: 2px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    flex: auto;
`

export const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
`