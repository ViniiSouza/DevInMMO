import { useMMOGames } from "../../contexts/MMOGames/useMMOGames";
import { Games } from "../Games/Games";
import { SearchItem } from "../SearchItem/SearchItem";
import { Header } from "../shared/Header/Header";

export const GamesPage = () => {
    const { jogosFiltrados } = useMMOGames();
    return (
        <>
            <Header />
            <SearchItem list={jogosFiltrados} typeList={'games'} />

            <Games typeList={'games'} />
        </>

    );
};
