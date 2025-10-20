import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Users,
  ChevronRight
} from 'lucide-react';
import OrnateBorder from '../components/OrnateBorder';



export const Hero = () => {
  return (
    <section className="min-h-[85vh] pt-20 md:pt-24 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/src/assets/biswabangla-with-tram.jpeg" 
              alt="Biswa Bangla with Tram" 
              className="w-full h-auto max-h-[90vh] object-contain opacity-90"
              style={{
                maxWidth: '100%',
                objectPosition: 'center center',
                marginTop: '4rem',
                marginBottom: '2rem'
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#F4E5C2]/30 via-transparent to-[#F4E5C2]/30"></div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <OrnateBorder className="p-8 md:p-12 lg:p-16">
          <div className="aged-paper p-8 md:p-10 lg:p-12">
            <div className="flex justify-center items-start mb-6">
              <div className="inline-block border-4 border-[#3E2C1D] px-6 py-2 bg-[#D4AF37]">
                <span className="font-display text-sm tracking-widest">HERITAGE • INNOVATION • EXCELLENCE</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-[#3E2C1D] leading-tight">
                CALCUTTA
              </h1>
              <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#6B4423]">
                &lt;HACKS/&gt;
              </div>
            </div>
            
            <div className="w-full flex justify-center mb-6">
              <div className="stamp-effect bg-[#F4E5C2] max-w-4xl text-center">
                <p className="font-serif text-lg md:text-xl lg:text-2xl text-[#3E2C1D] italic px-3 py-1">
                  "Where the Heritage of Calcutta Meets the Innovation of Tomorrow"
                </p>
              </div>
            </div>
            
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
            
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <button className="group relative bg-[#3E2C1D] text-[#F4E5C2] px-12 py-4 text-xl font-display font-bold border-4 border-[#3E2C1D] hover:bg-[#6B4423] hover:border-[#6B4423] transition-all duration-300 transform hover:scale-105">
                REGISTER NOW
                <ChevronRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" size={24} />
              </button>
              
              <a 
                href="https://devfolio.co/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group inline-flex items-center justify-center h-14 px-8 py-2 rounded-md overflow-hidden transition-all duration-300 transform hover:scale-105"
                style={{
                  background: 'linear-gradient(90deg, #2E2E2E 0%, #2E2E2E 100%)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  minWidth: '200px'
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#2E2E2E] via-[#5A5A5A] to-[#2E2E2E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  <img src="https://cdn.iconscout.com/icon/free/png-256/free-devfolio-icon-svg-download-png-8383724.png" className='h-[2vw] w-[2vw] mr-[0.5vw]' />
                  <p className='text-white'>Apply with Devfolio</p>
                </div>
              </a>

              {/* Discord Button */}
              <a 
                href="https://discord.gg/your-discord-link" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center px-8 py-4 text-white font-display font-bold rounded-md overflow-hidden transition-all duration-300 transform hover:scale-105"
                style={{
                  background: 'linear-gradient(90deg, #5865F2 0%, #4752C4 100%)',
                  boxShadow: '0 4px 20px rgba(88, 101, 242, 0.3)'
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#5865F2] via-[#6C7AFF] to-[#4752C4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <div className="relative z-10 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.319 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.105 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 01.077.01c.12.098.246.198.373.292a.077.077 0 01-.008.128 12.3 12.3 0 01-1.873.892.077.077 0 00-.041.105c.36.698.772 1.362 1.225 1.993a.076.076 0 00.085.028 19.84 19.84 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.945-2.419 2.157-2.419 1.211 0 2.176 1.096 2.157 2.42 0 1.333-.965 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  <span>Join Discord</span>
                </div>
              </a>
            </div>
          </div>
        </OrnateBorder>
      </div>
    </section>
  );
};

export default Hero;
