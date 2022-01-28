import { useMMOGames } from "../../contexts/MMOGames/useMMOGames"
import { GamesCard } from "../GamesCard/GamesCard";
import { Paginacao } from "../Paginacao/Paginacao";
import { GamesContainer } from './Games.styles'

export const Games = ({ typeList }) => {
    const { jogosFiltrados } = useMMOGames();

    return (
        <GamesContainer>
            <Paginacao typeList={typeList} />
            {jogosFiltrados.map((jogo) => (
                <GamesCard key={jogo.id} title={jogo.title} mainImg={jogo.thumbnail} description={jogo.short_description}></GamesCard>
            ))}

        </GamesContainer>
    )
}