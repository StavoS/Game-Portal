import { Outlet, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import GamesIndex from '../games/GamesIndex';
import Chess from '../games/Chess/Chess';
import TicTacToe from '../games/TicTacToe/TicTacToe';
import Login from '../Login/Login';
import Register from '../Register/Register';

function RouterPaths() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/games" element={<Outlet />}>
                <Route index element={<GamesIndex />} />
                <Route path="chess" element={<Chess />} />
                <Route path="tictactoe" element={<TicTacToe />} />
                <Route path="binary-search" element={<TicTacToe />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default RouterPaths;
