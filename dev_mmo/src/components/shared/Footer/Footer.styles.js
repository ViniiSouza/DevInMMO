import styled from "styled-components";

export const FooterContainer = styled.div`
    text-align: center;
    height: 10vh;
    line-height: 5vh;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.mainText};

`;

export const FooterTitle = styled.h6`
    font-size: 16px;
`;

export const FooterIcon = styled.a`
    color:inherit;
    font-size: 30px;
    margin: 3px;
    cursor: pointer;
`