
import React, { useEffect, useState } from 'react';
import { DollarSign, Users, TrendingUp, Shield, Award, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <DollarSign className="h-10 w-10 text-yellow-400" />,
      title: "High ROI Investment",
      description: "Get professional SEO services that deliver measurable returns on your investment with transparent pricing.",
      highlight: "300% ROI Average"
    },
    {
      icon: <Users className="h-10 w-10 text-yellow-400" />,
      title: "Expert SEO Team",
      description: "Our certified SEO professionals have years of experience delivering results for Fortune 500 companies.",
      highlight: "10+ Years Experience"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-yellow-400" />,
      title: "Proven Growth Results",
      description: "Track your success with detailed analytics and transparent reporting. See real business growth.",
      highlight: "99% Success Rate"
    }
  ];

  const trustIndicators = [
    { icon: <Shield className="h-8 w-8" />, text: "Secure & Reliable" },
    { icon: <Award className="h-8 w-8" />, text: "Award Winning" },
    { icon: <Rocket className="h-8 w-8" />, text: "Fast Results" }
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <div className="absolute top-10 left-5 w-32 h-32 border-2 border-yellow-400 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-48 h-48 border border-yellow-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400/10 rotate-12"></div>
      </div>

      {/* Floating Money Icons */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <DollarSign
            key={i}
            className="absolute text-yellow-400/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 20}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.2)}px)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">
            Why Invest in Us
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            We deliver results that matter to your business growth and investor confidence
          </p>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            {trustIndicators.map((indicator, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 text-yellow-400 hover:scale-110 transition-all duration-300 group"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="group-hover:animate-spin">
                  {indicator.icon}
                </div>
                <span className="text-sm font-semibold">{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gray-900/50 border-gray-700 hover:border-yellow-400/50 transition-all duration-500 group hover:transform hover:scale-105 hover:-rotate-1 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              style={{ transform: `translateY(${scrollY * 0.04 * (index + 1)}px)` }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/20 rounded-lg group-hover:shadow-lg group-hover:shadow-yellow-400/20 transition-all duration-500"></div>

              <CardContent className="p-8 text-center relative z-10">
                <div className="mb-6 flex justify-center group-hover:animate-bounce">
                  <div className="p-4 bg-yellow-400/10 rounded-full group-hover:bg-yellow-400/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">{feature.description}</p>
                
                {/* Highlight Badge */}
                <div className="inline-block bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border border-yellow-400/30 rounded-full px-6 py-2 text-yellow-400 text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                  {feature.highlight}
                </div>

                {/* Bottom Glow Effect */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Investment CTA Section */}
        <div 
          className="text-center bg-gradient-to-r from-gray-900/50 to-black/50 border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400/40 transition-all duration-500 group"
          data-aos="zoom-in"
          data-aos-delay="500"
          style={{ transform: `translateY(${scrollY * 0.02}px)` }}
        >
          <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
            Ready to Scale Your Investment?
          </h3>
          <p className="text-gray-300 text-lg mb-6">
            Join hundreds of successful businesses that have grown their revenue with our SEO expertise
          </p>
          <div className="flex justify-center items-center space-x-8 text-yellow-400">
            <div className="text-center group-hover:animate-pulse">
              <div className="text-2xl font-bold">$2M+</div>
              <div className="text-sm">Revenue Generated</div>
            </div>
            <div className="text-center group-hover:animate-pulse">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Success Stories</div>
            </div>
            <div className="text-center group-hover:animate-pulse">
              <div className="text-2xl font-bold">24hr</div>
              <div className="text-sm">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
