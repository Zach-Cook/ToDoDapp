import styled from "styled-components";


export const DarkContainer = styled.div`

    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    background: #383F44;
    border-radius: 8px;
    margin: 40px 0;

    @media screen and (min-width: 600px){
        width: 72%;
    }
`

export const LoginButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 90%;
    height: 100px;
    background: #66AD47;
    font-size: 24px;
    font-style: normal;
    color: #FFFFFF;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: .8px;
    text-align: center;
    border: none;
    cursor: pointer;

    @media screen and (min-width: 600px){
        width: 20%;
    }

    @media screen and (min-width: 1280px){
        width: 30%;
    }

    @media screen and (min-width: 1920px){
        width: 20%;
    }
`;
