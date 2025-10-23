import { Code, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll for background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu items
  const menuItems = [
    { label: 'About', link: '#about' },
    { label: 'Timeline', link: '#timeline' },
    { label: 'Tracks', link: '#tracks' },
    { label: 'Mentors', link: '#mentors' },
    { label: 'Judges', link: '#judges' },
    { label: 'Team', link: '#team' },

    { label: 'Partners', link: '#partners' },
    { label: 'Avatar', link: '#avatar-generator' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#f4e5c2]/95 shadow-lg border-b-4 border-[#3E2C1D]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Side - Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 border-4 border-[#3E2C1D] bg-[#D4AF37] flex items-center justify-center">
              <Code className="text-[#3E2C1D]" size={24} />
            </div>
            <div className="font-display text-2xl font-bold text-[#3E2C1D]">
              Calcutta <span className="text-[#6B4423]">&lt;Hacks/&gt;</span>
            </div>
          </div>

          {/* Right Side - Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5 font-serif text-sm">
            {[
              { label: 'Home', link: '/' },
              { label: 'About', link: '#about' },
              { label: 'Calcutta', link: '#about-calcutta' },
              { label: 'Timeline', link: '#timeline' },
              { label: 'Tracks', link: '#tracks' },
              { label: 'Prizes', link: '#prizes' },
              { label: 'Mentors', link: '#mentors' },
              { label: 'Judges', link: '#judges' },
              { label: 'Team', link: '#team' },
              { label: 'Partners', link: '#partners' },
              { label: 'Avatar', link: '#avatar-generator' },
            ].map((item, id) => (
              id === 0 ? (
                <Link key={item.label} to={item.link} className="text-[#3E2C1D] hover:text-[#6B4423] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.link}
                  className="text-[#3E2C1D] hover:text-[#6B4423] transition-colors"
                >
                  {item.label}
                </a>
              )
            ))}
            <a
              href="#register"
              className="bg-[#D4AF37] text-[#3E2C1D] px-6 py-2 rounded-full font-bold border-2 border-[#D4AF37] hover:bg-[#f4e5c2] hover:border-[#D4AF37] transition-all duration-300 transform hover:scale-105"
            >
              Register
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X size={28} className="text-[#3E2C1D]" />
              ) : (
                <Menu size={28} className="text-[#3E2C1D]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#f4e5c2]/95 border-t-4 border-[#3E2C1D] shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4 font-serif text-sm">
            {menuItems.map(item => (
              <a
                key={item.label}
                href={item.link}
                className="text-[#3E2C1D] hover:text-[#6B4423] transition-colors"
                onClick={() => setMenuOpen(false)} // close menu on click
              >
                {item.label}
              </a>
            ))}
            <a
              href="#register"
              className="bg-[#D4AF37] text-[#3E2C1D] px-6 py-2 rounded-full font-bold border-2 border-[#D4AF37] hover:bg-[#f4e5c2] hover:border-[#D4AF37] transition-all duration-300 transform hover:scale-105"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
