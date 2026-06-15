import React from 'react';
import { Home, Cpu, GraduationCap, Folder, Languages, Mail, LucideIcon } from 'lucide-react';
import { SectionId } from '../types';

interface SidebarProps {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
  language: 'en' | 'es';
  toggleLanguage: () => void;
  t: (key: any) => string;
}

type NavItemData = {
  id: SectionId;
  icon: LucideIcon;
  label: string;
  Action?: () => void;
};

interface NavItemProps {
  item: NavItemData;
  variant: 'desktop' | 'mobile';
  activeSection: SectionId;
  language: 'en' | 'es';
  onNavClick: (id: SectionId, e: React.MouseEvent, action?: () => void) => void;
}

function NavItem({ item, variant, activeSection, language, onNavClick }: NavItemProps) {
  const Icon = item.icon;
  const isActive = activeSection === item.id;
  const isLanguageToggler = item.id === 'languages';

  if (variant === 'mobile') {
    return (
      <a
        id={`sidebar-link-${item.id}`}
        href={`#${item.id}`}
        onClick={(e) => onNavClick(item.id, e, item.Action)}
        className="flex flex-col items-center justify-center gap-0.5 flex-1 min-w-0 py-1 px-1 rounded-lg transition-all duration-200 active:scale-95"
        aria-label={item.label}
        aria-current={isActive ? 'page' : undefined}
      >
        <span
          className={`relative flex items-center justify-center p-2 rounded-full transition-all duration-300 ${
            isActive ? 'bg-cyan-500/15' : ''
          }`}
        >
          {isActive && (
            <span className="absolute inset-0 bg-cyan-500/20 rounded-full blur-sm scale-110" />
          )}
          <Icon
            className={`relative w-5 h-5 transition-all duration-300 ${
              isActive
                ? 'text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]'
                : 'text-slate-400'
            }`}
          />
        </span>
        <span
          className={`text-[9px] font-medium truncate max-w-full px-0.5 ${
            isActive ? 'text-cyan-400' : 'text-slate-500'
          }`}
        >
          {isLanguageToggler ? language.toUpperCase() : item.label.split(' ')[0]}
        </span>
      </a>
    );
  }

  return (
    <a
      id={`sidebar-link-${item.id}`}
      href={`#${item.id}`}
      onClick={(e) => onNavClick(item.id, e, item.Action)}
      className="group relative flex items-center justify-center p-2.5 rounded-full transition-all duration-300"
      title={item.label}
      aria-current={isActive ? 'page' : undefined}
    >
      {isActive && (
        <span className="absolute inset-0 bg-cyan-500/20 rounded-full blur-sm scale-125 border border-cyan-400/40 animate-pulse" />
      )}
      <Icon
        className={`relative w-5 h-5 transition-all duration-300 ${
          isActive
            ? 'text-cyan-400 scale-110 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]'
            : 'text-slate-400 group-hover:text-cyan-300 group-hover:scale-115'
        }`}
      />
      <span className="absolute left-16 px-2.5 py-1 text-xs font-medium rounded-md bg-slate-900 border border-slate-800 text-slate-300 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl">
        {item.label}
        {isLanguageToggler && (
          <span className="ml-1.5 px-1 py-0.5 rounded text-[10px] bg-cyan-950 text-cyan-400 font-bold uppercase">
            {language}
          </span>
        )}
      </span>
    </a>
  );
}

export default function Sidebar({
  activeSection,
  setActiveSection,
  language,
  toggleLanguage,
  t
}: SidebarProps) {
  const items: NavItemData[] = [
    { id: 'home', icon: Home, label: t('navHome') },
    { id: 'skills', icon: Cpu, label: t('navSkills') },
    { id: 'resume', icon: GraduationCap, label: t('navResume') },
    { id: 'portfolio', icon: Folder, label: t('navPortfolio') },
    { id: 'languages', icon: Languages, label: t('navLanguages'), Action: toggleLanguage },
    { id: 'contact', icon: Mail, label: t('navContact') },
  ];

  const handleNavClick = (id: SectionId, e: React.MouseEvent, action?: () => void) => {
    e.preventDefault();
    if (action) {
      action();
      return;
    }
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className="hidden md:flex fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 flex-col items-center">
        <div
          id="sidebar-capsule"
          className="relative bg-slate-950/80 backdrop-blur-xl border border-cyan-500/30 rounded-full px-3 py-6 md:py-8 flex flex-col gap-5 md:gap-7 items-center shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 hover:border-cyan-400/50"
        >
          {items.map((item) => (
            <React.Fragment key={item.id}>
              <NavItem
                item={item}
                variant="desktop"
                activeSection={activeSection}
                language={language}
                onNavClick={handleNavClick}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="mt-4 text-[10px] uppercase font-mono tracking-widest text-cyan-500/60 bg-slate-950/50 px-2 py-0.5 rounded border border-cyan-500/10 backdrop-blur-sm">
          {language === 'en' ? 'EN' : 'ES'}
        </div>
      </div>

      <nav
        id="mobile-bottom-nav"
        className="flex md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-t border-cyan-500/20 shadow-[0_-4px_24px_rgba(0,0,0,0.4)] safe-area-bottom"
        aria-label="Main navigation"
      >
        <div className="flex items-stretch justify-around w-full max-w-lg mx-auto px-1">
          {items.map((item) => (
            <React.Fragment key={item.id}>
              <NavItem
                item={item}
                variant="mobile"
                activeSection={activeSection}
                language={language}
                onNavClick={handleNavClick}
              />
            </React.Fragment>
          ))}
        </div>
      </nav>
    </>
  );
}
