import { useEffect } from "react/cjs/react.development";
import { useMMOGames } from "../../contexts/MMOGames/useMMOGames";
import { Games } from "../Games/Games";
import { Paginacao } from "../Paginacao/Paginacao";
import { SearchItem } from "../SearchItem/SearchItem";
import { GamesPageContainer } from "./GamesPage.styles";

export const GamesPage = () => {
    const { jogosFiltrados, setTermoBusca, setPagina } = useMMOGames();
    useEffect(() => {
        setTermoBusca('')
        setPagina(1)
    }, []);

    return (
        <GamesPageContainer>
            <SearchItem list={jogosFiltrados} typeList={'games'} />
            <Paginacao typeList={'games'} />

            <Games />
            {jogosFiltrados.length > 10 &&
                <Paginacao typeList={'games'} />
            }
        </GamesPageContainer>
    );
};
