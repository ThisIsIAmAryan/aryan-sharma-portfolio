import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';
import { experience, education, certificates } from '@/lib/constants';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">Experience & Education</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My professional journey and academic achievements
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Experience Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            {/* Internship */}
            {experience.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <Card className="flex-1 bg-slate-800/50 border-slate-700/50 card-hover">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-100">{exp.title}</h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                        <p className="text-slate-400">{exp.duration} | {exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-slate-300">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
            
            {/* Education */}
            <div className="relative flex items-start space-x-6 mt-8">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <Card className="flex-1 bg-slate-800/50 border-slate-700/50 card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-100">{education.degree}</h3>
                      <p className="text-green-400 font-medium">{education.institution}</p>
                      <p className="text-slate-400">{education.duration} | {education.location}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="text-2xl font-bold text-green-400">{education.cgpa}</div>
                      <div className="text-slate-400 text-sm">CGPA</div>
                    </div>
                  </div>
                  <p className="text-slate-300">
                    Pursuing a comprehensive computer science curriculum with focus on software engineering principles, 
                    data structures, algorithms, and web development technologies.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* High School */}
            <div className="relative flex items-start space-x-6 mt-8">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <Card className="flex-1 bg-slate-800/50 border-slate-700/50 card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-100">High School Graduate (CBSE)</h3>
                      <p className="text-purple-400 font-medium">Rankers International School | St. Paul Higher Secondary School</p>
                      <p className="text-slate-400">Jul 2022 | Indore, India</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="text-lg font-bold text-purple-400">89.4% (12th)</div>
                      <div className="text-lg font-bold text-purple-400">94.5% (10th)</div>
                    </div>
                  </div>
                  <p className="text-slate-300">
                    Completed secondary education with excellence in mathematics and science subjects, 
                    laying a strong foundation for computer science studies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Certificates */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-slate-100 mb-8 text-center">Certificates & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <Card 
                key={index} 
                className="bg-slate-800/50 border-slate-700/50 card-hover cursor-pointer group transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20"
                onClick={() => window.open(cert.documentUrl, '_blank')}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-100 group-hover:text-orange-300 transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-slate-400">{cert.issuer}</p>
                        {cert.level && (
                          <Badge
                          variant="outline"
                          className="mt-1 border-2 border-gray-500 text-gray-300"
                          >
                          {cert.level}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-orange-400 transition-colors" />
                  </div>
                  <div className="mt-3 text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                    Click to view certificate document
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
