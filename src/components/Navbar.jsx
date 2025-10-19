import { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tab = ['About', 'Timeline', 'Tracks', 'Prizes', 'Register'];
  return (
    <header className="sticky top-0 z-50 bg-[#f5e5c2] backdrop-blur-md  border-b-4 border-[#3e2d1d]">
      <div className="flex items-center justify-between py-4 w-[90%] mx-auto min-w-[320px]">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <span className="w-10 h-10 p-0.5 border-4 border-[#3e2d1d] object-cover  bg-[#c9a74e] text-[#3e2d1d] font-extrabold">
            {'< >'}
          </span>
          <span className="font-bold tracking-tight text-[#3e2d1d] text-lg">
            CALCUTTA
            <span className="py-0.4 px-2 text-[#a67c52]  font-bold rounded">
              {'<'}HACK/{'>'}
            </span>{' '}
          </span>
        </a>

        {/* Navigation - icon */}
        <nav className="relative">
          <button
            className="text-[#1e1e1e] text-2xl
            md:hidden ml-auto"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Nav- Tabs  */}
          <ul
            className={`${
              isOpen ? 'flex' : 'hidden '
            }  md:flex flex-col md:flex-row absolute md:static right-0 top-12 md:top-auto bg-[#a67c52] md:bg-transparent gap-2 md:gap-5 list-none p-6 md:p-0 rounded-2xl md:rounded-none w-48 md:w-auto transition-all duration-300 `}
          >
            {tab.map(item => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[#4f3c24] hover:text-[#3b1e04] p-1 gap-6 font-medium transition text-base md:text-lg "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Buttons */}
        {/* <div className="hidden md:flex gap-3">
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
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
