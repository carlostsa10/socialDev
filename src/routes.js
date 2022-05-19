import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import SignIn from './pages/SignIn';

function MainRoutes() {
    
    return (
        <Routes>
            <Route path="/singin" element={SignIn} />
        </Routes>
    )
}