import { GamesCardContainer, GamesCardDescription, GamesCardImage, GamesCardTitle, HiddenTitle, ImageContainer } from "./GamesCard.styles"

export const GamesCard = ({ title, mainImg, description }) => {

    return (
        <GamesCardContainer>

                <GamesCardImage src={mainImg} />
            <GamesCardTitle>{title}</GamesCardTitle>
            <hr />
            <GamesCardDescription>{description}</GamesCardDescription>
        </GamesCardContainer>
    )
}