import styled from "styled-components";

export const GamesCardContainer = styled.section`
    border: 5px solid ${(props) => props.theme.colors.primary};
    border-radius: 5px;
    margin: 10px;
    width: 17.5vw;
    transition: 0.5s;
    
    &:hover {
        border-color: ${(props) => props.theme.colors.selection};
        transition: 0.5s;
        box-shadow: 7px 7px 15px 2px ${(props) => props.theme.colors.primary};
        margin-top: -2px;
        margin-bottom: 2px;
    }
`;

export const GamesCardImage = styled.img`
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    width: 100%;
`;

export const GamesCardTitle = styled.h6`
    font-size: 16px;
    text-align:center;
    margin: 10px auto;
`;

export const GamesCardDescription = styled.p`
    font-size: 14px;
    margin: 5px 5px 20px 5px;    
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical; 
`;

export const GamesCardGenre = styled.p`
    color: ${(props) => props.theme.colors.borderColor};
    position: relative;
    border: 2px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 10px;
    width: fit-content;
    font-size: 12px;
    padding: 4px;
    margin: 5px;
    text-transform: uppercase;
`;