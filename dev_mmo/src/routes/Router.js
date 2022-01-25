import { Routes, Route, Navigate } from 'react-router-dom';
import { Games } from '../components/Games/Games';
import { Home } from "../components/Home/Home"
import { News } from '../components/News/News';

export const Router = () => (
    <Routes>
        <Route path="/" element={<Navigate replace to='/home' />} />
        <Route path="/home" element={<Home />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/jogos" element={<Games />} />
        <Route path="*" element={<Navigate replace to='/home' />} />
    </Routes>
)