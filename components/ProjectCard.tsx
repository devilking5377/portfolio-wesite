
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Project } from '../types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
      when: 'beforeChildren',
    },
  },
};

const contentItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const tagContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const tagItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex flex-col justify-end p-6 md:p-8"
        initial="hidden"
        whileHover="show"
        variants={overlayVariants}
      >
        <motion.h3
          className="text-2xl font-bold text-white mb-2"
          variants={contentItemVariants}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="text-gray-200 mb-4"
          variants={contentItemVariants}
        >
          {project.description}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          variants={tagContainerVariants}
        >
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              className="bg-violet-500/50 text-violet-100 text-xs font-semibold px-2.5 py-1 rounded-full"
              variants={tagItemVariants}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          className="flex items-center space-x-4"
          variants={contentItemVariants}
        >
          {project.sourceUrl && (
            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-violet-400 transition-colors">
              <FaGithub size={24} />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-violet-400 transition-colors">
              <FaExternalLinkAlt size={22} />
            </a>
          )}
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-violet-500 rounded-xl transition-all duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default ProjectCard;
