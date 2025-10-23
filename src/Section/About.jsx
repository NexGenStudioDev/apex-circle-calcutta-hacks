import React from 'react';
import { FaLightbulb, FaLandmark, FaTram, FaBus, FaTaxi, FaArchway } from 'react-icons/fa';
import bridge from '../../src/assets/Icon/bridge.png';
import taxi from '../../src/assets/Icon/taxii.png';
import tram from '../../src/assets/Icon/tram.png';
import bluebus from '../../src/assets/Icon/bluebus.png';
import '../App.css';
const About = () => (
  <section id="about" className="py-20 relative bg-[#f4e5c2]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-display text-[5.5vw] lg:text-6xl font-bold text-[#3E2C1D] mb-4">
          ABOUT THE HACKATHON
        </h2>
        <div className="w-32 h-1 bg-[#D4AF37] mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className=" p-2 shadow-lg bg-[#f4e5c2] border-4 border-[#3E2C1D] aged-paper ">
          <div className="inner-border">
            <FaLightbulb className="text-[#D4AF37] mb-4 mx-auto md:mx-0" size={40} />
            <h3 className="font-display text-[3.8vw] sm:text-[2.8vw] lg:text-3xl font-bold text-[#3E2C1D] mb-4 text-center md:text-left">
              A Premium Experience
            </h3>
            <p className="font-serif  text-[3vw] sm:text-[2vw] lg:text-xl  text-[#6B4423] leading-relaxed">
              Calcutta &lt;Hacks/&gt; is India's largest heritage-meets-innovation hackathon,
              bringing together the finest minds from across the country and beyond. Set in the
              cultural capital of India, this event celebrates Kolkata's rich legacy while pushing
              the boundaries of technology.
            </p>
          </div>
        </div>

        <div className=" p-2 shadow-lg bg-[#f4e5c2] border-4 border-[#3E2C1D] aged-paper">
          <div className="inner-border h-full">
            <FaLandmark className="text-[#6B4423] mb-4 mx-auto md:mx-0" size={40} />
            <h3 className="font-display text-[3.8vw] sm:text-[2.8vw] lg:text-3xl font-bold text-[#3E2C1D] mb-4 text-center md:text-left">
              Calcutta's Spirit
            </h3>
            <p className="font-serif text-[3vw] sm:text-[2vw] lg:text-xl  text-[#6B4423] leading-relaxed pb-7">
              From the iconic yellow taxis to the historic trams, from the majestic Howrah Bridge to
              the elegant Victoria Memorial, every element of this hackathon embodies the soul of
              Calcutta - a perfect blend of tradition and progress.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
        {[
          {
            imageSrc: tram,
            label: 'Historic Trams',
            subtitle: 'First in Asia',
          },
          {
            imageSrc: bluebus,
            label: 'Blue Buses',
            subtitle: 'City Symbol',
          },
          {
            imageSrc: taxi,
            label: 'Yellow Taxis',
            subtitle: 'Iconic Rides',
          },
          {
            imageSrc: bridge,
            label: 'Howrah Bridge',
            subtitle: 'Engineering Marvel',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="text-center bg-[#F4E5C2]  p-6 border-2 border-[#3E2C1D] shadow-md aged-paper"
          >
            <div className="flex justify-center align-center w-full">
              <img src={item.imageSrc} alt="" srcset="" className="size-23" />
            </div>
            <div className="font-display font-bold text-[#3E2C1D]">{item.label}</div>
            <div className="font-serif text-sm text-[#6B4423] italic">{item.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
