import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import TicTacToe from './games/TicTacToe/TicTacToe';
import Chess from './games/Chess/Chess';
import NavBar from './Navigation/NavBar';
import Login from './Login/Login';
import Register from './Register/Register';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/games/chess" element={<Chess />} />
                <Route path="/games/tictactoe" element={<TicTacToe />} />
                <Route path="/games/binary-search" element={<TicTacToe />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
