import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ experience, index }) => {
  // Simple type identifier styling
  let badgeColor = "text-cyber-blue border-cyber-blue/10 bg-cyber-blue/5";
  
  if (experience.type === "internship") {
    badgeColor = "text-cyber-purple border-cyber-purple/10 bg-cyber-purple/5";
  } else if (experience.type === "certification") {
    badgeColor = "text-cyber-pink border-cyber-pink/10 bg-cyber-pink/5";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="w-full relative group"
    >
      <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/25 border border-white/5 hover:border-zinc-800 transition-all duration-300 overflow-hidden">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
          <div>
            <h3 className="text-xl font-bold text-white leading-tight">
              {experience.role}
            </h3>
            <h4 className="text-sm font-medium text-zinc-400 mt-1">
              {experience.company}
            </h4>
          </div>
          <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${badgeColor} w-fit`}>
            {experience.duration}
          </span>
        </div>

        <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {experience.tech.map((t, idx) => (
            <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-white/5 font-medium tracking-wide">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
