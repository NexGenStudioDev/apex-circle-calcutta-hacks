import React from 'react';
import TiltedCard from '../components/ui/TiltedCard';
import { Card } from './Judges';

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
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthispix.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fpassport-023.jpg&f=1&nofb=1&ipt=f41f557698c48f98ec9b50d56f7ac818cdfed809238ae924f449aa2cf19c5717',
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

                {/* Coming Soon Cards */}
                <div className="group [perspective:1000px]">
                  <div className="relative transform-gpu transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl [transform-style:preserve-3d]">
                    <Card className="bg-[#ebdbb9]">
                      <div className="flex flex-col items-center text-center py-16">
                        <div className="font-display text-2xl font-bold text-[#3E2C1D]">
                          Coming Soon...
                        </div>
                      </div>
                    </Card>
                    <div
                      className="absolute inset-0 rounded-lg ring-1 ring-[#6B44234D] translate-y-2 blur-sm opacity-0 group-hover:opacity-100 transition"
                      aria-hidden
                    ></div>
                  </div>
                </div>
                {/* Tilted Card  Apply Here */}
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

{
  /* <TiltedCard */
}
// key={index}
// imageSrc={mentor.imageSrc}
// altText={`${mentor.name} - ${mentor.role}`}
// captionText={mentor.name}
// containerHeight="380px"
// containerWidth='250px'
// imageHeight="350px"
// imageWidth="250px"
// rotateAmplitude={1}
// scaleOnHover={1.05}
// showMobileWarning={false}
// showTooltip={false}
// displayOverlayContent={true}
// overlayContent={
//   <>
//     <div className="absolute w-[250px] h-[350px] z-50 bg-gradient-to-t from-[#3E2C1D]/95 via-[#3E2C1D]/70 to-transparent opacity-0 flex flex-col justify-between items-start p-5 rounded-[15px] group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
//       {/* Top section with emoji */}
//       <div className="w-full">
//         <span className="block text-5xl mb-2 drop-shadow-lg filter saturate-150 transform -translate-y-1 opacity-90 group-hover:opacity-100 transition-all duration-500">
//           {mentor.emoji}
//         </span>

//         <div className="mt-2">
//           <span className="inline-block px-3 py-1 bg-[#D4AF37] text-[#3E2C1D] text-xs font-semibold tracking-wider uppercase rounded-full font-display">
//             {mentor.badge}
//           </span>
//         </div>
//       </div>

//       {/* Bottom section with details */}
//       <div className="flex flex-col w-full">
//         <h3 className="font-display text-2xl font-bold text-[#F4E5C2] mb-1 tracking-wide">
//           {mentor.name}
//         </h3>

//         <p className="font-serif text-md text-[#D4AF37] mb-2 italic">
//           {mentor.role}
//         </p>

//         <div className="bg-[#F4E5C2]/10 px-3 py-2 rounded-md mb-4 border-l-2 border-[#D4AF37]">
//           <p className="text-sm text-[#F4E5C2] font-sans leading-snug">
//             <span className="text-[#D4AF37] font-medium">Specialty:</span>{' '}
//             {mentor.specialty}
//           </p>
//         </div>

//         <div className="flex justify-between gap-2 w-full">
//           <a
//             href={`mailto:${mentor.name.toLowerCase().replace(' ', '.')}@calcuttahacks.com`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex-1 text-center text-sm text-[#3E2C1D] py-2 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C2] font-medium rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:from-[#F4E5C2] hover:to-[#D4AF37] tracking-wide"
//           >
//             Contact
//           </a>

//           <a
//             href={mentor.linkedin}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex-1 text-center text-sm text-[#F4E5C2] py-2 bg-[#3E2C1D] border border-[#D4AF37] font-medium rounded-md transition-all duration-300 hover:bg-[#D4AF37]/20 hover:border-[#F4E5C2] hover:text-[#F4E5C2] tracking-wide"
//           >
//             LinkedIn
//           </a>
//         </div>
//       </div>
//     </div>
// </>
// }
// className="border-2 border-[#3E2C1D]/20 shadow-lg"
// />
