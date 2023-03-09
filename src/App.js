import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './Components/Header/NavigationBar'
import SiteFooter from "./Components/Footer/SiteFooter";
import AppRoutes from './Components/AppRoutes';
import { useEffect, useState } from 'react';
import { getEncodedToken } from './Components/_utils';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = getEncodedToken();

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <NavigationBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <AppRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <SiteFooter />
    </BrowserRouter>
  );
}

export default App;