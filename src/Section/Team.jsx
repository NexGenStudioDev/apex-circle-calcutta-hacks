import React from 'react';
import TiltedCard from '../components/ui/TiltedCard';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Rahul Sharma',
      role: 'Organiser',
      handle: '🧭 Strategy & Vision',
      emoji: '🧭',
      color: '#3E2C1D',
      image: 'https://i.pravatar.cc/300?img=8',
      social: 'https://linkedin.com/in/',
    },
    {
      name: 'Priya Patel',
      role: 'Operations',
      handle: '🛠️ Execution & Logistics',
      emoji: '🛠️',
      color: '#3E2C1D',
      image: 'https://i.pravatar.cc/300?img=12',
      social: 'https://linkedin.com/in/',
    },
    {
      name: 'Abhishek Kumar',
      role: 'Developer',
      handle: '💡 Innovation & Systems',
      emoji: '💡',
      color: '#3E2C1D',
      image: 'https://avatars.githubusercontent.com/u/122656682?v=4',
      social: 'https://github.com/abhishek-nexgen-dev',
    },
    {
      name: 'Anjali Das',
      role: 'Design',
      handle: '🎯 Aesthetics & Experience',
      emoji: '🎯',
      color: '#3E2C1D',
      image: 'https://i.pravatar.cc/300?img=15',
      social: 'https://dribbble.com/',
    },
    {
      name: 'Vikram Singh',
      role: 'Community',
      handle: '📣 Outreach & Relations',
      emoji: '📣',
      color: '#3E2C1D',
      image: 'https://i.pravatar.cc/300?img=20',
      social: 'https://twitter.com/',
    },
    {
      name: 'Meera Joshi',
      role: 'Partnerships',
      handle: '🤝 Alliances & Support',
      emoji: '🤝',
      color: '#3E2C1D',
      image: 'https://i.pravatar.cc/300?img=25',
      social: 'https://linkedin.com/in/',
    },
  ];

  const getSocialIcon = url => {
    if (url.includes('linkedin')) return <Linkedin size={20} />;
    if (url.includes('github')) return <Github size={20} />;
    if (url.includes('twitter')) return <Twitter size={20} />;
    return null;
  };

  return (
    <section id="team" className="py-20 bg-[#F4E5C2]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#3E2C1D] mb-4">
            OUR TEAM
          </h2>
          <div className="w-32 h-1 bg-[#D4AF37] mx-auto"></div>
          <p className="font-serif text-xl text-[#6B4423] mt-6">
            The crew behind Calcutta &lt;Hacks/&gt;
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group">
              <TiltedCard
                imageSrc={member.image}
                captionText={member.name}
                displayOverlayContent={true}
                altText=""
                maxTilt={8}
                scale={1.02}
                className="bg-[#b18631] w-full  relative border-4 border-[#3E2C1D] rounded-xl overflow-hidden h-[350px] shadow-lg hover:shadow-xl transition duration-300 z-20"
                style={{
                  boxShadow: '0.5rem 0.5rem 0 rgba(62, 44, 29, 0.2)',
                }}
                overlayContent={
                  <div className="absolute  h-[32vh] w-[15vw]  inset-0 flex flex-col justify-between p-4 text-white z-10">
                    <div className="flex justify-start">
                      <a
                        href={member.social}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#3E2C1D]/70 p-2 rounded-full hover:bg-[#3E2C1D]/90 transition"
                      >
                        {getSocialIcon(member.social)}
                      </a>
                    </div>

                    <div
                      className="w-full py-3 px-4 rounded-md text-center font-semibold text-[#3E2C1D] shadow-md"
                      style={{ backgroundColor: member.color }}
                    >
                      <span className="text-lg text-[#F3E5C1]">
                        {member.emoji} {member.role}
                      </span>
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
