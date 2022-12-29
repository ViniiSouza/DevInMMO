import React  from "react";
import { useMMOGames } from "../../contexts/MMOGames/useMMOGames";
import { Games } from "../Games/Games";
import { Paginacao } from "../Paginacao/Paginacao";
import { SearchItem } from "../SearchItem/SearchItem";
import { GamesPageContainer } from "./GamesPage.styles";

export const GamesPage = () => {
    const { jogosFiltrados, setTermoBusca, setPagina } = useMMOGames();
    React.useEffect(() => {
        setTermoBusca('')
        setPagina(1)
    }, []);

    return (
        <GamesPageContainer>
            <SearchItem list={jogosFiltrados} typeList={'games'} />
            <Paginacao typeList={'games'} />

            <Games />
            {jogosFiltrados.length > 10 ?
                <Paginacao typeList={'games'} />
                :
                <br/>
            }
        </GamesPageContainer>
    );
};
