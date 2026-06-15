import React, { useState } from 'react';
import { ExternalLink, Github, Layers, X, Eye } from 'lucide-react';
import { Project, Translation } from '../types';
import { projects } from '../projectsData';

interface PortfolioProps {
  t: (key: keyof Translation) => string;
  language: 'en' | 'es';
}

export default function Portfolio({ t, language }: PortfolioProps) {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Derive unique tech tags for filter categories
  const filters = ['All', 'React', 'Symfony', 'PHP', 'IA', 'Node.js'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.tags.some((tag) => tag.toLowerCase() === filter.toLowerCase()));

  return (
    <section 
      id="portfolio" 
      className="min-h-screen relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16 lg:px-24 bg-slate-950 text-white overflow-hidden border-t border-slate-900"
    >
      {/* Background Neon Auras */}
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-12 z-20 relative">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
            {language === 'en' ? 'SELECTED RECENT EXPERIENCES' : 'TRABAJOS RECIENTES SELECCIONADOS'}
          </p>
          <h2 
            id="portfolio-header"
            className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold tracking-tight text-white mb-2"
          >
            {t('portfolioTitle')}
          </h2>
          <p className="text-slate-400 font-sans max-w-xl mx-auto text-sm md:text-base">
            {t('portfolioSubtitle')}
          </p>
        </div>

        {/* Dynamic Category Filters Row */}
        <div id="portfolio-filters" className="flex flex-wrap justify-center gap-3 py-2">
          {filters.map((category) => (
            <button
              id={`filter-${category.toLowerCase().replace(' ', '-')}`}
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border ${
                (category === 'All' && filter === 'All') || filter === category
                  ? 'bg-cyan-500 border-cyan-400 text-white shadow-[0_0_12px_rgba(6,182,212,0.3)] scale-105'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-slate-700'
              }`}
            >
              {category === 'All' ? t('allProjects') : category}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID exactly matching the card structure shown in the bottom of the image */}
        <div 
          id="portfolio-grid" 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 pt-4"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group bg-slate-900/40 rounded-xl border border-slate-900 overflow-hidden hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-500 flex flex-col h-full cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Image Area with custom subtitle/tag layout */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark overlay with interactive quick stats on hover */}
                <div className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-2 px-4 py-2 bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider rounded-md shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-4 h-4" />
                    {language === 'en' ? 'Explore Details' : 'Ver Detalles'}
                  </span>
                </div>

                {/* Glowing neon bottom bar */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600" />
              </div>

              {/* Card Text Content Area mirroring high-quality image structures */}
              <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  {/* Subtle decorative subtitle from card picture */}
                  <p className="text-[10px] text-cyan-500 font-mono uppercase tracking-wider font-semibold">
                    {project.subtitle.length > 50 ? project.subtitle.substring(0, 50) + '...' : project.subtitle}
                  </p>

                  <h3 className="text-lg font-sans font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed">
                    {language === 'en' ? project.descriptionEn : project.descriptionEs}
                  </p>
                </div>

                {/* Tags lists */}
                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-900 border border-slate-800 text-slate-300 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Horizontal dividers from reference */}
                  <div className="border-t border-slate-900 pt-3 flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>{project.techText}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* PORTFOLIO MODAL DETAIL COMPONENT */}
      {selectedProject && (
        <div 
          id="project-detail-modal"
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4 backdrop-blur-md bg-slate-950/80 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          {/* Modal Container */}
          <div 
            className="relative w-full sm:max-w-2xl bg-slate-900 border border-slate-800 rounded-t-xl sm:rounded-xl overflow-hidden shadow-2xl transition-all duration-300 text-left flex flex-col max-h-[92dvh] sm:max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Cover Image */}
            <div className="relative h-56 md:h-64 bg-slate-950">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              
              {/* Close Button overlay */}
              <button
                id="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-950 transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Subtitles Overlay */}
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-xs text-cyan-400 font-mono font-bold uppercase tracking-widest">
                  {selectedProject.techText}
                </p>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-white tracking-tight leading-tight mt-1">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Scroll Content */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              
              {/* Detailed Descriptions */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest border-b border-sky-950 pb-1">
                  {language === 'en' ? 'About the project' : 'Acerca del proyecto'}
                </h4>
                <p className="text-slate-300 font-sans leading-relaxed text-sm md:text-base">
                  {language === 'en' ? selectedProject.descriptionEn : selectedProject.descriptionEs}
                </p>
              </div>

              {/* Simulated Feature Bullets list */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest border-b border-sky-950 pb-1">
                  {language === 'en' ? 'Key highlights' : 'Puntos destacados'}
                </h4>
                <ul className="text-xs md:text-sm text-slate-400 font-sans space-y-2 list-disc list-inside">
                  {(language === 'en' ? selectedProject.highlightsEn : selectedProject.highlightsEs)?.map(
                    (item) => (
                      <li key={item}>{item}</li>
                    )
                  ) ?? (
                    <li>
                      {language === 'en' ? selectedProject.descriptionEn : selectedProject.descriptionEs}
                    </li>
                  )}
                </ul>
              </div>

              {/* Skills Tags inside modal details */}
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons Toolbar */}
            <div className="p-5 border-t border-slate-800 bg-slate-950/40 flex flex-wrap gap-3.5 justify-end">
              {selectedProject.demoUrl && (
                <a
                  id="modal-visit-btn"
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4.5 py-2 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-black shadow-md flex items-center gap-1.5 transition-all outline-none"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t('visitSite')}
                </a>
              )}

              {selectedProject.githubUrl && (
                <a
                  id="modal-source-btn"
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4.5 py-2 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/80 flex items-center gap-1.5 transition-all shadow-md"
                >
                  <Github className="w-4 h-4" />
                  {t('sourceCode')}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
