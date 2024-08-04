import { createContext, useContext, useState } from 'react';
import {
    authLogin,
    authLogout,
    authRegister,
    getCurrUser,
} from './authService';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getCurrUser());
    const navigate = useNavigate();

    function login(email, password) {
        const loggedUser = authLogin(email, password);
        setUser(loggedUser);
        navigate('/home');
    }
    function logout() {
        authLogout();
        setUser(null);
        navigate('/login');
    }

    function register(username, email, password, role) {
        const newUser = authRegister(username, email, password, role);
        setUser(newUser);
        navigate('/home');
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
