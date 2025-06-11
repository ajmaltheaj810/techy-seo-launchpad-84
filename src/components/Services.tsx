
import React, { useEffect, useState } from 'react';
import { Search, FileText, BarChart, TrendingUp, Target, Zap, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Search className="h-12 w-12 text-yellow-400" />,
      title: "Advanced Keyword Research",
      description: "AI-powered keyword analysis and competitor research to dominate your market niche with precision targeting.",
      metrics: "300% Traffic Increase",
      features: ["Competitor Analysis", "Long-tail Keywords", "Search Intent Mapping"],
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: <FileText className="h-12 w-12 text-yellow-400" />,
      title: "Technical SEO Optimization", 
      description: "Complete technical audit and optimization including Core Web Vitals, schema markup, and mobile performance.",
      metrics: "85% Faster Loading",
      features: ["Core Web Vitals", "Schema Markup", "Mobile Optimization"],
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: <BarChart className="h-12 w-12 text-yellow-400" />,
      title: "Performance Analytics",
      description: "Advanced tracking and reporting with custom dashboards showing ROI, conversions, and growth metrics.",
      metrics: "Real-Time Analytics",
      features: ["Custom Dashboards", "ROI Tracking", "Conversion Analysis"],
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  const features = [
    { icon: <TrendingUp className="h-6 w-6" />, text: "Guaranteed Results", color: "text-green-400" },
    { icon: <Target className="h-6 w-6" />, text: "Targeted Strategy", color: "text-blue-400" },
    { icon: <Zap className="h-6 w-6" />, text: "Fast Implementation", color: "text-purple-400" }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: <Star className="h-6 w-6" /> },
    { number: "300%", label: "Avg Traffic Boost", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "99%", label: "Success Rate", icon: <Target className="h-6 w-6" /> }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Optimized Background Elements - Non-overlapping zones */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        {/* Top-left zone */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-yellow-400/20 rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>
        {/* Bottom-right zone */}
        <div className="absolute bottom-20 right-10 w-40 h-40 border border-blue-400/15 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
        {/* Center zone - only visible when not hovering cards */}
        <div 
          className={`absolute top-1/2 left-1/2 w-60 h-60 border border-purple-400/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${hoveredCard !== null ? 'opacity-0' : 'opacity-100'}`}
          style={{ animationDuration: '6s' }}
        ></div>
      </div>

      {/* Coordinated Floating Particles - Distributed zones */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const zone = i % 4; // Distribute particles into 4 zones
          const zoneX = (zone % 2) * 50; // 0 or 50
          const zoneY = Math.floor(zone / 2) * 50; // 0 or 50
          
          return (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-full animate-pulse"
              style={{
                left: `${zoneX + Math.random() * 45}%`,
                top: `${zoneY + Math.random() * 45}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + (i % 3)}s`,
                transform: `translateY(${scrollY * (0.05 + (i % 3) * 0.02)}px)`,
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section with Staggered Animations */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-semibold animate-pulse" style={{ animationDuration: '2s' }}>
              PREMIUM SEO SERVICES
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 transition-transform duration-300 hover:scale-105">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">Elite</span> SEO Services
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your digital presence with cutting-edge SEO strategies that deliver
            <span className="text-yellow-400 font-semibold"> measurable results</span>
          </p>
          
          {/* Features Banner with Sequential Animation */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-3 ${feature.color} transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 hover:scale-110 hover:bg-white/10`}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="p-1 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full">
                  {feature.icon}
                </div>
                <span className="text-sm font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Service Cards with Coordinated Hover Effects */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-black/60 backdrop-blur-sm border-gray-700 hover:border-yellow-400/50 transition-all duration-500 group relative overflow-hidden cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              style={{ 
                transform: `translateY(${scrollY * 0.03 * (index + 1)}px)`,
                zIndex: hoveredCard === index ? 20 : 10
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Controlled Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/10 via-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

              {/* Background Icon - Only visible on hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-all duration-700 transform group-hover:rotate-12">
                <div className="text-4xl text-yellow-400/30">
                  {service.icon}
                </div>
              </div>

              <CardContent className="p-8 text-center relative z-10">
                {/* Main Icon with Controlled Animation */}
                <div className="mb-6 flex justify-center relative">
                  <div className="p-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full border border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  {hoveredCard === index && (
                    <div className="absolute inset-0 bg-yellow-400/10 rounded-full animate-ping" style={{ animationDuration: '1.5s' }}></div>
                  )}
                </div>

                {/* Title with Smooth Gradient Transition */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features List with Staggered Animation */}
                <div className="mb-6 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center justify-center space-x-2 text-sm text-gray-400 group-hover:text-gray-300 transition-all duration-300"
                      style={{ 
                        transitionDelay: hoveredCard === index ? `${featureIndex * 100}ms` : '0ms'
                      }}
                    >
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Metrics Badge */}
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/30 rounded-full px-6 py-3 text-yellow-400 text-sm font-bold group-hover:bg-gradient-to-r group-hover:from-yellow-400/20 group-hover:to-orange-500/20 group-hover:border-yellow-400/50 transition-all duration-300">
                  <TrendingUp className="h-4 w-4" />
                  <span>{service.metrics}</span>
                </div>

                {/* Call to Action - Smooth Reveal */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center justify-center space-x-2 text-yellow-400 font-semibold">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section with Coordinated Animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="400">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-yellow-400/50 hover:bg-white/10 hover:scale-105"
              style={{ 
                transform: `translateY(${scrollY * 0.02 * (index + 1)}px)`,
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2 group-hover:from-yellow-300 group-hover:to-orange-400 transition-all duration-300">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm uppercase tracking-wider font-semibold group-hover:text-gray-200 transition-colors duration-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
          <div className="inline-block p-8 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/30 rounded-2xl backdrop-blur-sm hover:border-yellow-400/50 hover:bg-gradient-to-r hover:from-yellow-400/15 hover:to-orange-500/15 transition-all duration-500 group">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">Join hundreds of successful businesses that trust our expertise</p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25 group-hover:animate-pulse">
              Start Your SEO Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
