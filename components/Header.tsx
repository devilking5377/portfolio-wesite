
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-gray-900/50 backdrop-blur-lg shadow-lg' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white tracking-wider">
          <span className="text-violet-400">M</span>P.
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-violet-400 transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a
            href="#resume-download"
            className="text-gray-300 hover:text-violet-400 transition-colors duration-300 relative group"
          >
            Resume
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>
        <button className="md:hidden text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
