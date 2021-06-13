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
    justify-content: space-between;
    width: 35%;

    @media screen and (min-width: 1920px){
        width: 20%;
    }


`;

export const Title = styled.h1`

    color: #FFFFFF;
    font-size: 42px;
    font-weight: normal;
`

export const TitleText = styled.p`

    color: #FFFFFF;
    font-size: 18px;
    font-weight: normal;
`