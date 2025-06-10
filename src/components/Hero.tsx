
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_50%)]"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8" data-aos="fade-down" data-aos-delay="200">
          <img 
            src="/lovable-uploads/7f640042-4d9b-47fa-855d-520cc99b92b9.png" 
            alt="TS Techy Logo" 
            className="h-24 w-auto mx-auto mb-6"
          />
        </div>
        <h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Grow Your Business with 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"> Smart SEO</span>
        </h1>
        <p 
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          At TS Techy, we help your website rank higher and convert better with proven SEO strategies.
        </p>
        <div data-aos="fade-up" data-aos-delay="500">
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
