import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import useGlobalContext from './contexts/GlobalContext';
import Configuration from './pages/Configuration';
import Feed from './pages/Feed';
import FeedMessages from './pages/FeedMessages';
import ForgotPass from './pages/ForgotPass';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function ProtectedRoutes({ redirectTo }) {
    const { token } = useGlobalContext();

    return token ? <Outlet /> : <Navigate to={redirectTo} />;
}

function MainRoutes() {
    
    return (
        <Routes>
        
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPass />} />
            
            <Route element={<ProtectedRoutes redirectTo='/login' />}>
                <Route path='/feed' element={<Feed />} />
                <Route path='/feed/messages' element={<FeedMessages/>} />
                <Route path='/feed/configuration' element={<Configuration />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes;