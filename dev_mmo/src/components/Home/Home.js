import { Header } from "../shared/Header/Header"
import { BackgroundContainer, BackgroundDescription, BackgroundSection, BackgroundTitle, HomeBackground } from "./Home.styles"

export const Home = () => {

    return (
        <>
            <Header />
            <p style={{ textAlign: 'center' }}>Campo de notícias passando igual aos jogos</p>
            <BackgroundContainer>
                <HomeBackground>
                    <BackgroundSection>
                        <BackgroundTitle>Jogos atuais</BackgroundTitle>
                        <BackgroundDescription>Confira plataformas e requisitos dos jogos em alta no momento</BackgroundDescription>
                    </BackgroundSection>
                </HomeBackground>
            </BackgroundContainer>
        </>
    )
}