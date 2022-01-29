import styled from "styled-components";

export const PaginacaoContainer = styled.div`
    margin: 0 0 2vh 3vw;
`;

export const ArrowButton = styled.button`
    background-color: ${(props) => props.theme.colors.extra1};
    border: 2px solid ${(props) => props.theme.colors.extra2};
    border-radius: 5px;
    font-size: 26px;
    margin: 5px;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        background-color: #ddd;
        transition: 0.3s;
    }
`;

export const SpanText = styled.span`
    font-size: 19px;
    margin: 0 5px;
`;