import { Route, Routes, Navigate } from 'react-router-dom';
import HomepageView from "./Homepage/HomepageView";
import EventsView from "./EventsPage/EventsView";
import AdminView from "./AdminPage/AdminView";
import LoginView from "./LoginPage/LoginView";
import RegisterView from "./RegisterPage/RegisterView";
import ContactView from "./ContactPage/ContactView";

function AppRoutes({ isLoggedIn }) {
    return (
        <Routes>
            <Route path="/" element={<HomepageView />} />
            <Route path="/events" element={isLoggedIn ? <EventsView /> : <Navigate to="/login" />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="/admin" element={isLoggedIn ? <AdminView /> : <Navigate to="/login" />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
        </Routes>
    )
}

export default AppRoutes;