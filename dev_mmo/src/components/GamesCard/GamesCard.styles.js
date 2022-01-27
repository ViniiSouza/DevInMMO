import styled from "styled-components";

export const GamesCardContainer = styled.div`
    border: 2px solid #081C64;
    border-radius: 5px;
    margin: 10px;
    width: 15vw;
    transition: 0.5s;
    
    &:hover {
        border: 2px solid #0933bf;
        transition: 0.5s;
        box-shadow: 5px 5px 8px 2px rgba(0, 12, 107, 20%);
    }
`;

export const GamesCardImage = styled.img`
    border-bottom: 2px solid #081C64;
    overflow:hidden;
    width: 15vw;
`;

export const GamesCardTitle = styled.h6`
    font-size: 16px;
    text-align:center;
    margin: 10px auto;
`;

export const GamesCardDescription = styled.p`
    font-size: 14px;
    margin: 5px;
    margin-bottom: 20px;
    max-width: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical; 
    text-overflow: ellipsis;
`;