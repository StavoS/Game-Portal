import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Navigation/NavBar';
import { AuthProvider } from './auth/AuthProvider';
import RouterPaths from './RouterPaths/RouterPaths';

function App() {
    return (
        <>
            <AuthProvider>
                <NavBar />
                <RouterPaths />
            </AuthProvider>
        </>
    );
}

export default App;
