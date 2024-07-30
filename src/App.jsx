import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import TicTacToe from './games/TicTacToe/TicTacToe';
import Chess from './games/Chess/Chess';
import NavBar from './Navigation/NavBar';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/chess" element={<Chess />} />
                <Route path="/tictactoe" element={<TicTacToe />} />
            </Routes>
        </>
    );
}

export default App;
