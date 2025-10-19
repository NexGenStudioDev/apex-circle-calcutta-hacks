import React from 'react';
import SpotlightCard from '../components/ui/SpotlightCard';

import aboutHighlights from '../Constant/aboutHighlights';

const About = () => {
  return (
    <div className="w-full min-h-screen py-16 flex items-center flex-col">
      <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
        <h1 className="text-5xl font-bold text-[#3f2e1f]">
          What is Calcutta
          <span className="py-1 px-3 mx-2 text-[#07a6b5] bg-[#f9f3e3] font-bold rounded shadow-sm">
            &lt;Hacks/&gt;
          </span>
          1.0?
        </h1>

        <p className="text-lg mt-8 text-[#4f3c24] leading-8">
          Calcutta &lt;Hacks/&gt; 1.0 is Kolkata's very own 24-hour hackathon, celebrating the
          vibrant fusion of code and culture. Set against the backdrop of a city renowned for its
          intellectual legacy, artistic soul, and unbreakable spirit, this event unites innovators,
          coders, and creators to build meaningful solutions in an energetic sprint.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-12">
          {aboutHighlights.map((highlight, index) => (
            <SpotlightCard
              key={index}
              className="p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 !bg-[#9c7c38] border-2 border-[#6c511b]"
              spotlightColor={highlight.spotlightColor}
            >
              <div className="flex flex-col">
                {highlight.icon}
                <h2 className="text-2xl font-semibold mb-4 text-[#2a1e08]">{highlight.title}</h2>
                <p className="text-[#2a1e08] leading-7">{highlight.description}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className="mt-10 mb-8">
          <SpotlightCard
            className="p-8 w-full rounded-xl hover:shadow-lg transition-shadow duration-300 !bg-[#bc984e] border-2 border-[#6c511b]"
            spotlightColor="#6c511b"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#2a1e08]">Why Participate?</h2>
              <p className="text-[#3e2a0c] leading-7">
                Immerse yourself in a dynamic environment where collaboration meets competition.
                Gain hands-on experience, connect with industry experts, and showcase your skills on
                a grand stage. Whether you're a seasoned hacker or a curious beginner, Calcutta
                &lt;Hacks/&gt; 1.0 offers an unparalleled opportunity to innovate, learn, and grow.
              </p>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default About;
