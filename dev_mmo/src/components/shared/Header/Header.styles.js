import styled from 'styled-components';

export const NavHeader = styled.header`
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.extra1};
    display: inline-block;
    width: 100vw;
`;

export const NavTitle = styled.h1`
    display:inline-block;
    font-size: 36px;
    margin: 20px 20px;
    cursor: pointer;
    transition: .2s;
    color: ${(props) => props.theme.colors.mainText};
    &:hover {
        color: ${(props) => props.theme.colors.extra3};
        transition: .3s;
    }
`;

export const NavMenu = styled.nav`
    display: inline;
    float: right;
    line-height: 8vh;
    margin: 0 50px 0 0;
`;

export const NavButton = styled.h3`
    display:inline-block;
    margin: 0 50px;
    color:white;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: underline 0.2em ${(props) => props.theme.colors.invisible};
    text-underline-offset: 0.2em;
    &:hover {
        text-decoration-color: ${(props) => props.theme.colors.extra1};
        transition: 0.3s;
    }
`;

export const NavDivisor = styled.span`
    color: ${(props) => props.theme.colors.extra1};
    font-size: 28px;
`;