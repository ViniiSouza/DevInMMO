import { DetailContainer, DetailDescription, DetailText, DetailTitle } from "./GameDetails.styles";

export const GameDetails = ({ data }) => {
    var plainDescription = data?.description.replace(/<[^>]+>/g, '');

    return (
        <DetailContainer>
            <DetailTitle>Gênero: <DetailText>{data?.genre}</DetailText></DetailTitle>
            <DetailTitle>Desenvolvedor: <DetailText>{data?.developer}</DetailText></DetailTitle>
            <DetailTitle>Plataformas: <DetailText>{data?.platform}</DetailText></DetailTitle>
            <DetailTitle>Data de lançamento: <DetailText>{data?.release_date}</DetailText></DetailTitle>
            <DetailDescription>{plainDescription}</DetailDescription>
        </DetailContainer>
    )
}