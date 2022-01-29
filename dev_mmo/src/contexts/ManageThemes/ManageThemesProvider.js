import { useState } from 'react'
import { ManageThemesContext } from './ManageThemesContext'

export const ManageThemesProvider = ({children}) => {
    const [temaAtual, setTemaAtual] = useState('default')

    return (
        <ManageThemesContext.Provider value={{ temaAtual, setTemaAtual}}>
            {children}
        </ManageThemesContext.Provider>
    )
}