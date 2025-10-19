import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Theme from './Them/Theme.jsx';
import { Hero } from './Section/Hero.jsx';
function App() {
  return (
    <Theme>
      <Navbar />
      <Hero />
    </Theme>
  );
}

export default App;
