import { ManageThemesContext } from './ManageThemesContext'

export const ManageThemesProvider = ({children}) => {

    return (
        <ManageThemesContext.Provider value={'ALTERAR'}>
            {children}
        </ManageThemesContext.Provider>
    )
}