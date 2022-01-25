import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from "../components/Home/Home"

export const Router = () => (
    <Routes>
        <Route path="/" element={<Navigate replace to='/home' />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate replace to='/home' />} />
    </Routes>
)