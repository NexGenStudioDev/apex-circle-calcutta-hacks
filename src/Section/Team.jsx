import React from 'react';
import TiltedCard from '../components/ui/TiltedCard';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team = () => {


    let OnCardHover = () => {

    }

  const team = [
    { 
      name: 'Rahul Sharma',
      role: 'Organiser', 
      handle: '🧭 Strategy & Vision',
      emoji: '🧭', 
      color: '#D4AF37',
      image: 'https://thumbs.dreamstime.com/b/portrait-young-handsome-man-white-shirt-outdoor-portrait-young-handsome-man-white-shirt-outdoor-nice-appearance-131934608.jpg',
      social: 'https://linkedin.com/in/'
    },
    { 
      name: 'Priya Patel',
      role: 'Operations', 
      handle: '🛠️ Execution & Logistics',
      emoji: '🛠️', 
      color: '#6B4423',
      image: 'https://thumbs.dreamstime.com/b/portrait-young-handsome-man-white-shirt-outdoor-portrait-young-handsome-man-white-shirt-outdoor-nice-appearance-131934608.jpg',
      social: 'https://linkedin.com/in/'
    },
    { 
      name: 'Arjun Mehta',
      role: 'Engineering', 
      handle: '💡 Innovation & Systems',
      emoji: '💡', 
      color: '#4A90E2',
      image: 'https://thumbs.dreamstime.com/b/portrait-young-handsome-man-white-shirt-outdoor-portrait-young-handsome-man-white-shirt-outdoor-nice-appearance-131934608.jpg0',
      social: 'https://github.com/'
    },
    { 
      name: 'Anjali Das',
      role: 'Design', 
      handle: '🎯 Aesthetics & Experience',
      emoji: '🎯', 
      color: '#F4E5C2',
      image: 'https://thumbs.dreamstime.com/b/portrait-young-handsome-man-white-shirt-outdoor-portrait-young-handsome-man-white-shirt-outdoor-nice-appearance-131934608.jpg',
      social: 'https://dribbble.com/'
    },
    { 
      name: 'Vikram Singh',
      role: 'Community', 
      handle: '📣 Outreach & Relations',
      emoji: '📣', 
      color: '#FFD700',
      image: 'https://thumbs.dreamstime.com/b/portrait-young-handsome-man-white-shirt-outdoor-portrait-young-handsome-man-white-shirt-outdoor-nice-appearance-131934608.jpg',
      social: 'https://twitter.com/'
    },
    { 
      name: 'Meera Joshi',
      role: 'Partnerships', 
      handle: '🤝 Alliances & Support',
      emoji: '🤝', 
      color: '#D4AF37',
      image: 'https://thumbs.dreamstime.com/b/portrait-young-handsome-man-white-shirt-outdoor-portrait-young-handsome-man-white-shirt-outdoor-nice-appearance-131934608.jpg',
      social: 'https://linkedin.com/in/'
    },
  ];
  
  // Function to get appropriate social icon
  const getSocialIcon = (url) => {
    if (url.includes('linkedin')) return <Linkedin size={18} />;
    if (url.includes('github')) return <Github size={18} />;
    if (url.includes('twitter')) return <Twitter size={18} />;
    return null;
  };
  
  return (
    <section id="team" className="py-20 bg-[#F4E5C2]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#3E2C1D] mb-4">OUR TEAM</h2>
          <div className="w-32 h-1 bg-[#D4AF37] mx-auto"></div>
          <p className="font-serif text-xl text-[#6B4423] mt-6">The crew behind Calcutta &lt;Hack/&gt;</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((member, i) => (
            <div key={i} className="group bg-amber-900">
              <TiltedCard
               imageSrc={member.image}
                captionText={member.name}
                altText={i}
                maxTilt={20}
                scale={1.03}
                className="bg-[#b18631] border-4 border-[#3E2C1D] rounded-sm p-0 h-full w-full overflow-hidden text-2xl "
                style={{
                  boxShadow: '0.5rem 0.5rem 0 rgba(62, 44, 29, 0.2)'
                }}
              >

              
              
              </TiltedCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;