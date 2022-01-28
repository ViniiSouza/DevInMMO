import { useEffect, useRef, useState } from "react"
import { filtrarListaPorPagina, filtrarListaPorTermoDeBusca } from "../../helper/dataFilter";
import { gamesApi as api } from '../../services/mmo-games-services';
import { MMOGamesContext } from "./MMOGamesContext";

export const MMOGamesProvider = ({ children }) => {
    const [gamesList, setGamesList] = useState([]);
    const [newsList, setNewsList] = useState([]);
    const [termoBusca, setTermoBusca] = useState('');
    const [noticiasFiltradas, setNoticiasFiltradas] = useState([]);
    const [jogosFiltrados, setJogosFiltrados] = useState([]);
    const [pagina, setPagina] = useState(1);
    const games = useRef([]);
    const news = useRef([]);

    useEffect(() => {
        (async () => {
            var listaNoticias = await api.GetLatestNews();
            setNewsList(listaNoticias);
            setNoticiasFiltradas(listaNoticias)
            news.current = listaNoticias;
            setNoticiasFiltradas(filtrarListaPorTermoDeBusca(news.current, termoBusca));
        })()
    }, []);

    useEffect(() => {
        (async () => {
            var listaJogos = await api.GetGamesList();
            setGamesList(listaJogos);
            setJogosFiltrados(listaJogos);
            games.current = listaJogos;
            console.log(listaJogos)
            setJogosFiltrados(filtrarListaPorPagina(games.current, pagina));
        })()
    }, []);

    useEffect(() => {
        setNoticiasFiltradas(filtrarListaPorTermoDeBusca(newsList, termoBusca));
        setJogosFiltrados(filtrarListaPorTermoDeBusca(gamesList, termoBusca));
        setPagina(1);

    }, [termoBusca])

    useEffect(() => {
        setJogosFiltrados(filtrarListaPorPagina(games.current, pagina));
    }, [pagina]);


    return (
        <MMOGamesContext.Provider value={{ termoBusca, setTermoBusca, noticiasFiltradas, jogosFiltrados, pagina, setPagina, games, news }}>
            {children}
        </MMOGamesContext.Provider>
    );
}