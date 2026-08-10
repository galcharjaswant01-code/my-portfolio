import React from 'react';
import { motion } from 'framer-motion';
import Timeline from './Timeline';
import EducationCard from './EducationCard';

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center flex flex-col items-center"
      >
        <div className="inline-flex items-center justify-center px-5 py-2 mb-6 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md text-white/60 text-[11px] font-medium tracking-[0.2em] uppercase shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
          About Me
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-black leading-tight text-white mb-6">
          Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Code</span>
        </h2>
        <p className="text-base md:text-lg text-zinc-400 max-w-2xl font-light leading-relaxed text-center">
          I am a Computer Engineering student who loves building modern websites using AI and web technologies. I enjoy creating clean, user-friendly, and interactive digital experiences that combine efficiency with elegant design.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column: Experience (Timeline) */}
        <div>
          <Timeline />
        </div>

        {/* Right Column: Education */}
        <div>
          <EducationCard />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
