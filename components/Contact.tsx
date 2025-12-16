import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! This is a demo form.");
  };

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
    <section className="py-32 relative overflow-hidden" id="contact">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto glass rounded-3xl p-8 md:p-16 shadow-2xl border border-white/10">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-wider uppercase mb-4">
                  Get in Touch
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  <a 
                    href="#contact" 
                    onClick={(e) => scrollToSection(e, '#contact')}
                    className="hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    Let's Work Together
                  </a>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Have a project in mind or just want to say hi? I'm always open to discussing new opportunities, ideas, and collaborations.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="p-4 bg-white/5 rounded-2xl text-blue-400 border border-white/10 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-black/20">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Email Me</h3>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-blue-400 transition-colors text-lg">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="p-4 bg-white/5 rounded-2xl text-blue-400 border border-white/10 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-black/20">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Location</h3>
                    <p className="text-slate-400 text-lg">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/5">
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-600"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-600"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none placeholder:text-slate-600"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 transform hover:-translate-y-1"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>

          </div>
        </div>

        <footer className="mt-24 text-center text-slate-500 text-sm">
          <p className="mb-2">© {new Date().getFullYear()} Jinghao Du. All rights reserved.</p>
          <div className="flex items-center justify-center gap-2 opacity-70">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <p>Built with React, Tailwind & Gemini API</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;