import { FaPeopleGroup, FaLightbulb, FaTrophy } from 'react-icons/fa6';

const aboutHighlights = [
  {
    icon: <FaPeopleGroup className="text-5xl mb-4 text-[#2a1e08]" />,
    title: 'Collaborate',
    description:
      'Connect with like-minded innovators, form powerful teams, and leverage diverse skills to tackle complex challenges. Our hackathon provides the perfect environment for meaningful collaborations.',
    spotlightColor: 'rgba(255, 230, 150, 0.4)',
  },
  {
    icon: <FaLightbulb className="text-5xl mb-4 text-[#2a1e08]" />,
    title: 'Create',
    description:
      'Transform your innovative ideas into tangible solutions with mentorship, resources, and a supportive community. Bring your vision to life through code, creativity, and technical excellence.',
    spotlightColor: 'rgba(255, 200, 100, 0.35)',
  },
  {
    icon: <FaTrophy className="text-5xl mb-4 text-[#2a1e08]" />,
    title: 'Celebrate',
    description:
      "Showcase your achievements, win exciting prizes, and celebrate the spirit of innovation. Beyond competition, we honor every participant's contribution to technological advancement.",
    spotlightColor: 'rgba(255, 255, 210, 0.3)',
  },
];

export default aboutHighlights;
