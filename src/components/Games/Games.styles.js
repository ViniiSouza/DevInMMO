import styled from "styled-components";

export const GamesContainer = styled.section`
    display:flex;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.mainText};
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 2vw;
    margin-right: 2vw;
`;