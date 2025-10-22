import { Calendar, MapPin, Users, ChevronRight } from 'lucide-react';
import Image from '../../src/assets/biswabangla-with-tram.jpeg';
import Border from '../components/ui/Border';
import SocialIcons from '../components/ui/SocialIcon';
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaTwitterSquare,
  FaWhatsapp,
} from 'react-icons/fa';

const iconsPanel1 = [
  { icon: FaInstagram, link: 'https://instagram.com' },
  { icon: FaTwitterSquare, link: 'https://twitter.com' },
  { icon: FaLinkedinIn, link: 'https://linkedin.com' },
];

const iconsPanel2 = [
  { icon: FaGithub, link: 'https://github.com' },
  { icon: FaDiscord, link: 'https://discord.com/invite/your-server' },
  { icon: FaWhatsapp, link: 'https://wa.me/your-number' },
];

const Hero = () => (
  <section className="min-h-[85vh] pt-20 md:pt-24 flex items-center justify-center relative overflow-hidden">
    {/* Biswa Bangla with Tram Background */}
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="w-full h-full relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={Image}
            alt="Biswa Bangla with Tram"
            className="w-full h-auto max-h-[90vh] object-contain opacity-30"
            style={{
              maxWidth: '100%',
              objectPosition: 'center center',
              marginTop: '4rem',
              marginBottom: '2rem',
              '@media (min-width: 768px)': {
                maxHeight: '80vh',
                marginTop: '5rem',
                marginBottom: '4rem',
              },
              '@media (min-width: 1024px)': {
                maxHeight: '75vh',
                marginTop: '6rem',
                marginBottom: '6rem',
              },
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4E5C2]/30 via-transparent to-[#F4E5C2]/30"></div>
      </div>
    </div>

    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <Border className="p-8 md:p-12 lg:p-16">
        {/* Left icons */}
        <div className="ml-2 md:ml-4 lg:ml-6">
          <SocialIcons icons={iconsPanel1} position="left" />
        </div>

        {/* Right icons */}
        <SocialIcons icons={iconsPanel2} position="right" />

        <div className="p-8 md:p-10 lg:p-12 aged-paper">
          {/* Tagline */}
          <div className="flex justify-center items-start mb-6">
            <div className="inline-block border-4 border-[#3E2C1D] px-6 py-2 bg-[#D4AF37]">
              <span className="font-display text-sm tracking-widest font-semibold">
                HERITAGE • INNOVATION • EXCELLENCE
              </span>
            </div>
          </div>

          {/* Title */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-[#3E2C1D] leading-tight">
              CALCUTTA
            </h1>
            <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#6B4423]">
              &lt;HACKS/&gt;
            </div>
          </div>

          {/* Subtitle */}
          <div className="w-full flex justify-center mb-6">
            <div className="stamp-effect bg-[#F4E5C2] max-w-4xl text-center">
              <p className="font-serif text-lg md:text-xl lg:text-2xl italic px-3 py-1 text-[#3E2C1D]">
                "Where the Heritage of Calcutta Meets the Innovation of Tomorrow"
              </p>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
            <div className="flex items-center gap-2 font-serif text-base md:text-lg">
              <Calendar className="text-[#6B4423] flex-shrink-0" size={20} />
              <span>13-14 Dec 2025</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-[#3E2C1D]"></div>
            <div className="flex items-center gap-2 font-serif text-base md:text-lg">
              <MapPin className="text-[#6B4423] flex-shrink-0" size={20} />
              <span>Kolkata, WB</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-[#3E2C1D]"></div>
            <div className="flex items-center gap-2 font-serif text-base md:text-lg">
              <Users className="text-[#6B4423] flex-shrink-0" size={20} />
              <span>200+ Hackers</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {/* REGISTER NOW */}
            <button className="group relative bg-[#3E2C1D] text-[#F4E5C2] px-12 py-4 text-xl font-display font-bold border-4 border-[#3E2C1D] hover:bg-[#6B4423] hover:border-[#6B4423] transition-all duration-300 transform hover:scale-105">
              REGISTER NOW
              <ChevronRight
                className="inline-block ml-2 group-hover:translate-x-2 transition-transform"
                size={24}
              />
            </button>

            {/* Devfolio */}
            <a
              href="https://devfolio.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center justify-center h-14 px-8 py-2 rounded-md overflow-hidden transition-all duration-300 transform hover:scale-105 
                         bg-[linear-gradient(90deg,#2E2E2E_0%,#2E2E2E_100%)] shadow-[0_4px_20px_rgba(0,0,0,0.2)] min-w-[200px]"
            >
              <span className="absolute inset-0 bg-[linear-gradient(90deg,#2E2E2E_0%,#5A5A5A_50%,#2E2E2E_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <div className="relative z-10 flex items-center justify-center w-full h-full">
                <img
                  src="src\assets\Devfolio.png"
                  alt="Apply with Devfolio"
                  className="h-full w-auto max-h-10 object-contain filter brightness-0 invert"
                />
              </div>
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/your-discord-link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center px-8 py-4 text-white font-display font-bold rounded-md overflow-hidden transition-all duration-300 transform hover:scale-105 
                         bg-[linear-gradient(90deg,#5865F2_0%,#4752C4_100%)] shadow-[0_4px_20px_rgba(88,101,242,0.3)]"
            >
              <span className="absolute inset-0 bg-[linear-gradient(90deg,#5865F2_0%,#6C7AFF_50%,#4752C4_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <div className="relative z-10 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 71 55"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M60.104 4.552A58.345 58.345 0 0046.605 0a41.243 41.243 0 00-1.94 4.026 56.35 56.35 0 00-16.33 0A41.21 41.21 0 0026.395 0 58.339 58.339 0 0011.896 4.552C-2.117 24.07-1.313 43.27.104 47.41a58.563 58.563 0 0017.31 4.448 41.088 41.088 0 003.565-5.834 35.253 35.253 0 01-5.564-2.637c.468-.346.927-.71 1.372-1.085 10.88 5.08 22.652 5.08 33.493 0 .445.375.904.74 1.372 1.085a35.233 35.233 0 01-5.565 2.637 41.085 41.085 0 003.566 5.834 58.567 58.567 0 0017.31-4.448c1.417-4.14 2.22-23.34-11.794-42.858zM23.725 37.78c-3.171 0-5.778-2.899-5.778-6.473 0-3.575 2.573-6.473 5.778-6.473 3.22 0 5.822 2.899 5.778 6.473 0 3.574-2.558 6.473-5.778 6.473zm23.537 0c-3.171 0-5.778-2.899-5.778-6.473 0-3.575 2.573-6.473 5.778-6.473 3.22 0 5.822 2.899 5.778 6.473 0 3.574-2.558 6.473-5.778 6.473z" />
                </svg>

                <span>Join Discord</span>
              </div>
            </a>
          </div>
        </div>
      </Border>
    </div>
  </section>
);

export default Hero;
