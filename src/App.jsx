import './App.css';
import Navbar from './components/Navbar.jsx';
import Theme from './Them/Theme.jsx';
import { Hero } from './Section/Hero.jsx';
import About from './Section/About.jsx';
function App() {
  return (
    <Theme>
      <Navbar />
      <Hero />
      <About />
    </Theme>
  );
}

export default App;
