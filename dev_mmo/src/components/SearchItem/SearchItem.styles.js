import styled from "styled-components";

export const Search = styled.div`
    margin: 5vh 3vw;  
`;

export const SearchField = styled.input`
    width: 40vw;
    height: 4vh;
    border: 2px solid ${(props) => props.theme.colors.primary};
    border-radius: 5px;
    font-family: Montserrat;
    font-size: 16px;
`;

export const ItemsAmount = styled.p`
    margin: 20px 10px;
`;