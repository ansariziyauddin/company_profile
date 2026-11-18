import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Innovance',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#1B0B3B',
    theme_color: '#1B0B3B',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  };
}
