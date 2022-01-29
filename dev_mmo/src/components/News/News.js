import { useMMOGames } from "../../contexts/MMOGames/useMMOGames"
import { NewsCard } from "../NewsCard/NewsCard";
import {  NewsContainer } from "./News.styles";

export const News = () => {
    const { noticiasFiltradas } = useMMOGames();

    return (
        <NewsContainer>
                {noticiasFiltradas.map((news) => (
                    <NewsCard key={news.id} title={news.title} mainImg={news.thumbnail} description={news.short_description} articleUrl={news.article_url}></NewsCard>
                ))}
        </NewsContainer>
    )
}
