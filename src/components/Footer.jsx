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
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
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
              <Landmark className="mr-2 text-[#D4AF37]" size={24} />
              <span>Calcutta <span className="text-[#D4AF37]">&lt;Hack/&gt;</span></span>
            </div>
            <p className="font-serif text-[#F4E5C2]/80 mb-4">
              Where heritage meets innovation in the heart of Kolkata. 
              Join us for a weekend of coding, creativity and collaboration.
            </p>
            <div className="flex items-center mb-3 font-serif">
              <Calendar className="mr-2 text-[#D4AF37]" size={16} />
              <span>October 28-30, 2024</span>
            </div>
            <div className="flex items-start mb-3 font-serif">
              <MapPin className="mr-2 text-[#D4AF37] mt-1 flex-shrink-0" size={16} />
              <span>Victoria Memorial Hall, Kolkata, West Bengal 700071</span>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 border-b border-[#D4AF37]/30 pb-2">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-y-2 font-serif">
              <div><a href="#about" className="hover:text-[#D4AF37] transition-colors flex items-center"><ArrowRight size={14} className="mr-1"/> About</a></div>
              <div><a href="#timeline" className="hover:text-[#D4AF37] transition-colors flex items-center"><ArrowRight size={14} className="mr-1"/> Timeline</a></div>
              <div><a href="#tracks" className="hover:text-[#D4AF37] transition-colors flex items-center"><ArrowRight size={14} className="mr-1"/> Tracks</a></div>
              <div><a href="#prizes" className="hover:text-[#D4AF37] transition-colors flex items-center"><ArrowRight size={14} className="mr-1"/> Prizes</a></div>
              <div><a href="#team" className="hover:text-[#D4AF37] transition-colors flex items-center"><ArrowRight size={14} className="mr-1"/> Team</a></div>
              <div><a href="#mentors" className="hover:text-[#D4AF37] transition-colors flex items-center"><ArrowRight size={14} className="mr-1"/> Mentors</a></div>
              <div><a href="#sponsors" className="hover:text-[#D4AF37] transition-colors flex items-center"><ArrowRight size={14} className="mr-1"/> Sponsors</a></div>
              <div><a href="#faq" className="hover:text-[#D4AF37] transition-colors flex items-center"><ArrowRight size={14} className="mr-1"/> FAQ</a></div>
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
                <span className="font-serif group-hover:text-[#D4AF37] transition-colors">LinkedIn</span>
              </a>
              
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="w-10 h-10 bg-[#F4E5C2]/10 border border-[#F4E5C2]/20 rounded-sm flex items-center justify-center mr-2 group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors">
                  <Twitter size={18} className="text-[#F4E5C2] group-hover:text-[#D4AF37]" />
                </div>
                <span className="font-serif group-hover:text-[#D4AF37] transition-colors">Twitter</span>
              </a>
              
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="w-10 h-10 bg-[#F4E5C2]/10 border border-[#F4E5C2]/20 rounded-sm flex items-center justify-center mr-2 group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors">
                  <Instagram size={18} className="text-[#F4E5C2] group-hover:text-[#D4AF37]" />
                </div>
                <span className="font-serif group-hover:text-[#D4AF37] transition-colors">Instagram</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/yuvrajprasad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="w-10 h-10 bg-[#F4E5C2]/10 border border-[#F4E5C2]/20 rounded-sm flex items-center justify-center mr-2 group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors">
                  <Github size={18} className="text-[#F4E5C2] group-hover:text-[#D4AF37]" />
                </div>
                <span className="font-serif group-hover:text-[#D4AF37] transition-colors">GitHub</span>
              </a>
            </div>
            
            <div className="mt-6">
              <a 
                href="mailto:contact@calcuttahack.com" 
                className="flex items-center hover:text-[#D4AF37] transition-colors font-serif"
              >
                <Mail size={16} className="mr-2 text-[#D4AF37]" />
                apexcircleofficial2025@gmail.com
              </a>
            </div>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 border-b border-[#D4AF37]/30 pb-2">
              Join Our Newsletter
            </h3>
            <p className="font-serif text-sm mb-4">
              Stay updated with the latest news and announcements for Calcutta &lt;Hack/&gt;
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  <Train size={24} className="text-[#F7D070] mb-1" />
                  <span className="font-serif text-xs">Tram</span>
                </div>
                <div className="flex flex-col items-center">
                  <Bus size={24} className="text-[#4A90E2] mb-1" />
                  <span className="font-serif text-xs">Bus</span>
                </div>
                <div className="flex flex-col items-center">
                  <Landmark size={24} className="text-[#D4AF37] mb-1" />
                  <span className="font-serif text-xs">Victoria</span>
                </div>
                <div className="flex flex-col items-center">
                  <ExternalLink size={24} className="text-[#F4E5C2] mb-1" />
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
          <p>&copy; {new Date().getFullYear()} Calcutta &lt;Hack/&gt;. Celebrating the heritage of Kolkata.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Code of Conduct</a>
            <span>|</span>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;