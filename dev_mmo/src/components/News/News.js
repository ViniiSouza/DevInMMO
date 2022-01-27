import { useMMOGames } from "../../contexts/MMOGames/useMMOGames"
import { NewsCard } from "../NewsCard/NewsCard";
import { NewsContainer } from "./News.styles";

export const News = () => {
    const { newsList, noticiasFiltradas } = useMMOGames();
    
    console.log(newsList)

    return (
        <NewsContainer>
            {noticiasFiltradas.map((news) => (
                <NewsCard title={news.title} mainImg={news.thumbnail} description={news.short_description} articleUrl={news.article_url}></NewsCard>
        ))}

        </NewsContainer>
    )
}
