import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data/experience';
import ExperienceCard from './ExperienceCard';

const ExperienceSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center justify-center px-5 py-2 mb-6 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md text-white/60 text-[11px] font-medium tracking-[0.2em] uppercase shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
          My History
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-black leading-tight text-white mb-6">
          Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple">Journey</span>
        </h2>
        <p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
          A summary of my roles, projects, and learning pathways.
        </p>
      </motion.div>

      {/* Grid line divider */}
      <div className="h-px w-full bg-zinc-900 mb-16" />

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto pl-6 border-l border-zinc-800">
        <div className="flex flex-col gap-10">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className="relative">
              {/* Minimalist bullet dot */}
              <div className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-zinc-800 border-2 border-zinc-950 group-hover:bg-cyber-blue transition-colors" />
              <ExperienceCard experience={exp} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
