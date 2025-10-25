import Lenis from 'lenis';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DotGrid from '../components/DotGrid';

const Theme = ({ children }) => {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);



  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  
  gsap.ticker.lagSmoothing(0);

  return (
    <div
      className="
          w-screen min-h-screen overflow-x-hidden flex flex-col
          bg-[#f3e5c1] relative select-none z-0
        "
    >
      <div className="fixed w-full h-full top-0 left-0 z-1">
        <DotGrid
          dotSize={1.9}
          gap={15}
          baseColor="#bc984e"
          activeColor="#3e2d1c"
          proximity={170}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <section className="z-2 select-none relative">{children}</section>
    </div>
  );
};

export default Theme;
