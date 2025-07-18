import { Card, CardContent } from '@/components/ui/card';
import { education } from '@/lib/constants';

const About = () => {

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">About Me</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Let me introduce myself and share my journey in software development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern web development setup" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
          </div>
          
          <div className="space-y-6">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-slate-100 mb-4">
                Computer Science Student & Aspiring Software Engineer
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Currently pursuing my Bachelor's in Computer Science Engineering at Vellore Institute of Technology 
                with a strong CGPA of 9.08. I'm passionate about building innovative web solutions and continuously 
                learning new technologies to solve real-world problems.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                My journey in software development has been driven by curiosity and a desire to create meaningful 
                impact through technology. I enjoy working with modern frameworks like React.js and Next.js, 
                and I'm always exploring new ways to optimize performance and user experience.
              </p>
              <p className="text-slate-300 leading-relaxed">
                When I'm not coding, you can find me playing chess, contributing to open-source projects, 
                or learning about the latest trends in web development and AI integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
