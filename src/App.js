import './css/App.css';
import Navigation from './Components/NavigationBar'
import EventAPI from './API/Event/EventAPI';


function App() {
  const apiClient = new EventAPI();

  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
