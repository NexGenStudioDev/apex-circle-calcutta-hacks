import React from 'react';
import { Mail, Target, Sparkles, Users, Globe, Calendar, Award } from 'lucide-react';
import OrnateBorder from '../components/OrnateBorder';
import { VintageCard } from './Tracks';
import { Link } from 'react-router';

const Host = () => (
  <section id="host" className="py-20 relative bg-[#F4E5C2]/20 overflow-hidden">
    <div className="absolute top-0 left-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

    <div className="absolute top-10 left-10 w-12 h-12 border-t-4 border-l-4 border-[#D4AF37]/30"></div>
    <div className="absolute bottom-10 right-10 w-12 h-12 border-b-4 border-r-4 border-[#D4AF37]/30"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-[#3E2C1D] mb-4 relative inline-block">
          ABOUT THE CO-HOST
          <div className="absolute -bottom-4 left-0 w-full h-1 bg-[#D4AF37] transform -skew-x-12"></div>
          <div className="absolute -bottom-4 left-1/4 w-1/2 h-1 bg-[#D4AF37] transform skew-x-12 mt-3"></div>
        </h2>
      </div>

      <OrnateBorder className="p-8 shadow-[0_0_25px_rgba(212,175,55,0.1)]">
        <VintageCard className="relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <div className="font-display text-[#3E2C1D] text-[15rem] font-bold">AC</div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start p-6 relative">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-12 h-12">
                <div className="absolute top-0 left-0 w-full h-full border-t-4 border-l-4 border-[#D4AF37]"></div>
                <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-[#D4AF37]/10"></div>
              </div>

              <h3 className="font-display text-4xl font-bold text-[#3E2C1D] mb-6 relative group">
                <span className="ml-[1.5rem]"> Apex Circle</span>
                <span className="absolute -left-4 top-[40%] -translate-y-1/2 text-[#D4AF37] opacity-70">
                  &lt;{' '}
                </span>
                <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-[#D4AF37] opacity-70">
                  /&gt;
                </span>
                <div className="w-24 h-1 bg-[#D4AF37]/70 mt-3"></div>
              </h3>

              <div className="font-serif space-y-5">
                <p className="text-lg text-[#6B4423] leading-relaxed">
                  A community for innovators, problem-solvers, and technology enthusiasts. We
                  provide a platform where ideas transform into solutions through collaboration,
                  learning, and skill development.
                </p>

                <p className="text-lg text-[#6B4423] leading-relaxed">
                  From hackathons to workshops and hands-on projects, Apex Circle brings together
                  individuals passionate about coding, AI, cybersecurity, Deep Tech and emerging
                  technologies.
                </p>

                <p className="text-lg text-[#6B4423] leading-relaxed font-medium">
                  Whether you're a beginner or an expert, this is a space to learn, grow, and create
                  alongside like-minded individuals.
                </p>

                <div className="KnowMoreAboutKolataBtn bg-red-400 px-2 py-4">
                  <Link to="/about-kolkata">Know More About Kolkara</Link>
                </div>

                <div className="bg-[#F4E5C2]/50 p-4 border-l-4 border-[#D4AF37] my-6">
                  <p className="text-lg text-[#6B4423] leading-relaxed italic">
                    "Join us in pushing boundaries, shaping the future, and making an impact through
                    technology!"
                    <span className="not-italic">⚡🚀</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4 font-serif text-[#3E2C1D] mt-8 border-t border-[#3E2C1D]/20 pt-4">
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
                <div className="text-[#6B4423]/90 italic pl-6 border-l-2 border-[#D4AF37]/30 mt-2">
                  Please follow to stay updated about upcoming events.
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="relative bg-[#F4E5C2]/70 p-6 border-2 border-[#3E2C1D] rounded-sm shadow-md transform hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -top-4 left-6 bg-[#D4AF37] text-[#3E2C1D] px-4 py-1 text-sm font-display font-bold">
                  Our Mission
                </div>

                <div className="grid gap-5 mt-4">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-[#3E2C1D]/10 flex items-center justify-center flex-shrink-0 border-2 border-[#3E2C1D] group-hover:bg-[#3E2C1D]/20 transition-colors">
                      <Users className="text-[#6B4423]" size={24} />
                    </div>
                    <div>
                      <div className="font-serif font-bold mb-1 text-[#3E2C1D]">
                        Collaborative learning
                      </div>
                      <div className="font-serif text-sm text-[#6B4423]">
                        Building a community of problem-solvers and innovators
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-[#3E2C1D]/10 flex items-center justify-center flex-shrink-0 border-2 border-[#3E2C1D] group-hover:bg-[#3E2C1D]/20 transition-colors">
                      <Sparkles className="text-[#D4AF37]" size={24} />
                    </div>
                    <div>
                      <div className="font-serif font-bold mb-1 text-[#3E2C1D]">
                        Technical Excellence
                      </div>
                      <div className="font-serif text-sm text-[#6B4423]">
                        Focus on AI, cybersecurity, and Deep Tech innovations
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-[#3E2C1D]/10 flex items-center justify-center flex-shrink-0 border-2 border-[#3E2C1D] group-hover:bg-[#3E2C1D]/20 transition-colors">
                      <Target className="text-[#6B4423]" size={24} />
                    </div>
                    <div>
                      <div className="font-serif font-bold mb-1 text-[#3E2C1D]">
                        Hands-on Experience
                      </div>
                      <div className="font-serif text-sm text-[#6B4423]">
                        Workshops, hackathons, and practical projects
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative bg-[#F4E5C2]/70 p-6 border-2 border-[#3E2C1D] rounded-sm shadow-md overflow-hidden">
                <div className="absolute -top-6 -right-6 w-16 h-16 border-8 border-[#D4AF37]/20 rounded-full"></div>

                <div className="relative">
                  <h4 className="font-display text-lg font-bold text-[#3E2C1D] mb-5 flex items-center">
                    <Award size={20} className="mr-2 text-[#D4AF37]" />
                    Connect with Apex Circle
                  </h4>

                  <div className="flex gap-4 mb-6">
                    <a
                      href="https://linkedin.com/company/apex-circle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                      aria-label="LinkedIn"
                    >
                      <div className="w-14 h-14 flex items-center justify-center border-2 border-[#3E2C1D] rounded-sm hover:bg-[#3E2C1D] text-[#3E2C1D] hover:text-[#F4E5C2] transition-colors relative overflow-hidden group-hover:-translate-y-1 transform ">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                        </svg>
                        <span className="sr-only">LinkedIn</span>
                      </div>
                    </a>

                    <a
                      href="https://twitter.com/apexcircle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                      aria-label="Twitter"
                    >
                      <div className="w-14 h-14 flex items-center justify-center border-2 border-[#3E2C1D] rounded-sm hover:bg-[#3E2C1D] text-[#3E2C1D] hover:text-[#F4E5C2] transition-colors relative overflow-hidden group-hover:-translate-y-1 transform ">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                        </svg>
                        <span className="sr-only">Twitter</span>
                      </div>
                    </a>

                    <a
                      href="https://instagram.com/apexcircle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                      aria-label="Instagram"
                    >
                      <div className="w-14 h-14 flex items-center justify-center border-2 border-[#3E2C1D] rounded-sm hover:bg-[#3E2C1D] text-[#3E2C1D] hover:text-[#F4E5C2] transition-colors relative overflow-hidden group-hover:-translate-y-1 transform ">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                        </svg>
                        <span className="sr-only">Instagram</span>
                      </div>
                    </a>

                    <a
                      href="https://github.com/apex-circle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                      aria-label="GitHub"
                    >
                      <div className="w-14 h-14 flex items-center justify-center border-2 border-[#3E2C1D] rounded-sm hover:bg-[#3E2C1D] text-[#3E2C1D] hover:text-[#F4E5C2] transition-colors relative overflow-hidden group-hover:-translate-y-1 transform ">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span className="sr-only">GitHub</span>
                      </div>
                    </a>
                  </div>

                  <div className="mt-4 mb-0 bg-[#3E2C1D]/5 p-4 rounded-sm border-l-2 border-[#D4AF37]">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={18} className="text-[#D4AF37]" />
                      <span className="font-serif font-medium">Upcoming Events</span>
                    </div>
                    <div className="font-serif text-sm text-[#6B4423] pl-6">
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
