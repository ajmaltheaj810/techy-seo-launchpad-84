
import React, { useEffect, useState } from 'react';
import { Search, FileText, BarChart, TrendingUp, Target, Zap, Star, ArrowRight, CheckCircle, DollarSign } from 'lucide-react';
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
      roi: "$2M+ Revenue Generated",
      features: ["Competitor Analysis", "Long-tail Keywords", "Search Intent Mapping"],
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: <FileText className="h-12 w-12 text-yellow-400" />,
      title: "Technical SEO Optimization", 
      description: "Complete technical audit and optimization including Core Web Vitals, schema markup, and mobile performance.",
      metrics: "85% Faster Loading",
      roi: "500+ Success Stories",
      features: ["Core Web Vitals", "Schema Markup", "Mobile Optimization"],
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: <BarChart className="h-12 w-12 text-yellow-400" />,
      title: "Performance Analytics",
      description: "Advanced tracking and reporting with custom dashboards showing ROI, conversions, and growth metrics.",
      metrics: "Real-Time Analytics",
      roi: "24hr Response Time",
      features: ["Custom Dashboards", "ROI Tracking", "Conversion Analysis"],
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  const features = [
    { icon: <TrendingUp className="h-6 w-6" />, text: "Proven ROI Growth", color: "text-green-400" },
    { icon: <Target className="h-6 w-6" />, text: "Investment-Grade Results", color: "text-blue-400" },
    { icon: <Zap className="h-6 w-6" />, text: "Scalable Solutions", color: "text-purple-400" }
  ];

  const stats = [
    { number: "$2M+", label: "Revenue Generated", icon: <DollarSign className="h-6 w-6" /> },
    { number: "500+", label: "Success Stories", icon: <Star className="h-6 w-6" /> },
    { number: "24hr", label: "Response Time", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "99%", label: "Success Rate", icon: <Target className="h-6 w-6" /> }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Non-overlapping Background Elements - Positioned in separate quadrants */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Top-left quadrant */}
        <div 
          className="absolute top-20 left-20 w-32 h-32 border border-yellow-400/30 rounded-full"
          style={{ 
            transform: `translateY(${scrollY * 0.1}px)`,
            animation: 'spin 30s linear infinite'
          }}
        />
        
        {/* Top-right quadrant */}
        <div 
          className="absolute top-32 right-20 w-24 h-24 border border-blue-400/20 rounded-lg rotate-45"
          style={{ 
            transform: `translateY(${scrollY * -0.05}px) rotate(45deg)`,
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />
        
        {/* Bottom-left quadrant */}
        <div 
          className="absolute bottom-32 left-32 w-28 h-28 border border-purple-400/25 rounded-full"
          style={{ 
            transform: `translateY(${scrollY * 0.08}px)`,
            animation: 'pulse 6s ease-in-out infinite'
          }}
        />
        
        {/* Bottom-right quadrant */}
        <div 
          className="absolute bottom-20 right-32 w-20 h-20 border border-orange-400/20 rounded-lg"
          style={{ 
            transform: `translateY(${scrollY * -0.03}px)`,
            animation: 'spin 25s linear infinite reverse'
          }}
        />
      </div>

      {/* Controlled Floating Particles - Zone-based distribution */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => {
          // Distribute particles in non-overlapping zones
          const zone = i % 4;
          const baseX = (zone % 2) * 60 + 10; // 10% or 70%
          const baseY = Math.floor(zone / 2) * 60 + 10; // 10% or 70%
          
          return (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400/40 to-orange-500/40 rounded-full"
              style={{
                left: `${baseX + Math.random() * 20}%`,
                top: `${baseY + Math.random() * 20}%`,
                transform: `translateY(${scrollY * (0.02 + (i % 3) * 0.01)}px)`,
                animation: `pulse ${3 + (i % 2)}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Investment-focused Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-block mb-4">
            <span className="px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/40 rounded-full text-yellow-400 text-sm font-bold tracking-wider">
              INVESTMENT-GRADE SEO SERVICES
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">Scale Your Investment?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Join hundreds of successful businesses that have grown their revenue with our 
            <span className="text-yellow-400 font-semibold"> proven SEO expertise</span>
          </p>
          
          {/* Investment Features */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-3 ${feature.color} bg-white/5 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 hover:bg-white/10 hover:border-yellow-400/50 transition-all duration-300`}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                style={{ 
                  transform: hoveredCard !== null ? 'scale(0.95)' : 'scale(1)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <div className="p-1 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-full">
                  {feature.icon}
                </div>
                <span className="text-sm font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Service Cards - Staggered with no overlap */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-black/70 backdrop-blur-sm border-gray-700 hover:border-yellow-400/60 transition-all duration-500 group relative overflow-hidden cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              style={{ 
                transform: `translateY(${scrollY * 0.02 * (index + 1)}px)`,
                zIndex: hoveredCard === index ? 30 : 10 + index,
                transition: 'all 0.5s ease'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Controlled hover background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              {/* Subtle glow only on hover */}
              <div 
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-red-500/20 blur-sm transition-opacity duration-500"
                style={{ 
                  opacity: hoveredCard === index ? 1 : 0,
                  transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)'
                }}
              />

              <CardContent className="p-8 text-center relative z-20">
                {/* Icon with controlled animation */}
                <div className="mb-6 flex justify-center relative">
                  <div className="p-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full border border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500 group-hover:scale-110">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 transition-all duration-500">
                  {service.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Investment metrics */}
                <div className="mb-6 space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-sm font-bold text-yellow-400">
                    <TrendingUp className="h-4 w-4" />
                    <span>{service.roi}</span>
                  </div>
                  
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
                
                {/* Performance badge */}
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/15 to-orange-500/15 border border-yellow-400/40 rounded-full px-6 py-3 text-yellow-400 text-sm font-bold group-hover:bg-gradient-to-r group-hover:from-yellow-400/25 group-hover:to-orange-500/25 group-hover:border-yellow-400/60 transition-all duration-500">
                  <BarChart className="h-4 w-4" />
                  <span>{service.metrics}</span>
                </div>

                {/* CTA - Smooth reveal */}
                <div 
                  className="mt-6 transition-all duration-500"
                  style={{
                    opacity: hoveredCard === index ? 1 : 0,
                    transform: hoveredCard === index ? 'translateY(0)' : 'translateY(10px)'
                  }}
                >
                  <div className="flex items-center justify-center space-x-2 text-yellow-400 font-semibold">
                    <span>Explore Investment Potential</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Investment Stats - Coordinated animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16" data-aos="fade-up" data-aos-delay="600">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:border-yellow-400/60 hover:bg-white/10 transition-all duration-500"
              style={{ 
                transform: `translateY(${scrollY * 0.015 * (index + 1)}px)`,
                transitionDelay: `${index * 100}ms`,
                opacity: hoveredCard !== null ? 0.7 : 1
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

        {/* Investment CTA */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="800">
          <div className="inline-block p-8 bg-gradient-to-r from-yellow-400/15 to-orange-500/15 border border-yellow-400/40 rounded-2xl backdrop-blur-sm hover:border-yellow-400/60 hover:bg-gradient-to-r hover:from-yellow-400/20 hover:to-orange-500/20 transition-all duration-700 group">
            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-500">Ready to Scale Your Investment?</h3>
            <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300 text-lg">Join hundreds of successful businesses that have grown their revenue with our SEO expertise</p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-10 py-4 rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30">
              Start Your SEO Investment Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
