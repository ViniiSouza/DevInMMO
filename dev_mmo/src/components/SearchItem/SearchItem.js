import { useMMOGames } from "../../contexts/MMOGames/useMMOGames";
import { Search, SearchField } from "./SearchItem.styles"

export const SearchItem = ({ list, typeList }) => {
    const { termoBusca, setTermoBusca } = useMMOGames();
    const listLength = list.length;
    var aboutSearch = termoBusca === ''
        ? (`${typeList === 'games'
            ? 'Todos os jogos'
            : 'Todas as notícias'} (${listLength})`)
        : (`${typeList === 'games'
            ? 'Jogos encontrados:'
            : 'Notícias encontradas:'} ${listLength}`);

    return (
        <Search>
            <SearchField onChange={(e) => setTermoBusca(e.target.value)} type="text" placeholder="Buscar..."></SearchField>
            <p>{aboutSearch}</p>
            <hr />
        </Search>
    )
}

SearchItem.defaultProps = {
    list: [],
    typeList: 'games'
}