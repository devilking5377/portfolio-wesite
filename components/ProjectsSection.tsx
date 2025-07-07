
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Amazon Prime Dashboard Analysis',
    description: 'Built a Power BI dashboard to analyze content data, delivering insights on trends, ratings, and distribution using DAX and dynamic slicers.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    tags: ['Power BI', 'DAX', 'Data Analysis', 'Data Viz'],
    sourceUrl: 'https://github.com/devilking5377/Amazon-Prime-DashBoard.git',
  },
  {
    id: 2,
    title: 'ChatBuddy: AI-Powered Secured Chat App',
    description: 'Designed and deployed a MERN-based chat app with AI for sentiment tagging and user behavior analysis, prioritizing secure data handling.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    tags: ['MERN', 'React', 'Node.js', 'AI', 'MongoDB'],
    sourceUrl: 'https://github.com/devilking5377/ChatBuddy.git',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-violet-400">Creations</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I'm proud of. Each one represents a challenge I was excited to tackle.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
