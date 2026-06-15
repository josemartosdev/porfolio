import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Code2,
  Database,
  Brain,
  GitBranch,
  Workflow,
  PenTool,
  Monitor,
  Globe,
  Bot,
  type LucideIcon,
} from 'lucide-react';
import { Translation } from '../types';

interface SkillsProps {
  t: (key: keyof Translation) => string;
  language: 'en' | 'es';
}

type CategoryId = 'informatica' | 'web' | 'ia';

interface Skill {
  id: string;
  name: string;
  nameEn?: string;
  shortName?: string;
  icon: LucideIcon;
  color: string;
  radar: number;
  detailEn: string;
  detailEs: string;
}

interface Category {
  id: CategoryId;
  titleEs: string;
  titleEn: string;
  descEs: string;
  descEn: string;
  icon: LucideIcon;
  accent: string;
  skillIds: string[];
}

const SKILLS: Record<string, Skill> = {
  git: {
    id: 'git',
    name: 'Git',
    icon: GitBranch,
    color: '#f43f5e',
    radar: 0.9,
    detailEn: 'Version control, branching, pull requests and collaborative workflows.',
    detailEs: 'Control de versiones, ramas, pull requests y flujos colaborativos.',
  },
  sql: {
    id: 'sql',
    name: 'SQL',
    icon: Database,
    color: '#fb923c',
    radar: 0.86,
    detailEn: 'Relational database design, queries and optimization with MySQL.',
    detailEs: 'Diseño de bases de datos relacionales, consultas y optimización con MySQL.',
  },
  html: {
    id: 'html',
    name: 'HTML',
    icon: Code2,
    color: '#f97316',
    radar: 0.88,
    detailEn: 'Semantic markup, responsive structure and modern web standards.',
    detailEs: 'Marcado semántico, estructura responsive y estándares web modernos.',
  },
  php: {
    id: 'php',
    name: 'PHP',
    icon: Code2,
    color: '#8b5cf6',
    radar: 0.92,
    detailEn: 'Backend development with PHP 8 in production Symfony applications.',
    detailEs: 'Desarrollo backend con PHP 8 en aplicaciones Symfony en producción.',
  },
  js: {
    id: 'js',
    name: 'JavaScript',
    icon: Code2,
    color: '#eab308',
    radar: 0.9,
    detailEn: 'Modern ES6+, React, TypeScript and interactive frontend development.',
    detailEs: 'ES6+ moderno, React, TypeScript y desarrollo frontend interactivo.',
  },
  symfony: {
    id: 'symfony',
    name: 'Symfony',
    icon: Code2,
    color: '#22d3ee',
    radar: 0.93,
    detailEn: 'Symfony 7, Doctrine ORM, REST APIs and JWT authentication.',
    detailEs: 'Symfony 7, Doctrine ORM, APIs REST y autenticación JWT.',
  },
  css: {
    id: 'css',
    name: 'CSS',
    icon: Code2,
    color: '#38bdf8',
    radar: 0.88,
    detailEn: 'Responsive layouts, Tailwind CSS, animations and modern styling.',
    detailEs: 'Layouts responsive, Tailwind CSS, animaciones y estilos modernos.',
  },
  'ai-assist': {
    id: 'ai-assist',
    name: 'Asistentes IA',
    nameEn: 'AI Assistants',
    icon: Brain,
    color: '#a78bfa',
    radar: 0.85,
    detailEn: 'Design and integration of AI assistants into business workflows.',
    detailEs: 'Diseño e integración de asistentes IA en flujos de trabajo empresariales.',
  },
  vertex: {
    id: 'vertex',
    name: 'Vertex AI',
    icon: Brain,
    color: '#4285f4',
    radar: 0.8,
    detailEn: 'Google Cloud Vertex AI for cloud-based machine learning services.',
    detailEs: 'Google Cloud Vertex AI para servicios de machine learning en la nube.',
  },
  cursor: {
    id: 'cursor',
    name: 'Cursor AI',
    icon: Brain,
    color: '#06b6d4',
    radar: 0.88,
    detailEn: 'AI-assisted development and productivity with Cursor IDE.',
    detailEs: 'Desarrollo asistido por IA y productividad con Cursor IDE.',
  },
  openai: {
    id: 'openai',
    name: 'OpenAI',
    icon: Brain,
    color: '#10b981',
    radar: 0.87,
    detailEn: 'OpenAI API integration for chatbots, classification and automation.',
    detailEs: 'Integración de la API de OpenAI para chatbots, clasificación y automatización.',
  },
  n8n: {
    id: 'n8n',
    name: 'n8n',
    icon: Workflow,
    color: '#ff6d5a',
    radar: 0.84,
    detailEn: 'Workflow automation with n8n: webhooks, API integrations and AI pipelines.',
    detailEs: 'Automatización de flujos con n8n: webhooks, integraciones API y pipelines con IA.',
  },
  make: {
    id: 'make',
    name: 'Make',
    icon: Workflow,
    color: '#6d00cc',
    radar: 0.83,
    detailEn: 'No-code automation connecting apps, APIs and business processes.',
    detailEs: 'Automatización no-code conectando apps, APIs y procesos de negocio.',
  },
  content: {
    id: 'content',
    name: 'Creación de contenido',
    nameEn: 'Content Creation',
    shortName: 'Contenido',
    icon: PenTool,
    color: '#ec4899',
    radar: 0.82,
    detailEn: 'AI-assisted content: copywriting, visuals, video scripts and social media.',
    detailEs: 'Contenido asistido por IA: copywriting, visuales, guiones de vídeo y redes.',
  },
};

