import { useState } from "react"
import { LatestNewsContext } from "./LatestNewsContext";
import { gamesApi as api} from '../services/mmo-games-services';


export const LatestNewsProvider = ({children}) => {
    const [latestNews, setLatestNews] = useState();
    return <LatestNewsContext.Provider value={{ latestNews, setLatestNews }}>{children}</LatestNewsContext.Provider>
}