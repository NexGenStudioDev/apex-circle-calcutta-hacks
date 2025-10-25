import React, { useState } from 'react';
import {
  Train,
  Bus,
  Landmark,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  Calendar,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router';
import { Code } from 'lucide-react';
import { RiGroupFill } from 'react-icons/ri';

import { GiCableStayedBridge, GiIndianPalace } from 'react-icons/gi';
import { MdOutlineTram } from 'react-icons/md';
import { GrBus } from 'react-icons/gr';


import { FaDiscord, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Handle newsletter signup
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <footer className="bg-[#3E2C1D] text-[#F4E5C2] pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#D4AF37]"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-[#3E2C1D] border-b-4 border-x-4 border-[#D4AF37]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="font-display text-2xl font-bold mb-4 flex items-center">
              {/* <Landmark className="mr-2 text-[#D4AF37]" size={39} /> */}
              <Link
                to="/"
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
              >
                <div className="w-[1.75rem] h-[1.75rem] border-4 border-[#3E2C1D] bg-[#D4AF37] flex items-center justify-center">
                  <Code className="text-[#3E2C1D]" size={18} />
                </div>

                <span>
                  Calcutta <span className="text-[#D4AF37]">&lt;Hacks/&gt;</span>
                </span>
              </Link>
            </div>

            <p className="font-serif text-[#F4E5C2]/80 mb-4">
              Where heritage meets innovation in the heart of Kolkata. Join us for a weekend of
              coding, creativity and collaboration.
            </p>
            <div className="flex items-center mb-3 font-serif">
              <Calendar className="mr-2 text-[#D4AF37]" size={16} />
              <span>December 13-14, 2025</span>
            </div>
            <div className="flex items-start mb-3 font-serif">
              <MapPin className="mr-2 text-[#D4AF37] mt-1 flex-shrink-0" size={16} />
              <span>EM-4, EM-4/1, EM Block, Sector V, Bidhannagar, Kolkata, West Bengal 70009</span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 border-b border-[#D4AF37]/30 pb-2">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-y-2 font-serif">
              <div>
                <a
                  href="#about"
                  className="hover:text-[#D4AF37] transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" /> About
                </a>
              </div>
              <div>
                <a
                  href="#timeline"
                  className="hover:text-[#D4AF37] transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" /> Timeline
                </a>
              </div>
              <div>
                <a
                  href="#tracks"
                  className="hover:text-[#D4AF37] transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" /> Tracks
                </a>
              </div>
              <div>
                <a
                  href="#prizes"
                  className="hover:text-[#D4AF37] transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" /> Prizes
                </a>
              </div>
              <div>
                <a
                  href="#team"
                  className="hover:text-[#D4AF37] transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" /> Team
                </a>
              </div>
              <div>
                <a
                  href="#mentors"
                  className="hover:text-[#D4AF37] transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" /> Mentors
                </a>
              </div>
              <div>
                <a
                  href="#sponsors"
                  className="hover:text-[#D4AF37] transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" /> Sponsors
                </a>
              </div>
              <div>
                <a href="#faq" className="hover:text-[#D4AF37] transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-1" /> FAQ
                </a>
              </div>
            </div>
          </div>

          {/* Column 3 - Connect */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 border-b border-[#D4AF37]/30 pb-2">
              Connect With Us
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <a
                href="https://www.linkedin.com/company/apex-circle-official/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="w-10 h-10 bg-[#F4E5C2]/10 border border-[#F4E5C2]/20 rounded-sm flex items-center justify-center mr-2 group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors">
                  <Linkedin size={18} className="text-[#F4E5C2] group-hover:text-[#D4AF37]" />
                </div>
                <span className="font-serif group-hover:text-[#D4AF37] transition-colors">
                  LinkedIn
                </span>
              </a>

              <a
                href="'https://chat.whatsapp.com/ENhpfDXhjnF1x72DbMLcne?mode=wwc'"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="w-10 h-10 bg-[#F4E5C2]/10 border border-[#F4E5C2]/20 rounded-sm flex items-center justify-center mr-2 group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors">
                  <FaWhatsapp size={18} className="text-[#F4E5C2] group-hover:text-[#D4AF37]" />
                </div>
                <span className="font-serif group-hover:text-[#D4AF37] transition-colors">
                  WhatsApp
                </span>
              </a>

              <a
                href="https://www.instagram.com/apex_circle_official/?igsh=NHRsbDU1YmNteXE4#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="w-10 h-10 bg-[#F4E5C2]/10 border border-[#F4E5C2]/20 rounded-sm flex items-center justify-center mr-2 group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors">
                  <Instagram size={18} className="text-[#F4E5C2] group-hover:text-[#D4AF37]" />
                </div>
                <span className="font-serif group-hover:text-[#D4AF37] transition-colors">
                  Instagram
                </span>
              </a>

              <a
                href="https://www.commudle.com/communities/apex-circle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="w-10 h-10 bg-[#F4E5C2]/10 border border-[#F4E5C2]/20 rounded-sm flex items-center justify-center mr-2 group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors">
                  <RiGroupFill size={18} className="text-[#F4E5C2] group-hover:text-[#D4AF37]" />
                </div>
                <span className="font-serif group-hover:text-[#D4AF37] transition-colors">
                  Commudle
                </span>
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <a
                href="mailto:apexcircleofficial2025@gmail.com"
                className="flex items-center hover:text-[#D4AF37] transition-colors font-serif"
              >
                <Mail size={16} className="mr-2 text-[#D4AF37]" />
                apexcircleofficial2025@gmail.com
              </a>

              <a
                href="tel:+917003058672"
                className="flex items-center hover:text-[#D4AF37] transition-colors font-serif"
              >
                <Phone size={16} className="text-[#D4AF37] mr-[0.5rem]" />
                <span>+91 70030 58672</span>
              </a>

              <a
                href="tel:+916291129896"
                className="flex items-center hover:text-[#D4AF37] transition-colors font-serif"
              >
                <Phone size={16} className="text-[#D4AF37] mr-[0.5rem]" />
                <span>+91 62911 29896</span>
              </a>
            </div>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 border-b border-[#D4AF37]/30 pb-2">
              Join Our Newsletter
            </h3>
            <p className="font-serif text-sm mb-4">
              Stay updated with the latest news and announcements for Calcutta &lt;Hacks/&gt;
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-[#F4E5C2]/10 border border-[#F4E5C2]/20 text-[#F4E5C2] px-4 py-2 rounded-sm focus:outline-none focus:border-[#D4AF37] font-serif"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#D4AF37] text-[#3E2C1D] w-8 h-8 flex items-center justify-center rounded-sm hover:bg-[#F4E5C2] transition-colors"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>

            {/* Calcutta Icons */}
            <div className="mt-8">
              <h4 className="font-display text-lg font-bold mb-3">Calcutta Icons</h4>
              <div className="flex justify-between">
                <div className="flex flex-col items-center">
                  <MdOutlineTram size={24} className="text-[#F7D070] mb-1" />
                  <span className="font-serif text-xs">Tram</span>
                </div>
                <div className="flex flex-col items-center">
                  <GrBus size={24} className="text-[#4A90E2] mb-1" />
                  <span className="font-serif text-xs">Bus</span>
                </div>
                <div className="flex flex-col items-center">
                  <GiIndianPalace size={24} className="text-[#D4AF37] mb-1" />
                  <span className="font-serif text-xs">Victoria</span>
                </div>
                <div className="flex flex-col items-center">
                  <GiCableStayedBridge size={24} className="text-[#F4E5C2] mb-1" />
                  <span className="font-serif text-xs">Howrah</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Divider with decorative pattern */}
        <div className="relative h-px bg-[#F4E5C2]/20 my-8">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#3E2C1D] px-4">
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-[#D4AF37]"></div>
              <div className="w-2 h-2 bg-[#D4AF37]"></div>
              <div className="w-2 h-2 bg-[#D4AF37]"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center font-serif text-sm text-[#F4E5C2]/70">
          <p>
            &copy; {new Date().getFullYear()} Calcutta &lt;Hacks/&gt;. Celebrating the heritage of
            Kolkata.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://devfolio.co/privacy-policy"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="https://devfolio.co/code-of-conduct"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Code of Conduct
            </a>
            <span>|</span>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
