import styled from "styled-components";


export const TodoFrame = styled.div`

    width: 72%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 80vh;
    background: #383F44;
    border-radius: 8px;
    margin: 40px 0;
`

export const NewTaskFrame = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-evenly; 
    margin: 20px;

`;

export const Input = styled.input`

    border: none;
    height: 60px;
    width: 65%;
    color: #262626;
    font-size: 1rem;
    font-style: normal;
    line-height: 23px;
    letter-spacing: 1.8000001907348633px;
    text-align: left;
    padding-left: 1.2rem;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: #262626;
        font-size: 1rem;
        font-style: normal;
        line-height: 23px;
        letter-spacing: 1.8000001907348633px;
        text-align: left;
        padding-left: 1.2rem;
        
    }
`;


export const Button = styled.button`

    cursor: pointer;
    width: 15%;

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
`;

export const TaskFrame = styled.div`



    width: 90%;
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

    height: 20px;
    width:  20px;
    cursor: pointer;
`;

export const Text = styled.p`

    font-size: 24px;
    color: #ffffff;
    text-align: left;
    width: 80%;
    text-decoration: ${props => props.completed ? "line-through" : null};
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