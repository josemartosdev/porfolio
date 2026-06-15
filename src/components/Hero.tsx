import React, { useState, useEffect } from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import { Translation } from '../types';

interface HeroProps {
  t: (key: keyof Translation) => string;
  language: 'en' | 'es';
}

export default function Hero({ t, language }: HeroProps) {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic lists of self-descriptors based on active language
  const roles = language === 'en'
    ? ['Full Stack Developer', 'Symfony & PHP', 'AI Integration', 'React Engineer']
    : ['Desarrollador Full Stack', 'Symfony y PHP', 'Integración IA', 'Ingeniero React'];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex];
    
    // Custom typing speed configs
    const typeSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && typedText === currentRole) {
      // Hold state when word fully typed
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentRole.substring(0, typedText.length - 1)
            : currentRole.substring(0, typedText.length + 1)
        );
      }, typeSpeed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex, language]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-jose-martos.pdf';
    link.download = 'Jose_Martos_Romero_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-[100dvh] relative flex flex-col justify-center items-center px-4 sm:px-6 py-16 sm:py-20 bg-radial-at-t from-slate-900 via-slate-950 to-slate-950 overflow-hidden"
    >
      {/* Decorative Neon Glimmer Spots in grid background */}
      <div className="absolute top-20 left-1/4 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Cyberpunk Grid Mesh Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />

      <div className="relative flex flex-col items-center max-w-4xl text-center z-10 space-y-8 animate-fade-in">
        {/* Profile Avatar Frame mimicking the VR glasses explorer */}
        <div id="avatar-container" className="relative group">
          {/* Neon Ring Layers with rotational float animations */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
          <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 rounded-full animate-spin-slow opacity-60 pointer-events-none" />
          
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-slate-950 bg-gradient-to-br from-cyan-600 via-blue-700 to-slate-900 flex items-center justify-center">
            <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white/90 font-sans select-none tracking-tight">
              JM
            </span>
          </div>

          {/* Glowing Status Dot */}
          <span className="absolute bottom-2 right-2 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-cyan-500 border-2 border-slate-950"></span>
          </span>
        </div>

        {/* Text Title Content */}
        <div className="space-y-3">
          <h1 
            id="hero-greeting"
            className="text-3xl sm:text-4xl md:text-6xl font-sans font-extrabold tracking-tight text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.1)] px-2"
          >
            {t('heroTitle')}
          </h1>
          
          {/* Glowing typing terminal subtitle */}
          <div 
            id="hero-typing-container"
            className="text-lg sm:text-2xl md:text-3xl font-sans font-semibold text-cyan-400 min-h-[40px] sm:min-h-[46px] flex flex-wrap items-center justify-center tracking-wide px-2 text-center gap-x-1"
          >
            <span className="whitespace-nowrap">{t('heroSubtitle').split('&')[0]} &nbsp;</span>
            <span className="text-white border-r-2 border-cyan-400 animate-blink pr-1 shadow-glow font-mono break-all sm:break-normal">
              {typedText}
            </span>
          </div>
        </div>

        {/* Humble short text representation */}
        <p 
          id="hero-desc"
          className="text-slate-400 text-sm md:text-lg max-w-2xl leading-relaxed font-sans"
        >
          {t('heroDescription')}
        </p>

        {/* CTA Button Rails */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center w-full">
          <a
            id="view-work-btn"
            href="#portfolio"
            onClick={handleScrollToPortfolio}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold relative overflow-hidden group transition-all duration-300 transform active:scale-95 text-white bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
          >
            <span className="absolute inset-0 bg-white/10 translate-y-full hover:translate-y-0 transition-transform duration-300" />
            <span className="flex items-center justify-center gap-2">
              {t('viewWorkBtn')}
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </span>
          </a>

          <button
            id="download-cv-btn"
            onClick={handleDownloadCV}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold border border-slate-700 hover:border-cyan-500/60 bg-slate-950/60 hover:bg-slate-900/60 text-slate-300 hover:text-cyan-300 transition-all duration-300 transform active:scale-95 shadow-md flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            {t('downloadCvBtn')}
          </button>
        </div>
      </div>

      {/* Subtle Scroll Hint — hidden on very small screens where bottom nav is visible */}
      <div className="absolute bottom-20 sm:bottom-6 hidden sm:flex flex-col items-center gap-1 opacity-50 text-slate-500 text-xs tracking-widest font-mono">
        <span className="uppercase">{language === 'en' ? 'Scroll Down' : 'Deslizar'}</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
}
