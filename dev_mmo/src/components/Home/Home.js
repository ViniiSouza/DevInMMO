import { Header } from "../shared/Header/Header"
import { BackgroundContainer, BackgroundDescription, BackgroundSection, BackgroundTitle, HomeBackground } from "./Home.styles"
import { useMMOGames } from "../../contexts/MMOGames/useMMOGames";

export const Home = () => {

    const { gamesList } = useMMOGames();

    return (
        <>
            <Header />
            {gamesList.map((noticia) => (
                <p key={noticia.id}>{noticia.title}</p>
            ))}
            <p style={{ textAlign: 'center' }}>Campo de notícias passando igual aos jogos</p>
            <BackgroundContainer>
                <HomeBackground>
                    <BackgroundSection>
                        <BackgroundTitle>Jogos atuais</BackgroundTitle>
                        <BackgroundDescription>Confira plataformas e requisitos dos jogos em alta no momento</BackgroundDescription>
                    </BackgroundSection>
                </HomeBackground>
            </BackgroundContainer>
            {/* {newsList.map((noticia) => (
                <p key={noticia.id}>{noticia.title}</p>
            ))} */}
        </>
    )
}