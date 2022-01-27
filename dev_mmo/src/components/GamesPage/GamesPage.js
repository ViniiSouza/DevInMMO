import { MMOGamesProvider } from "../../contexts/MMOGames/MMOGamesProvider";
import { Games } from "../Games/Games";
import { SearchItem } from "../SearchItem/SearchItem";
import { Header } from "../shared/Header/Header";

export const GamesPage = () => {
    return (
        <MMOGamesProvider>

            <Header />
            <SearchItem typeList="games"/>

            <Games />

        </MMOGamesProvider>
    );
};
