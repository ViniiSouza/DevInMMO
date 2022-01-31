import styled from "styled-components";

export const GameCommentsContainer = styled.section`
    text-align: center;
    margin: 2vh 15vw;
    `;

export const CommentsTitle = styled.h6`
    font-size: 26px;
    margin-bottom: 10px;
    `;

export const FormContainer = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px 0;
`;

export const CommentButton = styled.button`
    width: 42vw;
    height: 3vh;
    font-size: 16px;
    background-color: ${(props) => props.theme.colors.warning};
    color: ${(props) => props.theme.colors.mainText};
    transition: 0.3s;
    &:hover {
        filter: brightness(110%);
        transition: 0.3s;
    }
`;