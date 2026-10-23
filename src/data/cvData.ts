/**
 * Centralized Strongly Typed CV Data Module (IT & EN)
 * Single Source of Truth for:
 * - Interactive X-Ray (3 Layers)
 * - Classic CV Web View
 * - ATS-Friendly / Printable A4 View
 */

export type LayerCode = 'L0' | 'L1' | 'L2';

export interface ContactInfo {
  name: string;
  nickname: string;
  role: string;
  email: string;
  linkedin: string;
  linkedinDisplay: string;
  github: string;
  githubDisplay: string;
  website: string;
  websiteDisplay: string;
  birthDate: string;
}

export interface Summaries {
  executive: string;
  technical: string;
}

export interface TechItem {
  name: string;
  scope: string;
  context: string;
  value: string;
  layers: LayerCode[];
}

export interface LayerInfo {
  id: string;
  code: LayerCode;
  name: string;
  subtitle: string;
  concept: string;
  color: string;
  accentHex: string;
  metrics: string[];
  technologies: TechItem[];
}

export interface ResponsibilityItem {
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  client: string;
  role: string;
  period: string;
  location: string;
  domain: string;
  scale: string;
  layers: LayerCode[];
  narrative: string;
  responsibilities: ResponsibilityItem[];
  quantifiableResults: string[];
  tools: string[];
}

export interface StarStory {
  id: string;
  code: string;
  title: string;
  badge: string;
  layers: LayerCode[];
  situation: string;
  task: string;
  action: string;
  result: string;
}

export interface HomelabProject {
  id: string;
  title: string;
  category: string;
  layers: LayerCode[];
  description: string;
  highlights: string[];
  repo?: string;
  repoDisplay?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface LanguageItem {
  language: string;
  level: string;
  detail: string;
}

export interface MilestoneItem {
  year: string;
  period: string;
  badge: string;
  title: string;
  subtitle: string;
  targetId: string;
}

export interface CVDataSet {
  contact: ContactInfo;
  summaries: Summaries;
  layers: Record<LayerCode, LayerInfo>;
  experiences: ExperienceItem[];
  starStories: StarStory[];
  homelab: HomelabProject[];
  education: EducationItem[];
  languages: LanguageItem[];
  milestones: MilestoneItem[];
  ui: Record<string, string>;
}

export interface CVDataRoot {
  it: CVDataSet;
  en: CVDataSet;
}

// In node/browser environments, also export window.cvData
declare global {
  interface Window {
    cvData?: CVDataRoot;
  }
}

// Export the data object
export const cvData: CVDataRoot = (typeof window !== 'undefined' && window.cvData) ? window.cvData : (require('../../cv-data.js') as CVDataRoot);

export default cvData;

