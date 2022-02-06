import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SkeletonElement from "../skeletons/SkeletonElement";
import { BackgroundContainer, BackgroundDescription, BackgroundSection, BackgroundTitle, HomeBackground, HomeContainer } from "./Home.styles"

export const Home = () => {
    var navigate = useNavigate();
    const [loading, setLoading] = useState(true)

    useEffect((
        () => setTimeout(() => { setLoading(false) }, 1000))
        , [])

    return (
        <HomeContainer>
            <BackgroundContainer>
                {loading
                    ?
                    <SkeletonElement margin="0" border="0" width="100%" height="70vh" />
                    :
                    <HomeBackground>
                        <BackgroundSection onClick={() => navigate('/jogos')}>
                            <BackgroundTitle>Jogos atuais</BackgroundTitle>
                            <BackgroundDescription>Confira plataformas e requisitos dos jogos em alta no momento</BackgroundDescription>
                        </BackgroundSection>
                    </HomeBackground>
                }
            </BackgroundContainer>
        </HomeContainer>
    )
}