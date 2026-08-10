import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const EDUCATION = [
  {
    degree: "B.Tech In Computer Engineering",
    school: "Parul University",
    year: "2024 - 2027",
    desc: "Focusing on database architectures, system design methodologies, web development integrations, and modular application development."
  },
  {
    degree: "Diploma in Computer Engineering",
    school: "Ganpat University",
    year: "2021 - 2024",
    desc: "Gained core foundations in logic building, software programming fundamentals, computer networking, and database structures."
  }
];

const EducationCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">Education</h3>
      <div className="flex flex-col gap-4">
        {EDUCATION.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-6 rounded-2xl glass-panel relative overflow-hidden group border border-white/5 hover:border-zinc-800 transition-colors"
          >
            <div className="relative z-10 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-zinc-950 border border-white/5 text-cyber-blue">
                <GraduationCap size={20} />
              </div>
              
              <div>
                <h4 className="text-base font-bold text-white mb-1 leading-tight">{edu.degree}</h4>
                <h5 className="text-xs font-mono font-medium text-cyber-purple mb-3">{edu.school} • {edu.year}</h5>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationCard;
