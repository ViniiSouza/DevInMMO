import { Routes, Route, Navigate } from 'react-router-dom';
import { SingleGames } from '../components/SingleGame/SingleGames';
import { GamesPage } from '../components/GamesPage/GamesPage';
import { Home } from "../components/Home/Home"
import { NewsPage } from '../components/NewsPage/NewsPage';

export const Router = () => (
    <Routes>
        <Route path="/" element={<Navigate replace to='/home' />} />
        <Route path="/home" element={<Home />} />
        <Route path="/noticias" element={<NewsPage />} />
        <Route path="/jogos" element={<GamesPage />} />
        <Route path="*" element={<Navigate replace to='/home' />} />
        <Route path="/game/:idGame" element={<SingleGames />} />
    </Routes>
)