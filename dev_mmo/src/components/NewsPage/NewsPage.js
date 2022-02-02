import { News } from "../News/News";
import { SearchItem } from "../SearchItem/SearchItem";
import { Header } from "../shared/Header/Header";
import { useMMOGames } from "../../contexts/MMOGames/useMMOGames";
import { Paginacao } from "../Paginacao/Paginacao";
import { useEffect } from "react";
import { NewsPageContainer } from "./NewsPage.styles";
import { Footer } from "../shared/Footer/Footer";

export const NewsPage = () => {
    const { noticiasFiltradas, setTermoBusca, setPagina } = useMMOGames();
    useEffect(() => {
        setTermoBusca('')
        setPagina(1)
    }, []);

    return (
        <NewsPageContainer>
            <Header />
            <SearchItem list={noticiasFiltradas} typeList={'news'} />
            <Paginacao typeList={'news'} />
            <News />
            {noticiasFiltradas.length > 10 &&
                <Paginacao typeList={'news'} />
            }
            <Footer />
        </NewsPageContainer>
    );
};