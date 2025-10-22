import { Code } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

          {/* Right Side - Links */}
          <div className="hidden md:flex items-center space-x-5 font-serif text-sm">
            {[
              { label: 'About', link: '#about' },
              { label: 'Timeline', link: '#timeline' },
              { label: 'Tracks', link: '#tracks' },
              { label: 'Prizes', link: '#prizes' },
              { label: 'Mentors', link: '#mentors' },
              { label: 'Judges', link: '#judges' },
              { label: 'Team', link: '#team' },
              { label: 'Partners', link: '#partners' },
              { label: 'Avatar', link: '#avatar-generator' },
            ].map(item => (
              <a
                key={item.label}
                href={item.link}
                className="text-[#3E2C1D] hover:text-[#6B4423] transition-colors border-b-2 border-transparent hover:border-[#6B4423]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#register"
              className="bg-[#D4AF37] text-[#3E2C1D] px-6 py-2 rounded-full font-bold border-2 border-[#D4AF37] hover:bg-[#f4e5c2] hover:border-[#D4AF37] transition-all duration-300 transform hover:scale-105"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
