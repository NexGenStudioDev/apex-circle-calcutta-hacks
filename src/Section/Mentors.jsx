import React from 'react';
import TiltedCard from '../components/ui/TiltedCard';

const Mentors = () => {
  const mentors = [
    {
      name: 'Aarav Mehta',
      role: 'Full‑Stack Engineer',
      badge: 'Web & Cloud',
      emoji: '🧑‍💻',
      imageSrc: 'https://i.pinimg.com/originals/6b/7e/d6/6b7ed698713c09ad9e6afc7dcb996a09.jpg',
      specialty: 'React, Node.js, AWS',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'Riya Sen',
      role: 'AI/ML Researcher',
      badge: 'GenAI & Vision',
      emoji: '🤖',
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ660LsnFb1wVZY7p1kf1L0ebBuK_boGfyW6g&s',
      specialty: 'PyTorch, Computer Vision',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'Kabir Das',
      role: 'Security Architect',
      badge: 'Cybersecurity',
      emoji: '🛡️',
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-qeOL2c7j2wEnTOKiMvA0EuJ0s5y2I66S2JPF8U5vszQ05nvRJgk-9e921GMBqVUKeo&usqp=CAU',
      specialty: 'Pentesting, Blockchain Security',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'Meera Iyer',
      role: 'Product Designer',
      badge: 'UX & Systems',
      emoji: '🎨',
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc1hbQctKmCYvLezPKBTcQkdZmTaCbaSQ2w&s',
      specialty: 'Figma, Design Systems',
      linkedin: 'https://linkedin.com',
    },
  ];

  return (
    <section id="mentors" className="py-20 bg-[#ebdbb9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#3E2C1D] mb-4">
            MENTORS
          </h2>
          <div className="w-32 h-1 bg-[#D4AF37] mx-auto"></div>
          <p className="font-serif text-xl text-[#6B4423] mt-6">
            Guiding your builds with real‑world expertise
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="flex justify-center group">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-10 h-10 border-t-4 border-l-4 border-[#D4AF37] rounded-tl-lg z-10"></div>
                <div className="absolute -top-2 -right-2 w-10 h-10 border-t-4 border-r-4 border-[#D4AF37] rounded-tr-lg z-10"></div>
                <div className="absolute -bottom-2 -left-2 w-10 h-10 border-b-4 border-l-4 border-[#D4AF37] rounded-bl-lg z-10"></div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-4 border-r-4 border-[#D4AF37] rounded-br-lg z-10"></div>

                <div className="absolute inset-0 translate-y-4 translate-x-4 bg-[#3E2C1D]/20 blur-md rounded-lg transform transition-all duration-500 group-hover:translate-y-6 group-hover:translate-x-6"></div>

                <TiltedCard
                  imageSrc={mentor.imageSrc}
                  altText={`${mentor.name} - ${mentor.role}`}
                  captionText={mentor.name}
                  containerHeight="380px"
                  containerWidth="250px"
                  imageHeight="350px"
                  imageWidth="250px"
                  rotateAmplitude={9}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="relative h-full w-full">
                      <div className="absolute top-0 left-0 w-full p-3 bg-gradient-to-b from-[#3E2C1D]/70 to-transparent">
                        <div className="font-display text-xl font-bold text-[#F4E5C2] text-center">
                          {mentor.name}
                        </div>
                      </div>

                      <div className="absolute top-14 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="bg-[#D4AF37]/80 backdrop-blur-sm px-3 py-1 rounded-r-full shadow">
                          <span
                            className="font-serif text-xs        
                      {/* Emoji badge (center, visible on hover) */}text-[#3E2C1D] font-medium"
                          >
                            {mentor.role}
                          </span>
                        </div>
                      </div>

                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                        <div className="w-16 h-16 rounded-full bg-[#F4E5C2]/80 backdrop-blur-sm border-2 border-[#3E2C1D] flex items-center justify-center text-3xl shadow-xl">
                          <span aria-hidden>{mentor.emoji}</span>
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#3E2C1D]/90 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="mb-2 text-center">
                          <span className="text-xs text-[#F4E5C2] bg-[#3E2C1D]/80 px-3 py-1 rounded-full inline-block">
                            {mentor.specialty}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <a
                            href={`mailto:${mentor.name.toLowerCase().replace(' ', '.')}@calcuttahacks.com`}
                            className="flex items-center gap-1 text-xs font-medium text-[#D4AF37] hover:text-[#F4E5C2] transition-colors"
                          >
                            <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            Email
                          </a>

                          <a
                            href={mentor.linkedin}
                            className="flex items-center gap-1 text-xs font-medium text-[#D4AF37] hover:text-[#F4E5C2] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                            </svg>
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    </div>
                  }
                  className="border-2 border-[#3E2C1D]/20 shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="relative inline-flex items-center px-8 py-3 bg-[#3E2C1D] border-2 border-[#3E2C1D] text-[#F4E5C2] font-display font-bold hover:bg-[#6B4423] hover:border-[#6B4423] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
            <span className="absolute inset-0 w-0 bg-[#D4AF37]/20 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative">VIEW ALL MENTORS</span>
            <svg
              className="ml-2 w-5 h-5 relative transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
