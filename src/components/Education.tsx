import React from 'react';
import { Briefcase, BookOpen, Calendar, MapPin } from 'lucide-react';
import { Translation } from '../types';

interface EducationProps {
  t: (key: keyof Translation) => string;
  language: 'en' | 'es';
}

export default function Education({ t, language }: EducationProps) {
  const experiences = [
    {
      id: 'exp1',
      period: 'Feb 2023 — Aug 2023',
      company: 'Wienext',
      roleEn: 'Software Engineering Internship',
      roleEs: 'Prácticas de Empresa',
      loc: 'España',
      descEn:
        'Company internship developing algorithms in Java, SQL and Python. Database design and maintenance for internal business applications.',
      descEs:
        'Prácticas de empresa desarrollando algoritmos en Java, SQL y Python. Diseño y mantenimiento de bases de datos para aplicaciones empresariales internas.',
    },
    {
      id: 'exp2',
      period: 'Oct 2023 — Oct 2025',
      company: 'Grupo Winecta',
      roleEn: 'Full Stack Developer',
      roleEs: 'Desarrollador Full Stack',
      loc: 'España',
      descEn:
        'Full-stack web development with PHP, Symfony, JavaScript and SQL. Built new features for internal process optimization, integrated AI tools for automation, managed and optimized relational databases, and used Git for collaborative version control.',
      descEs:
        'Desarrollo web full-stack con PHP, Symfony, JavaScript y SQL. Desarrollo de nuevas funcionalidades para optimizar procesos internos, integración de herramientas de IA para automatización, gestión y optimización de bases de datos relacionales, y uso de Git para control de versiones colaborativo.',
    },
  ];

  const educations = [
    {
      id: 'edu1',
      period: 'Sep 2016 — Jun 2023',
      univ: 'Universidad de Almería',
      degreeEn: "Bachelor's in Computer Engineering",
      degreeEs: 'Grado en Ingeniería Informática',
      descEn:
        'Comprehensive computer engineering degree covering software engineering, algorithms, databases, networks and systems architecture.',
      descEs:
        'Grado completo en ingeniería informática cubriendo ingeniería de software, algoritmos, bases de datos, redes y arquitectura de sistemas.',
    },
    {
      id: 'edu2',
      period: '2023',
      univ: 'The Bridge',
      degreeEn: 'Full Stack Developer Bootcamp',
      degreeEs: 'Bootcamp Full Stack Developer',
      descEn:
        'Intensive bootcamp covering modern full-stack web development: frontend frameworks, backend APIs, databases and deployment workflows.',
      descEs:
        'Bootcamp intensivo de desarrollo web full-stack moderno: frameworks frontend, APIs backend, bases de datos y flujos de despliegue.',
    },
    {
      id: 'edu3',
      period: 'Oct 2025 — Jun 2026',
      univ: 'The Bridge',
      degreeEn: "Master's in Artificial Intelligence",
      degreeEs: 'Máster en Inteligencia Artificial',
      descEn:
        'Advanced program focused on AI agents, machine learning, process automation and integration of AI solutions into production software systems.',
      descEs:
        'Programa avanzado enfocado en agentes de IA, machine learning, automatización de procesos e integración de soluciones de IA en sistemas de software en producción.',
    },
  ];

  return (
    <section
      id="resume"
      className="min-h-screen relative flex items-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16 lg:px-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden border-t border-slate-900"
    >
      <div className="absolute top-1/4 right-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-16 z-10">
        <div className="text-center space-y-3">
          <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
            {language === 'en' ? 'CURRICULUM VITAE' : 'HISTORIAL ACADÉMICO Y PROFESIONAL'}
          </p>
          <h2 id="resume-header" className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold tracking-tight text-white">
            {t('resumeTitle')}
          </h2>
          <p className="text-slate-400 font-sans max-w-xl mx-auto text-sm md:text-base">{t('resumeSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div id="experience-section" className="space-y-6">
            <div className="flex items-center gap-3 mb-2 border-b border-slate-800 pb-3">
              <Briefcase className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]" />
              <h3 className="text-xl md:text-2xl font-sans font-bold text-white tracking-wide">
                {t('experienceTitle')}
              </h3>
            </div>

            <div className="relative border-l border-slate-800 pl-6 ml-3 space-y-10">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  id={exp.id}
                  className="relative group bg-slate-900/10 hover:bg-slate-900/30 border border-transparent hover:border-slate-800/60 p-5 rounded-lg transition-all duration-300"
                >
                  <div className="absolute -left-[31px] top-6 w-4.5 h-4.5 rounded-full bg-slate-950 border-2 border-slate-800 group-hover:border-cyan-400 transition-colors duration-300 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors duration-300" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-400 bg-cyan-950/40 border border-cyan-800/30 px-2.5 py-0.5 rounded-full w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>

                    <h4 className="text-lg font-sans font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {language === 'en' ? exp.roleEn : exp.roleEs}
                    </h4>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                      <span className="font-semibold text-slate-300">{exp.company}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-600 hidden sm:inline" />
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {exp.loc}
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed font-sans pt-1.5">
                      {language === 'en' ? exp.descEn : exp.descEs}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="education-section" className="space-y-6">
            <div className="flex items-center gap-3 mb-2 border-b border-slate-800 pb-3">
              <BookOpen className="w-6 h-6 text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.4)]" />
              <h3 className="text-xl md:text-2xl font-sans font-bold text-white tracking-wide">
                {t('educationTitle')}
              </h3>
            </div>

            <div className="relative border-l border-slate-800 pl-6 ml-3 space-y-10">
              {educations.map((edu) => (
                <div
                  key={edu.id}
                  id={edu.id}
                  className="relative group bg-slate-900/10 hover:bg-slate-900/30 border border-transparent hover:border-slate-800/60 p-5 rounded-lg transition-all duration-300"
                >
                  <div className="absolute -left-[31px] top-6 w-4.5 h-4.5 rounded-full bg-slate-950 border-2 border-slate-800 group-hover:border-blue-400 transition-colors duration-300 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors duration-300" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-blue-400 bg-blue-950/40 border border-blue-800/30 px-2.5 py-0.5 rounded-full w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </div>

                    <h4 className="text-lg font-sans font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {language === 'en' ? edu.degreeEn : edu.degreeEs}
                    </h4>

                    <div className="text-xs font-semibold text-slate-300">{edu.univ}</div>

                    <p className="text-slate-400 text-sm leading-relaxed font-sans pt-1.5">
                      {language === 'en' ? edu.descEn : edu.descEs}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
