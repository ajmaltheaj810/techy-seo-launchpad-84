import React, { useEffect, useState } from 'react';
import { DollarSign, Users, TrendingUp, Shield, Award, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ParallaxContainer from '@/components/ParallaxContainer';

const WhyChooseUs = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      <ParallaxContainer 
        speed={0.2}
        className="absolute top-20 left-10 w-24 h-24 border border-yellow-400/10 opacity-30"
        style={{ transform: 'rotate(45deg)' }}
      />
      
      <ParallaxContainer 
        speed={0.4}
        direction="down"
        className="absolute bottom-20 right-10 w-32 h-32 border border-yellow-400/8 rounded-full opacity-20"
      />
      
      <ParallaxContainer 
        speed={0.3}
        className="absolute top-1/2 left-1/4 w-20 h-20 bg-yellow-400/5 opacity-40"
        style={{ transform: 'rotate(12deg)' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Why Invest in Us
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            We deliver results that matter to your business growth and investor confidence
          </p>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            {trustIndicators.map((indicator, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 text-yellow-400 hover:scale-105 transition-all duration-300 group"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {indicator.icon}
                </div>
                <span className="text-sm font-semibold">{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Feature Cards with Parallax */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <ParallaxContainer
              key={index}
              speed={0.15 + index * 0.05}
              className="h-full"
            >
              <Card 
                className="bg-gray-900/50 border-gray-700 hover:border-yellow-400/50 transition-all duration-500 group hover:transform hover:scale-105 relative overflow-hidden h-full"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glowing Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/20 rounded-lg group-hover:shadow-lg group-hover:shadow-yellow-400/10 transition-all duration-500"></div>

                <CardContent className="p-8 text-center relative z-10 h-full flex flex-col">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-yellow-400/10 rounded-full group-hover:bg-yellow-400/20 transition-colors duration-300 group-hover:scale-110">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow">{feature.description}</p>
                  
                  {/* Highlight Badge */}
                  <div className="inline-block bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border border-yellow-400/30 rounded-full px-6 py-2 text-yellow-400 text-sm font-bold group-hover:scale-105 transition-transform duration-300">
                    {feature.highlight}
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </CardContent>
              </Card>
            </ParallaxContainer>
          ))}
        </div>

        {/* CTA Section with Parallax */}
        <ParallaxContainer speed={0.2}>
          <div 
            className="text-center bg-gradient-to-r from-gray-900/50 to-black/50 border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400/40 transition-all duration-500 group max-w-4xl mx-auto"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
              Ready to Scale Your Investment?
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Join hundreds of successful businesses that have grown their revenue with our SEO expertise
            </p>
            <div className="flex justify-center items-center space-x-8 text-yellow-400">
              <div className="text-center">
                <div className="text-2xl font-bold">$2M+</div>
                <div className="text-sm text-gray-400">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-gray-400">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24hr</div>
                <div className="text-sm text-gray-400">Response Time</div>
              </div>
            </div>
          </div>
        </ParallaxContainer>
      </div>
    </section>
  );
};

export default WhyChooseUs;
