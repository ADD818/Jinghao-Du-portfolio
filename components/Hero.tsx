import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
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
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden" id="home">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 animate-slide-up relative z-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-sm font-medium backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for freelance projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Hi, I'm {PERSONAL_INFO.name.split(' ')[0]}.<br />
            <span className="text-gradient drop-shadow-lg">
              {PERSONAL_INFO.role}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-light">
            {PERSONAL_INFO.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, '#projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 group border border-white/10 cursor-pointer"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold transition-all hover:scale-105 backdrop-blur-sm flex items-center justify-center hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-8 pt-8 border-t border-slate-800/50">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200 hover:-translate-y-1" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200 hover:-translate-y-1" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200 hover:-translate-y-1" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Visual Element */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '200ms' }}>
           <div className="relative w-full max-w-md aspect-square animate-float">
             {/* Glow behind */}
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-[100px] opacity-30"></div>
             
             {/* Card Container */}
             <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl glass group transform hover:rotate-1 transition-transform duration-500">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 mix-blend-overlay"></div>
               
               <img 
                 src="https://picsum.photos/800/800?grayscale" 
                 alt="Alex Chen Profile"
                 fetchPriority="high"
                 width="800"
                 height="800"
                 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 filter contrast-125 grayscale hover:grayscale-0"
               />
               
               {/* Overlay Content */}
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark via-dark/80 to-transparent p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-green-400 text-xs font-bold tracking-wider uppercase">Online</span>
                  </div>
                  <div className="text-white font-mono text-sm opacity-90 bg-black/40 inline-block px-3 py-1 rounded-lg backdrop-blur-md border border-white/10 shadow-lg">
                    &lt;SeniorDeveloper /&gt;
                  </div>
               </div>
             </div>
             
             {/* Floating Elements */}
             <div className="absolute -right-4 top-12 glass p-4 rounded-2xl shadow-xl animate-float border border-white/10" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                      <span className="font-bold text-lg">8+</span>
                   </div>
                   <div className="text-sm">
                      <p className="text-slate-400 font-medium">Years of</p>
                      <p className="text-white font-bold">Experience</p>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <div className="w-5 h-8 border-2 border-slate-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 bg-slate-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;