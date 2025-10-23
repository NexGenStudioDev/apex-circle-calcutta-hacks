import React from 'react';
import { Mail, Target, Sparkles, Users, Globe, Calendar, Award } from 'lucide-react';
import OrnateBorder from '../components/OrnateBorder';
import { VintageCard } from './Tracks';
import { Link } from 'react-router-dom';

const Host = () => (
  <section id="host" className="py-14 sm:py-16 md:py-20 relative bg-[#F4E5C2]/20 overflow-hidden">
    <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#D4AF37]/10 rounded-full blur-2xl sm:blur-3xl"></div>
    <div className="absolute bottom-10 sm:bottom-20 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-[#D4AF37]/5 rounded-full blur-xl sm:blur-3xl"></div>
    <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-8 sm:w-12 h-8 sm:h-12 border-b-4 border-r-4 border-[#D4AF37]/30"></div>

    <div className="max-w-4xl sm:max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-8 sm:mb-16">
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#3E2C1D] mb-4 relative inline-block">
          ABOUT THE HOST
          <div className="absolute -bottom-4 left-0 w-full h-1 bg-[#D4AF37] transform -skew-x-12"></div>
          <div className="absolute -bottom-3 sm:-bottom-4 left-1/4 w-1/2 h-1 bg-[#D4AF37] transform skew-x-12 mt-2 sm:mt-3"></div>
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

              <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#3E2C1D] mb-4 sm:mb-6 relative group">
                <span className="ml-[1rem] sm:ml-[1.5rem]"> Apex Circle</span>
                <span className="absolute left-0 top-[40%] -translate-y-1/2 text-[#D4AF37] opacity-70">
                  &lt;{' '}
                </span>
                <span className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-[#D4AF37] opacity-70">
                  /&gt;
                </span>
                <div className="absolute -bottom-3 sm:-bottom-4 left-3 sm:left-6 w-[30%] h-1 bg-[#D4AF37] transform -skew-x-12"></div>
              </h3>

              <div className="font-serif space-y-3 sm:space-y-5">
                <p className="text-base sm:text-lg text-[#6B4423] leading-relaxed">
                  A community for innovators, problem-solvers, and technology enthusiasts. We
                  provide a platform where ideas transform into solutions through collaboration,
                  learning, and skill development.
                </p>
                <p className="text-base sm:text-lg text-[#6B4423] leading-relaxed">
                  From hackathons to workshops and hands-on projects, Apex Circle brings together
                  individuals passionate about coding, AI, cybersecurity, Deep Tech and emerging
                  technologies.
                </p>
                <p className="text-base sm:text-lg text-[#6B4423] leading-relaxed font-medium">
                  Whether you're a beginner or an expert, this is a space to learn, grow, and create
                  alongside like-minded individuals.
                </p>
                <div className="KnowMoreAboutKolataBtn  px-4 py-2 sm:py-4 text-center bg-[#3E2C1D] text-[#ecdcb8] rounded-lg">
                  <Link to="/about-kolkata">Know More About Calcutta</Link>
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
                    href="https://bento.me/apex-circle-official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B4423] hover:text-[#3E2C1D] underline decoration-[#D4AF37]/30 hover:decoration-[#D4AF37]"
                  >
                    bento.me/apex-circle-official
                  </a>
                </div>
                <div className="flex items-center gap-2 transition-all hover:translate-x-2 group">
                  <Mail
                    size={18}
                    className="text-[#D4AF37] group-hover:scale-110 transition-transform"
                  />
                  <a
                    href="mailto:apexcircleofficial2025@gmail.com"
                    className="hover:text-[#D4AF37]"
                  >
                    apexcircleofficial2025@gmail.com
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
                        Collaborative learning
                      </div>
                      <div className="font-serif text-xs sm:text-sm text-[#6B4423]">
                        Building a community of problem-solvers and innovators
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
                        Technical Excellence
                      </div>
                      <div className="font-serif text-xs sm:text-sm text-[#6B4423]">
                        Focus on AI, cybersecurity, and Deep Tech innovations
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
                        Workshops, hackathons, and practical projects
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social section */}
              <div className="relative bg-[#F4E5C2]/70 p-4 sm:p-6 border-2 border-[#3E2C1D] rounded-sm shadow-md overflow-hidden">
                <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-10 sm:w-16 h-10 sm:h-16 border-4 sm:border-8 border-[#D4AF37]/20 rounded-full"></div>
                <div className="relative">
                  <h4 className="font-display text-base sm:text-lg font-bold text-[#3E2C1D] mb-3 sm:mb-5 flex items-center">
                    <Award size={16} sm:size={20} className="mr-1 sm:mr-2 text-[#D4AF37]" />
                    Connect with Apex Circle
                  </h4>
                  <div className="flex gap-2 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
                    {/* Social links unchanged (svg size can be made responsive as above) */}
                    {/* ... */}
                  </div>
                  <div className="mt-4 mb-0 bg-[#3E2C1D]/5 p-2 sm:p-4 rounded-sm border-l-2 border-[#D4AF37]">
                    <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <Calendar size={16} sm:size={18} className="text-[#D4AF37]" />
                      <span className="font-serif font-medium">Upcoming Events</span>
                    </div>
                    <div className="font-serif text-xs sm:text-sm text-[#6B4423] pl-4 sm:pl-6">
                      Follow our social media for information about upcoming workshops, meetups, and
                      hackathons!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </VintageCard>
      </OrnateBorder>
    </div>
  </section>
);

export default Host;
