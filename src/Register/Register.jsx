import React, { useState } from 'react';
import './Register.css';
import { useAuth } from '../auth/AuthProvider';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { register } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            register(username, email, password, 'admin');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="title">Register</div>
                <div className="inputGroup">
                    <label className="label">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="input"
                    />
                </div>
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
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
