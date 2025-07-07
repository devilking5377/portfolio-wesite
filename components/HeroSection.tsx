
import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center">
      <motion.div
        className="flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight"
          variants={itemVariants}
        >
          <span className="block">Hello, I'm Manav Patel.</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-500 mt-2">
            Data Analyst
          </span>
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300"
          variants={itemVariants}
        >
          I uncover insights from large datasets and build powerful data visualizations to drive informed business decisions.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-10">
          <a
            href="#projects"
            className="px-8 py-4 bg-violet-600 text-white font-semibold rounded-lg shadow-lg hover:bg-violet-700 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
