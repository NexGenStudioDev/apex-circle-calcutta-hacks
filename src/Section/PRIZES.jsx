import React from 'react';
import { Award } from 'lucide-react';
import { VintageCard } from './Tracks';
import SpotlightCard from '../components/ui/SpotlightCard';
import first from '../../src/assets/Icon/firstPlace.png';
import second from '../../src/assets/Icon/secondPlace.png';
import third from '../../src/assets/Icon/thirdPlace.png';

const PRIZES = () => {
  const prizes = [
    {
      place: '1st',
      amount: 'To be declared ...',
      perks: 'Trophy + Medals + Mentorship',
      icon: first,
    },
    {
      place: '2nd',
      amount: 'To be declared ...',
      perks: 'Trophy + Medals + Goodies',
      icon: second,
    },
    {
      place: '3rd',
      amount: 'To be declared ...',
      perks: 'Trophy + Medals + Goodies',
      icon: third,
    },
  ];

  return (
    <section id="prizes" className="py-20 bg-[#ebdbb9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-[6.7vw] lg:text-6xl font-bold text-[#3E2C1D] mb-4">
            PRIZES & PERKS
          </h2>
          <div className="w-32 h-1 text-[2vw] bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="font-serif lg:text-xl text-[#6B4423]">
            Total Prize Pool: <span className="font-bold">To be declared ...</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {prizes.map((prize, idx) => {
            return (
              <div
                key={idx}
                className="relative group transform transition-transform duration-500 hover:scale-105 py-[4.8vh]"
              >
                {idx === 0 && (
                  <div className="absolute top-18 -right-2 bg-[#D4AF37] text-[#3E2C1D] px-4 py-1 font-display font-bold text-sm transform rotate-45 shadow-md z-15">
                    GRAND PRIZE
                  </div>
                )}

                <VintageCard
                  className={`text-center relative overflow-hidden ${idx === 0 ? 'md:scale-110 border-[#D4AF37]' : ''}`}
                >
                  <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" stroke="#D4AF37" strokeWidth="2" fill="none" />
                      <circle cx="50" cy="50" r="30" stroke="#D4AF37" strokeWidth="2" fill="none" />
                      <circle cx="50" cy="50" r="20" stroke="#D4AF37" strokeWidth="2" fill="none" />
                    </svg>
                  </div>

                  <div className="relative z-10 flex flex-col items-center px-6 py-8">
                    <div className="relative w-32 h-32 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent group-hover:translate-x-full transition-transform duration-1500 ease-in-out"></div>
                      <img
                        src={prize.icon}
                        alt={`${prize.place} Place`}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="font-display text-[3.8vw] lg:text-3xl font-bold text-[#3E2C1D] mb-2 relative">
                      {prize.place}
                      <div className="absolute h-1 w-0 bg-[#D4AF37] left-1/2 -bottom-1 transform -translate-x-1/2 group-hover:w-16 transition-all duration-300"></div>
                    </div>

                    <div className="font-display text-[2.5vw] lg:text-2xl font-bold text-[#6B4423] mb-4">
                      {prize.amount}
                    </div>

                    <div className="font-serif text-[#6B4423] transition-all duration-300">
                      {prize.perks}
                    </div>
                  </div>
                </VintageCard>
              </div>
            );
          })}
        </div>

        <VintageCard className="text-center relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-5 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
              }}
            ></div>
          </div>

          <div className="relative z-10">
            <h3 className="font-display text-3xl font-bold text-[#3E2C1D] mb-4 mt-4 flex items-center justify-center">
              <Award className="mr-3 text-[#D4AF37]" size={32} />
              <span>Additional Prizes</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-6 font-serif text-lg text-[#6B4423]">
              <div className="p-3 hover:bg-[#F4E5C2]/50 rounded transition-colors duration-300">
                🏆 To Be Declared
              </div>
              <div className="p-3 hover:bg-[#F4E5C2]/50 rounded transition-colors duration-300">
                🏆 To Be Declared
              </div>
              <div className="p-3 hover:bg-[#F4E5C2]/50 rounded transition-colors duration-300">
                🏆 To Be Declared
              </div>
            </div>
          </div>
        </VintageCard>
      </div>
    </section>
  );
};

export default PRIZES;
