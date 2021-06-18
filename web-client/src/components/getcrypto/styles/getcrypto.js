import styled from "styled-components";


export const GetCryptoFrame = styled.div`

    width: 90%;
    display: flex;
    align-items: center;
    border-radius: 8px;
    margin-top: 5px;

    @media screen and (min-width: 600px){
        margin-top: 20px;
        width: 95%;
        justify-content: flex-end;
    }

`;


export const GetCryptoButton = styled.button`

    background: #5E6468;
    cursor: pointer;
    width: 100%;
    font-size: 24px;
    font-style: normal;
    color: #FFFFFF;
    font-weight: 400;
    letter-spacing: .8px;
    text-align: center;
    border: none;
    cursor: pointer;
    margin: 20px 0;
    height: 60px;

    &&:hover{
        background: #293036; 
    }

    @media screen and (min-width: 600px){
        font-size: 18px;
        margin: 0;
        width: 8%;
    }

    @media screen and (min-width: 800px){

        width: 12%;
    }

    @media screen and (min-width: 1500px){

        width: 8%;
    }

`;