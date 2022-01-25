import { Link } from "react-router-dom"
import { NavButton, NavDivisor, NavHeader, NavMenu, NavTitle } from "./Header.styles"

export const Header = () => {
    const linkStyles = { textDecoration: 'inherit', color: 'inherit' }


    return (
        <NavHeader>
            <NavTitle>MMO Games</NavTitle>
            <NavMenu>
                <NavButton><Link style={linkStyles} to="/home">Home</Link></NavButton><NavDivisor>|</NavDivisor>
                <NavButton><Link style={linkStyles} to="/noticias">Notícias</Link></NavButton><NavDivisor>|</NavDivisor>
                <NavButton><Link style={linkStyles} to="/jogos">Jogos</Link></NavButton>
            </NavMenu>
        </NavHeader>
    )
}