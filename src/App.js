import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './Components/Header/NavigationBar'
import SiteFooter from "./Components/Footer/SiteFooter";
import AppRoutes from './Components/AppRoutes';
import { useEffect, useState } from 'react';
import { decodeToken } from './Components/_utils';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = decodeToken();

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
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