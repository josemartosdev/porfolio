import { Project } from './types';

export const projects: Project[] = [
  {
    id: 'srm-compras',
    title: 'ProcureFlow — SRM de Compras',
    subtitle: 'SRM para gestión de proveedores, ofertas y contratos con asistente IA multiagente',
    descriptionEn:
      'Supplier Relationship Management platform for raw-materials procurement. Centralizes offers, contracts, samples, imports and suppliers with Outlook integration and a floating multi-agent AI assistant (Carmen, Rafa, Noa, Iris, Alex).',
    descriptionEs:
      'Plataforma SRM para la gestión de compras de materias primas. Centraliza ofertas, contratos, muestras, importaciones y proveedores con integración Outlook y un asistente IA multiagente flotante (Carmen, Rafa, Noa, Iris, Alex).',
    image: 'https://images.unsplash.com/photo-1454165804603-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Symfony', 'PHP', 'IA'],
    techText: 'React • Symfony 7 • PHP • OpenAI • Microsoft Graph',
    featured: true,
    demoUrl: 'https://srm-compras-front.vercel.app',
    githubUrl: 'https://github.com/josemartosdev/srm-compras-front',
    highlightsEn: [
      'Dashboard with KPIs, charts and procurement alerts',
      'Outlook email and calendar sync with hybrid AI classification',
      'Multi-agent chat integrated into the full application',
      'Role-based access: superadmin, admin and standard users',
    ],
    highlightsEs: [
      'Dashboard con KPIs, gráficos y alertas de compras',
      'Sincronización de correo y calendario Outlook con clasificación IA',
      'Chat multiagente integrado en toda la aplicación',
      'Control de acceso por roles: superadmin, admin y usuario',
    ],
  },
  {
    id: 'clubflow',
    title: 'Clubflow FC',
    subtitle: 'Plataforma digital para clubes de fútbol con web pública y panel de gestión',
    descriptionEn:
      'Full-stack platform for football clubs: public website (teams, matches, results, live scores, sponsors) plus an internal management panel for players, coaches, accounting and staff with JWT role-based authentication.',
    descriptionEs:
      'Plataforma full-stack para clubes de fútbol: web pública (equipos, partidos, resultados, directo, patrocinadores) y panel de gestión interno para jugadores, entrenadores, contabilidad y personal con autenticación JWT por roles.',
    image: '/projects/clubflow.svg',
    tags: ['React', 'Symfony', 'PHP'],
    techText: 'React 19 • Symfony 7 • MySQL • JWT • Vercel + Railway',
    featured: true,
    demoUrl: 'https://clubflow-front.vercel.app',
    githubUrl: 'https://github.com/josemartosdev/clubflow-frontend',
    highlightsEn: [
      'Public club website with live match and results modules',
      'Management panel at /gestion for full club administration',
      'Player self-service portal at /gestion/mi-ficha',
      'Deployed on Vercel (frontend) and Railway (API)',
    ],
    highlightsEs: [
      'Web pública del club con módulos de directo y resultados',
      'Panel de gestión en /gestion para administración completa',
      'Portal de autoservicio del jugador en /gestion/mi-ficha',
      'Desplegado en Vercel (frontend) y Railway (API)',
    ],
  },
  {
    id: 'cv-berja',
    title: 'CV Berja',
    subtitle: 'Gestión integral del club de voleibol CV Berja',
    descriptionEn:
      'Club management platform for CV Berja built on the same React + Symfony architecture as Clubflow: public website, admin panel, player portal and REST API with JWT authentication.',
    descriptionEs:
      'Plataforma de gestión del club CV Berja con la misma arquitectura React + Symfony que Clubflow: web pública, panel de administración, portal del jugador y API REST con autenticación JWT.',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Symfony', 'PHP'],
    techText: 'React 19 • Symfony 7 • MySQL • JWT • Vercel + Railway',
    featured: true,
    demoUrl: 'https://cv-berja-front-qqx9ds48n-jose981s-projects.vercel.app',
    githubUrl: 'https://github.com/josemartosdev/cv-berja-front',
    highlightsEn: [
      'Custom branding and sponsors for CV Berja volleyball club',
      'Full admin panel for teams, players and accounting',
      'Production deployment with health-check API endpoint',
      'Complete deployment guide documented in the repository',
    ],
    highlightsEs: [
      'Branding y patrocinadores personalizados del club CV Berja',
      'Panel de administración completo para equipos, jugadores y contabilidad',
      'Despliegue en producción con endpoint de health-check en la API',
      'Guía de despliegue completa documentada en el repositorio',
    ],
  },
  {
    id: 'keval-demo',
    title: 'Keval — Gestión de Pacientes',
    subtitle: 'Demo modular de gestión de pacientes con chatbot integrado vía n8n',
    descriptionEn:
      'Patient management demo with modular vanilla JS frontend and Express backend. Integrates n8n webhooks for patient data and AI-powered chatbot responses with persistent browser sessions.',
    descriptionEs:
      'Demo de gestión de pacientes con frontend modular en vanilla JS y backend Express. Integra webhooks n8n para datos de pacientes y respuestas de chatbot con IA, con sesiones persistentes en el navegador.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tags: ['Node.js', 'IA'],
    techText: 'Node.js • Express • n8n • Vanilla JS',
    featured: false,
    demoUrl: undefined,
    githubUrl: 'https://github.com/Jose981/keval-demo',
    highlightsEn: [
      'Patient CRUD with dynamic table loading',
      'Chatbot with localStorage session persistence',
      'Modular IIFE architecture: patients, chatbot, ui, loader',
      'Express API proxy for n8n chat webhook integration',
    ],
    highlightsEs: [
      'CRUD de pacientes con tabla dinámica',
      'Chatbot con persistencia de sesión en localStorage',
      'Arquitectura modular IIFE: patients, chatbot, ui, loader',
      'Proxy API Express para integración del webhook de chat n8n',
    ],
  },
];
