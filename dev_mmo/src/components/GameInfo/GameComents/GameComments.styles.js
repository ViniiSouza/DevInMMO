import styled from "styled-components";

export const GameCommentsContainer = styled.section`
    text-align: center;
    margin: 2vh 15vw;
`;

export const CommentsTitle = styled.h6`
    font-size: 26px;
    margin-bottom: 10px;
    `;

export const FormContainer = styled.section`
    border: 2px solid ${(props) => props.theme.colors.borderColor};;
    border-radius: 10px;
    padding: 10px 0;
`;

export const TopFormContainer = styled.div`
    height: 5vh;
`;

export const BottomFormContainer = styled.div`
    height: 22vh;
`;

export const ErrorMessageContainer = styled.section`
    display:block;
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

export const CommentContainer = styled.section`
    border: 2px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 5px;
    margin: 10px;
    text-align: start;
    height: 10vh;
`;

export const CommentName = styled.h6`
    font-size: 18px;
    color: ${(props) => props.theme.colors.mainText};
    margin-top: 10px;
    margin-left: 10px;
`;

export const CommentText = styled.p`
    margin-left: 15px;
    margin-top: 5px;
`;

export const LikeSection = styled.div`
    top: -20px;
    position: relative;
    left: 85%;
`;

export const LikesNumber = styled.h6`
    display:inline;
    font-size: 22px;
    margin: 20px;
`;