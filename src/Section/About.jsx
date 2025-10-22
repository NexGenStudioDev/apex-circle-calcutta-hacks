import React from 'react';
import { FaLightbulb, FaLandmark, FaTram, FaBus, FaTaxi, FaArchway } from 'react-icons/fa';
import '../App.css';
const About = () => (
  <section id="about" className="py-20 relative bg-[#f4e5c2]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-[#3E2C1D] mb-4">
          ABOUT THE HACKATHON
        </h2>
        <div className="w-32 h-1 bg-[#D4AF37] mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className=" p-3 shadow-lg bg-[#f4e5c2] border-4 border-[#3E2C1D] aged-paper ">
          <div className="inner-border">
            <FaLightbulb className="text-[#D4AF37] mb-4 mx-auto md:mx-0" size={40} />
            <h3 className="font-display text-3xl font-bold text-[#3E2C1D] mb-4 text-center md:text-left">
              A Premium Experience
            </h3>
            <p className="font-serif text-lg text-[#6B4423] leading-relaxed">
              Calcutta &lt;Hack/&gt; is India's largest heritage-meets-innovation hackathon,
              bringing together the finest minds from across the country and beyond. Set in the
              cultural capital of India, this event celebrates Kolkata's rich legacy while pushing
              the boundaries of technology.
            </p>
          </div>
        </div>

        <div className=" p-3 shadow-lg bg-[#f4e5c2] border-4 border-[#3E2C1D] aged-paper">
          <div className="inner-border">
            <FaLandmark className="text-[#6B4423] mb-4 mx-auto md:mx-0" size={40} />
            <h3 className="font-display text-3xl font-bold text-[#3E2C1D] mb-4 text-center md:text-left">
              Calcutta's Spirit
            </h3>
            <p className="font-serif text-lg text-[#6B4423] leading-relaxed pb-7">
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
            imageSrc: '../src/assets/Icon/Tram.jpg',
            label: 'Historic Trams',
            subtitle: 'First in Asia',
          },
          {
            imageSrc: '../src/assets/Icon/bluebus.png',
            label: 'Blue Buses',
            subtitle: 'City Symbol',
          },
          {
            imageSrc: '../src/assets/Icon/Taxi.png',
            label: 'Yellow Taxis',
            subtitle: 'Iconic Rides',
          },
          {
            imageSrc: '../src/assets/Icon/Bridge.jpg',
            label: 'Howrah Bridge',
            subtitle: 'Engineering Marvel',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="text-center bg-[#F4E5C2] p-6 border-2 border-[#3E2C1D] shadow-md aged-paper"
          >
            <img src={item.imageSrc} alt="" srcset="" className="size-20" />
            <div className="font-display font-bold text-[#3E2C1D]">{item.label}</div>
            <div className="font-serif text-sm text-[#6B4423] italic">{item.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
