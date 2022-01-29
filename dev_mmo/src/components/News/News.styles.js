import styled from "styled-components";

export const NewsContainer = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 2vw;
    color: ${(props) => props.theme.colors.mainText};
    background-color: ${(props) => props.theme.colors.background};
`;