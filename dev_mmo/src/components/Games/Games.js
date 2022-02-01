import { useMMOGames } from "../../contexts/MMOGames/useMMOGames"
import { GamesCard } from "../GamesCard/GamesCard";
import { GamesContainer } from './Games.styles'

export const Games = () => {
    const { jogosFiltrados } = useMMOGames();

    return (
            <GamesContainer>
                {jogosFiltrados.map((jogo) => (
                    <GamesCard key={jogo.id} id={jogo.id} title={jogo.title} mainImg={jogo.thumbnail} description={jogo.short_description} genre={jogo.genre}></GamesCard>
                ))}

            </GamesContainer>
    )
}