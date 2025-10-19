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
  FaMedal,
  FaMugHot,
  FaCalendarAlt,
} from 'react-icons/fa';

export const day1Events = [
  {
    time: '07:30 AM',
    title: 'Check-in Starts',
    description:
      'Registration desk opens. Collect your badges, swag bags, and get ready for an exciting hackathon experience!',
    icon: <FaUserCheck className="text-[#b09355] text-2xl" />,
  },
  {
    time: '08:00 AM',
    title: 'Opening Ceremony',
    description:
      'Welcome address, introduction of judges and mentors, and a brief overview of the hackathon rules and expectations.',
    icon: <FaFlag className="text-[#b09355] text-2xl" />,
  },
  {
    time: '08:30 AM',
    title: 'Hacking Starts',
    description:
      'The clock starts ticking! Begin working on your innovative solutions to the hackathon challenges.',
    icon: <FaCode className="text-[#b09355] text-2xl" />,
  },
  {
    time: '09:00 AM',
    title: 'Team Building',
    description:
      'Networking session for participants looking to form teams. Find collaborators with complementary skills.',
    icon: <FaUsers className="text-[#b09355] text-2xl" />,
  },
  {
    time: '12:00 PM',
    title: 'Lunch Break',
    description:
      'Refuel with a delicious lunch while discussing project ideas with fellow participants.',
    icon: <FaUtensils className="text-[#b09355] text-2xl" />,
  },
  {
    time: '15:30 PM',
    title: 'Fun Event 1',
    description:
      'Take a short break from coding with our surprise fun activity to refresh your mind.',
    icon: <FaGamepad className="text-[#b09355] text-2xl" />,
  },
  {
    time: '17:00 PM',
    title: 'Hacker Hangout',
    description:
      'Informal networking session with mentors, sponsors, and other participants to exchange ideas.',
    icon: <FaPeopleArrows className="text-[#b09355] text-2xl" />,
  },
  {
    time: '20:00 PM',
    title: 'Fun Event 2',
    description: 'Another engaging activity to keep the energy high as we progress into the night.',
    icon: <FaGamepad className="text-[#b09355] text-2xl" />,
  },
];

export const day2Events = [
  {
    time: '08:00 AM',
    title: 'Breakfast',
    description: 'Start your day with a nutritious breakfast to fuel your coding marathon.',
    icon: <FaMugHot className="text-[#b09355] text-2xl" />,
  },
  {
    time: '09:30 AM',
    title: 'Checkpoint Reviews',
    description:
      'Mentors will be available to provide feedback on your progress and help overcome challenges.',
    icon: <FaClipboardCheck className="text-[#b09355] text-2xl" />,
  },
  {
    time: '12:00 PM',
    title: 'Lunch Break',
    description: 'Final lunch break before the submission deadline. Make the most of it!',
    icon: <FaUtensils className="text-[#b09355] text-2xl" />,
  },
  {
    time: '14:00 PM',
    title: 'Submissions Close',
    description: 'Time to finalize your projects and submit them for evaluation.',
    icon: <FaLaptopCode className="text-[#b09355] text-2xl" />,
  },
  {
    time: '15:00 PM',
    title: 'Demos & Judging',
    description:
      'Present your solutions to the judges and demonstrate how your project addresses the challenge.',
    icon: <FaTrophy className="text-[#b09355] text-2xl" />,
  },
  {
    time: '18:00 PM',
    title: 'Closing Ceremony',
    description:
      "Announcement of winners, prize distribution, and closing remarks to celebrate everyone's achievements.",
    icon: <FaMedal className="text-[#b09355] text-2xl" />,
  },
];
