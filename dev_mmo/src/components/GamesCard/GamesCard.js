import { useNavigate } from "react-router-dom"
import { GamesCardContainer, GamesCardDescription, GamesCardGenre, GamesCardImage, GamesCardTitle, } from "./GamesCard.styles"

export const GamesCard = ({ id, title, mainImg, description, genre }) => {
    let navigate = useNavigate();

    return (
        <GamesCardContainer onClick={() => navigate(`/game/${id}`)}>

            <GamesCardImage src={mainImg} />
            <GamesCardTitle>{title}</GamesCardTitle>
            <hr />
            <GamesCardGenre>{genre}</GamesCardGenre>
            <GamesCardDescription>{description}</GamesCardDescription>
        </GamesCardContainer>
    )
}