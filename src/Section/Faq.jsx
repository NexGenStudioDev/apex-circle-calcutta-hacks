import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Calcutta <Hacks/>?',
      answer:
        'Calcutta <Hacks/> is a 24-hour hackathon celebrating the heritage of Kolkata while fostering innovation and creativity. It brings together 200+ hackers to build innovative solutions and network with industry experts.',
    },
    {
      question: 'When and where is the event?',
      answer:
        'The hackathon will be held on 13th-14th December 2025 at Techno India University, Saltlake Sector V, Kolkata, West Bengal.',
    },
    {
      question: 'Who can participate?',
      answer:
        "The hackathon is open to all students, developers, designers, and tech enthusiasts. Whether you're a beginner or an experienced hacker, everyone is welcome to participate!",
    },
    {
      question: 'How do I register?',
      answer:
        'You can register through our Devfolio page. Click on the "Register Now" or "Apply with Devfolio" button on our website to get started.',
    },
    {
      question: 'What is the team size?',
      answer:
        'Teams can have 2-4 members. You can also register individually and find teammates through our Discord community before or during the event.',
    },
    {
      question: 'Is there a registration fee?',
      answer:
        'No, participation in Calcutta <Hacks/> is completely free! We provide meals, swag, and an amazing experience at no cost.',
    },
    {
      question: 'What should I bring?',
      answer:
        "Bring your laptop, chargers, student ID, and lots of enthusiasm! We'll provide WiFi, food, beverages, and a creative environment.",
    },
    {
      question: 'Are there any prizes?',
      answer:
        'Yes! We have exciting prizes for winners across different tracks, along with special category prizes and swag for all participants.',
    },
    {
      question: 'Will there be mentors available?',
      answer:
        'Absolutely! We have experienced mentors and industry experts who will be available throughout the hackathon to guide you and help with technical challenges.',
    },
    {
      question: 'What are the judging criteria?',
      answer:
        "Projects will be judged based on innovation, technical complexity, design, feasibility, and presentation. Bonus points for projects that celebrate Kolkata's heritage!",
    },
  ];

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#F4E5C2] relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 border-4 border-[#3E2C1D] transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 border-4 border-[#3E2C1D] transform translate-x-32 translate-y-32"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-[#D4AF37] mr-4"></div>
            <HelpCircle className="text-[#D4AF37]" size={32} />
            <div className="w-12 h-1 bg-[#D4AF37] ml-4"></div>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#3E2C1D] mb-4"
            style={{
              fontFamily: "'Cinzel', serif",
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            FREQUENTLY ASKED
          </h2>
          <h3
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#6B4423]"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Questions
          </h3>

          <div className="mt-6 max-w-2xl mx-auto">
            <div className="border-4 border-dashed border-[#3E2C1D] bg-[#F4E5C2] px-6 py-3">
              <p className="font-serif text-lg italic text-[#3E2C1D]">
                "Got questions? We've got answers!"
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-4 border-[#3E2C1D] bg-white shadow-[4px_4px_0px_0px_rgba(62,44,29,1)] transition-all duration-300 hover:shadow-[6px_6px_0px_0px_rgba(62,44,29,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className="font-display text-lg md:text-xl font-bold text-[#3E2C1D] pr-4 group-hover:text-[#6B4423] transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 text-[#D4AF37] transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 border-t-2 border-[#3E2C1D]/20 pt-4">
                  <p className="font-serif text-base md:text-lg text-[#3E2C1D]/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="border-4 border-[#3E2C1D] bg-[#D4AF37] inline-block px-8 py-4">
            <p className="font-serif text-lg text-[#3E2C1D] mb-2">Still have questions?</p>
            <a
              href="https://links.calcuttahacks.xyz/contact-us"
              className="font-display font-bold text-xl text-[#3E2C1D] hover:text-white transition-colors underline"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
