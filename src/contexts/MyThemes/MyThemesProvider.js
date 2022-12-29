import { useState } from 'react'
import { MyThemesContext } from './MyThemesContext'
import { defaultTheme } from '../../themes/themes';

export const MyThemesProvider = ({ children }) => {
    const [temaAtual, setTemaAtual] = useState(defaultTheme)

    return (
        <MyThemesContext.Provider value={{ temaAtual, setTemaAtual }}>
            {children}
        </MyThemesContext.Provider>
    )
}