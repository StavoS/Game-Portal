import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UnAuthorized.css';

function UnAuthorized() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/login');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="unauthorized-container">
            <div className="unauthorized-content">
                <h1>Unauthorized Access</h1>
                <p>
                    You are not authorized to play the game! Please sign in.
                    Redirecting to the login page...
                </p>
            </div>
        </div>
    );
}

export default UnAuthorized;
