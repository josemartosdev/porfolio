export type SectionId = 'home' | 'skills' | 'resume' | 'portfolio' | 'languages' | 'contact';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  descriptionEn: string;
  descriptionEs: string;
  image: string;
  tags: string[];
  techText: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlightsEn?: string[];
  highlightsEs?: string[];
}

export interface Skill {
  name: string;
  percentage: number;
  iconName: string; // React, Tailwind, Python, Vue, etc.
  color: string;
}

export interface ExperienceItem {
  id: string;
  roleEn: string;
  roleEs: string;
  company: string;
  period: string;
  descriptionEn: string;
  descriptionEs: string;
}

export interface Translation {
  navHome: string;
  navSkills: string;
  navResume: string;
  navPortfolio: string;
  navLanguages: string;
  navContact: string;
  
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  viewWorkBtn: string;
  downloadCvBtn: string;

  skillsTitle: string;
  skillsDescription: string;
  
  resumeTitle: string;
  resumeSubtitle: string;
  experienceTitle: string;
  educationTitle: string;

  portfolioTitle: string;
  portfolioSubtitle: string;
  allProjects: string;
  visitSite: string;
  sourceCode: string;

  languagesTitle: string;
  languagesSubtitle: string;
  selectLanguage: string;
  spanish: string;
  english: string;
  bilingualBonus: string;

  contactTitle: string;
  contactSubtitle: string;
  contactName: string;
  contactEmail: string;
  contactSubject: string;
  contactMessage: string;
  sendBtn: string;
  sendingBtn: string;
  successMsg: string;
}
