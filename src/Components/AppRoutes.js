import { Route, Routes, Navigate } from 'react-router-dom';
import HomepageView from "./Homepage/HomepageView";
import EventsView from "./EventsPage/EventsView";
import AdminView from "./AdminPage/AdminView";
import LoginView from "./LoginPage/LoginView";
import RegisterView from "./RegisterPage/RegisterView";
import { getToken } from './_utils';

function AppRoutes({ isLoggedIn, setIsLoggedIn, isAdmin }) {
    if (getToken()) {
        isLoggedIn = true;
    }

    return (
        <Routes>
            <Route path="/" element={isLoggedIn ? <HomepageView /> : <Navigate to="/login" />} />
            <Route path="/events" element={isLoggedIn ? <EventsView /> : <Navigate to="/login" />} />
            <Route path="/admin" element={isLoggedIn && isAdmin ? <AdminView /> : <Navigate to="/login" />} />
            <Route path="/login" element={<LoginView setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<RegisterView setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
    )
}

export default AppRoutes;