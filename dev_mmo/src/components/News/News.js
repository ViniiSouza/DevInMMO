import { useMMOGames } from "../../contexts/MMOGames/useMMOGames"
import { NewsCard } from "../NewsCard/NewsCard";
import { Paginacao } from "../Paginacao/Paginacao";
import { NewsContainer } from "./News.styles";

export const News = ({ typeList }) => {
    const { noticiasFiltradas } = useMMOGames();

    return (
        <NewsContainer>
            <Paginacao typeList={typeList} />
            {noticiasFiltradas.map((news) => (
                <NewsCard key={news.id} title={news.title} mainImg={news.thumbnail} description={news.short_description} articleUrl={news.article_url}></NewsCard>
            ))}

        </NewsContainer>
    )
}
