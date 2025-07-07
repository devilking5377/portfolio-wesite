
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 border-t border-gray-800/50">
      <div className="container mx-auto px-6 md:px-12 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Manav Patel. All Rights Reserved.</p>
        <p className="text-sm mt-1">Designed & Built with ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
