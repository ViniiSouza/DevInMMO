import { News } from "../News/News";
import { SearchItem } from "../SearchItem/SearchItem";
import { Header } from "../shared/Header/Header";
import { useMMOGames } from "../../contexts/MMOGames/useMMOGames";

export const NewsPage = () => {
    const { noticiasFiltradas } = useMMOGames();


    return (
        <>
            <Header />

            <SearchItem list={noticiasFiltradas} typeList={'news'}/>

            <News />
        </>

    );
};