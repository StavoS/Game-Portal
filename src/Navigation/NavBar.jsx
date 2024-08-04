import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

const NavBar = () => {
    const [isGamesOpen, setIsGamesOpen] = useState(false);
    const { user, logout } = useAuth();

    const toggleGamesDropdown = () => {
        setIsGamesOpen(!isGamesOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <div className="dropdown">
                    <button
                        className={`dropbtn ${isGamesOpen ? 'active' : ''}`}
                        onClick={toggleGamesDropdown}
                    >
                        <Link to="/games">Games</Link>
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
                        <Link to="/games/chess">Chess</Link>
                        <Link to="/games/tictactoe">TicTacToe</Link>
                        <Link to="/games/binary-search">Binary Search</Link>
                    </div>
                </div>
            </div>
            {
                <div className="navbar-right">
                    {!user ? (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    ) : (
                        <>
                            <span>Welcome {user.username}</span>
                            <br />
                            <button className="logout" onClick={logout}>
                                Logout
                            </button>
                        </>
                    )}
                </div>
            }
        </nav>
    );
};

export default NavBar;
