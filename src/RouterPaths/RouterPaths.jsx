import { Outlet, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import GamesIndex from '../games/GamesIndex';
import Chess from '../games/Chess/Chess';
import TicTacToe from '../games/TicTacToe/TicTacToe';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PrivateRoute from './PrivateRoute';
import UnAuthorized from '../UnAuthorized/UnAuthorized';
import BinarySearch from '../games/BinarySearch/BinarySearch';

function RouterPaths() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
                path="/games"
                element={
                    <PrivateRoute>
                        <Outlet />
                    </PrivateRoute>
                }
            >
                <Route index element={<GamesIndex />} />
                <Route path="chess" element={<Chess />} />
                <Route path="tictactoe" element={<TicTacToe />} />
                <Route path="binary-search" element={<BinarySearch />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/unauthorized" element={<UnAuthorized />} />
        </Routes>
    );
}

export default RouterPaths;
