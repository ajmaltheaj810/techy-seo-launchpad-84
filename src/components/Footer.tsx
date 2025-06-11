
import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/41be5862-f5fa-437f-b87c-054658b2e61c.png" 
              alt="TS Techy Logo" 
              className="h-10 w-auto"
            />
            <span className="text-white font-bold text-xl">TS Techy</span>
          </div>
          
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-gray-300 mb-2">
              Email: <a href="mailto:support@tstechy.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">support@tstechy.com</a>
            </p>
            <p className="text-gray-400 text-sm">Transform Ideas Into Impact</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-gray-400 hover:text-yellow-400 transition-all duration-300 p-2 rounded-full hover:bg-gray-800 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-yellow-400 transition-all duration-300 p-2 rounded-full hover:bg-gray-800 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 TS Techy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
