import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';

const ROLES = [
  "Full Stack Developer",
  "Creative Technologist",
  "B.Tech Computer Engineering Student"
];

const HeroUI = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-12 flex flex-col items-center text-center justify-center min-h-[calc(100vh-120px)]">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-32 h-32 md:w-36 md:h-36 rounded-full border border-white/10 p-1 shadow-lg mb-8 transition-transform duration-300 hover:scale-105 cursor-pointer bg-zinc-900"
      >
        <div className="w-full h-full rounded-full overflow-hidden">
          <img
            src="/images/hero-bg.jpeg"
            alt="Jaswant Galchar"
            className="w-full h-full object-cover transition-all duration-300"
          />
        </div>
      </motion.div>

      {/* Available Tag */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="inline-flex items-center justify-center px-5 py-2 mb-6 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md text-white/60 text-[11px] font-medium tracking-[0.2em] uppercase shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]"
      >
        Available for Internships & Projects
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-4xl md:text-6xl font-display font-black leading-tight text-white mb-4"
      >
        Hi, I'm{' '}
        <span
          style={{
            backgroundImage: 'linear-gradient(90deg, #00f0ff, #b026ff, #ff007f, #00f0ff)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'holoshimmer 4s linear infinite',
            filter: 'drop-shadow(0 0 18px rgba(0,240,255,0.4))',
          }}
        >
          Jaswant Galchar
        </span>
      </motion.h1>

      {/* Roles Switcher */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="h-10 mb-6 flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.h2
            key={roleIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="text-lg md:text-xl font-light text-zinc-300"
          >
            {ROLES[roleIndex]}
          </motion.h2>
        </AnimatePresence>
      </motion.div>

      {/* Intro Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="text-zinc-400 text-sm md:text-base mb-8 max-w-lg leading-relaxed font-light"
      >
        I specialize in crafting high-performance, clean, and interactive websites. Passionate about bringing ideas to life using modern frontend architectures and AI tools.
      </motion.p>

      {/* Premium Transparent Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-4 mb-10"
      >
        <a
          href="#work"
          className="relative overflow-hidden group flex items-center gap-1.5 px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white font-semibold text-sm backdrop-blur-md transition-all duration-300 hover:scale-102 hover:-translate-y-[2px]"
        >
          <span>View Projects</span>
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          
          {/* Shine Sweep Overlay */}
          <div className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out pointer-events-none" />
        </a>
        
        <a
          href="#contact"
          className="relative overflow-hidden group flex items-center gap-1.5 px-6 py-3 rounded-xl border border-white/5 bg-white/0 hover:bg-white/5 text-zinc-300 hover:text-white font-semibold text-sm backdrop-blur-sm transition-all duration-300 hover:scale-102 hover:-translate-y-[2px]"
        >
          <span>Let's Talk</span>
          
          {/* Shine Sweep Overlay */}
          <div className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out pointer-events-none" />
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="flex gap-4 justify-center"
      >
        {[
          { Icon: Github, href: "https://github.com/galcharjaswant01-code", label: "GitHub" },
          { Icon: Linkedin, href: "https://www.linkedin.com/in/galcharjaswant", label: "LinkedIn" },
          { Icon: Instagram, href: "https://www.instagram.com/galcharjaswant08", label: "Instagram" },
          { Icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=galcharjaswant01@gmail.com", label: "Email" },
        ].map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="relative overflow-hidden group p-2.5 rounded-xl border border-white/5 bg-white/0 hover:bg-white/5 text-zinc-400 hover:text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md hover:border-white/20"
            title={label}
          >
            <Icon size={20} className="relative z-10" />
            {/* Shine Sweep Overlay */}
            <div className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out pointer-events-none" />
          </a>
        ))}
      </motion.div>
      
    </div>
  );
};

export default HeroUI;
