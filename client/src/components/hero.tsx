import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';
import { personalInfo } from '@/lib/constants';

const Hero = () => {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-slate-900"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Professional developer workspace" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="block text-slate-100">Hi, I'm</span>
              <span className="block gradient-text">
                {personalInfo.name}
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8">
              {personalInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="gradient-button text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('projects')}
                className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
                className="border-2 border-green-500 text-green-400 px-8 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Download Resume
              </Button>
            </div>
            <div className="flex space-x-6">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Github className="w-8 h-8" />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a 
                href={personalInfo.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Twitter className="w-8 h-8" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
          
          {/* Right side - Profile image */}
          <div className="animate-fade-in lg:flex justify-center hidden">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800" 
                  alt="Aryan Sharma - Professional Profile" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500/10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
    </section>
  );
};

export default Hero;
