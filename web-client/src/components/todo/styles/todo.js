import styled from "styled-components";


export const TodoFrame = styled.div`

    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
    background: #383F44;
    border-radius: 8px;
    margin: 40px 0;
    
    @media screen and (min-width: 600px){
        width: 72%;
        justify-content: flex-start;
    }
`

export const NewTaskFrame = styled.div`

    width: 100%;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly; 

    @media screen and (min-width: 600px){
        margin: 20px;
        align-items: stretch;
        flex-direction: row;
    }
`;

export const Input = styled.input`

    border: none;
    height: 60px;
    width: 100%;
    color: #262626;
    font-size: 1rem;
    font-style: normal;
    line-height: 23px;
    letter-spacing: 1.8000001907348633px;
    text-align: left;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: #262626;
        font-size: 1rem;
        font-style: normal;
        line-height: 23px;
        letter-spacing: 3px;
        text-align: center;
        
    }

    @media screen and (min-width: 600px){
        width: 65%;
        padding-left: 1.2rem;

        ::placeholder,
        ::-webkit-input-placeholder {
            text-align: left;
            letter-spacing: 1.8000001907348633px;   
        }
    }
`;


export const Button = styled.button`

    cursor: pointer;
    width: 100%;
    background: #66AD47;
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

    @media screen and (min-width: 600px){
        margin: 0;
        width: 15%;
    }
`;

export const TaskFrame = styled.div`



    width: 95%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`;

export const TaskItemFrame = styled.div`

    min-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;


export const CheckBox = styled.input`

    height: 12px;
    width:  12px;
    cursor: pointer;

    @media screen and (min-width: 600px){
        height: 20px;
    width:  20px;
    }
`;

export const Text = styled.p`

    font-size: 16px;
    color: #ffffff;
    text-align: left;
    width: 80%;
    text-decoration: ${props => props.completed ? "line-through" : null};

    @media screen and (min-width: 600px){
        font-size: 24px;
    }

    `;

export const ContentFrame = styled.div`


    width: 65%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;


`

export const RemoveFrame = styled.div`

    width: 30%;
    display: flex;
    justify-content: center;


`;