import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import TicTacToe from './games/TicTacToe/TicTacToe';
import Chess from './games/Chess/Chess';
import NavBar from './Navigation/NavBar';
import Login from './Login/Login';
import Register from './Register/Register';
import { AuthProvider } from './auth/AuthProvider';

function App() {
    return (
        <>
            <AuthProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<TicTacToe />} />
                    <Route path="/home" element={<TicTacToe />} />
                    <Route path="/games" element={<Outlet />}>
                        <Route path="chess" element={<Chess />} />
                        <Route path="tictactoe" element={<TicTacToe />} />
                        <Route path="binary-search" element={<TicTacToe />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </AuthProvider>
        </>
    );
}

export default App;
