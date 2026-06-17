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
    demoUrl: 'https://srm-compras-front.vercel.app',
    githubUrl: 'https://github.com/evolve-space/Proyecto-Master-IA-Evolve-JoseMartos.git',
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
      'Club management platform for CV Berja built on the same React + Symfony architecture as Clubflow: public website, admin panel, player portal and REST API with JWT authentication.',
    descriptionEs:
      'Plataforma de gestión del club CV Berja con la misma arquitectura React + Symfony que Clubflow: web pública, panel de administración, portal del jugador y API REST con autenticación JWT.',
    image: '/fotos/cv-berja.png',
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
];
