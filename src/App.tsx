/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { SectionId, Translation } from './types';
import { translations } from './translations';

import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'es'>('es'); // Default to Spanish as requested
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Quick bilingual translation resolver
  const t = (key: keyof Translation): string => {
    return translations[language][key] || '';
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  // 1. Monitor scroll events to toggling the "Scroll to top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Active Section Spy: Tracks which section is currently on layout screen to update sidebar glow auras
  useEffect(() => {
    const sections: SectionId[] = ['home', 'skills', 'resume', 'portfolio', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Trigger when section occupies the active mid-section of viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  return (
    <div id="app-container" className="relative min-h-screen bg-slate-950 font-sans text-slate-200 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Floating Left Sidebar Indicator Capsule exactly like the image */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        language={language}
        toggleLanguage={toggleLanguage}
        t={t}
      />

      {/* Primary content — bottom padding on mobile for nav bar */}
      <main className="pb-[4.5rem] md:pb-0 md:pl-28 transition-all duration-300">
        
        {/* HOMEPAGE SECTION */}
        <Hero t={t} language={language} />

        {/* SKILLS SECTION (with orbiting bubbles) */}
        <Skills t={t} language={language} />

        {/* EDUCATION & EXPERIENCE TIMELINE SECTION */}
        <Education t={t} language={language} />

        {/* SELECTED PORTFOLIO LISTS GRID */}
        <Portfolio t={t} language={language} />

        {/* ENVELOPE CONTACT FORMS AND LOCAL STORAGE MESSAGE PANEL */}
        <Contact t={t} language={language} />

      </main>

      {/* FLOATING SCROLL-TO-TOP BUTTON as highlighted in the bottom right of the reference layout */}
      {showScrollTop && (
        <button
          id="scroll-to-top-button"
          onClick={handleScrollToTop}
          className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 md:right-10 z-40 p-3 sm:p-3.5 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-cyan-500/40 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:scale-110 transition-all duration-300 active:scale-95"
          title={language === 'en' ? 'Back to Top' : 'Volver arriba'}
        >
          <ChevronUp className="w-5 h-5 drop-shadow-[0_0_4px_rgba(34,211,238,0.5)] animate-pulse" />
        </button>
      )}

      {/* Decorative Outer Ambient Cyber Blur Canvas Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-to-b from-cyan-500/5 to-transparent blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-gradient-to-t from-blue-600/5 to-transparent blur-[200px] pointer-events-none" />
    </div>
  );
}