const CATEGORIES: Category[] = [
  {
    id: 'informatica',
    titleEs: 'Informática',
    titleEn: 'Computer Science',
    descEs: 'Fundamentos de sistemas, control de versiones y gestión de datos.',
    descEn: 'Systems fundamentals, version control and data management.',
    icon: Monitor,
    accent: '#f43f5e',
    skillIds: ['git', 'sql'],
  },
  {
    id: 'web',
    titleEs: 'Desarrollo Web',
    titleEn: 'Web Development',
    descEs: 'Stack full-stack para aplicaciones web en producción con Symfony y React.',
    descEn: 'Full-stack production web apps with Symfony and React.',
    icon: Globe,
    accent: '#22d3ee',
    skillIds: ['html', 'php', 'js', 'symfony', 'css'],
  },
  {
    id: 'ia',
    titleEs: 'IA y Automatización',
    titleEn: 'AI & Automation',
    descEs: 'Inteligencia artificial, herramientas no-code y creación de contenido.',
    descEn: 'Artificial intelligence, no-code tools and content creation.',
    icon: Bot,
    accent: '#a78bfa',
    skillIds: ['ai-assist', 'vertex', 'cursor', 'openai', 'n8n', 'make', 'content'],
  },
];

const CX = 200;
const CY = 200;
const MAX_R = 130;
const LEVELS = 4;

function skillLabel(s: Skill, language: 'en' | 'es') {
  return language === 'en' && s.nameEn ? s.nameEn : s.name;
}

function polar(angle: number, radius: number): [number, number] {
  return [CX + radius * Math.cos(angle), CY + radius * Math.sin(angle)];
}

function polygonPoints(skills: Skill[]): string {
  const n = skills.length;
  if (n === 0) return '';
  return skills
    .map((s, i) => {
      const angle = (2 * Math.PI * i) / n - Math.PI / 2;
      const [x, y] = polar(angle, s.radar * MAX_R);
      return `${x},${y}`;
    })
    .join(' ');
}

function gridPolygon(n: number, level: number): string {
  const r = (level / LEVELS) * MAX_R;
  return Array.from({ length: n }, (_, i) => {
    const angle = (2 * Math.PI * i) / n - Math.PI / 2;
    const [x, y] = polar(angle, r);
    return `${x},${y}`;
  }).join(' ');
}

function axisEnd(i: number, n: number): [number, number] {
  const angle = (2 * Math.PI * i) / n - Math.PI / 2;
  return polar(angle, MAX_R);
}

