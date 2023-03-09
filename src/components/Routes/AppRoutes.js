import { Routes, Route } from 'react-router-dom';
import HomepageView from '../Homepage/HomepageView';
import EventsView from '../EventsPage/EventsView';
import AdminView from '../AdminPage/AdminView';
import LoginView from '../LoginPage/LoginView';
import RegisterView from '../RegisterPage/RegisterView';
import ContactView from '../ContactPage/ContactView';
import ProtectedRoute from './ProtectedRoute';

function AppRoutes({ isLoggedIn }) {
    return (
        <Routes>
            <Route path="/" element={<HomepageView />} />
            <ProtectedRoute
                path="/events"
                element={<EventsView />}
                isLoggedIn={isLoggedIn}
                redirectPath="/login"
            />
            <Route path="/contact" element={<ContactView />} />
            <ProtectedRoute
                path="/admin"
                element={<AdminView />}
                isLoggedIn={isLoggedIn}
                redirectPath="/login"
            />
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
        </Routes>
    );
}

export default AppRoutes;