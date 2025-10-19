import React from 'react';

const Theme = ({ children }) => {
  return (
    <div
      className="
        w-screen min-h-screen overflow-x-hidden flex flex-col
        bg-[#f3e5c1]
        [background-image:radial-gradient(#d4b87a_0.8px,transparent_1px)]
        [background-size:16px_16px]
      "
    >
      {children}
    </div>
  );
};

export default Theme;
