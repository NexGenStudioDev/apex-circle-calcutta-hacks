import './App.css';
import Navbar from './components/Navbar.jsx';
import Theme from './Them/Theme.jsx';
import Hero from './Section/Hero.jsx';
import About from './Section/About.jsx';
import Timeline from './Section/Timeline.jsx';
import AboutCalcutta from './Section/AboutCalcutta.jsx';
import Sponsor from './Section/Sponsor.jsx';
import Mentors from './Section/Mentors.jsx';
import Tracks from './Section/Tracks.jsx';
import PRIZES from './Section/PRIZES.jsx';
import Team from './Section/Team.jsx';

function App() {
  return (
    <Theme>
      <Navbar />
      <Hero />
      <Sponsor />
      <About />
      <AboutCalcutta />
      <Timeline />
      <Tracks />
      <PRIZES />
      <Mentors />
      <Team />
      <div className="h-screen"></div>
    </Theme>
  );
}

export default App;
