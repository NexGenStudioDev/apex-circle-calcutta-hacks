import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialIcons = () => {
  const icons = [
    { icon: FaInstagram, link: 'https://instagram.com' },
    { icon: FaTwitter, link: 'https://twitter.com' },
    { icon: FaLinkedin, link: 'https://linkedin.com' },
    { icon: FaGithub, link: 'https://github.com' },
  ];

  return (
    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex flex-col gap-6">
      {icons.map((item, index) => {
        const Icon = item.icon;
        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-transform hover:scale-110"
          >
            <Icon
              size={28}
              className="text-[#3E2C1D] group-hover:text-[#D4AF37] transition-colors duration-300"
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
