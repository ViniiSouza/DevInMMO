import { useEffect } from "react/cjs/react.development";
import { useMMOGames } from "../../contexts/MMOGames/useMMOGames";
import { Games } from "../Games/Games";
import { Paginacao } from "../Paginacao/Paginacao";
import { SearchItem } from "../SearchItem/SearchItem";
import { Header } from "../shared/Header/Header";
import { GamesPageContainer } from "./GamesPage.styles";

export const GamesPage = () => {
    const { jogosFiltrados, setTermoBusca } = useMMOGames();
    useEffect(() => {
        setTermoBusca('')
    }, []);

    return (
        <GamesPageContainer>
            <Header />
            <SearchItem list={jogosFiltrados} typeList={'games'} />
            <Paginacao typeList={'games'} />

            <Games />
            {jogosFiltrados.length > 10 &&
                <Paginacao typeList={'games'} />
            }
        </GamesPageContainer>

    );
};
