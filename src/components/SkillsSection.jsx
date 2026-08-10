import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  {
    name: "HTML & CSS",
    level: 75,
    desc: "Crafting modern, responsive web layouts and semantic structures.",
    tech: ["HTML5", "CSS3", "Tailwind CSS", "Flexbox", "Grid"],
    color: "#3b82f6",
  },
  {
    name: "AI Tools",
    level: 75,
    desc: "Leveraging large language models and advanced dev engines to build apps faster.",
    tech: ["Prompting", "LLMs", "Copilots", "Dev Assistants"],
    color: "#8b5cf6",
  },
  {
    name: "Python",
    level: 50,
    desc: "Writing clean programming logic, algorithms, and modular scripts.",
    tech: ["Python 3", "OOP", "Basic Scripting", "Data Logic"],
    color: "#6366f1",
  },
  {
    name: "Django",
    level: 50,
    desc: "Building secure, database-driven backend applications.",
    tech: ["Django Framework", "Django ORM", "APIs", "SQLite"],
    color: "#4f46e5",
  },
  {
    name: "React",
    level: 40,
    desc: "Developing web applications using components and modern hooks.",
    tech: ["React.js", "JSX", "Hooks", "Component State"],
    color: "#3b82f6",
  },
];

const SkillBar = ({ level, color }) => (
  <div className="relative w-full h-1 bg-zinc-950 rounded-full overflow-hidden">
    <motion.div
      className="absolute left-0 top-0 h-full rounded-full"
      style={{
        background: `linear-gradient(90deg, ${color}, ${color}cc)`,
      }}
      initial={{ width: 0 }}
      whileInView={{ width: `${level}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
    />
  </div>
);

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="relative rounded-2xl p-6 overflow-hidden bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors duration-300 group cursor-default"
  >
    {/* Header row */}
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: skill.color }}
        />
        <h3 className="text-white font-bold text-sm tracking-wide">{skill.name}</h3>
      </div>
      {/* Level badge */}
      <div
        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold"
        style={{
          color: skill.color,
          border: `1px solid ${skill.color}22`,
          background: `${skill.color}0a`,
        }}
      >
        {skill.level}%
      </div>
    </div>

    {/* Progress bar */}
    <SkillBar level={skill.level} color={skill.color} />

    {/* Description */}
    <p className="text-zinc-400 text-xs font-light leading-relaxed mt-4 mb-4">{skill.desc}</p>

    {/* Tech tags */}
    <div className="flex flex-wrap gap-1.5">
      {skill.tech.map((t) => (
        <span
          key={t}
          className="px-2 py-0.5 rounded text-[10px] font-medium tracking-wide text-zinc-300 bg-zinc-900 border border-white/5"
        >
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col justify-center items-center py-16 md:py-24 px-4 sm:px-8 overflow-hidden">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center justify-center px-5 py-2 mb-6 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md text-white/60 text-[11px] font-medium tracking-[0.2em] uppercase shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
          Skills & Stack
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black leading-tight text-white mb-6">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Skills</span>
        </h2>
        <p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
          The programming languages, frameworks, and tools I use to bring ideas to life.
        </p>
      </motion.div>

      {/* Grid line divider */}
      <div className="h-px w-full bg-zinc-900 mb-12" />

      {/* Skill cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
