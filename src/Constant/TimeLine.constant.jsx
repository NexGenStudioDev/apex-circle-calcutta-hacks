import {
  FaUserCheck,
  FaFlag,
  FaCode,
  FaUsers,
  FaUtensils,
  FaGamepad,
  FaPeopleArrows,
  FaTrophy,
  FaLaptopCode,
  FaClipboardCheck,
  FaMusic,
  FaMedal,
  FaMugHot,
  FaCalendarAlt,
} from 'react-icons/fa';

export const day1Events = [
  {
    time: '10:30 AM',
    title: 'Registration',
    description:
      'Registration desk opens. Collect your badges, swag bags, and get ready for an exciting hackathon experience!',
    icon: <FaUserCheck className="text-[#b09355] text-2xl" />,
  },
  {
    time: '11:30 AM',
    title: 'Opening Ceremony',
    description:
      'Welcome address, introduction of judges and mentors, and a brief overview of the hackathon rules and expectations.',
    icon: <FaFlag className="text-[#b09355] text-2xl" />,
  },
  {
    time: '12:00 PM',
    title: 'Sponsor Session',
    description:
      'Engage with our sponsors to learn about their products and services, and how they can help you during the hackathon.',
    icon: <FaCode className="text-[#b09355] text-2xl" />,
  },
  {
    time: '1:00 PM',
    title: 'Hackathon Starts',
    description:
      'The clock starts ticking! Begin working on your innovative solutions to the hackathon challenges.',
    icon: <FaUsers className="text-[#b09355] text-2xl" />,
  },
  {
    time: '1:30 PM',
    title: 'Lunch',
    description:
      'Refuel with a delicious lunch while discussing project ideas with fellow participants.',
    icon: <FaUtensils className="text-[#b09355] text-2xl" />,
  },
  {
    time: '3:00 PM',
    title: 'Organizer On Round',
    description:
      'Join the organizers for a quick check-in and share your progress. Get any questions answered and stay on track.',
   icon: <FaPeopleArrows className="text-[#b09355] text-2xl" />,
  },
  {
    time: '4:00 PM',
    title: 'Mentoring',
    description:
      'Connect with mentors for guidance, feedback, and support to help you refine your project and overcome challenges.',
    icon: <FaPeopleArrows className="text-[#b09355] text-2xl" />,
  },
  {
    time: '5:30 PM',
    title: 'Tea Break',
    description: 'Take a short break from coding with our surprise fun activity to refresh your mind.',
    icon: <FaMugHot className="text-[#b09355] text-2xl" />,
  },
  { 
     time: '8:30 PM',
    title: 'Dinner',
    description: 'Refuel with a delicious dinner while discussing project ideas with fellow participants.',
    icon: <FaUtensils className="text-[#b09355] text-2xl" />,
  },
  {
     time: '10:00 PM',
    title: 'Evaluation Round 1',
    description: 'Present your progress to the judges and receive feedback to improve your project further.',
    icon: <FaLaptopCode className="text-[#b09355] text-2xl" />,
  },
];

export const day2Events = [
  {
    time: '12:00 AM',
    title: 'Music & Midnight Snacks',
    description: 'Enjoy some music and snacks to keep your energy up during the night.',
    icon: <FaMusic className="text-[#b09355] text-2xl" />,  
  },
  {
    time: '1:00 AM',
    title: 'Mini Games',
    description:
      'Another engaging activity to keep the energy high as we progress into the night',
    icon: <FaGamepad className="text-[#b09355] text-2xl" />,
  },
  {
    time: '8:00 AM',
    title: 'Breakfast',
    description: 'Final breakfast before the submission deadline. Make the most of it!',
    icon: <FaUtensils className="text-[#b09355] text-2xl" />,
  },
  {
    time: '9:00 AM',
    title: 'Submissions Starts',
    description: 'Time to finalize your projects and submit them for evaluation.',
    icon: <FaLaptopCode className="text-[#b09355] text-2xl" />,
  },
  {
    time: '10:00 AM',
    title: 'Final Evaluation Round',
    description:
      'Present your solutions to the judges and demonstrate how your project addresses the challenge.',
    icon: <FaLaptopCode className="text-[#b09355] text-2xl" />,
  },
  {
    time: '11:00 AM',
    title: 'Submission Ends',
    description:
      'All projects must be submitted by this time for final evaluation.',
    icon: <FaClipboardCheck className="text-[#b09355] text-2xl" />,
  },
  {
    time: '11:15 AM',
    title: 'Technical Conference/Speaker',
    description:
      'Engaging talks from industry experts to inspire and educate participants.',
    icon: <FaCalendarAlt className="text-[#b09355] text-2xl" />,
  },
  {
    time: '12:00 PM',
    title: 'Top 5 Pitching',
    description:
      'The top 5 teams will present their projects to the judges and audience.',
    icon: <FaTrophy className="text-[#b09355] text-2xl" />,
  },
  {
    time: '12:30 PM',
    title: 'Result Declaration',
    description:
      'Announcing the winners based on the judges’ evaluations and criteria set forth at the beginning of the hackathon.',
    icon: <FaClipboardCheck className="text-[#b09355] text-2xl" />,
  },
  {
    time: '1:00 PM',
    title: 'Closing Ceremony',
    description:
      "Announcement of winners, prize distribution, and closing remarks to celebrate everyone's achievements.",
    icon: <FaMedal className="text-[#b09355] text-2xl" />,
  },
];
