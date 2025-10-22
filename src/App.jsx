import './App.css';
import Navbar from './components/Navbar.jsx';
import Theme from './Them/Theme.jsx';
import Hero from './Section/Hero.jsx';
import About from './Section/About.jsx';
import Timeline from './Section/Timeline.jsx';
import Sponsor from './Section/Sponsor.jsx';
import Mentors from './Section/Mentors.jsx';
import Tracks from './Section/Tracks.jsx';
import PRIZES from './Section/PRIZES.jsx';
import Team from './Section/Team.jsx';
import Footer from './components/Footer.jsx';
import CommunityPartners from './components/CommunityPartners.jsx';
import Host from './Section/Host.jsx';
import Judges from './Section/Judges.jsx';
import AvatarCardGenerator from './Section/AvatarCardGenerator.jsx';

function App() {
  return (
    <Theme>
      <Navbar />
      <Hero />
      <Sponsor />
      <About />
      <Timeline />
      <Tracks />
      <PRIZES />
      <Host />
      <Mentors />
      <Judges />
      <Team />
      <CommunityPartners />
      <AvatarCardGenerator />
      <div className="h-screen"></div>
      <Footer />
    </Theme>
  );
}

export default App;
