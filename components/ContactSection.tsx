
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const containerVariants: Variants = {
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const socialIcons = [
  { icon: <FaGithub />, href: 'https://github.com/devilking5377' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/tzd-leader-4930132a6' },
];

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <motion.div
        className="container mx-auto px-6 md:px-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" variants={itemVariants}>
          Get In <span className="text-violet-400">Touch</span>
        </motion.h2>
        <motion.p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10" variants={itemVariants}>
          I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hi, feel free to reach out.
        </motion.p>
        <motion.div variants={itemVariants}>
          <a
            href="mailto:manavpatel.ac@gmail.com"
            className="inline-block px-10 py-4 bg-transparent border-2 border-violet-500 text-violet-400 font-semibold rounded-lg shadow-lg hover:bg-violet-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Say Hello
          </a>
        </motion.div>
        <motion.div
          className="flex justify-center space-x-6 mt-12"
          variants={itemVariants}
        >
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-400 transition-colors text-3xl"
              whileHover={{ scale: 1.2, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
