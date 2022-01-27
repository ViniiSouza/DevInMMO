import { NewsCardButton, NewsCardContainer, NewsCardDescription, NewsCardImage, NewsCardTitle } from "./NewsCard.styles"

export const NewsCard = ({ title, mainImg, description, articleUrl }) => {


    return (
        <NewsCardContainer>
            <NewsCardImage src={mainImg} />
            <NewsCardTitle>{title}</NewsCardTitle>
            <NewsCardDescription>{description}</NewsCardDescription>
            <NewsCardButton href={articleUrl} target="_blank">Ver no site</NewsCardButton>
        </NewsCardContainer>
    )
}

NewsCard.defaultProps = {
    title: 'Not found',
    mainImg: 'https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg',
    description: 'Not found',
    articleUrl: 'https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg'

}