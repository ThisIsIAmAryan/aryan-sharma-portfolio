import { Card, CardContent } from '@/components/ui/card';
import { skills } from '@/lib/constants';
import * as SiIcons from 'react-icons/si';
import { Code } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">Skills & Technologies</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} className="bg-slate-800/50 border-slate-700/50 card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-100 mb-6">{category}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {skillList.map((skill) => {
                    const IconComponent = SiIcons[skill.icon as keyof typeof SiIcons];
                    return (
                      <div key={skill.name} className="flex items-center space-x-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-200 hover:scale-105">
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                          {IconComponent ? (
                            <IconComponent className="w-6 h-6 text-blue-400" />
                          ) : skill.name === "VS Code" ? (
                            <Code className="w-6 h-6 text-blue-400" />
                          ) : (
                            <div className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">
                              {skill.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <span className="text-slate-100 text-sm font-medium">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
