import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight, ExternalLink } from 'lucide-react';
import { FEATURED_PROJECT } from '../data/projects';

const FeaturedProject = ({ onProjectClick }) => {
  return (
    <div className="w-full mb-16">
      <motion.div
        layoutId={`project-container-${FEATURED_PROJECT.id}`}
        onClick={() => onProjectClick(FEATURED_PROJECT)}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        whileHover={{ y: -4 }}
        className="relative w-full rounded-2xl bg-zinc-900/30 border border-white/5 transition-all duration-300 flex flex-col lg:flex-row overflow-hidden group cursor-pointer shadow-sm hover:shadow-md"
      >
        {/* Left Side: Full-width borderless image */}
        <motion.div 
          layoutId={`project-image-${FEATURED_PROJECT.id}`}
          className={`w-full lg:w-[55%] h-[240px] lg:h-[380px] ${FEATURED_PROJECT.image ? 'bg-zinc-900' : `bg-gradient-to-br ${FEATURED_PROJECT.gradient}`} relative overflow-hidden`}
        >
          {FEATURED_PROJECT.image && (
            <img 
              src={FEATURED_PROJECT.image} 
              alt={FEATURED_PROJECT.title} 
              className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
          )}
        </motion.div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-[45%] p-8 lg:p-10 flex flex-col justify-center">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold w-fit">
            Featured Showcase
          </div>

          <motion.h3 
            layoutId={`project-title-${FEATURED_PROJECT.id}`}
            className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors"
          >
            {FEATURED_PROJECT.title}
          </motion.h3>

          <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
            {FEATURED_PROJECT.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-8">
            {FEATURED_PROJECT.tech.map((t, idx) => (
              <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-white/5 font-mono">
                {t}
              </span>
            ))}
          </div>

          {/* Action Buttons with Premium Transparent styling */}
          <div className="flex items-center gap-3 mt-auto">
            <button className="relative overflow-hidden group/btn flex items-center gap-1.5 px-5 py-2.5 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white font-semibold rounded-xl text-sm backdrop-blur-md transition-all duration-300 hover:scale-102 hover:-translate-y-[2px]">
              <span>Explore Project</span>
              <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
              
              {/* Shine Sweep Overlay */}
              <div className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-[150%] group-hover/btn:translate-x-[250%] transition-transform duration-1000 ease-in-out pointer-events-none" />
            </button>
            
            {FEATURED_PROJECT.live && (
              <button
                onClick={(e) => { e.stopPropagation(); window.open(FEATURED_PROJECT.live, '_blank'); }}
                className="relative overflow-hidden group/btn p-3 rounded-xl border border-white/5 bg-white/0 hover:bg-white/5 text-zinc-400 hover:text-white backdrop-blur-sm transition-all duration-300 hover:scale-102 hover:-translate-y-[2px]"
                title="Live Demo"
              >
                <ExternalLink size={15} />
                
                {/* Shine Sweep Overlay */}
                <div className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-[150%] group-hover/btn:translate-x-[250%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              </button>
            )}
            
            <button
              onClick={(e) => { e.stopPropagation(); if (FEATURED_PROJECT.github && FEATURED_PROJECT.github !== '#') window.open(FEATURED_PROJECT.github, '_blank'); }}
              className="relative overflow-hidden group/btn p-3 rounded-xl border border-white/5 bg-white/0 hover:bg-white/5 text-zinc-400 hover:text-white backdrop-blur-sm transition-all duration-300 hover:scale-102 hover:-translate-y-[2px]"
              title="View Source"
            >
              <Github size={15} />
              
              {/* Shine Sweep Overlay */}
              <div className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-[150%] group-hover/btn:translate-x-[250%] transition-transform duration-1000 ease-in-out pointer-events-none" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedProject;
