
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_50%)]"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      ></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.3)}px)`,
            }}
          />
        ))}
      </div>

      {/* Geometric Shapes with Parallax */}
      <div 
        className="absolute top-20 left-10 w-32 h-32 border border-yellow-400/20 rotate-45 animate-spin"
        style={{ 
          transform: `translateY(${scrollY * 0.3}px) rotate(45deg)`,
          animationDuration: '20s'
        }}
      />
      <div 
        className="absolute bottom-20 right-10 w-24 h-24 border-2 border-yellow-400/30 rounded-full"
        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
      />
      <div 
        className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-r from-yellow-400/10 to-transparent transform rotate-12"
        style={{ transform: `translateY(${scrollY * 0.4}px) rotate(12deg)` }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div 
          className="mb-8" 
          data-aos="fade-down" 
          data-aos-delay="200"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <img 
            src="/lovable-uploads/41be5862-f5fa-437f-b87c-054658b2e61c.png" 
            alt="TS Techy Logo" 
            className="h-24 w-auto mx-auto mb-6 hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        <h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300"
          data-aos="fade-up"
          data-aos-delay="300"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          Grow Your Business with 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 animate-pulse"> Smart SEO</span>
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
          style={{ transform: `translateY(${scrollY * 0.03}px)` }}
        >
          At TS Techy, we help your website rank higher and convert better with proven SEO strategies.
        </p>
        
        <div 
          data-aos="fade-up" 
          data-aos-delay="500"
          style={{ transform: `translateY(${scrollY * 0.02}px)` }}
        >
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-yellow-400/50 animate-bounce"
            style={{ animationDuration: '2s' }}
          >
            Get Free Consultation
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
