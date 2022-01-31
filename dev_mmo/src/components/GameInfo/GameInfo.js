import { useEffect, useState } from "react";
import { gamesApi as api } from "../../services/mmo-games-services";
import { GameComments } from "./GameComents/GameComments";
import { GameDetails } from "./GameDetails/GameDetails";
import { GameContainer, GameSlideImage, GameThumbImage, GameTitle } from "./GameInfo.styles";
import { GameRequirements } from "./GameRequirements/GameRequirements";

export const GameInfo = ({ gameId }) => {
    const [gameData, setGameData] = useState();
    const [thumbImage, setThumbImage] = useState('');

    useEffect(() => {
        (async () => {
            var resultado = await api.GetGameDetails(gameId)
            setGameData(resultado)
            await console.log(resultado)
            setThumbImage(resultado.screenshots[0].image)
        })()

    }, []);

    function changeThumbImage(url) {
        setThumbImage(url);
    }

    return (
        <GameContainer>

            <GameTitle>{gameData?.title}</GameTitle>
            <GameThumbImage src={thumbImage}></GameThumbImage>

            {gameData?.screenshots.map((item) => (
                <GameSlideImage key={item.id} src={item.image} onClick={() => changeThumbImage(item.image)}></GameSlideImage>
            ))}
            <GameDetails data={gameData} />
            <GameRequirements requirements={gameData?.minimum_system_requirements}></GameRequirements>
            <GameComments gameId={gameId} />

        </GameContainer>
    )
}
