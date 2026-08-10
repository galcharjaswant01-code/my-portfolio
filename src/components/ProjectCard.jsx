import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layoutId={`project-container-${project.id}`}
      onClick={() => onClick(project)}
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative w-full h-[380px] rounded-2xl bg-zinc-900/20 border border-white/5 transition-all duration-300 overflow-hidden group cursor-pointer"
    >
      {/* Full-width borderless image header */}
      <motion.div 
        layoutId={`project-image-${project.id}`}
        className={`w-full h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
      />

      {/* Card Content */}
      <div className="p-5 flex flex-col h-[calc(100%-11rem)] justify-between">
        <div>
          <motion.h3 
            layoutId={`project-title-${project.id}`} 
            className="text-base font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors"
          >
            {project.title}
          </motion.h3>
          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-1">
            {project.tech.map((t, idx) => (
              <span key={idx} className="text-[9px] px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-white/5 font-mono">
                {t}
              </span>
            ))}
          </div>
          
          {/* Action Buttons with Premium Transparent styling */}
          <div className="flex items-center gap-2 pt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {project.live && (
              <button
                onClick={(e) => { e.stopPropagation(); window.open(project.live, '_blank'); }}
                className="relative overflow-hidden group/btn flex items-center gap-1 text-[10px] font-semibold px-3 py-1.5 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white rounded-lg backdrop-blur-md transition-all duration-300 hover:scale-102 hover:-translate-y-[1px]"
              >
                <ExternalLink size={12} /> <span>Live Demo</span>
                
                {/* Shine Sweep Overlay */}
                <div className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-[150%] group-hover/btn:translate-x-[250%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              </button>
            )}
            <button
              onClick={(e) => { e.stopPropagation(); if (project.github && project.github !== '#') window.open(project.github, '_blank'); }}
              className="relative overflow-hidden group/btn flex items-center gap-1 text-[10px] font-semibold px-3 py-1.5 border border-white/5 bg-white/0 hover:bg-white/5 text-zinc-400 hover:text-white rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-102 hover:-translate-y-[1px]"
            >
              <Github size={12} /> <span>GitHub</span>
              
              {/* Shine Sweep Overlay */}
              <div className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-[150%] group-hover/btn:translate-x-[250%] transition-transform duration-1000 ease-in-out pointer-events-none" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
