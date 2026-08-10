import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    year: '2026 - Present',
    role: 'Frontend Development Learning',
    company: 'Personal Projects & Practice',
    description: 'Learning React, Python, and modern web technologies by building responsive and interactive websites.',
    tech: ['React', 'Python', 'Tailwind CSS', 'Vite']
  },
  {
    year: '2021 - 2024',
    role: 'Web Development Journey',
    company: 'Self Learning',
    description: 'Started learning web development, frontend design, and programming through online courses and real-time projects.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'UI Design']
  }
];

const Timeline = () => {
  return (
    <div className="relative pl-6 border-l border-zinc-800">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-6">Experience</h3>
      {EXPERIENCES.map((exp, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="relative mb-8 last:mb-0"
        >
          {/* Minimal dot indicator */}
          <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-cyber-blue border-2 border-zinc-950"></div>
          
          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono font-medium text-cyber-blue">{exp.year}</span>
            <h4 className="text-lg font-bold text-white leading-tight">{exp.role}</h4>
            <h5 className="text-xs text-zinc-400 mb-2">{exp.company}</h5>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              {exp.description}
            </p>
            
            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {exp.tech.map((t, i) => (
                <span key={i} className="px-2 py-0.5 rounded text-[10px] font-medium tracking-wide text-zinc-300 bg-zinc-900 border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
