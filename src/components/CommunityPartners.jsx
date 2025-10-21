import React from 'react';
import { VintageCard } from '../Section/Tracks';
import { Users, Calendar, MapPin } from 'lucide-react';

const CommunityPartners = () => {
  const partners = [
    {
      name: 'Apex Circle',
      note: 'Community Host',
      description: 'Bringing together developers and tech enthusiasts since 2018.',
      icon: Users,
      location: 'Kolkata',
      events: 12,
    },
    {
      name: 'Local Devs',
      note: 'Meetups & Support',
      description: 'Monthly tech meetups and workshops for local developers.',
      icon: Calendar,
      location: 'Kolkata & Howrah',
      events: 24,
    },
    {
      name: 'University Clubs',
      note: 'Student Partners',
      description: 'Empowering the next generation of tech leaders.',
      icon: MapPin,
      location: 'Multiple Campuses',
      events: 8,
    },
  ];

  return (
    <section id="partners" className="py-20 bg-[#f4e5c2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#3E2C1D] mb-4">
            COMMUNITY PARTNERS
          </h2>
          <div className="w-32 h-1 bg-[#D4AF37] mx-auto"></div>
          <p className="font-serif text-xl text-[#6B4423] mt-6">
            Ecosystem collaborators supporting innovation
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, i) => {
            const Icon = partner.icon;

            return (
              <div key={i} className="group perspective-1000">
                {/* <div className="absolute inset-0 translate-x-2 translate-y-2 bg-[#3E2C1D]/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div> */}

                <VintageCard className="text-center group-hover:scale-[1.03] transform-gpu transition-all duration-300 relative z-10 h-full flex flex-col">
                  <div className="mx-auto -mt-10 mb-4 w-16 h-16 rounded-full bg-[#F4E5C2] border-4 border-[#3E2C1D] flex items-center justify-center text-[#3E2C1D] shadow-md">
                    <Icon size={24} />
                  </div>

                  <div className="font-display text-2xl font-bold text-[#3E2C1D] mb-1 relative">
                    {partner.name}
                    <div className="h-0.5 w-0 bg-[#D4AF37] absolute left-1/2 -bottom-1 transform -translate-x-1/2 group-hover:w-24 transition-all duration-500"></div>
                  </div>

                  <div className="font-serif text-[#6B4423] font-medium mb-4">{partner.note}</div>

                  <p className="font-serif text-[#6B4423]/80 mb-4 text-sm px-4">
                    {partner.description}
                  </p>

                  <div className="mt-auto border-t border-[#3E2C1D]/10 pt-3 px-3 flex justify-between text-sm font-serif text-[#6B4423]">
                    <span>📍 {partner.location}</span>
                    <span>🗓️ {partner.events} Events/Year</span>
                  </div>
                </VintageCard>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="font-serif text-[#6B4423] mb-4">
            Interested in becoming a community partner?
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#3E2C1D] text-[#F4E5C2] font-display py-2 px-6 border-2 border-[#D4AF37] hover:bg-[#F4E5C2] hover:text-[#3E2C1D] transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunityPartners;
