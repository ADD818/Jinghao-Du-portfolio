import React from 'react';
import { PROJECTS, PERSONAL_INFO } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
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
    <section className="py-32" id="projects">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div>
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-bold tracking-wider uppercase mb-4">
                Portfolio
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                <a 
                  href="#projects" 
                  onClick={(e) => scrollToSection(e, '#projects')}
                  className="hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  Featured Projects
                </a>
              </h2>
              <p className="text-slate-400 max-w-lg text-lg">Selected work demonstrating full-stack capabilities, from AI integrations to complex analytics dashboards.</p>
           </div>
           <a 
             href={PERSONAL_INFO.github}
             target="_blank"
             rel="noopener noreferrer"
             className="hidden md:flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all backdrop-blur-sm group"
           >
             View Github <Github size={18} className="group-hover:rotate-12 transition-transform" />
           </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className="group glass rounded-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all hover:-translate-y-2 duration-500 flex flex-col h-full border border-white/5 hover:border-blue-500/30 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors z-20 duration-500"></div>
                
                {/* Image Scale Effect */}
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  loading="lazy"
                  width="600"
                  height="400"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                <a 
                   href={project.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="absolute top-4 right-4 z-30 p-2.5 bg-black/50 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-600 border border-white/10"
                   aria-label={`Visit ${project.title}`}
                >
                   <ExternalLink size={20} />
                </a>
              </div>
              
              <div className="p-8 flex flex-col flex-1 relative">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="mb-6 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-blue-400 transition-colors block"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-auto relative z-10">
                   <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-semibold bg-white/5 text-blue-200/80 rounded-full border border-white/5 hover:bg-white/10 transition-colors hover:border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                   </div>
                   
                   <a 
                     href={project.link} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wide group/link"
                     aria-label={`View ${project.title} project`}
                   >
                     View Project <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <a 
             href={PERSONAL_INFO.github} 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white"
           >
             View All Projects on Github <Github size={18} />
           </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;