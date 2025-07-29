
import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FooterPlayer from './components/FooterPlayer';
import { NAV_ITEMS } from './constants';
import { Menu, X, User, Search } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const sections = NAV_ITEMS.map(item => document.getElementById(item.id)).filter(Boolean);
    
    if (!mainContentRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;

        const visibleSections = entries
          .filter(entry => entry.isIntersecting)
          .map(entry => entry.target.id);

        if (visibleSections.length > 0) {
          const activeIndex = Math.max(...visibleSections.map(id => NAV_ITEMS.findIndex(item => item.id === id)));
          if (activeIndex >= 0) {
            setActiveSection(NAV_ITEMS[activeIndex].id);
          }
        }
      },
      { 
        root: mainContentRef.current,
        // Defines a trigger area at the top 25% of the viewport.
        // A section becomes active when it enters this zone.
        rootMargin: '0px 0px -75% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    isScrollingRef.current = true;
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    
    if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = window.setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000); // Debounce observer for 1s after click
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    handleNavClick(sectionId);
  };

  return (
    <div className="bg-black min-h-screen text-gray-300">
      <div className="flex">
        <Sidebar activeSection={activeSection} onNavClick={handleNavClick} className="hidden lg:block" />

        {/* Mobile Header */}
        <div className="lg:hidden fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-40 h-16 flex items-center justify-between px-4">
           <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="flex items-center gap-2 text-xl font-bold text-white">
            <Search size={28} className="text-[#1DB954]" />
            Vordi
          </a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white z-50">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
         {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black z-30 pt-20">
            <Sidebar activeSection={activeSection} onNavClick={handleNavClick} className="!block" />
          </div>
        )}

        {/* Main Content */}
        <main ref={mainContentRef} className="flex-1 lg:ml-64 min-h-screen overflow-y-auto bg-[#121212] pb-40">
          <div className="relative z-10 pt-16 lg:pt-0">
             <div className="absolute top-0 right-4 lg:right-8 lg:top-8 z-20 hidden lg:flex items-center space-x-4">
                 <a href="Vordi_Drilon_Resume.pdf" download="Vordi_Drilon_Resume.pdf" className="bg-[#1DB954] text-black font-bold py-2 px-4 rounded-full text-sm flex items-center gap-2 hover:bg-[#1ed760] transition-transform hover:scale-105">
                    Download Resume
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </a>
                <button className="bg-black/50 p-2 rounded-full hover:bg-black/80">
                    <User size={20} className="text-white"/>
                </button>
            </div>
            <div className="px-6 md:px-12 py-8 space-y-16">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Education />
              <Certifications />
              <Testimonials />
              <Contact />
            </div>
          </div>
        </main>
      </div>

      <FooterPlayer />
    </div>
  );
};

export default App;