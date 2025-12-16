import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import ParticlesBackground from './components/ParticlesBackground';

const App: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-100 relative">
      {/* Noise Texture Overlay */}
      <div className="bg-noise z-50 pointer-events-none"></div>

      {/* Ambient Background Lights & Particles */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         {/* Particles Layer */}
         <ParticlesBackground />

         {/* Blob Layers - pushed behind particles visually via stacking context or just mixed */}
         <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-700/10 rounded-full blur-[100px] animate-blob mix-blend-screen opacity-50"></div>
         <div className="absolute top-[30%] right-[-10%] w-[50vw] h-[50vw] bg-purple-700/10 rounded-full blur-[100px] animate-blob mix-blend-screen opacity-50" style={{ animationDelay: '2s' }}></div>
         <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-indigo-700/10 rounded-full blur-[120px] animate-blob mix-blend-screen opacity-50" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <AIChat />
      </div>
    </div>
  );
};

export default App;