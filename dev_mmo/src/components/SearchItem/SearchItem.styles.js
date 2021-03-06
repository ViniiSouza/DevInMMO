import styled from "styled-components";

export const Search = styled.section`
    margin: 5vh 3vw;  
`;

export const SearchField = styled.input`
    width: 40vw;
    height: 4vh;
    border: 2px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 5px;
    font-family: Montserrat;
    font-size: 16px;
    margin: 20px 0;
`;

export const ItemsAmount = styled.p`
    margin: 20px 10px;
    color: ${(props) => props.theme.colors.mainText}
`;