import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background
      setIsScrolled(window.scrollY > 20);

      // Handle active section highlighting
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Offset for header height

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update active section
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-dark/90 backdrop-blur-md border-b border-slate-800 py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="flex items-center gap-2 text-2xl font-bold text-white group"
          onClick={(e) => scrollToSection(e, '#home')}
        >
          <div className="p-1.5 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg group-hover:rotate-12 transition-transform">
            <Terminal size={20} className="text-white" />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Alex.dev
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm uppercase tracking-wider font-medium transition-colors duration-300 cursor-pointer ${
                  isActive ? 'text-blue-400' : 'text-slate-400 hover:text-blue-400'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-card border-b border-slate-800 p-6 md:hidden animate-fade-in shadow-2xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`font-medium py-2 block border-b border-slate-800 last:border-0 cursor-pointer ${
                    activeSection === link.href.substring(1) ? 'text-blue-400' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;