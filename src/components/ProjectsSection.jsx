import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeaturedProject from './FeaturedProject';
import ProjectGrid from './ProjectGrid';
import ProjectModal from './ProjectModal';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
          Portfolio
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-black leading-tight text-white mb-6">
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Projects</span>
        </h2>
        <p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
          A showcase of recent developer projects, tools, and technical implementations.
        </p>
      </motion.div>

      {/* Grid line divider */}
      <div className="h-px w-full bg-zinc-900 mb-16" />

      {/* Featured Top Project */}
      <FeaturedProject onProjectClick={setSelectedProject} />

      {/* Grid of other projects */}
      <ProjectGrid onProjectClick={setSelectedProject} />

      {/* Fullscreen Expanding Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsSection;
