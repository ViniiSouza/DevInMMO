import { FooterContainer, FooterIcon, FooterTitle } from "./Footer.styles"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom";

export const Footer = () => {

    return (
        <FooterContainer>
            <FooterTitle>Vinícius Gabriel de Souza - Copyright © 2022</FooterTitle>
            <FooterIcon target="_blank" href="https://github.com/ViniiSouza"><FaGithub /></FooterIcon>
            <FooterIcon target="_blank" href="https://www.linkedin.com/in/vin%C3%ADcius-gabriel-de-souza-b3950815a/"><FaLinkedin /></FooterIcon>
            
        </FooterContainer>
    )
}