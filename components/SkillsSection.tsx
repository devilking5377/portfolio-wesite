import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTableau, SiMongodb, SiMysql, SiPython, SiPowerbi } from 'react-icons/si';

const skills = [
  { name: 'Python', icon: <SiPython className="text-blue-400" /> },
  { name: 'SQL', icon: <FaDatabase className="text-sky-500" /> },
  { name: 'Power BI', icon: <SiPowerbi className="text-yellow-400" /> },
  { name: 'Tableau', icon: <SiTableau className="text-blue-600" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-sky-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
];

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-gray-900/40">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-violet-400">Toolkit</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            These are the technologies I work with to bring ideas to life, from concept to deployment.
          </p>
        </motion.div>
        <motion.div
          className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-gray-800/50 p-4 rounded-lg flex items-center space-x-4 hover:bg-gray-700/70 transition-colors duration-300"
              variants={itemVariants}
            >
              <span className="text-3xl">{skill.icon}</span>
              <span className="font-medium text-gray-200">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;