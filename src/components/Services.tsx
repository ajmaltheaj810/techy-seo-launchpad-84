import React, { useEffect, useState } from 'react';
import { Search, FileText, BarChart, TrendingUp, Target, Zap, Star, ArrowRight, CheckCircle, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ParallaxContainer from '@/components/ParallaxContainer';

const Services = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      gradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      icon: <FileText className="h-12 w-12 text-yellow-400" />,
      title: "Technical SEO Optimization", 
      description: "Complete technical audit and optimization including Core Web Vitals, schema markup, and mobile performance.",
      metrics: "85% Faster Loading",
      roi: "500+ Success Stories",
      features: ["Core Web Vitals", "Schema Markup", "Mobile Optimization"],
      gradient: "from-green-500/10 to-teal-500/10"
    },
    {
      icon: <BarChart className="h-12 w-12 text-yellow-400" />,
      title: "Performance Analytics",
      description: "Advanced tracking and reporting with custom dashboards showing ROI, conversions, and growth metrics.",
      metrics: "Real-Time Analytics",
      roi: "24hr Response Time",
      features: ["Custom Dashboards", "ROI Tracking", "Conversion Analysis"],
      gradient: "from-orange-500/10 to-red-500/10"
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
      {/* Parallax Background Elements */}
      <ParallaxContainer 
        speed={0.3}
        className="absolute top-20 left-20 w-32 h-32 border border-yellow-400/30 rounded-full opacity-20"
      />
      
      <ParallaxContainer 
        speed={0.4}
        direction="down"
        className="absolute bottom-20 right-20 w-28 h-28 border border-purple-400/20 rounded-lg opacity-30"
        style={{ transform: 'rotate(45deg)' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/40 rounded-full text-yellow-400 text-sm font-bold tracking-wider">
              INVESTMENT-GRADE SEO SERVICES
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">Scale Your Investment?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Join hundreds of successful businesses that have grown their revenue with our 
            <span className="text-yellow-400 font-semibold"> proven SEO expertise</span>
          </p>
          
          {/* Features Row */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-3 ${feature.color} bg-white/5 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 hover:bg-white/10 hover:border-yellow-400/50 transition-all duration-300`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="p-1 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-full">
                  {feature.icon}
                </div>
                <span className="text-sm font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Service Cards with Parallax */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ParallaxContainer
              key={index}
              speed={0.2 + index * 0.1}
              className="h-full"
            >
              <Card 
                className="bg-black/70 backdrop-blur-sm border-gray-700 hover:border-yellow-400/60 transition-all duration-500 group relative overflow-hidden cursor-pointer h-full"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Hover Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <CardContent className="p-8 text-center relative z-20 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full border border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300 flex-grow">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6 space-y-3">
                    <div className="flex items-center justify-center space-x-2 text-sm font-bold text-yellow-400">
                      <TrendingUp className="h-4 w-4" />
                      <span>{service.roi}</span>
                    </div>
                    
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center justify-center space-x-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Metrics Badge */}
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/15 to-orange-500/15 border border-yellow-400/40 rounded-full px-6 py-3 text-yellow-400 text-sm font-bold group-hover:from-yellow-400/25 group-hover:to-orange-500/25 group-hover:border-yellow-400/60 transition-all duration-300">
                    <BarChart className="h-4 w-4" />
                    <span>{service.metrics}</span>
                  </div>

                  {/* CTA */}
                  <div 
                    className="mt-6 transition-all duration-300"
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

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                </CardContent>
              </Card>
            </ParallaxContainer>
          ))}
        </div>

        {/* Stats Section with Parallax */}
        <ParallaxContainer speed={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16" data-aos="fade-up" data-aos-delay="600">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:border-yellow-400/60 hover:bg-white/10 transition-all duration-300"
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
        </ParallaxContainer>

        {/* CTA Section */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="800">
          <div className="inline-block p-8 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/30 rounded-2xl backdrop-blur-sm hover:border-yellow-400/50 hover:from-yellow-400/15 hover:to-orange-500/15 transition-all duration-500 group max-w-2xl">
            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">Ready to Scale Your Investment?</h3>
            <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300 text-lg">Join hundreds of successful businesses that have grown their revenue with our SEO expertise</p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/25">
              Start Your SEO Investment Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
