import { Outlet, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPass from './pages/ForgotPass';
import Feed from './pages/Feed';

function ProtectedRoutes({ redirectTo }) {
    const isAuthenticated = true;

    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
}

function MainRoutes() {

    return (
        <Routes>

            {Route('/', () => <SignUp />)}
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPass />} />
            
            <Route element={<ProtectedRoutes redirectTo='/login' />}>
                <Route path='/feed' element={<Feed />} />
            </Route>

        </Routes>
    )
}

export default MainRoutes;

