import { siteConfig } from '@/config/site';
import { webProjects, mobileProjects } from '@/data/projects';

export default function sitemap() {
  const staticRoutes = ['', '/about', '/contact', '/projects'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const projectRoutes = [...webProjects, ...mobileProjects].map((project) => ({
    url: `${siteConfig.url}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
