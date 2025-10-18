import { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tab = ['About', 'Stats', 'Timeline', 'Prizes', 'Teams', 'Sponsors', 'Badge', 'FAQs'];
  return (
    <header className="sticky top-0 z-50 bg-gray-900 backdrop-blur-md  border-b border-white/10">
      <div className="flex items-center justify-between py-4 w-[90%] mx-auto">
        <a href="#home" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Calcutta <Hacks/> 1.0 logo"
            className="w-10 h-10 rounded-lg object-cover"
          />
          <span className="font-extrabold tracking-tight text-white">
            Calcutta{' '}
            <span className="py-0.4 px-2 text-[#0ea5a4] bg-[#f5f5f5] font-bold rounded">
              &lt;Hacks/&gt;
            </span>{' '}
            <span className="opacity-80 text-sm">1.0</span>
          </span>
        </a>

        {/* Navigation - icon */}
        <nav className="relative">
          <button
            className="text-white text-2xl
            md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Nav- Tabs  */}
          <ul
            className={`${
              isOpen ? 'flex' : 'hidden '
            }  md:flex flex-col md:flex-row absolute md:static right-0 top-12 md:top-auto bg-[#020b27] md:bg-transparent gap-2 md:gap-5 list-none p-6 md:p-0 rounded-2xl md:rounded-none w-56 md:w-auto `}
          >
            {tab.map(item => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white gap-5 font-medium transition text-lg"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 text-white bg-white/5 hover:bg-white/10 rounded-full px-4 py-2 font-semibold transition"
          >
            Join Discord
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#7c3aed] to-[#22d3ee] text-white rounded-full px-4 py-2 font-semibold shadow-[0_16px_60px_rgba(124,58,237,0.25)] hover:brightness-105 transition"
          >
            Apply with Devfolio
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
