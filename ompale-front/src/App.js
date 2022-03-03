import logo from './logo.svg';
import './App.css';
import Navbar from './components/navigation/Navbar';
import Carousel from './components/navigation/Carousel';
import SwipeCarousel from './components/navigation/SwipeCarousel';
import WelcomeMessage from './components/homepage/WelcomeMessage';
import Events from './components/homepage/Events';
import BeersCarousel from './components/homepage/BeersCarousel';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
        <Carousel/>
      </header>
      <WelcomeMessage/>
      <Events/>
      <BeersCarousel/>
    </div>
  );
}

export default App;
