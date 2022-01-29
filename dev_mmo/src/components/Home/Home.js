import { useNavigate } from "react-router-dom";
import { Header } from "../shared/Header/Header"
import { BackgroundContainer, BackgroundDescription, BackgroundSection, BackgroundTitle, HomeBackground, HomeContainer } from "./Home.styles"

export const Home = () => {
    var navigate = useNavigate();
    return (
        <HomeContainer>
            <Header />
            <p style={{ textAlign: 'center', color: 'white' }}>Campo de notícias passando igual aos jogos</p>
            <BackgroundContainer>
                <HomeBackground>
                    <BackgroundSection onClick={() => navigate('/jogos')}>
                        <BackgroundTitle>Jogos atuais</BackgroundTitle>
                        <BackgroundDescription>Confira plataformas e requisitos dos jogos em alta no momento</BackgroundDescription>
                    </BackgroundSection>
                </HomeBackground>
            </BackgroundContainer>
        </HomeContainer>
    )
}