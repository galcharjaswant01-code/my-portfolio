import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-12 py-12">
      {/* Blurred Background Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
      />

      {/* Main Modal Container */}
      <motion.div 
        layoutId={`project-container-${project.id}`}
        className="relative w-full max-w-5xl max-h-[85vh] bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl z-10"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/5 transition-colors z-20"
        >
          <X size={18} />
        </button>

        {/* Left Side: Full-width borderless image */}
        <motion.div 
          layoutId={`project-image-${project.id}`}
          className={`w-full md:w-1/2 h-48 md:h-auto ${project.image ? 'bg-zinc-900' : `bg-gradient-to-br ${project.gradient}`} relative overflow-hidden`}
        >
          {project.image && (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-top opacity-90"
            />
          )}
        </motion.div>

        {/* Right Side: Details Area */}
        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
          <motion.h3 
            layoutId={`project-title-${project.id}`}
            className="text-2xl md:text-4xl font-display font-black text-white mb-6"
          >
            {project.title}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex flex-wrap gap-1.5 mb-8">
              {project.tech.map((t, idx) => (
                <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-white/5 font-mono">
                  {t}
                </span>
              ))}
            </div>

            <div className="space-y-6">
              <section>
                <h4 className="text-blue-400 text-xs font-bold tracking-wider uppercase mb-2">Overview</h4>
                <p className="text-zinc-300 text-sm font-light leading-relaxed">
                  {project.overview}
                </p>
              </section>

              <section>
                <h4 className="text-indigo-400 text-xs font-bold tracking-wider uppercase mb-2">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-zinc-400 text-sm font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Action Buttons styled as Premium Glassmorphism Links */}
            <div className="flex items-center gap-3 mt-10">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden group/btn flex-1 flex items-center justify-center gap-1.5 py-3 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white rounded-xl text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:scale-102 hover:-translate-y-[2px]"
                >
                  <ExternalLink size={14} /> <span>Launch Project</span>
                  
                  {/* Shine Sweep Overlay */}
                  <div className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-[150%] group-hover/btn:translate-x-[250%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative overflow-hidden group/btn ${project.live ? 'flex-1' : 'w-full'} flex items-center justify-center gap-1.5 py-3 border border-white/5 bg-white/0 hover:bg-white/5 text-zinc-300 hover:text-white rounded-xl text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-102 hover:-translate-y-[2px]`}
              >
                <Github size={14} /> <span>Source Code</span>
                
                {/* Shine Sweep Overlay */}
                <div className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-[150%] group-hover/btn:translate-x-[250%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
