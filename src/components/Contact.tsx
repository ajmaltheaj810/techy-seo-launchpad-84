
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData
        })
      });

      if (response.ok) {
        console.log('Form submitted successfully to Netlify');
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
        
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success state after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      {/* Hidden form for Netlify to detect */}
      <form name="contact" netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get Your Free Consultation</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to boost your search rankings? Let's discuss your SEO goals.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <Card className="bg-black/70 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                <div className="group">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400 transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
                <div className="group">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400 transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
                <div className="group">
                  <Textarea
                    name="message"
                    placeholder="Tell us about your SEO goals..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400 resize-none transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    isSubmitted 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700'
                  } text-black disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-900 border-t-transparent mr-2"></div>
                      Sending...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="h-4 w-4 mr-2" />
                      Submit
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
