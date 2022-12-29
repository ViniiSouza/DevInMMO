import { useEffect, useState } from "react";
import { useMMOGames } from "../../contexts/MMOGames/useMMOGames"
import { NewsCard } from "../NewsCard/NewsCard";
import SkeletonElement from "../skeletons/SkeletonElement";
import { NewsContainer } from "./News.styles";

export const News = () => {
    const { noticiasFiltradas } = useMMOGames();
    const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const [loading, setLoading] = useState(true)

    useEffect((
        () => setTimeout(() => { setLoading(false) }, 1000))
        , [])

    return (
        <NewsContainer>
            {loading
                ?
                skeletonArray.map((item) => (<SkeletonElement key={item} width="45vw" height="15.7vh" type="thumbnail" margin="10px" border="2px" />))
                :
                noticiasFiltradas.map((news) => (
                    <NewsCard key={news.id} title={news.title} mainImg={news.thumbnail} description={news.short_description} articleUrl={news.article_url}></NewsCard>
                ))
            }
        </NewsContainer>
    )
}
