import React from 'react';
import Abhishek from '../../src/assets/Team/AbhishekBan.jpg';
import Agnij from '../../src/assets/Team/Agnij.jpg';
import Naila from '../../src/assets/Team/Naila.jpg';
import Pritham from '../../src/assets/Team/pritham.webp';
import Pushkar from '../../src/assets/Team/pushkarDas.jpg';
import Rouson from '../../src/assets/Team/Rouson.jpg';
import Shreyanshi from '../../src/assets/Team/Shreyanshi.jpg';
import Somnath from '../../src/assets/Team/Somnath.jpg';
import Soumodweep from '../../src/assets/Team/Soumodweep.png';
import Souvik from '../../src/assets/Team/Souvik.jpg';
import Yuvraj from '../../src/assets/Team/yuvraj.jpg';
// import Vivek from '../../src/assets/Team/yuvraj.jpg';

import TiltedCard from '../components/ui/TiltedCard';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Soumodweep',
      role: 'Founder',
      handle: '🧭 Strategy & Vision',
      emoji: '🧭',
      color: '#3E2C1D',
      image: Soumodweep,
      social: 'https://linkedin.com/in/soumodweep',
    },
    {
      name: 'Souvik',
      role: 'Co-Founder',
      handle: '🛠️ Execution & Logistics',
      emoji: '🛠️',
      color: '#3E2C1D',
      image: Souvik,
      social: 'https://linkedin.com/in/souvik',
    },
    {
      name: 'Pritam',
      role: 'Co-Founder',
      handle: '💡 Innovation & Systems',
      emoji: '💡',
      color: '#3E2C1D',
      image: Pritham,
      social: '',
    },
    {
      name: 'Yuvraj',
      role: 'Co-Founder',
      handle: '🎯 Aesthetics & Experience',
      emoji: '🎯',
      color: '#3E2C1D',
      image: Yuvraj,
      social: '',
    },
    {
      name: 'Somnath',
      role: 'Web Lead',
      handle: '📣 Outreach & Relations',
      emoji: '📣',
      color: '#3E2C1D',
      image: Somnath,
      social: '',
    },
    {
      name: 'Naila',
      role: 'Web Co Lead',
      handle: '🤝 Alliances & Support',
      emoji: '🤝',
      color: '#3E2C1D',
      image: Naila,
      social: 'https://linkedin.com/in/naila',
    },
    {
      name: 'Abhishek',
      role: 'Web Associate Lead',
      handle: '🤝 Alliances & Support',
      emoji: '🤝',
      color: '#3E2C1D',
      image: Abhishek,
      social: 'https://linkedin.com/in/abhishek',
    },
    {
      name: 'Shuvrajit',
      role: 'Social Media Lead',
      handle: '📱 Social & Growth',
      emoji: '📱',
      color: '#3E2C1D',
      image: '',
      social: 'https://linkedin.com/in/shuvrajit',
    },
    {
      name: 'Pushkar Das',
      role: 'Social Media Co Lead',
      handle: '📱 Engagement & Outreach',
      emoji: '📱',
      color: '#3E2C1D',
      image: Pushkar,
      social: 'https://linkedin.com/in/pushkar',
    },
    {
      name: 'Agnij',
      role: 'Outreach Team Lead',
      handle: '📢 Public Relations',
      emoji: '📢',
      color: '#3E2C1D',
      image: Agnij,
      social: 'https://linkedin.com/in/agnij',
    },
    {
      name: 'Vivek',
      role: 'Outreach Team Co Lead',
      handle: '📢 PR Support',
      emoji: '📢',
      color: '#3E2C1D',
      image: '',
      social: 'https://linkedin.com/in/vivek',
    },
    {
      name: 'Shreyashi Debnath',
      role: 'Management Lead',
      handle: '📊 Operations & Management',
      emoji: '📊',
      color: '#3E2C1D',
      image: Shreyanshi,
      social: 'https://linkedin.com/in/shreyashi',
    },
    {
      name: 'Rouson Das',
      role: 'Community Coordinator',
      handle: '🤝 Community Engagement',
      emoji: '🤝',
      color: '#3E2C1D',
      image: Rouson,
      social: 'https://linkedin.com/in/rouson',
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
                key={i}
                altText=""
                scaleOnHover={1.1}
                maxTilt={0.5}
                scale={1}
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
                      className="w-full py-3 px-4 rounded-md text-center font-semibold text-[#3E2C1D] shadow-md "
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
