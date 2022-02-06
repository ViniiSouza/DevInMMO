import styled from "styled-components";

export const NewsCardContainer = styled.section`
    border: 2px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 5px;
    margin: 10px;
    width: 45vw;
    height: 15.7vh;
    text-align: left;
    transition: 0.2s;
    
    &:hover {
        border: 2px solid ${(props) => props.theme.colors.selection};
        background-color: ${(props) => props.theme.colors.moreFaded};
        transition: 0.3s;
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