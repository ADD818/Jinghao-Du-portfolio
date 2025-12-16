import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Terminal, Code, Cpu } from 'lucide-react';

const About: React.FC = () => {
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
    <section className="py-32 relative" id="about">
       <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
             <div className="flex-1 space-y-8">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-wider uppercase mb-2">
                  About Me
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  <a 
                    href="#about" 
                    onClick={(e) => scrollToSection(e, '#about')}
                    className="hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    Passionate about creating digital excellence.
                  </a>
                </h2>
                <div className="prose prose-invert prose-lg text-slate-400 space-y-6">
                  <p className="text-xl text-slate-200 font-light leading-relaxed">
                    {PERSONAL_INFO.bio}
                  </p>
                  <p>
                    I approach every project with a mindset of problem-solving and efficiency. Whether it's optimizing a React render cycle or designing a robust backend architecture, I thrive on the challenges that modern web development presents.
                  </p>
                  <p>
                    When I'm not coding, I'm exploring the latest in Generative AI, contributing to open-source projects, or sharing my knowledge with the developer community.
                  </p>
                </div>
             </div>

             <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group duration-300">
                   <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-500/20">
                      <Terminal className="text-blue-400" size={28} />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3">Clean Code</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">
                      I write maintainable, scalable, and self-documenting code that teams love to work with, prioritizing readability and performance.
                   </p>
                </div>

                <div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group duration-300">
                   <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-indigo-500/20">
                      <Code className="text-indigo-400" size={28} />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3">Modern Stack</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">
                      Always up-to-date with the latest React patterns, TypeScript features, and server-side rendering techniques like Next.js.
                   </p>
                </div>

                <div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group duration-300 sm:col-span-2">
                   <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
                      <Cpu className="text-purple-400" size={28} />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3">AI Integration</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">
                      Pioneering the use of LLMs like Gemini to create intelligent, context-aware user interfaces that adapt to user needs.
                   </p>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

export default About;