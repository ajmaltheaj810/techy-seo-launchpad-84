
import React from 'react';
import { Search, FileText, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Search className="h-12 w-12 text-yellow-400" />,
      title: "Keyword Research",
      description: "Find the best keywords to boost traffic and reach your target audience effectively."
    },
    {
      icon: <FileText className="h-12 w-12 text-yellow-400" />,
      title: "On-Page Optimization", 
      description: "Improve your content, meta tags, and speed for better search engine rankings."
    },
    {
      icon: <BarChart className="h-12 w-12 text-yellow-400" />,
      title: "Monthly SEO Reports",
      description: "Get clear, actionable reports every month to track your progress and ROI."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our SEO Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive SEO solutions tailored to grow your online presence
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-black/50 border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center group-hover:animate-pulse">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
