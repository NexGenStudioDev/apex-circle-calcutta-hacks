import React from 'react';
import { Code, Landmark, Target, Sparkles, Bus, Award } from 'lucide-react';
import GlareHover from '../components/ui/GlareHover';
import web3 from '../../src/assets/Icon/web3.png';
import heritage from '../../src/assets/Icon/heritage.png';
import ai from '../../src/assets/Icon/AI.png';
import cyber from '../../src/assets/Icon/cyberSecurity.png';
import smartCity from '../../src/assets/Icon/smartCity.png';

import openInovation from '../../src/assets/Icon/openInovation.png';
// Simple VintageCard component with vintage styling
export const VintageCard = ({ children, className }) => {
  return (
    <div
      className={`bg-[#e0d1b0] border-4 border-[#3e2c1d] p-1  flex justify-center  align-center mx-[2vw] my-[2vh] shadow-md ${className}`}
    >
      <div className="relative z-10 bg-[#e7d7b7] flex flex-col h-[98%] w-[98%] ">{children}</div>
    </div>
  );
};

const Tracks = () => {
  const tracks = [
    {
      icon: web3,
      title: 'Web 3',
      desc: 'Explore blockchain, decentralized apps, and smart contracts to shape the future of the internet.',
      glareColor: '#3e2c1d',
    },
    {
      icon: heritage,
      title: 'Heritage Tech',
      desc: 'Leverage technology to preserve, showcase, and digitize cultural and historical heritage.',
      glareColor: '#3e2c1d',
    },
    {
      icon: cyber,
      title: 'Cybersecurity',
      desc: 'Develop solutions to protect digital systems, data, and networks from cyber threats.',
      glareColor: '#3e2c1d',
    },
    {
      icon: ai,
      title: 'AI & ML',
      desc: 'Create intelligent systems using artificial intelligence and machine learning algorithms.',
      glareColor: '#3e2c1d',
    },
    {
      icon: smartCity,
      title: 'Smart City',
      desc: 'Leverage technology and data-driven solutions to enhance urban living through sustainable infrastructure, intelligent transportation, and efficient resource management.',
      glareColor: '#3e2c1d',
    },
    {
      icon: openInovation,
      title: 'Open Innovation',
      desc: 'Bring your boldest ideas to life — build anything that pushes the boundaries of innovation.',
      glareColor: '#3e2c1d',
    },
  ];

  return (
    <section id="tracks" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-[6vh] md:text-6xl font-bold text-[#3E2C1D] mb-4">
            HACKATHON TRACKS
          </h2>
          <div className="w-32 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="font-serif text-xl text-[#6B4423] max-w-3xl mx-auto">
            Choose your track and build solutions that matter
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, idx) => (
            <div key={idx} className="relative ">
              <VintageCard className="w-[95%] py-[1rem] px-[0.8rem] ">
                {/* <div className="flex flex-col items-center justify-center h-full p-6 text-center">
               
              

                </div> */}

                <GlareHover
                  glareColor={track.glareColor}
                  glareOpacity={0.8}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  playOnce={false}
                  className="flex flex-col items-center justify-center h-full !w-[100%]  p-6 text-center !bg-[#e7d7b7] "
                >
                  <img src={track.icon} alt="Icons" className="size-25 text-[#6B4423] mb-4" />
                  <h3 className="font-display text-2xl font-bold text-[#3E2C1D] mb-2">
                    {track.title}
                  </h3>
                  <p className="font-serif text-[#6B4423]">{track.desc}</p>
                </GlareHover>
              </VintageCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
