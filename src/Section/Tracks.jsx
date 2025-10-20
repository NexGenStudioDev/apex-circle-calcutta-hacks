import React from 'react';
import { Code, Landmark, Target, Sparkles, Bus, Award } from 'lucide-react';
import GlareHover from '../components/ui/GlareHover';

// Simple VintageCard component with vintage styling
export const VintageCard = ({ children, className }) => {
  return (
    <div
      className={`bg-[#e0d1b0] border-4 border-[#3e2c1d] p-3  flex mx-[2vw] my-[2vh] shadow-md ${className}`}
    >
      <div className="relative z-10 bg-[#e7d7b7] flex flex-col h-[98%] w-[98%] border-2 border-[#bea888]  ">
        {children}
      </div>
    </div>
  );
};

const Tracks = () => {
  const tracks = [
    {
      icon: Code,
      title: 'Web & Mobile',
      desc: 'Build innovative web and mobile applications',
      glareColor: '#3e2c1d',
    },
    {
      icon: Landmark,
      title: 'Heritage Tech',
      desc: 'Preserve and promote cultural heritage',
      glareColor: '#3e2c1d',
    },
    {
      icon: Target,
      title: 'Smart City',
      desc: 'Solutions for urban challenges',
      glareColor: '#3e2c1d',
    },
    {
      icon: Sparkles,
      title: 'AI & ML',
      desc: 'Artificial intelligence and machine learning',
      glareColor: '#3e2c1d',
    },
    { icon: Bus, title: 'Transportation', desc: 'Reimagine urban mobility', glareColor: '#3e2c1d' },
    {
      icon: Award,
      title: 'Open Innovation',
      desc: 'Build anything innovative',
      glareColor: '#3e2c1d',
    },
  ];

  return (
    <section id="tracks" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#3E2C1D] mb-4">
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
              <VintageCard className="w-[95%] h-[25vh] ">
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
                  <track.icon className="text-[#6B4423] mb-4" size={48} />
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
