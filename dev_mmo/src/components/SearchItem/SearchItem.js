import { useMMOGames } from "../../contexts/MMOGames/useMMOGames";
import { ItemsAmount, Search, SearchField } from "./SearchItem.styles"

export const SearchItem = ({ list, typeList }) => {
    const { termoBusca, setTermoBusca, games, news } = useMMOGames();

    const listLength = termoBusca ? list.length :
        (typeList === 'games' ? games.current.length : news.current.length);
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
            <ItemsAmount>{aboutSearch}</ItemsAmount>
            <hr />
        </Search>
    )
}

SearchItem.defaultProps = {
    list: [],
    typeList: 'games'
}