import { Code, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll for background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu items for mobile
  const menuItems = [
    { label: 'About', link: '#about' },
    { label: 'Timeline', link: '#timeline' },
    { label: 'Tracks', link: '#tracks' },
    { label: 'Prizes', link: '#prizes' },
    { label: 'Mentors', link: '#mentors' },
    { label: 'Judges', link: '#judges' },
    { label: 'Team', link: '#team' },
  ];

  // State for dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#f4e5c2]/95 shadow-lg border-b-4 border-[#3E2C1D]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Side - Logo and Title */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 border-4 border-[#3E2C1D] bg-[#D4AF37] flex items-center justify-center">
              <Code className="text-[#3E2C1D]" size={24} />
            </div>
            <div className="font-display text-2xl font-bold text-[#3E2C1D]">
              Calcutta <span className="text-[#6B4423]">&lt;Hacks/&gt;</span>
            </div>
          </Link>

          {/* Right Side - Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5 font-serif text-sm">
            {[
              { label: 'About', link: '#about' },
              { label: 'Timeline', link: '#timeline' },
              { label: 'Tracks', link: '#tracks' },
              { label: 'Prizes', link: '#prizes' },
              { label: 'Team', link: '#team' },
            ].map(item => (
              <a
                key={item.label}
                href={item.link}
                className="text-[#3E2C1D] hover:text-[#6B4423] transition-colors border-b-2 border-transparent hover:border-[#6B4423] font-normal"
              >
                {item.label}
              </a>
            ))}

            {/* Mentors & Judges Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-[#3E2C1D] hover:text-[#6B4423] transition-colors border-b-2 border-transparent hover:border-[#6B4423] font-normal flex items-center gap-1"
              >
                More
                <svg
                  className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full mt-2 right-0 bg-[#f4e5c2] border-2 border-[#3E2C1D] shadow-lg rounded-md py-2 min-w-[120px]">
                  <a
                    href="#mentors"
                    className="block px-4 py-2 text-[#3E2C1D] hover:bg-[#D4AF37] transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Mentors
                  </a>
                  <a
                    href="#judges"
                    className="block px-4 py-2 text-[#3E2C1D] hover:bg-[#D4AF37] transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Judges
                  </a>
                  <Link
                    to="/Contact"
                    className="block px-4 py-2 text-[#3E2C1D] hover:bg-[#D4AF37] transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              )}
            </div>
            {/* <a
              href="https://calcutta-lesshacksgreater.devfolio.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-[#3E2C1D] px-6 py-2 rounded-full font-bold border-2 border-[#D4AF37] hover:bg-[#f4e5c2] hover:border-[#D4AF37] transition-all duration-300 transform hover:scale-105"
            >
              Register
            </a> */}
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
                className="text-[#3E2C1D] hover:text-[#6B4423] transition-colors font-normal"
                onClick={() => setMenuOpen(false)} // close menu on click
              >
                {item.label}
              </a>
            ))}
            {/* <a
              href="https://calcutta-lesshacksgreater.devfolio.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-[#3E2C1D] px-6 py-2 rounded-full font-bold border-2 border-[#D4AF37] hover:bg-[#f4e5c2] hover:border-[#D4AF37] transition-all duration-300 transform hover:scale-105"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </a> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
