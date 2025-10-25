import React from 'react';
import Marquee from 'react-fast-marquee';
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
import Shuvrajit from '../../src/assets/Team/Shuvrajit.jpg';
import AbhishekGupta from '../../src/assets/Team/AbhishekGupta.jpg';
import TiltedCard from '../components/ui/TiltedCard';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team = () => {
  const team = [
    // 🥇 1st Hierarchy — Founders & Advisor
    {
      name: 'Soumodweep Das',
      role: 'Founder',
      handle: '🧭 Strategy & Vision',
      emoji: '🧭',
      color: '#3E2C1D',
      image: Soumodweep,
      social: 'https://www.linkedin.com/in/soumodweep-das/',
    },
    {
      name: 'Souvik Ghosh',
      role: 'Co-Founder',
      handle: '🛠 Execution & Logistics',
      emoji: '🛠',
      color: '#3E2C1D',
      image: Souvik,
      social: 'https://www.linkedin.com/in/souvikghosh19/',
    },
    {
      name: 'Pritam Das',
      role: 'Co-Founder',
      handle: '💡 Innovation & Systems',
      emoji: '💡',
      color: '#3E2C1D',
      image: Pritham,
      social: 'https://www.linkedin.com/in/pritam-das-739743289/',
    },
    {
      name: 'Yuvraj Prasad',
      role: 'Co-Founder',
      handle: '🎯 Aesthetics & Experience',
      emoji: '🎯',
      color: '#3E2C1D',
      image: Yuvraj,
      social: 'https://www.linkedin.com/in/yuvrajprasad/',
    },
    {
      name: 'Abhishek Banerjee',
      role: 'Chief Advisor',
      handle: '🤝 Strategic Alliances & Guidance',
      emoji: '🤝',
      color: '#3E2C1D',
      image: Abhishek,
      social: 'https://www.linkedin.com/in/avishek-mukherjee-1011a2235/',
    },

    // 🥈 2nd Hierarchy — Web Team
    {
      name: 'Somnath',
      role: 'Web Lead',
      handle: 'Development & Infrastructure',
      color: '#3E2C1D',
      image: Somnath,
      social: 'https://www.linkedin.com/in/somnath-mukherjee-8b629b288/',
    },
    {
      name: 'Naila',
      role: 'Web Co-Lead',
      handle: 'Frontend Integration & Support',
      color: '#3E2C1D',
      image: Naila,
      social: 'https://www.linkedin.com/in/nailafarooque/',
    },
    {
      name: 'Abhishek Kumar',
      role: 'Web Associate',
      handle: 'Technical Implementation',
      color: '#3E2C1D',
      image: "https://avatars.githubusercontent.com/u/122656682?v=4",
      social: 'https://www.linkedin.com/in/abhishek-nexgen-dev',
    },
    {
      name: 'Anjali Tomar',
      role: 'Web Associate',
      handle: 'Backend & Content Management',
      color: '#3E2C1D',
      image: 'https://avatars.githubusercontent.com/u/160884550?v=4',
      social: 'https://www.linkedin.com/in/anjali-tomar713',
    },

    // 🥉 3rd Hierarchy — PR & Outreach
    {
      name: 'Agnij Dutta',
      role: 'PR & Outreach Lead',
      handle: 'Public Relations & Partnerships',
      color: '#3E2C1D',
      image: Agnij,
      social: 'https://www.linkedin.com/in/agnij-dutta/',
    },
    {
      name: 'Vivek Yadav',
      role: 'PR & Outreach Co-Lead',
      handle: 'Communication & Coordination',
      color: '#3E2C1D',
      image: '',
      social: '',
    },

    // 🧩 4th Hierarchy — Management
    {
      name: 'Shreyashi Debnath',
      role: 'Management Lead',
      handle: 'Operations & Oversight',
      color: '#3E2C1D',
      image: Shreyanshi,
      social: 'https://www.linkedin.com/in/shreyashi-debnath-aa73942b4/',
    },
    {
      name: 'Rouson Das',
      role: 'Management Lead',
      handle: 'Planning & Coordination',
      color: '#3E2C1D',
      image: Rouson,
      social: 'https://www.linkedin.com/in/rouson-das-563b52284/',
    },

    // 💬 5th Hierarchy — Social Media
    {
      name: 'Shuvrajit',
      role: 'Social Media Lead',
      handle: 'Branding & Digital Growth',
      color: '#3E2C1D',
      image: Shuvrajit,
      social: 'https://www.linkedin.com/in/shuvrajit-majhi-7a337b2b8/',
    },
    {
      name: 'Pushkar Das',
      role: 'Social Media Co-Lead',
      handle: 'Content & Engagement',
      color: '#3E2C1D',
      image: Pushkar,
      social: '',
    },
  ];

  const getSocialIcon = url => {
    if (url.includes('linkedin')) return <Linkedin size={20} />;
    if (url.includes('github')) return <Github size={20} />;
    if (url.includes('twitter')) return <Twitter size={20} />;
    return null;
  };

  return (
    <section id="team" className="py-20 bg-[#F4E5C2]">
      <div className="w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#3E2C1D] mb-4">
            OUR TEAM
          </h2>
          <div className="w-32 h-1 bg-[#D4AF37] mx-auto"></div>
          <p className="font-serif text-xl text-[#6B4423] mt-6">
            The crew behind Calcutta &lt;Hacks/&gt;
          </p>
        </div>

        {/* Infinite Scroller */}
        <Marquee
          speed={95}
          gradient={false}
          pauseOnHover
         loop={0}
         style={{ transition: 'transform 0.8s ease-in-out' }}
         autoFill={true}
         delay={1}
          className="py-10 space-x-3 transform-3d translate-0.5 duration-300"
        >
          {team.map((member, i) => (
            <div key={i} className="mx-6">
              {/* 🖤 Black border + glow effect */}
              <div className="border-4 border-black rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                <TiltedCard
                  imageSrc={member.image}
                  displayOverlayContent={true}
                  altText=""
                  scaleOnHover={1.1}
                  rotateAmplitude={0.1}
                  maxTilt={0.2}
                  scale={1}
                  className="bg-[#b18631] w-[250px] relative rounded-xl overflow-hidden h-[350px] hover:shadow-xl transition duration-300"
                  style={{
                    boxShadow: '0.5rem 0.5rem 0 rgba(62, 44, 29, 0.2)',
                  }}
                  overlayContent={
                    <div className="absolute h-[300px] w-[303px] bg-[#d4af37]/20 inset-0 flex flex-col justify-between p-4 text-white z-10">
                      <div className="flex justify-start">
                        {member.social && (
                          <a
                            href={member.social}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#3E2C1D]/70 p-2 rounded-full hover:bg-[#3E2C1D]/90 transition"
                          >
                            {getSocialIcon(member.social)}
                          </a>
                        )}
                      </div>

                      <div
                        className="w-full py-3 px-4 rounded-md text-center font-semibold text-[#3E2C1D] shadow-md"
                        style={{ backgroundColor: member.color }}
                      >
                        <div className="w-full bg-[#f4e5c2] h-fit text-[#3e2c1d] font-bold rounded-md text-lg">{member.name}</div>
                        <span className="text-md text-[#F3E5C1]">{member.role}</span>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Team;
