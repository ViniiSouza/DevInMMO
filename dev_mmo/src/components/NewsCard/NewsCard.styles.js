import styled from "styled-components";

export const NewsCardContainer = styled.section`
    border: 2px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 5px;
    margin: 10px;
    width: 45vw;
    text-align: left;
    
    &:hover {
        border: 2px solid ${(props) => props.theme.colors.selection};
        background-color: ${(props) => props.theme.colors.moreFaded};
    }
`;

export const NewsCardImage = styled.img`
    border-right: 2px solid ${(props) => props.theme.colors.primary};
    position: sticky;
    float: left;
    overflow: hidden;
`;

export const NewsCardTitle = styled.h6`
    font-size: 16px;
    margin: 5px;
    margin-left: 10px;
    display:block;
`;

export const NewsCardDescription = styled.p`
    font-size: 14px;
    margin: 5px;
    display:block;
`;

export const NewsCardButton = styled.a`
    text-decoration: none;
    padding: 2px;
    color: inherit;
    border: 2px solid ${(props) => props.theme.colors.warning};
    text-align: center;
    margin: 10px 10vw;
    max-width: 40%;
    transition: 0.3s;
    display:block;

    &:hover {
        background-color: ${(props) => props.theme.colors.fadedWarning};
        transition: 0.3s;
        margin: 10px 11vw;
    }
`;