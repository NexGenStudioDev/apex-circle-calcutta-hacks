import React from 'react';
import LogoLoop from '../components/ui/LogoLoop';
import allSponsors from '../Constant/Sponsor.constant';

const Sponsor = () => {
  return (
    <div
      className="flex items-center justify-center my-[5vh]"
      style={{ height: '200px', position: 'relative', overflow: 'hidden' }}
    >
      <LogoLoop
        logos={allSponsors}
        speed={120}
        direction="left"
        logoHeight={55}
        gap={45}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#D6C7A4"
        ariaLabel="Technology partners"
      />
    </div>
  );
};

export default Sponsor;
