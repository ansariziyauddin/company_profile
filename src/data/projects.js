/** @type {import('./src/types/project').WebProject[]} */
/** @type {import('../types/project').WebProject[]} */
export const webProjects = [
  {
    id: 'fashion-world',
    title: 'Fashion World',
    title: 'Omnichannel Digital Commerce Engine',
    industry: 'Retail & E-Commerce',
    clientType: 'Enterprise Fashion & Apparel Brand',
    summary:
      'A high-performance headless digital commerce platform engineered for sub-second catalog navigation, high-traffic promotional bursts, and automated checkout resilience.',
    description:
      'A modern e-commerce fashion platform with elegant product browsing, cart management, and seamless checkout flow.',
    tags: ['E-Commerce', 'Online Shopping', 'UI/UX Design'],
    link: 'https://grace-adorn-shop.onrender.com/',
      'A high-performance headless digital commerce platform engineered for sub-second catalog navigation, high-traffic promotional bursts, and automated checkout resilience.',
    challenge:
      'The client suffered from frequent checkout bottlenecks, sluggish product filtering across 10,000+ SKUs, and cart abandonment during seasonal promotional peaks.',
    solution:
      'Architected a headless frontend using Next.js with edge caching, distributed Redis inventory state management, and an asynchronous queue for resilient order processing.',
    metrics: [
      '42% reduction in checkout abandonment',
      'Sub-600ms average global page latency',
      'Scaled to 15,000+ concurrent active shoppers',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'AWS'],
    tags: ['E-Commerce Architecture', 'Headless Storefront', 'High Concurrency'],
    image: '/images/projects/web_fashion_world.webp',
    type: 'web',
  },
  {
    id: 'social-service',
    title: 'Social Service',
    title: 'Disaster Relief & Volunteer Dispatch Network',
    industry: 'Social Infrastructure & Non-Profit',
    clientType: 'Civic Impact & Volunteer Organization',
    summary:
      'A distributed field coordination platform matching thousands of emergency volunteers, aid workers, and resource donors with real-time incident dispatching.',
    description:
      'A platform connecting individuals with volunteers and organizations to support community needs and create positive social impact.',
    tags: ['Social Platform', 'Community Service', 'Volunteer Network'],
    link: 'https://khidmat-frontend-backend.onrender.com/',
      'A distributed field coordination platform matching thousands of emergency volunteers, aid workers, and resource donors with real-time incident dispatching.',
    challenge:
      'Emergency relief dispatches relied on fragmented manual spreadsheets and unindexed chat groups, causing delayed relief distribution and duplicate volunteer assignments.',
    solution:
      'Engineered a geolocation-aware dispatch portal with role-based coordination hubs, real-time demand aggregation, and automated SMS/push notification queues.',
    metrics: [
      'Over 25,000 relief requests coordinated',
      '99.98% platform uptime during regional emergency surges',
      'Zero latency bottleneck in high-load field operations',
    ],
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'Docker', 'Mapbox API'],
    tags: ['Real-Time Dispatch', 'Geolocation Routing', 'Civic Tech'],
    image: '/images/projects/web_social_service.webp',
    type: 'web',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    title: 'Multi-Tenant Commercial Logistics Hub',
    industry: 'Enterprise SaaS & B2B Distribution',
    clientType: 'B2B Wholesale & Supply Distributor',
    summary:
      'A scalable multi-tenant commerce administration system featuring real-time financial reconciliation, vendor catalog orchestration, and automated fulfillment pipelines.',
    description:
      'A scalable multi-product e-commerce system with admin dashboard and order management.',
    tags: ['E-Commerce', 'Admin Dashboard', 'Order Management'],
    link: 'https://e-commerce-plhj.onrender.com/',
      'A scalable multi-tenant commerce administration system featuring real-time financial reconciliation, vendor catalog orchestration, and automated fulfillment pipelines.',
    challenge:
      'Disparate legacy ERP software across multiple distribution warehouses caused inventory sync delays of up to 4 hours and repetitive invoicing errors.',
    solution:
      'Designed an event-driven administration system with real-time webhook sync, unified ledger reconciliation, and automated export analytics.',
    metrics: [
      'Instant real-time inventory synchronization across 8 warehouses',
      '30% reduction in fulfillment turnaround time',
      'Automated tracking for 50,000+ monthly wholesale orders',
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
    tags: ['B2B Systems', 'Order Orchestration', 'Enterprise Dashboard'],
    image: '/images/projects/web_e_commerce.webp',
    type: 'web',
  },
  {
    id: 'portfolio-todo-manager',
    title: 'Portfolio + Todo Manager',
    description:
      'A combined personal portfolio and productivity app showcasing seamless UX with integrated task management.',
    tags: ['Portfolio', 'Productivity Tool', 'Task Management'],
    link: 'https://portfolio-todo-combo-mi4g.onrender.com/#/',
    image: '/images/projects/web_portfolio_todo.webp',
    type: 'web',
  },
  {
    id: 'magical-community',
    title: 'Magical Community',
    title: 'High-Concurrency Digital Community Hub',
    industry: 'Media & Professional Networks',
    clientType: 'Knowledge Exchange & Member Network',
    summary:
      'A high-concurrency community platform supporting interactive forum spaces, real-time messaging, user mentorship matching, and structured resource indexing.',
    description:
      'A community platform to bring people together, fostering active engagement and smooth communications.',
    tags: ['Community Platform', 'Forum', 'Social Engagement'],
    link: 'https://www.magicalcommunity.in/',
      'A high-concurrency community platform supporting interactive forum spaces, real-time messaging, user mentorship matching, and structured resource indexing.',
    challenge:
      'User engagement was dropping on legacy forum software that lacked real-time feedback loops, thread indexing, and modern mobile responsiveness.',
    solution:
      'Delivered a reactive web platform with instant notification pipelines, thread indexing for high SEO discoverability, and automated spam filtering.',
    metrics: [
      '65% boost in daily active member retention',
      'Over 100,000 monthly interactions processed',
      'Clean 95+ Core Web Vitals performance score',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Redis'],
    tags: ['Community Architecture', 'Real-Time Sync', 'High Engagement'],
    image: '/images/projects/web_magical_community.webp',
    type: 'web',
  },
];

/** @type {import('./src/types/project').MobileProject[]} */
/** @type {import('../types/project').MobileProject[]} */
export const mobileProjects = [
  {
    id: 'inventory-management',
    title: 'Inventory Management',
    description: 'A comprehensive solution for tracking assets and managing stock efficiently.',
    tags: ['Asset Management', 'Inventory Tracking', 'Business Utility'],
    title: 'Automated Warehouse Asset & Logistics Suite',
    industry: 'Supply Chain & Manufacturing',
    clientType: 'Regional Distribution Enterprise',
    summary:
      'An enterprise mobile logistics solution for warehouse operatives, providing instant barcode auditing, asset tracking, and batch dispatch management.',
    description:
      'An enterprise mobile logistics solution for warehouse operatives, providing instant barcode auditing, asset tracking, and batch dispatch management.',
    challenge:
      'Paper-based inventory checks caused frequent stock discrepancies, human auditing error, and hours of daily administrative reconciliation.',
    solution:
      'Engineered an offline-first native mobile app with automated camera-based barcode scanning, local SQLite caching, and instant cloud sync.',
    metrics: [
      '35% reduction in manual stock audit hours',
      '100% data preservation during warehouse dead-zones',
      'Zero discrepancy reconciliation across field audits',
    ],
    techStack: ['Flutter', 'Dart', 'SQLite', 'Node.js REST APIs', 'PostgreSQL', 'Docker'],
    tags: ['Asset Management', 'Offline-First Mobile', 'Barcoding & IoT'],
    image: '/images/projects/inventory_management.webp',
    screenshots: [
      '/images/projects/im_01.webp',
      '/images/projects/im_02.webp',
      '/images/projects/im_03.webp',
      '/images/projects/im_04.webp',
      '/images/projects/im_05.webp',
    ],
    type: 'mobile',
  },
  {
    id: 'magical-community-app',
    title: 'Magical Community',
    description: 'A mobile application designed to connect users and foster community engagement.',
    tags: ['Community App', 'Social Network', 'Mobile Platform'],
    title: 'Member Experience & Real-Time Engagement App',
    industry: 'Social Communities & Member Organizations',
    clientType: 'Professional Association',
    summary:
      'A cross-platform iOS & Android application facilitating peer connections, live events, instant notifications, and content collaboration.',
    description:
      'A cross-platform iOS & Android application facilitating peer connections, live events, instant notifications, and content collaboration.',
    challenge:
      'Members required an intuitive on-the-go experience with immediate push alerts and low battery/data consumption.',
    solution:
      'Developed a native mobile app utilizing optimized state management, background push service workers, and responsive media caching.',
    metrics: [
      '4.8★ user experience rating',
      '40% increase in live event attendance participation',
      'Sub-100ms push notification delivery pipeline',
    ],
    techStack: ['Flutter', 'iOS & Android SDKs', 'Firebase Cloud Messaging', 'Node.js'],
    tags: ['Mobile Application', 'Event Streaming', 'Push Notifications'],
    image: '/images/projects/magical_community.webp',
    playStoreLink:
      'https://play.google.com/store/apps/details?id=com.mindmesh.magicalcommunity&hl=en_IN',
    appStoreLink: 'https://apps.apple.com/in/app/magicalcommunity/id6749794462',
    screenshots: [
      '/images/projects/mc_01.webp',
      '/images/projects/mc_02.webp',
      '/images/projects/mc_03.webp',
      '/images/projects/mc_04.webp',
    ],
    type: 'mobile',
  },
  {
    id: 'secure-vault',
    title: 'Secure Vault',
    description: 'A secure and reliable personal vault app for sensitive data and operations.',
    tags: ['Data Privacy', 'Digital Security', 'Personal Vault'],
    title: 'Zero-Knowledge Enterprise Credential Vault',
    industry: 'Cybersecurity & FinTech',
    clientType: 'Executive Security & Data Governance',
    summary:
      'A high-security biometric vault application engineered to protect sensitive executive credentials, API secrets, and critical organizational data.',
    description:
      'A high-security biometric vault application engineered to protect sensitive executive credentials, API secrets, and critical organizational data.',
    challenge:
      'Strict corporate policies required offline-capable, tamper-evident credential storage that never exposes unencrypted secrets to servers or third-party clouds.',
    solution:
      'Implemented client-side AES-256-GCM encryption with device Secure Enclave / KeyStore hardware integration and biometric challenge authentication.',
    metrics: [
      'Zero-knowledge client-side encryption architecture',
      'Hardware-backed cryptographic security',
      'Zero plaintext data ever transmitted or stored on cloud',
    ],
    techStack: ['Flutter', 'Hardware Secure Enclave', 'AES-256', 'Biometric Auth', 'Node.js'],
    tags: ['Zero-Trust Security', 'Biometric Encryption', 'FinTech Grade'],
    image: '/images/projects/secureVault.webp',
    screenshots: [
      '/images/projects/sv_01.webp',
      '/images/projects/sv_02.webp',
      '/images/projects/sv_03.webp',
      '/images/projects/sv_04.webp',
      '/images/projects/sv_05.webp',
    ],
    type: 'mobile',
  },
  {
    id: 'society-management',
    title: 'Society Management',
    title: 'Smart Facility & Resident Operations System',
    industry: 'Real Estate & Facility Management',
    clientType: 'Property Management & Residential Communities',
    summary:
      'An integrated residential administrative platform unifying visitor verification, digital service ticketing, accounting notices, and security gatehouse logs.',
    description:
      'A residential society management platform for easier administration and communication.',
    tags: ['Residential Admin', 'Society Management', 'Communication Portal'],
      'An integrated residential administrative platform unifying visitor verification, digital service ticketing, accounting notices, and security gatehouse logs.',
    challenge:
      'Complex manual logbooks and fragmented chat communications led to security oversights and tenant billing disputes.',
    solution:
      'Designed a multi-role mobile management ecosystem with gatekeeper access logs, instant tenant approvals, and digital service ticketing.',
    metrics: [
      'Over 1,200 residential units managed seamlessly',
      '80% reduction in gatehouse visitor processing time',
      '100% digital audit trail for facility operations',
    ],
    techStack: ['Flutter', 'Node.js', 'PostgreSQL', 'Cloud Notifications'],
    tags: ['Facility Management', 'Access Verification', 'Operational Workflow'],
    image: '/images/projects/soceity_managemet.webp',
    screenshots: [
      '/images/projects/sm_01.webp',
      '/images/projects/sm_02.webp',
      '/images/projects/sm_03.webp',
      '/images/projects/sm_04.webp',
    ],
    type: 'mobile',
  },
];
