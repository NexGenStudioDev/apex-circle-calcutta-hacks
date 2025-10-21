const SocialIcons = ({ icons, position = 'left' }) => {
  const positionClasses =
    position === 'left'
      ? '  left-1 sm:left-0 md:left-2.5 lg:left-4'
      : 'right-1 sm:right-0 md:right-2.5 lg:right-4';

  return (
    <div
      className={` absolute top-1/2 ${positionClasses} transform -translate-y-1/2 flex flex-col gap-6 z-20 `}
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
