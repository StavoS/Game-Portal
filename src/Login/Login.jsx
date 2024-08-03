// src/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {};

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="title">Login</div>
                <div className="inputGroup">
                    <label className="label">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="input"
                    />
                </div>
                <div className="inputGroup">
                    <label className="label">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="input"
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="button">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
