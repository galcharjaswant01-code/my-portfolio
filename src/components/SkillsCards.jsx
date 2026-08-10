import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  { name: 'HTML & CSS', level: 75, color: '#3b82f6' },
  { name: 'AI Tools', level: 75, color: '#8b5cf6' },
  { name: 'Python', level: 50, color: '#6366f1' },
  { name: 'Django', level: 50, color: '#4f46e5' },
  { name: 'React', level: 40, color: '#3b82f6' },
];

const SkillsCards = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SKILLS.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="p-5 glass-panel rounded-xl border border-white/5 hover:border-zinc-800 transition-colors duration-300"
          >
            <div className="relative z-10 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-white text-sm tracking-wide">{skill.name}</span>
                <span className="text-xs font-mono font-medium text-zinc-400">{skill.level}%</span>
              </div>
              
              {/* Progress Bar Background */}
              <div className="h-1 w-full bg-zinc-950 rounded-full overflow-hidden">
                {/* Progress Bar Fill */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.05, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCards;
