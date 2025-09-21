
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-card dark:bg-dark-card border-t border-light-border dark:border-dark-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} NovaTrade. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">About Us</Link>
            <Link to="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Contact</Link>
            <Link to="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
