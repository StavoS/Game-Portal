import React, { useState } from 'react';
import './NavBar.css'; // Make sure to create this CSS file

const NavBar = () => {
    const [isGamesOpen, setIsGamesOpen] = useState(false);

    const toggleGamesDropdown = () => {
        setIsGamesOpen(!isGamesOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <div className="dropdown">
                    <button
                        className={`dropbtn ${isGamesOpen ? 'active' : ''}`}
                        onClick={toggleGamesDropdown}
                    >
                        Games
                        <span
                            className={`arrow ${isGamesOpen ? 'rotate' : ''}`}
                        >
                            ▼
                        </span>
                    </button>
                    <div
                        className={`dropdown-content ${
                            isGamesOpen ? 'show' : ''
                        }`}
                    >
                        <a href="#chess">Chess</a>
                        <a href="#tictactoe">Tic Tac Toe</a>
                        <a href="#binary-search">Binary Search</a>
                    </div>
                </div>
            </div>
            <div className="navbar-right">
                <a href="#signin">Sign In</a>
                <a href="#register">Register</a>
            </div>
        </nav>
    );
};

export default NavBar;
