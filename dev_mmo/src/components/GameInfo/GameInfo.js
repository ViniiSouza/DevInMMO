import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gamesApi as api } from "../../services/mmo-games-services";
import SkeletonElement from "../skeletons/SkeletonElement";
import { GameComments } from "./GameComents/GameComments";
import { GameDetails } from "./GameDetails/GameDetails";
import { GameContainer, GameSlideImage, GameThumbImage, GameTitle } from "./GameInfo.styles";
import { GameRequirements } from "./GameRequirements/GameRequirements";

export const GameInfo = () => {
    var { idGame } = useParams();
    const [gameData, setGameData] = useState();
    const [thumbImage, setThumbImage] = useState('');

    const [loading, setLoading] = useState(true)

    useEffect((
        () => setTimeout(() => { setLoading(false) }, 3000))
        , [])

    useEffect(() => {
        (async () => {
            var resultado = await api.GetGameDetails(idGame)
            setGameData(resultado)
            setThumbImage(resultado.screenshots[0].image)
        })()

    }, []);

    function changeThumbImage(url) {
        setThumbImage(url);
    }

    return (
        <GameContainer>
            {loading
                ?
                <>
                    <GameTitle>Carregando...</GameTitle>
                    <SkeletonElement width="60vw" height="67vh" margin="0 auto" />
                    <div style={{ display: 'flex', margin: '10px 22vw' }}>
                        <SkeletonElement width="20vw" height="15vh" margin="5px" />
                        <SkeletonElement width="20vw" height="15vh" margin="5px" />
                        <SkeletonElement width="20vw" height="15vh" margin="5px" />
                        <SkeletonElement width="20vw" height="15vh" margin="5px" />
                    </div>
                </>
                :
                <>
                    <GameTitle>{gameData?.title}</GameTitle>
                    <GameThumbImage src={thumbImage}></GameThumbImage>
                    {gameData?.screenshots.map((item) => (
                        <GameSlideImage key={item.id} src={item.image} onClick={() => changeThumbImage(item.image)}></GameSlideImage>
                    ))}
                </>
            }
            <GameDetails data={gameData} />
            <GameRequirements requirements={gameData?.minimum_system_requirements}></GameRequirements>
            <GameComments gameId={idGame} />
        </GameContainer>
    )
}
