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
    image: '/fotos/srm-compras.png',
    tags: ['React', 'Symfony', 'PHP', 'IA'],
    techText: 'React • Symfony 7 • PHP • OpenAI • Microsoft Graph',
    featured: true,
    demoUrl: 'https://srm-compras-front.vercel.app/login',
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
    id: 'cv-berja',
    title: 'CV Berja',
    subtitle: 'Gestión integral del club de voleibol CV Berja',
    descriptionEn:
      'Club management platform for CV Berja built with a React + Symfony architecture: public website, admin panel, player portal and REST API with JWT authentication.',
    descriptionEs:
      'Plataforma de gestión del club CV Berja con arquitectura React + Symfony: web pública, panel de administración, portal del jugador y API REST con autenticación JWT.',
    image: '/fotos/cv-berja.png',
    tags: ['React', 'Symfony', 'PHP'],
    techText: 'React 19 • Symfony 7 • MySQL • JWT • Vercel + Railway',
    featured: true,
    demoUrl: 'https://cv-berja.vercel.app/',
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
    id: 'revista-cavite',
    title: 'Revista Cavite',
    subtitle: 'Revista digital y cuaderno de prácticas del ciclo FP Construcción del IES Virgen del Mar',
    descriptionEn:
      'Digital magazine and practical-workshop journal for the Construction vocational training program at IES Virgen del Mar. Public article feed, a rich-text editorial panel for staff and a live visual site editor for admins to customize layout, styles and modules, all backed by an independent PHP/MySQL API.',
    descriptionEs:
      'Revista digital y cuaderno de bitácora de prácticas del ciclo formativo de FP Construcción del IES Virgen del Mar. Feed público de artículos, panel de redacción con editor de texto enriquecido y editor visual en vivo para que los administradores personalicen maquetación, estilos y módulos, conectado a una API independiente en PHP/MySQL.',
    image: '/fotos/revista-cavite.jpeg',
    tags: ['React', 'PHP'],
    techText: 'React • TypeScript • Vite • PHP • MySQL • Vercel',
    featured: true,
    demoUrl: 'https://revista-cavite-construccion.vercel.app/',
    highlightsEn: [
      'Public journal feed with practical workshop entries and photo documentation',
      'Rich text editor and article management for student/teacher contributors',
      'Live visual site editor for admins: reorder, resize and restyle modules',
      'Independent PHP + MySQL REST API with role-based authentication',
    ],
    highlightsEs: [
      'Feed público de bitácora con prácticas de taller y reportajes fotográficos',
      'Editor de texto enriquecido y gestión de artículos para redactores',
      'Editor visual en vivo para administradores: reordena, redimensiona y personaliza módulos',
      'API REST independiente en PHP + MySQL con autenticación por roles',
    ],
  },
];
