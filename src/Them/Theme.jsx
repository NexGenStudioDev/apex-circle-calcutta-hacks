import React, { useRef, useEffect } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

const Theme = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time);
    }

    const rafId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId);
  }, []);

  const lenisOptions = {
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: true,
    touchMultiplier: 3,
  };

  return (
    <ReactLenis ref={lenisRef} root options={lenisOptions}>
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
    </ReactLenis>
  );
};

export default Theme;
