export interface BaseProject {
export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  tags: string[];
  industry: string;
  clientType: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: string[];
  techStack: string[];
  image: string;
  type: 'web' | 'mobile';
}

export interface WebProject extends BaseProject {
  type: 'web';
  link?: string;
}

export interface MobileProject extends BaseProject {
  type: 'mobile';
  screenshots?: string[];
  playStoreLink?: string;
  appStoreLink?: string;
  // Backwards compatibility helpers
  description?: string;
  tags?: string[];
}

export type Project = WebProject | MobileProject;
export type WebProject = CaseStudy & { type: 'web' };
export type MobileProject = CaseStudy & { type: 'mobile' };
export type Project = CaseStudy;
