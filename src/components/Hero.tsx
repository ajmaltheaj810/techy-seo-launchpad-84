
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import ParallaxContainer from '@/components/ParallaxContainer';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Parallax Background Layer */}
      <ParallaxContainer 
        speed={0.3} 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08)_0%,transparent_70%)]"
      >
        <div />
      </ParallaxContainer>
      
      {/* Parallax Geometric Elements */}
      <ParallaxContainer 
        speed={0.2}
        className="absolute top-20 left-10 w-24 h-24 border border-yellow-400/20"
        style={{ transform: 'rotate(45deg)' }}
      >
        <div />
      </ParallaxContainer>
      
      <ParallaxContainer 
        speed={0.4}
        direction="down"
        className="absolute bottom-20 right-10 w-20 h-20 border border-yellow-400/15 rounded-full"
      >
        <div />
      </ParallaxContainer>
      
      <ParallaxContainer 
        speed={0.6}
        className="absolute top-1/2 right-20 w-16 h-16 bg-yellow-400/5"
        style={{ transform: 'rotate(12deg)' }}
      >
        <div />
      </ParallaxContainer>

      {/* Foreground Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div 
          className="mb-8 animate-fade-in"
          data-aos="fade-down" 
          data-aos-delay="200"
        >
          <img 
            src="/lovable-uploads/41be5862-f5fa-437f-b87c-054658b2e61c.png" 
            alt="TS Techy Logo" 
            className="h-24 w-auto mx-auto mb-6 transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Grow Your Business with 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 block mt-2">
            Smart SEO
          </span>
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          At TS Techy, we help your website rank higher and convert better with proven SEO strategies.
        </p>
        
        <div 
          data-aos="fade-up" 
          data-aos-delay="500"
          className="animate-fade-in"
        >
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/25"
          >
            Get Free Consultation
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center animate-pulse">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
