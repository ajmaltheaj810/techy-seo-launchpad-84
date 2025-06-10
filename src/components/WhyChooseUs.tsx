
import React from 'react';
import { DollarSign, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <DollarSign className="h-10 w-10 text-yellow-400" />,
      title: "Affordable Plans",
      description: "Get professional SEO services that fit your budget without compromising on quality."
    },
    {
      icon: <Users className="h-10 w-10 text-yellow-400" />,
      title: "Expert SEO Team",
      description: "Our certified SEO professionals have years of experience delivering results."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-yellow-400" />,
      title: "Real Measurable Results",
      description: "Track your success with detailed analytics and transparent reporting."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We deliver results that matter to your business growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gray-900/50 border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
