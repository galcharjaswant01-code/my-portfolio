import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/projects';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const ProjectGrid = ({ onProjectClick }) => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto"
    >
      {PROJECTS.map((project) => (
        <motion.div key={project.id} variants={itemVariants}>
          <ProjectCard project={project} onClick={onProjectClick} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
