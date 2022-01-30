import { useNavigate } from "react-router-dom"
import { GamesCardContainer, GamesCardDescription, GamesCardImage, GamesCardTitle, } from "./GamesCard.styles"

export const GamesCard = ({ id, title, mainImg, description }) => {
    let navigate = useNavigate();

    return (
        <GamesCardContainer onClick={() => navigate(`/game/${id}`)}>

            <GamesCardImage src={mainImg} />
            <GamesCardTitle>{title}</GamesCardTitle>
            <hr />
            <GamesCardDescription>{description}</GamesCardDescription>
        </GamesCardContainer>
    )
}