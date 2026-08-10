import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const SocialIcon = ({ Icon, href, colorClass }) => {
  return (
    <a 
      href={href}
      className={`relative w-14 h-14 rounded-full glass-panel border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 group hover:border-${colorClass}/50`}
    >
      {/* Ripple pulse background on hover */}
      <div className={`absolute inset-0 rounded-full bg-${colorClass}/0 group-hover:bg-${colorClass}/20 transition-colors duration-300`}></div>
      
      {/* Icon */}
      <Icon size={24} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
      
      {/* Outer Glow Ring */}
      <div className={`absolute -inset-2 rounded-full border border-${colorClass}/0 group-hover:border-${colorClass}/30 scale-90 group-hover:scale-100 transition-all duration-500 opacity-0 group-hover:opacity-100`}></div>
    </a>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex gap-6 mt-10">
      <SocialIcon Icon={Github} href="https://github.com/galcharjaswant01-code" colorClass="cyber-blue" />
      <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/galcharjaswant" colorClass="cyber-purple" />
      <SocialIcon Icon={Instagram} href="https://www.instagram.com/galcharjaswant08" colorClass="cyber-pink" />
    </div>
  );
};

export default SocialLinks;
