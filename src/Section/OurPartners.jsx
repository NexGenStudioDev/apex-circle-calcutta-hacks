import React from 'react';
import { Map, MapPin, Award } from 'lucide-react';
import bolt from '../../src/assets/Icon/bolt.png';
import ETH from '../../src/assets/Icon/ethIndia.png';
import codecrafter from '../../src/assets/Icon/codecrafter.png';
import xyz from '../../src/assets/Icon/.xyz.png';
import interviewbuddy from '../../src/assets/Icon/interviewbuddy.png';

const categories = {
  vibingptn: {
    name: 'Vibing Partner',
    partners: [
      {
        name: 'Bolt.new',
        logo: bolt,
        link: 'https://bolt.new/',
        tagline: 'Create stunning apps & websites by chatting with AI',
      },
    ],
  },
  silverspn: {
    name: 'Silver Sponsors',
    partners: [
      {
        name: 'ETH India',
        role: 'Silver Sponsor',
        logo: ETH,
        link: 'https://ethindia2024.devfolio.co/overview',
        tagline: 'Empowering the future of hackathons',
      },
    ],
  },
  domainspn: {
    name: 'Domain Sponsor',
    partners: [
      {
        name: 'Gen xyz',
        logo: xyz,
        link: 'https://gen.xyz/',
        tagline: 'For every website, everywhere.',
      },
    ],
  },
  educationspn: {
    name: 'Education Sponsors',
    partners: [
      {
        name: 'Codecrafters',
        logo: codecrafter,
        link: 'https://codecrafters.io/',
        tagline: 'Become a better software engineer.',
      },
      {
        name: 'Interview Buddy',
        logo: interviewbuddy,
        link: 'https://interviewbuddy.net/',
        tagline: 'Master the art of interviewing with AI-powered mock sessions, expert feedback and personalized coaching that gets you hired at top companies',
      },
    ],
  },
};

// VintageCard component with black/dark border, inner gold border, and proper padding
const VintageCard = ({ children, className = '' }) => {
  return (
    <div
      className={`relative bg-[#F8E9C4] border-4 border-[#332518] shadow-inner p-1 ${className}`}
    >
      {/* Inner border and content area */}
      <div className="h-full w-full border-2 border-[#C9A22C]/40 bg-gradient-to-b from-[#F6E4BF] to-[#F2E2C0] p-8 rounded-sm">
        {children}
      </div>
    </div>
  );
};

const SponsorCard = ({ category }) => {
  let partners = categories[category].partners;
  return (
    <VintageCard className="mb-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-[#3E2C1D] rounded-full flex items-center justify-center">
            <Award className="text-[#D4AF37]" size={32} />
          </div>
          <h3 className="font-display uppercase text-3xl font-bold text-[#3E2C1D]">
            {categories[category].name}
          </h3>
        </div>
        <div></div>
        {partners.map(partner => (
          <>
            <div className="mb-6">
              <h4 className="font-display uppercase text-2xl font-bold text-[#6B4423] mb-4">
                {partner.name}
              </h4>
              <p className="font-serif text-[#6B4423]/90 mb-4">{partner.tagline}</p>
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#6B4423] hover:text-[#3E2C1D] font-medium transition-colors"
              >
                Visit Website
              </a>
            </div>
            <div className="bg-[#e8d9b6] p-2 rounded-lg border-4 border-[#3E2C1D] flex items-center justify-center">
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="max-h-[120px] object-contain"
              />
            </div>
          </>
        ))}
      </div>
    </VintageCard>
  );
};

const OurPartners = () => {
  return (
    <section id="sponsors" className="py-20 bg-[#F2E2C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#332518] mb-4">
            OUR PARTNERS
          </h2>
          <div className="w-32 h-1 bg-[#C9A22C] mx-auto mb-6"></div>
          <p className="font-serif text-xl text-[#7D5B3D] max-w-3xl mx-auto">
            They make the magic happen! A big thanks to our amazing partners for their support and collaboration.
          </p>
        </div>

        {/* Venue Partner */}
        <VintageCard className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#332518] rounded-full flex items-center justify-center">
                  <Map className="text-[#C9A22C]" size={32} />
                </div>
                <h3 className="font-display uppercase text-3xl font-bold text-[#332518]">Venue Partner</h3>
              </div>

              <div className="mb-6">
                <h4 className="font-display text-2xl font-bold text-[#7D5B3D] mb-2">
                  Techno India University
                </h4>
                <p className="font-serif text-[#7D5B3D]/90 mb-4">
                  EM-4, EM Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091
                </p>
                <a
                  href="https://maps.app.goo.gl/qX2sEeT1irqAn4836"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#7D5B3D] hover:text-[#332518] font-medium transition-colors"
                >
                  <MapPin className="mr-2" size={18} />
                  View on Google Maps
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                <span className="inline-block px-4 py-2 bg-[#332518]/10 text-[#332518] font-medium rounded-full">
                  🚇 10 min from Sector V Metro
                </span>
                <span className="inline-block px-4 py-2 bg-[#332518]/10 text-[#332518] font-medium rounded-full">
                  🅿️ Ample Parking
                </span>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border-4 border-[#332518] h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0827672337136!2d88.42593737499146!3d22.576007532846074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f970ae9a2e19b5%3A0x16c43b9069f4b159!2sTechno%20India%20University!5e0!3m2!1sen!2sin!4v1760859347451!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Techno India University Location"
                className="w-full h-full min-h-[300px]"
              ></iframe>
            </div>
          </div>
        </VintageCard>

        {/* Silver Sponsor */}
        <SponsorCard category="silverspn" />

        {/* Vibing Partner */}
        <SponsorCard category="vibingptn" />

        {/* Learning Partner */}
        <SponsorCard category="educationspn" />

        {/* Domain Sponsor */}
        <SponsorCard category="domainspn" />

        {/* Partner CTA */}
        <div className="text-center">
          <h3 className="font-display text-2xl font-bold text-[#332518] mb-8">
            Want to Sponsor us?
          </h3>
          <a
            href="https://links.calcuttahacks.xyz/sponsor-us"
            target="_blank"
            className="inline-block bg-[#332518] text-[#F2E2C0] px-8 py-3 text-lg font-display font-bold border-4 border-[#332518] hover:bg-[#7D5B3D] hover:border-[#7D5B3D] transition-all duration-300"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
