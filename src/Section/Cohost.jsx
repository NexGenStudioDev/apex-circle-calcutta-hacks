import React from 'react';
import { Mail, Target, Sparkles, Users, Globe, Calendar, Award } from 'lucide-react';
import OrnateBorder from '../components/OrnateBorder';
import { VintageCard } from './Tracks';
import { Link } from 'react-router-dom';

import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Cohost = () => (
  <section id="cohost" className="py-14 sm:py-16 md:py-20 relative bg-[#F4E5C2]/20 overflow-hidden">
    <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#D4AF37]/10 rounded-full blur-2xl sm:blur-3xl"></div>
    <div className="absolute bottom-10 sm:bottom-20 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-[#D4AF37]/5 rounded-full blur-xl sm:blur-3xl"></div>
    <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-8 sm:w-12 h-8 sm:h-12 border-b-4 border-r-4 border-[#D4AF37]/30"></div>

    <div className="max-w-4xl sm:max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-8 sm:mb-16">
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#3E2C1D] mb-4 relative inline-block">
          ABOUT THE CO-HOST
          <div className="absolute -bottom-4 left-0 w-full h-1 bg-[#D4AF37] -skew-x-12"></div>
        </h2>
      </div>

      <OrnateBorder className="p-4 sm:p-8 shadow-[0_0_25px_rgba(212,175,55,0.1)]">
        <VintageCard className="relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <div className="font-display text-[#3E2C1D] text-[8rem] sm:text-[15rem] font-bold">
              AC
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start p-2 sm:p-6 relative">
            {/* Left content */}
            <div className="relative">
              <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-8 sm:w-12 h-8 sm:h-12">
                <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-[#D4AF37]/10"></div>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#3E2C1D] mb-6">
                <span className="ml-6">&lt; GDGoC TIU /&gt;</span>
              </h3>

              <div className="font-serif space-y-3 sm:space-y-5">
                <p className="text-base sm:text-lg text-[#6B4423] leading-relaxed">
                  Google Developer Groups on Campus – Techno India University (GDGoC TIU)* is a
                  vibrant student community for innovators, developers, and technology enthusiasts.
                  We provide a platform where ideas transform into impactful solutions through
                  collaboration, learning, and creativity.
                </p>
                <p className="text-base sm:text-lg text-[#6B4423] leading-relaxed">
                  At *GDG on Campus TIU, we aim to help students enhance their technical depth and
                  problem-solving abilities by hosting **workshops, hackathons, speaker sessions,
                  and study jams* across various domains such as *Web Development, Android, AI/ML,
                  Cloud, Cybersecurity*, and more. Our peer-to-peer learning environment encourages
                  curiosity, teamwork, and hands-on exploration of Google technologies and beyond.
                </p>
                <p className="text-base sm:text-lg text-[#6B4423] leading-relaxed font-medium">
                  Whether you're a beginner taking your first step into tech or an advanced
                  developer eager to innovate, *GDG TIU* is the space to learn, grow, and make a
                  difference — together as a community. 🌐💡
                </p>
                <div className="KnowMoreAboutKolataBtn  px-4 py-2 sm:py-4 text-center bg-[#3E2C1D] text-[#ecdcb8] rounded-lg">
                  <Link
                    to="https://gdg.community.dev/gdg-on-campus-techno-india-university-kolkata-india/
"
                  >
                    Know More About GDGoC TIU{' '}
                  </Link>
                </div>
                <div className="bg-[#F4E5C2]/50 p-2 sm:p-4 border-l-4 border-[#D4AF37] my-4 sm:my-6">
                  <p className="text-base sm:text-lg text-[#6B4423] leading-relaxed italic">
                    "Join us in pushing boundaries, shaping the future, and making an impact through
                    technology!"
                    <span className="not-italic">⚡🚀</span>
                  </p>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-4 font-serif text-[#3E2C1D] mt-4 sm:mt-8 border-t border-[#3E2C1D]/20 pt-2 sm:pt-4">
                <div className="flex items-center gap-2 transition-all hover:translate-x-2 group">
                  <Globe
                    size={18}
                    className="text-[#D4AF37] group-hover:rotate-12 transition-transform"
                  />
                  <a
                    href="https://gdg.community.dev/gdg-on-campus-techno-india-university-kolkata-india/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B4423] hover:text-[#3E2C1D] underline decoration-[#D4AF37]/30 hover:decoration-[#D4AF37]"
                  >
                    gdg-on-campus-techno-india-university-kolkata-india
                  </a>
                </div>
                <div className="flex items-center gap-2 transition-all hover:translate-x-2 group">
                  <Mail
                    size={18}
                    className="text-[#D4AF37] group-hover:scale-110 transition-transform"
                  />
                  <a href="mailto:gdgoncampus.tiu@gmail.com" className="hover:text-[#D4AF37]">
                    gdgoncampus.tiu@gmail.com
                  </a>
                </div>
                <div className="text-[#6B4423]/90 italic pl-4 sm:pl-6 border-l-2 border-[#D4AF37]/30 mt-1 sm:mt-2">
                  Please follow to stay updated about upcoming events.
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="relative bg-[#F4E5C2]/70 p-4 sm:p-6 border-2 border-[#3E2C1D] rounded-sm shadow-md transform hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -top-3 sm:-top-4 left-3 sm:left-6 bg-[#D4AF37] text-[#3E2C1D] px-2 sm:px-4 py-1 text-xs sm:text-sm font-display font-bold">
                  Our Mission
                </div>
                <div className="grid gap-3 sm:gap-5 mt-2 sm:mt-4">
                  {/* Sections as originally written */}
                  {/* ...rest unchanged */}
                  {/* ... (use responsive font sizes for all text and icons, if needed) */}
                  {/* Collaborative learning */}
                  <div className="flex items-start gap-2 sm:gap-4 group">
                    <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-[#3E2C1D]/10 flex items-center justify-center flex-shrink-0 border-2 border-[#3E2C1D] group-hover:bg-[#3E2C1D]/20 transition-colors">
                      <Users className="text-[#6B4423]" size={20} sm:size={24} />
                    </div>
                    <div>
                      <div className="font-serif font-bold mb-1 text-[#3E2C1D]">
                        Collaborative Community
                      </div>
                      <div className="font-serif text-xs sm:text-sm text-[#6B4423]">
                        Bringing students, developers & innovators together to learn and build.
                      </div>
                    </div>
                  </div>
                  {/* Technical Excellence */}
                  <div className="flex items-start gap-2 sm:gap-4 group">
                    <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-[#3E2C1D]/10 flex items-center justify-center flex-shrink-0 border-2 border-[#3E2C1D] group-hover:bg-[#3E2C1D]/20 transition-colors">
                      <Sparkles className="text-[#D4AF37]" size={20} sm:size={24} />
                    </div>
                    <div>
                      <div className="font-serif font-bold mb-1 text-[#3E2C1D]">
                        Learning & Innovation
                      </div>
                      <div className="font-serif text-xs sm:text-sm text-[#6B4423]">
                        Hosting workshops, ideathons and study-jams to solve real-world problems.
                      </div>
                    </div>
                  </div>
                  {/* Hands-on Experience */}
                  <div className="flex items-start gap-2 sm:gap-4 group">
                    <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-[#3E2C1D]/10 flex items-center justify-center flex-shrink-0 border-2 border-[#3E2C1D] group-hover:bg-[#3E2C1D]/20 transition-colors">
                      <Target className="text-[#6B4423]" size={20} sm:size={24} />
                    </div>
                    <div>
                      <div className="font-serif font-bold mb-1 text-[#3E2C1D]">
                        Hands-on Experience
                      </div>
                      <div className="font-serif text-xs sm:text-sm text-[#6B4423]">
                        Practical projects, peer-learning and community-driven initiatives to build
                        impact
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative bg-[#F4E5C2]/70 p-6 border-2 border-[#3E2C1D] rounded-sm shadow-md overflow-hidden">
                <h4 className="font-display text-lg font-bold text-[#3E2C1D] mb-4 flex items-center">
                  <Award size={20} className="mr-2 text-[##3e2c1d]" /> Connect with GDGoC TIU
                </h4>

                <div className="px-[1.2vw] flex gap-[1.5rem] font-serif">
                  <a
                    href="https://www.facebook.com/gdsctiu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#3E2C1D] hover:underline flex items-center gap-2"
                  >
                    <FaFacebook size={28} className="text-[##3e2c1d]" />
                  </a>

                  <a
                    href="https://x.com/gdsc_tiu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#3E2C1D] hover:underline flex items-center gap-2"
                  >
                    <p className="text-[#3E2C1D] text-[2rem]">X</p>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/gdsc-tiu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#3E2C1D] hover:underline flex items-center gap-2"
                  >
                    <FaLinkedin size={28} className="text-[##3e2c1d]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </VintageCard>
      </OrnateBorder>
    </div>
  </section>
);

export default Cohost;
