import React from 'react';
import { Link } from 'react-router-dom';
import './GamesIndex.css';

const GamesIndex = () => {
    return (
        <div className="games-index">
            <h1>Select a Game</h1>
            <div className="game-options">
                <Link to="/games/chess" className="game-option">
                    <div className="game-card">
                        <h2>Chess</h2>
                        <p>Classic strategic game.</p>
                    </div>
                </Link>
                <Link to="/games/tictactoe" className="game-option">
                    <div className="game-card">
                        <h2>Tic Tac Toe</h2>
                        <p>Simple and fun.</p>
                    </div>
                </Link>
                <Link to="/games/binary-search" className="game-option">
                    <div className="game-card">
                        <h2>Binary Search</h2>
                        <p>Interactive search game.</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default GamesIndex;
