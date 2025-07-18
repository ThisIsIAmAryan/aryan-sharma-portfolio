import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Github, Linkedin, Twitter, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { personalInfo } from '@/lib/constants';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest('POST', '/api/contact', data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive"
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleDownloadResume = () => {
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Aryan-Sharma-Resume.pdf';
    link.click();
  };

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-100 mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-700/50 border-slate-600 text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-700/50 border-slate-600 text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-slate-700/50 border-slate-600 text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-slate-700/50 border-slate-600 text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full gradient-button text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-100 mb-6">Let's connect</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                I'm currently seeking new opportunities in software development, particularly in full-stack web development roles. 
                I'm passionate about creating innovative solutions and would love to discuss how I can contribute to your team.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-100">Email</h4>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-100">Location</h4>
                  <p className="text-slate-400">{personalInfo.location}</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-slate-100 mb-4">Follow me</h4>
              <div className="flex space-x-4">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Github className="w-6 h-6 text-slate-300" />
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-slate-300" />
                </a>
                <a 
                  href={personalInfo.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Twitter className="w-6 h-6 text-slate-300" />
                </a>
              </div>
            </div>
            
            {/* Resume Download */}
            <div className="pt-8">
              <Button 
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
