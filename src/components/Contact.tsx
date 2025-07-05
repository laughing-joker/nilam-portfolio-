import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 px-4 bg-gradient-dark"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gold">Collaborate</span>
          </h2>
          <div className="w-24 h-px bg-gold mx-auto mb-6" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to create something extraordinary together? Get in touch and let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border focus:border-gold text-foreground placeholder:text-foreground/50 h-12 rounded-none"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border focus:border-gold text-foreground placeholder:text-foreground/50 h-12 rounded-none"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background/50 border-border focus:border-gold text-foreground placeholder:text-foreground/50 rounded-none resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gold hover:bg-gold-dark text-background font-semibold h-12 rounded-none transition-luxury hover-glow"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-gold mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-background/30 backdrop-blur-sm rounded-lg border border-border/50">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60">Phone</div>
                    <div className="text-foreground font-semibold">+255 123 456 789</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-background/30 backdrop-blur-sm rounded-lg border border-border/50">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60">Email</div>
                    <div className="text-foreground font-semibold">contact@nilamabdul.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border/50 pt-8">
              <div className="space-y-4">
                <h4 className="font-heading text-lg font-semibold">Professional Services</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Music Video Appearances</li>
                  <li>• Commercial Modeling</li>
                  <li>• Brand Collaborations</li>
                  <li>• Creative Direction</li>
                  <li>• Event Appearances</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;