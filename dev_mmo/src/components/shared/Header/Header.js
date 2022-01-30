import { Link, useNavigate } from "react-router-dom"
import { ChangeTheme, NavButton, NavDivisor, NavHeader, NavMenu, NavTitle } from "./Header.styles"
import { useMyThemes } from '../../../contexts/MyThemes/useMyThemes';
import { darkTheme, defaultTheme, lightTheme } from '../../../themes/themes';

export const Header = () => {
    const linkStyles = { textDecoration: 'inherit', color: 'inherit' }
    var navigate = useNavigate();
    const { temaAtual, setTemaAtual } = useMyThemes()

    function UpdateTheme(tema) {
        if (tema === 'defaultTheme') setTemaAtual(defaultTheme);
        else if (tema === 'darkTheme') setTemaAtual(darkTheme);
        else if (tema === 'lightTheme') setTemaAtual(lightTheme);
    }


    return (
        <NavHeader>
            <NavTitle onClick={() => navigate('/home')}>MMO Games</NavTitle>
            <span>Tema: </span>
            <ChangeTheme value={temaAtual.name} onChange={(e) => UpdateTheme(e.target.value)}>
                <option value={'defaultTheme'}>Default</option>
                <option value={'lightTheme'}>Claro</option>
                <option value={'darkTheme'}>Escuro</option>
            </ChangeTheme>
            <NavMenu>
                <NavButton><Link style={linkStyles} to="/home">Home</Link></NavButton><NavDivisor>|</NavDivisor>
                <NavButton><Link style={linkStyles} to="/noticias">Notícias</Link></NavButton><NavDivisor>|</NavDivisor>
                <NavButton><Link style={linkStyles} to="/jogos">Jogos</Link></NavButton>
            </NavMenu>
        </NavHeader>
    )
}