export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  clientType: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: string[];
  techStack: string[];
  image: string;
  type: 'web' | 'mobile';
  screenshots?: string[];
  // Backwards compatibility helpers
  description?: string;
  tags?: string[];
}

export type WebProject = CaseStudy & { type: 'web' };
export type MobileProject = CaseStudy & { type: 'mobile' };
export type Project = CaseStudy;
