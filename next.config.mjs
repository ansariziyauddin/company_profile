/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/projects/1', destination: '/projects/fashion-world', permanent: true },
      { source: '/projects/2', destination: '/projects/social-service', permanent: true },
      { source: '/projects/3', destination: '/projects/ecommerce-platform', permanent: true },
      { source: '/projects/4', destination: '/projects', permanent: true },
      { source: '/projects/portfolio-todo-manager', destination: '/projects', permanent: true },
      { source: '/projects/5', destination: '/projects/magical-community', permanent: true },
      { source: '/projects/m1', destination: '/projects/inventory-management', permanent: true },
      { source: '/projects/m2', destination: '/projects/secure-vault', permanent: true },
      { source: '/projects/m3', destination: '/projects/society-management', permanent: true },
      { source: '/projects/m4', destination: '/projects/magical-community-app', permanent: true },
    ];
  },
};

export default nextConfig;
