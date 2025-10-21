import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const TimelineEvent = ({
  time,
  title,
  description,
  icon,
  isActive,
  onClick,
  isLast,
  activeTab,
}) => {
  const eventRef = useRef(null);

  useEffect(() => {
    gsap.set(eventRef.current, {
      opacity: 0,
      x: -50,
    });
  }, []);

  return (
    <div
      ref={eventRef}
      className={`timeline-event flex mb-8 cursor-pointer group transition-all duration-300 ${isActive ? 'scale-105' : 'hover:scale-102'}`}
      onClick={onClick}
    >
      <div className="relative flex items-center justify-center flex-shrink-0">
        <div
          className={`w-16 h-16 rounded-full bg-[#3e2d1c] flex items-center justify-center z-10 shadow-xl 
          ${isActive ? 'ring-4 ring-[#b09355] ring-opacity-50' : 'group-hover:shadow-[0_0_15px_rgba(176,147,85,0.5)]'} 
          transition-all duration-300`}
        >
          {icon}
        </div>
        {!isLast && (
          <div className="absolute w-1 bg-gradient-to-b from-[#b09355] to-[#d0b87c] h-full top-16 -translate-x-0 z-0"></div>
        )}
      </div>

      <div
        className={`m-3 p-8  border-4 border-[#3E2C1D]  aged-paper  transition-all duration-300 w-[90%]
          ${
            isActive
              ? 'bg-[#3e2d1c] text-white shadow-[0_10px_25px_-5px_rgba(62,45,28,0.3)]'
              : 'bg-[#f9f3e3] hover:bg-[#ece6d6] shadow-md hover:shadow-lg'
          }`}
      >
        <div className="flex justify-between items-center">
          <span
            className={`font-mono font-bold text-sm px-4 py-1 rounded-full 
            ${isActive ? 'bg-[#b09355] text-white' : 'bg-[#3e2d1c] text-[#f9f3e3]'}`}
          >
            {time}
          </span>

          {isActive && (
            <span className="text-[#b09355] text-sm font-medium px-3 py-1 rounded-full border border-[#b09355]">
              {activeTab === 0 ? 'Day 1' : 'Day 2'}
            </span>
          )}
        </div>

        <h3 className={`text-2xl font-bold mt-3 ${isActive ? 'text-[#b09355]' : 'text-[#3e2d1c]'}`}>
          {title}
        </h3>

        {isActive && (
          <p className="mt-3 leading-relaxed text-[#3e1d1c] opacity-90">{description}</p>
        )}
      </div>
    </div>
  );
};

export default TimelineEvent;