function labelPos(i: number, n: number, dist = 1.2) {
  const angle = (2 * Math.PI * i) / n - Math.PI / 2;
  const [x, y] = polar(angle, MAX_R * dist);
  const deg = ((angle * 180) / Math.PI + 360) % 360;
  let anchor = 'middle';
  if (deg > 20 && deg < 160) anchor = 'start';
  else if (deg > 200 && deg < 340) anchor = 'end';
  return { x, y, anchor };
}

function RadarChart({
  skills,
  activeIdx,
  onHover,
  accent,
}: {
  skills: Skill[];
  activeIdx: number | null;
  onHover: (i: number | null) => void;
  accent: string;
}) {
  const n = skills.length;
  const pts = useMemo(() => polygonPoints(skills), [skills]);

  if (n < 3) {
    return (
      <div className="flex flex-wrap justify-center gap-4 py-8">
        {skills.map((s, i) => {
          const Icon = s.icon;
          const isHot = activeIdx === i;
          return (
            <button
              key={s.id}
              type="button"
              onMouseEnter={() => onHover(i)}
              onMouseLeave={() => onHover(null)}
              onClick={() => onHover(i)}
              className={`flex flex-col items-center gap-3 p-6 rounded-2xl border transition-all duration-300 min-w-[130px] ${
                isHot
                  ? 'bg-slate-900/80 border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.12)] scale-105'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              <Icon className="w-8 h-8" style={{ color: s.color }} />
              <span className="font-mono text-sm font-semibold text-white">{s.name}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <svg viewBox="0 0 400 400" className="w-full h-auto max-w-[380px] mx-auto drop-shadow-[0_0_40px_rgba(6,182,212,0.08)]">
      <defs>
        <linearGradient id="catGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.45" />
          <stop offset="100%" stopColor="#0891b2" stopOpacity="0.15" />
        </linearGradient>
        <filter id="glow-cat" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {Array.from({ length: LEVELS }, (_, i) => (
        <polygon key={i} points={gridPolygon(n, i + 1)} fill="none" stroke="rgba(148,163,184,0.1)" strokeWidth="1" />
      ))}

      {skills.map((_, i) => {
        const [ex, ey] = axisEnd(i, n);
        const isHot = activeIdx === i;
        return (
          <line
            key={i}
            x1={CX}
            y1={CY}
            x2={ex}
            y2={ey}
            stroke={isHot ? `${accent}88` : 'rgba(148,163,184,0.12)'}
            strokeWidth={isHot ? 1.5 : 1}
          />
        );
      })}

      <motion.polygon
        key={pts}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        points={pts}
        fill="url(#catGrad)"
        stroke={accent}
        strokeWidth="2"
        strokeLinejoin="round"
        filter="url(#glow-cat)"
        style={{ transformOrigin: `${CX}px ${CY}px` }}
      />

      {skills.map((s, i) => {
        const angle = (2 * Math.PI * i) / n - Math.PI / 2;
        const [x, y] = polar(angle, s.radar * MAX_R);
        const isHot = activeIdx === i;
        return (
          <circle
            key={s.id}
            cx={x}
            cy={y}
            r={isHot ? 6 : 4}
            fill={isHot ? '#fff' : s.color}
            stroke="#0f172a"
            strokeWidth="1.5"
            className="cursor-pointer"
            onMouseEnter={() => onHover(i)}
            onMouseLeave={() => onHover(null)}
          />
        );
      })}

      {skills.map((s, i) => {
        const { x, y, anchor } = labelPos(i, n);
        const isHot = activeIdx === i;
        return (
          <text
            key={`lbl-${s.id}`}
            x={x}
            y={y}
            textAnchor={anchor}
            dominantBaseline="middle"
            fill={isHot ? '#67e8f9' : '#64748b'}
            className="font-mono uppercase cursor-pointer select-none"
            style={{ fontSize: n > 5 ? '7px' : '8.5px' }}
            onMouseEnter={() => onHover(i)}
          >
            {s.shortName ?? s.name}
          </text>
        );
      })}

      <circle cx={CX} cy={CY} r="3.5" fill={accent} className="animate-pulse" />
    </svg>
  );
}

export default function Skills({ t, language }: SkillsProps) {
  const [category, setCategory] = useState<CategoryId>('web');
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const cat = CATEGORIES.find((c) => c.id === category)!;
  const catSkills = cat.skillIds.map((id) => SKILLS[id]);

  useEffect(() => {
    setActiveIdx(null);
  }, [category]);

  const activeSkill = activeIdx !== null ? catSkills[activeIdx] : null;

  return (
    <section
      id="skills"
      className="min-h-screen relative flex items-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16 lg:px-24 bg-slate-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-cyan-600/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono uppercase tracking-[0.2em]">
            <Sparkles className="w-3 h-3" />
            {language === 'en' ? 'Skill Radar' : 'Radar de Habilidades'}
          </div>
          <h2 id="skills-header" className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-white">
            {t('skillsTitle')}
          </h2>
          <p className="text-slate-400 font-sans leading-relaxed text-sm md:text-base">{t('skillsDescription')}</p>
        </div>

        {/* 3 botones de categoría */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {CATEGORIES.map((c) => {
            const Icon = c.icon;
            const isActive = category === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory(c.id)}
                className={`relative overflow-hidden rounded-2xl border p-5 sm:p-6 text-left transition-all duration-400 ${
                  isActive
                    ? 'border-cyan-500/40 bg-slate-900/80 shadow-[0_0_30px_rgba(6,182,212,0.1)] scale-[1.02]'
                    : 'border-slate-800 bg-slate-900/30 hover:border-slate-700 hover:bg-slate-900/50'
                }`}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-400"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${c.accent}18, transparent 70%)`,
                    opacity: isActive ? 1 : 0,
                  }}
                />
                <div className="relative flex items-center gap-3">
                  <div
                    className="p-2.5 rounded-xl border transition-colors duration-300"
                    style={{
                      borderColor: isActive ? `${c.accent}50` : 'rgba(51,65,85,0.8)',
                      backgroundColor: isActive ? `${c.accent}15` : 'rgba(2,6,23,0.6)',
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: isActive ? c.accent : '#64748b' }} />
                  </div>
                  <div>
                    <p className={`font-bold text-sm sm:text-base ${isActive ? 'text-white' : 'text-slate-300'}`}>
                      {language === 'en' ? c.titleEn : c.titleEs}
                    </p>
                    <p className="text-[10px] font-mono text-slate-500 mt-0.5">
                      {c.skillIds.length} {language === 'en' ? 'skills' : 'habilidades'}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Pills de la categoría activa */}
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {language === 'en' ? cat.titleEn : cat.titleEs}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {language === 'en' ? cat.descEn : cat.descEs}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {catSkills.map((s, i) => {
                const Icon = s.icon;
                const isHot = activeIdx === i;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveIdx(isHot ? null : i)}
                    onMouseEnter={() => setActiveIdx(i)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-mono font-semibold transition-all duration-300 ${
                      isHot
                        ? 'border-cyan-500/40 bg-cyan-950/50 text-cyan-200 shadow-[0_0_16px_rgba(6,182,212,0.1)]'
                        : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: isHot ? s.color : '#64748b' }} />
                    {skillLabel(s, language)}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              {activeSkill ? (
                <motion.div
                  key={activeSkill.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-5"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeSkill.color }} />
                    <h4 className="font-mono font-bold text-white">{skillLabel(activeSkill, language)}</h4>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {language === 'en' ? activeSkill.detailEn : activeSkill.detailEs}
                  </p>
                </motion.div>
              ) : (
                <motion.p
                  key="hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-slate-600 text-xs font-mono"
                >
                  {language === 'en'
                    ? 'Hover or tap a skill to see details'
                    : 'Pasa el cursor o toca una habilidad para ver detalles'}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Radar de la categoría */}
          <div className="relative flex items-center justify-center min-h-[280px]">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full blur-3xl opacity-40"
                style={{ backgroundColor: cat.accent }}
              />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="w-full"
              >
                <RadarChart
                  skills={catSkills}
                  activeIdx={activeIdx}
                  onHover={setActiveIdx}
                  accent={cat.accent}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
