import styled from "styled-components";

export const RequirementsContainer = styled.section`
    margin: auto 10vw;
    border: 2px solid ${(props) => props.theme.colors.borderColor};
    padding-left: 1vw;
    text-align: start;
`;

export const MainTitle = styled.h5`
    font-size: 26px;
    margin-top: 1vh;
    margin-bottom: 1.5vh;
`;

export const PropertyTitle = styled.p`
    font-weight: bold;
    display: inline;
    margin-top: 5px;
    line-height: 3vh;
`;

export const PropertyDescription = styled.span`
    font-weight: normal;
    position: absolute;
    left: 25vw;
`;