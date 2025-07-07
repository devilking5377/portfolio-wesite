
import React from 'react';
import { motion, Variants } from 'framer-motion';
import FramerCounter from './FramerCounter';

const AboutSection: React.FC = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    { value: 2, label: "Years of Learning" },
    { value: 2, label: "Major Projects" },
    { value: 3, label: "Certifications" },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <motion.div
        className="container mx-auto px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img
                src="https://picsum.photos/seed/portfolio_about/400/500"
                alt="Manav Patel"
                className="relative w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
          <motion.div className="md:col-span-3" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About <span className="text-violet-400">Me</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Aspiring Data Analyst with a strong foundation in Python, SQL, Power BI, and Tableau. I have proven experience in developing interactive dashboards and data models to solve real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I am adept at uncovering insights from large datasets and communicating them effectively. I am passionate about applying data to drive informed decisions in dynamic environments like finance and tech, and I'm driven by a curiosity to continuously learn and grow in this ever-evolving field.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          variants={itemVariants}
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-900/40 p-6 rounded-xl border border-gray-800/50">
              <h3 className="text-5xl font-extrabold text-violet-400">
                <FramerCounter value={stat.value} />
                {stat.label.includes('Years') && '+'}
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
