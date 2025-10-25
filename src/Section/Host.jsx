import React from 'react';
import { Mail, Target, Sparkles, Users, Globe, Award } from 'lucide-react';
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
            {/* LEFT SECTION */}
            <div className="relative">
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#3E2C1D] mb-6">
                <span className="ml-6">&lt; Apex Circle /&gt;</span>
              </h3>

              <div className="font-serif space-y-5">
                <p className="text-base sm:text-lg text-[#6B4423] leading-relaxed">
                  A community for innovators, problem-solvers, and technology enthusiasts.
                </p>
                <p className="text-base sm:text-lg text-[#6B4423] leading-relaxed">
                  From hackathons to workshops and hands-on projects, Apex Circle gathers people
                  passionate about Deep Tech and emerging technologies.
                </p>
                <p className="text-base sm:text-lg text-[#6B4423] font-medium">
                  Beginners to experts. Everyone grows here.
                </p>

                <div className="KnowMoreAboutKolataBtn px-4 py-2 sm:py-4 text-center bg-[#3E2C1D] text-[#ecdcb8] rounded-lg">
                  <Link to="/about-kolkata">Know More About Calcutta</Link>
                </div>

                <div className="bg-[#F4E5C2]/50 p-4 border-l-4 border-[#D4AF37] my-6 italic text-[#6B4423]">
                  "Join us in shaping the future through tech!" ⚡🚀
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-4 font-serif text-[#3E2C1D] mt-8 border-t border-[#3E2C1D]/20 pt-4">
                <div className="flex items-center gap-2 group">
                  <Globe
                    size={18}
                    className="text-[#D4AF37] group-hover:rotate-12 transition-transform"
                  />
                  <a
                    href="https://bento.me/apex-circle-official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[#D4AF37]/30 hover:decoration-[#D4AF37]"
                  >
                    bento.me/apex-circle-official
                  </a>
                </div>
                <div className="flex items-center gap-2 group">
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
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex flex-col gap-6">
              {/* Mission */}
              <div className="relative bg-[#F4E5C2]/70 p-6 border-2 border-[#3E2C1D] rounded-sm shadow-md">
                <div className="absolute -top-4 left-4 bg-[#D4AF37] text-[#3E2C1D] px-4 py-1 text-xs sm:text-sm font-display font-bold">
                  Our Mission
                </div>

                <div className="grid gap-5 mt-4">
                  <div className="flex items-start gap-3">
                    <Users className="text-[#6B4423]" size={22} />
                    <div>
                      <div className="font-serif font-bold text-[#3E2C1D]">
                        Collaborative Learning
                      </div>
                      <div className="font-serif text-sm text-[#6B4423]">
                        Community of innovators
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sparkles className="text-[#D4AF37]" size={22} />
                    <div>
                      <div className="font-serif font-bold text-[#3E2C1D]">
                        Technical Excellence
                      </div>
                      <div className="font-serif text-sm text-[#6B4423]">
                        AI, Cybersecurity, Deep Tech
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Target className="text-[#6B4423]" size={22} />
                    <div>
                      <div className="font-serif font-bold text-[#3E2C1D]">Hands-on Experience</div>
                      <div className="font-serif text-sm text-[#6B4423]">Workshops & Projects</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Section */}
              <div className="relative bg-[#F4E5C2]/70 p-6 border-2 border-[#3E2C1D] rounded-sm shadow-md overflow-hidden">
                <h4 className="font-display text-lg font-bold text-[#3E2C1D] mb-4 flex items-center">
                  <Award size={20} className="mr-2 text-[#D4AF37]" /> Connect with Apex Circle
                </h4>

                <div className="flex flex-col gap-3 font-serif">
                  <a
                    href="https://discord.com/channels/1430501551306444844/1430503120500166729"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#3E2C1D] hover:underline"
                  >
                    🔹 Join our Discord Community
                  </a>

                  <a
                    href="https://www.linkedin.com/company/apex-circle-official/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#3E2C1D] hover:underline"
                  >
                    🔹 Follow us on LinkedIn
                  </a>

                  <a
                    href="https://chat.whatsapp.com/ENhpfDXhjnF1x72DbMLcne?mode=wwc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#3E2C1D] hover:underline"
                  >
                    🔹 Join our WhatsApp Group
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

export default Host;
