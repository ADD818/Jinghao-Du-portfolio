import React from 'react';
import { SKILLS } from '../constants';
import * as Icons from 'lucide-react';

const Skills: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-32" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold tracking-wider uppercase mb-4">
            My Arsenal
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            <a 
              href="#skills" 
              onClick={(e) => scrollToSection(e, '#skills')}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              Technical Expertise
            </a>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolset developed over years of production-level engineering, focused on scalability and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, index) => {
            // Dynamically get icon component, fallback to Code if not found
            const IconComponent = (Icons as any)[skill.icon] || Icons.Code;
            
            return (
              <div 
                key={skill.name} 
                className="glass p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 border border-white/5 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-white/5 group-hover:border-purple-500/30 group-hover:scale-110 transition-all duration-300 shadow-inner">
                    <IconComponent size={24} className="text-slate-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <span className="text-2xl font-bold text-slate-700 group-hover:text-white/20 transition-colors">{skill.level}%</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">{skill.name}</h3>
                
                <div className="relative h-2 bg-slate-800/50 rounded-full overflow-hidden border border-white/5">
                  <div 
                    className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out animate-shimmer-gradient group-hover:brightness-110"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;