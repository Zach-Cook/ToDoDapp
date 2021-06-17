import styled from 'styled-components';


export const NavigationFrame = styled.nav`

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const NavInnerFrame = styled.div`

    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const AccountFrame = styled.div`

    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : "space-between"};
    align-items: center;
    width: 60%;

    

    @media screen and (min-width: 600px){
        width: 35%;
    }

    @media screen and (min-width: 1920px){
        width: 20%;
    }


`;

export const Title = styled.h1`

    color: #FFFFFF;
    font-size: 24px;
    font-weight: normal;


    @media screen and (min-width: 600px){
        font-size: 42px;
    }

`

export const TitleText = styled.p`

    color: #FFFFFF;
    font-size: 14px;
    font-weight: normal;

    @media screen and (min-width: 600px){
        font-size: 18px;
    }
`

export const IconDiv = styled.div`

    height: 40px;
    width: 40px;

`;