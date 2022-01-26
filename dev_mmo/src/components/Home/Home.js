import { Header } from "../shared/Header/Header"
import { BackgroundContainer, BackgroundDescription, BackgroundSection, BackgroundTitle, HomeBackground } from "./Home.styles"
import { gamesApi as api } from '../../services/mmo-games-services';
import { useEffect, useState } from "react";

export const Home = () => {
    const [listaNoticias, setListaNoticias] = useState([]);

    useEffect(() => {
        (async () => {
            var lista = await api.GetLatestNews()
            setListaNoticias(lista);
        })();
    }, []);

    return (
        <>
            <Header />
            {listaNoticias.map((noticia) => (
                <p key={noticia.id}>{noticia.title}</p>
            ))}
            <p style={{ textAlign: 'center' }}>Campo de notícias passando igual aos jogos</p>
            <BackgroundContainer>
                <HomeBackground>
                    <BackgroundSection>
                        <BackgroundTitle>Jogos atuais</BackgroundTitle>
                        <BackgroundDescription>Confira plataformas e requisitos dos jogos em alta no momento</BackgroundDescription>
                        <button onClick={() => console.log(listaNoticias)}>Teste</button>
                    </BackgroundSection>
                </HomeBackground>
            </BackgroundContainer>
        </>
    )
}