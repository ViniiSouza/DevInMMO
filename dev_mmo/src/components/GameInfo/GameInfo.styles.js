import styled from "styled-components";

export const GameContainer = styled.section`
    text-align: center;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.mainText};
`;

export const GameTitle = styled.h3`
    font-size: 32px;
`;

export const GameSlideImage = styled.img`
    width: 13vw;
    margin:5px;
    border: 2px solid ${(prop) => prop.theme.colors.borderColor};
    transition: 0.1s;
    filter: brightness(80%);

    &:hover {
        border-color: ${(prop) => prop.theme.colors.selection};
        transition: 0.1s;
        filter: brightness(100%);
    }

`;

export const GameThumbImage = styled.img`
    display:block;
    margin: 0 auto;
    width: 60vw;
    border: 5px solid ${(prop) => prop.theme.colors.borderColor};
`;