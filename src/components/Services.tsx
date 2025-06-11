
import React, { useEffect, useState } from 'react';
import { Search, FileText, BarChart, TrendingUp, Target, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Search className="h-12 w-12 text-yellow-400" />,
      title: "Keyword Research",
      description: "Find the best keywords to boost traffic and reach your target audience effectively.",
      metrics: "300% Traffic Increase"
    },
    {
      icon: <FileText className="h-12 w-12 text-yellow-400" />,
      title: "On-Page Optimization", 
      description: "Improve your content, meta tags, and speed for better search engine rankings.",
      metrics: "85% Faster Loading"
    },
    {
      icon: <BarChart className="h-12 w-12 text-yellow-400" />,
      title: "Monthly SEO Reports",
      description: "Get clear, actionable reports every month to track your progress and ROI.",
      metrics: "Real-Time Analytics"
    }
  ];

  const features = [
    { icon: <TrendingUp className="h-6 w-6" />, text: "Guaranteed Results" },
    { icon: <Target className="h-6 w-6" />, text: "Targeted Strategy" },
    { icon: <Zap className="h-6 w-6" />, text: "Fast Implementation" }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-10"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="absolute top-20 left-10 w-40 h-40 border border-yellow-400/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 border border-yellow-400/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-yellow-400/5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">
            Our SEO Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Comprehensive SEO solutions tailored to grow your online presence
          </p>
          
          {/* Features Banner */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 text-yellow-400 hover:scale-110 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {feature.icon}
                <span className="text-sm font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-black/50 border-gray-700 hover:border-yellow-400/50 transition-all duration-500 group hover:transform hover:scale-105 hover:rotate-1 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{ transform: `translateY(${scrollY * 0.05 * (index + 1)}px)` }}
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Icon Background */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:animate-spin" style={{ animationDuration: '10s' }}>
                {service.icon}
              </div>

              <CardContent className="p-8 text-center relative z-10">
                <div className="mb-6 flex justify-center group-hover:animate-bounce">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>
                
                {/* Metrics Badge */}
                <div className="inline-block bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 text-yellow-400 text-sm font-semibold group-hover:bg-yellow-400/20 transition-colors duration-300">
                  {service.metrics}
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="600">
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "300%", label: "Avg Traffic Boost" },
            { number: "24/7", label: "Support Available" },
            { number: "99%", label: "Success Rate" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-110 transition-transform duration-300"
              style={{ transform: `translateY(${scrollY * 0.03 * (index + 1)}px)` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 group-hover:animate-pulse">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
