import { useEffect, useState } from "react";
import { useMMOGames } from "../../contexts/MMOGames/useMMOGames"
import { GamesCard } from "../GamesCard/GamesCard";
import SkeletonElement from "../skeletons/SkeletonElement";
import { GamesContainer } from './Games.styles'

export const Games = () => {
    const { jogosFiltrados } = useMMOGames();
    const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const [loading, setLoading] = useState(true)

    useEffect((
        () => setTimeout(() => { setLoading(false) }, 1000))
        , [])

    return (
        <GamesContainer>
            {loading
                ? 
                skeletonArray.map((item) => (<SkeletonElement key={item} border="5px" width="17.5vw" height="43vh" type="thumbnail" margin="10px" />))
                :
                jogosFiltrados.map((jogo) => (
                <GamesCard key={jogo.id} id={jogo.id} title={jogo.title} mainImg={jogo.thumbnail} description={jogo.short_description} genre={jogo.genre}></GamesCard>
                ))
                
            }
        </GamesContainer>
    )
}