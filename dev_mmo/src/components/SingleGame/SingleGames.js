import { useParams } from "react-router-dom"
import { GameInfo } from "../GameInfo/GameInfo";
import { Footer } from "../shared/Footer/Footer";
import { Header } from "../shared/Header/Header";

export const SingleGames = () => {
    var { idGame } = useParams();
    
    return (
        <>
            <Header />
                <GameInfo gameId={idGame} />
            <Footer />
        </>
    )
}