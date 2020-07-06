import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    text-align: center;
    a {
        padding: 25px;
        width: 100%;
        color: #a2a8c1;
        letter-spacing: 0.25px;
        font-size: 16px;
        background-color: #ffffff;
        text-align: center;
        cursor: pointer;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        transition: color .2s ease-in, background-color .2s ease-in;
        border: none;
        text-decoration: none;
        &:hover {
            color: white;
            background-color: #3540ff;
        }
        
    }
`