
import React from 'react';

const Header = () => {
  return (
    <header className="bg-black/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/7f640042-4d9b-47fa-855d-520cc99b92b9.png" 
            alt="TS Techy Logo" 
            className="h-12 w-auto"
          />
          <span className="text-white font-bold text-xl">TS Techy</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">Services</a>
          <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">Why Choose Us</a>
          <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
