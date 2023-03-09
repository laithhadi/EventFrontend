import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './Components/Header/NavigationBar'
import SiteFooter from "./Components/Footer/SiteFooter";
import AppRoutes from './Components/AppRoutes';
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('token');
      } else {
        setIsLoggedIn(true);
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <NavigationBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <AppRoutes isLoggedIn={isLoggedIn} />
      <SiteFooter />
    </BrowserRouter>
  );
}

export default App;