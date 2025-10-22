const SocialIcons = ({ icons, position = 'left' }) => {
  const positionClasses =
    position === 'left'
      ? '  left-1 sm:hidden md:left-[-0.7rem] lg:left-[-1.25rem]'
      : 'right-1 sm:right-[-0.5rem] md:right-[-0.7rem] lg:right-[-1.25rem]';

  return (
    <div
      className={` hidden md:flex  absolute top-1/2 ${positionClasses}  transform -translate-y-1/2 flex flex-col text-center gap-8 z-20  `}
    >
      {icons.map((item, index) => {
        const Icon = item.icon;
        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className=" group transition-transform hover:scale-110"
          >
            <Icon
              size={30}
              className="text-[#3E2C1D] group-hover:text-[#D4AF37] transition-colors duration-300"
            />
          </a>
        );
      })}
    </div>
  );
};
export default SocialIcons;
