import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

function Home() {
    const { user } = useAuth();
    return (
        <div className="home">
            <div className="hero-section">
                <h1>Welcome to Game Portal</h1>
                <p>Your one-stop destination for all your favorite games.</p>
                <div className="buttons">
                    <Link to={user ? '/games' : '/login'}>
                        <button className="cta-button">Get Started</button>
                    </Link>
                    <button className="cta-button secondary">Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
