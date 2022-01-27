import { useEffect, useState } from "react"
import { filtrarListaPorTermoDeBusca } from "../../helper/dataFilter";
import { gamesApi as api } from '../../services/mmo-games-services';
import { MMOGamesContext } from "./MMOGamesContext";

export const MMOGamesProvider = ({ children }) => {
    const [gamesList, setGamesList] = useState([]);
    const [newsList, setNewsList] = useState([]);
    const [termoBusca, setTermoBusca] = useState('');
    const [noticiasFiltradas, setNoticiasFiltradas] = useState([]);
    const [jogosFiltrados, setJogosFiltrados] = useState([]);

    useEffect(() => {
        (async () => {
            var listaNoticias = await api.GetLatestNews();
            setNewsList(listaNoticias);
            setNoticiasFiltradas(listaNoticias)
        })()
    }, []);

    useEffect(() => {
        (async () => {
            var listaJogos = await api.GetGamesList();
            setGamesList(listaJogos);
            setJogosFiltrados(listaJogos);
        })()
    }, []);

    useEffect(() => {
        setNoticiasFiltradas(filtrarListaPorTermoDeBusca(newsList, termoBusca));
        setJogosFiltrados(filtrarListaPorTermoDeBusca(gamesList, termoBusca));
    }, [termoBusca])


    return (
        <MMOGamesContext.Provider value={{ termoBusca, gamesList, setTermoBusca, noticiasFiltradas }}>
            {children}
        </MMOGamesContext.Provider>
    );
}