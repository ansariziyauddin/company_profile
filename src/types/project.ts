export interface BaseProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
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
}

export type Project = WebProject | MobileProject;
