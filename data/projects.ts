export interface Project {
  id: string;
  name: string;
  description: string;
  framework: string;
  status: 'active' | 'paused' | 'archived';
  lastDeployed: string;
  deployments: number;
  url?: string;
  tags: string[];
  repository?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'nextjs-blog',
    description: 'A modern blog built with Next.js and Tailwind CSS',
    framework: 'Next.js',
    status: 'active',
    lastDeployed: '2024-12-28',
    deployments: 142,
    url: 'https://nextjs-blog.vercel.app',
    tags: ['blog', 'nextjs', 'tailwind'],
    repository: 'github.com/user/nextjs-blog'
  },
  {
    id: '2',
    name: 'react-dashboard',
    description: 'Analytics dashboard with real-time data visualization',
    framework: 'React',
    status: 'active',
    lastDeployed: '2024-12-30',
    deployments: 89,
    url: 'https://react-dashboard.vercel.app',
    tags: ['dashboard', 'react', 'analytics'],
    repository: 'github.com/user/react-dashboard'
  },
  {
    id: '3',
    name: 'vue-portfolio',
    description: 'Personal portfolio website showcasing projects',
    framework: 'Vue.js',
    status: 'active',
    lastDeployed: '2024-12-25',
    deployments: 56,
    url: 'https://vue-portfolio.vercel.app',
    tags: ['portfolio', 'vue'],
    repository: 'github.com/user/vue-portfolio'
  },
  {
    id: '4',
    name: 'svelte-todo',
    description: 'Task management app with Svelte',
    framework: 'Svelte',
    status: 'active',
    lastDeployed: '2024-12-29',
    deployments: 34,
    url: 'https://svelte-todo.vercel.app',
    tags: ['todo', 'svelte', 'productivity'],
    repository: 'github.com/user/svelte-todo'
  },
  {
    id: '5',
    name: 'nuxt-ecommerce',
    description: 'E-commerce platform built with Nuxt.js',
    framework: 'Nuxt.js',
    status: 'active',
    lastDeployed: '2024-12-27',
    deployments: 203,
    url: 'https://nuxt-ecommerce.vercel.app',
    tags: ['ecommerce', 'nuxt', 'shopping'],
    repository: 'github.com/user/nuxt-ecommerce'
  },
  {
    id: '6',
    name: 'gatsby-docs',
    description: 'Documentation site powered by Gatsby',
    framework: 'Gatsby',
    status: 'paused',
    lastDeployed: '2024-11-15',
    deployments: 67,
    url: 'https://gatsby-docs.vercel.app',
    tags: ['docs', 'gatsby'],
    repository: 'github.com/user/gatsby-docs'
  },
  {
    id: '7',
    name: 'astro-landing',
    description: 'High-performance landing page with Astro',
    framework: 'Astro',
    status: 'active',
    lastDeployed: '2024-12-31',
    deployments: 28,
    url: 'https://astro-landing.vercel.app',
    tags: ['landing', 'astro', 'marketing'],
    repository: 'github.com/user/astro-landing'
  },
  {
    id: '8',
    name: 'remix-app',
    description: 'Full-stack web app using Remix',
    framework: 'Remix',
    status: 'active',
    lastDeployed: '2024-12-30',
    deployments: 45,
    url: 'https://remix-app.vercel.app',
    tags: ['remix', 'fullstack'],
    repository: 'github.com/user/remix-app'
  },
  {
    id: '9',
    name: 'angular-crm',
    description: 'Customer relationship management system',
    framework: 'Angular',
    status: 'active',
    lastDeployed: '2024-12-26',
    deployments: 156,
    url: 'https://angular-crm.vercel.app',
    tags: ['crm', 'angular', 'enterprise'],
    repository: 'github.com/user/angular-crm'
  },
  {
    id: '10',
    name: 'solidjs-ui',
    description: 'UI component library built with SolidJS',
    framework: 'SolidJS',
    status: 'active',
    lastDeployed: '2024-12-29',
    deployments: 23,
    url: 'https://solidjs-ui.vercel.app',
    tags: ['ui', 'solidjs', 'components'],
    repository: 'github.com/user/solidjs-ui'
  },
  {
    id: '11',
    name: 'nextjs-saas',
    description: 'SaaS starter template with authentication',
    framework: 'Next.js',
    status: 'active',
    lastDeployed: '2024-12-31',
    deployments: 312,
    url: 'https://nextjs-saas.vercel.app',
    tags: ['saas', 'nextjs', 'auth'],
    repository: 'github.com/user/nextjs-saas'
  },
  {
    id: '12',
    name: 'vite-playground',
    description: 'Experimental playground for testing Vite features',
    framework: 'Vite',
    status: 'active',
    lastDeployed: '2024-12-28',
    deployments: 78,
    url: 'https://vite-playground.vercel.app',
    tags: ['vite', 'experimental'],
    repository: 'github.com/user/vite-playground'
  },
  {
    id: '13',
    name: 'preact-mobile',
    description: 'Lightweight mobile web app',
    framework: 'Preact',
    status: 'active',
    lastDeployed: '2024-12-27',
    deployments: 91,
    url: 'https://preact-mobile.vercel.app',
    tags: ['mobile', 'preact', 'lightweight'],
    repository: 'github.com/user/preact-mobile'
  },
  {
    id: '14',
    name: 'ember-admin',
    description: 'Admin panel for content management',
    framework: 'Ember.js',
    status: 'archived',
    lastDeployed: '2024-09-12',
    deployments: 234,
    tags: ['admin', 'ember', 'cms'],
    repository: 'github.com/user/ember-admin'
  },
  {
    id: '15',
    name: 'nextjs-ai-chat',
    description: 'AI-powered chat application',
    framework: 'Next.js',
    status: 'active',
    lastDeployed: '2024-12-31',
    deployments: 167,
    url: 'https://nextjs-ai-chat.vercel.app',
    tags: ['ai', 'nextjs', 'chat'],
    repository: 'github.com/user/nextjs-ai-chat'
  },
  {
    id: '16',
    name: 'react-native-web',
    description: 'Cross-platform app using React Native Web',
    framework: 'React',
    status: 'active',
    lastDeployed: '2024-12-29',
    deployments: 52,
    url: 'https://react-native-web.vercel.app',
    tags: ['react', 'native', 'cross-platform'],
    repository: 'github.com/user/react-native-web'
  },
  {
    id: '17',
    name: 'hugo-blog',
    description: 'Static blog built with Hugo',
    framework: 'Hugo',
    status: 'paused',
    lastDeployed: '2024-10-20',
    deployments: 43,
    url: 'https://hugo-blog.vercel.app',
    tags: ['blog', 'hugo', 'static'],
    repository: 'github.com/user/hugo-blog'
  },
  {
    id: '18',
    name: 'nextjs-marketplace',
    description: 'Online marketplace with payment integration',
    framework: 'Next.js',
    status: 'active',
    lastDeployed: '2024-12-30',
    deployments: 289,
    url: 'https://nextjs-marketplace.vercel.app',
    tags: ['marketplace', 'nextjs', 'payments'],
    repository: 'github.com/user/nextjs-marketplace'
  },
  {
    id: '19',
    name: 'svelte-weather',
    description: 'Weather forecast application',
    framework: 'Svelte',
    status: 'active',
    lastDeployed: '2024-12-28',
    deployments: 61,
    url: 'https://svelte-weather.vercel.app',
    tags: ['weather', 'svelte', 'api'],
    repository: 'github.com/user/svelte-weather'
  },
  {
    id: '20',
    name: 'vue-admin-template',
    description: 'Admin dashboard template',
    framework: 'Vue.js',
    status: 'active',
    lastDeployed: '2024-12-26',
    deployments: 124,
    url: 'https://vue-admin-template.vercel.app',
    tags: ['admin', 'vue', 'template'],
    repository: 'github.com/user/vue-admin-template'
  },
  {
    id: '21',
    name: 'qwik-demo',
    description: 'Demo site showcasing Qwik framework',
    framework: 'Qwik',
    status: 'active',
    lastDeployed: '2024-12-31',
    deployments: 19,
    url: 'https://qwik-demo.vercel.app',
    tags: ['qwik', 'demo', 'performance'],
    repository: 'github.com/user/qwik-demo'
  },
  {
    id: '22',
    name: 'nextjs-social',
    description: 'Social media platform clone',
    framework: 'Next.js',
    status: 'active',
    lastDeployed: '2024-12-29',
    deployments: 198,
    url: 'https://nextjs-social.vercel.app',
    tags: ['social', 'nextjs', 'community'],
    repository: 'github.com/user/nextjs-social'
  },
  {
    id: '23',
    name: 'astro-blog',
    description: 'Content-focused blog with Astro',
    framework: 'Astro',
    status: 'active',
    lastDeployed: '2024-12-30',
    deployments: 37,
    url: 'https://astro-blog.vercel.app',
    tags: ['blog', 'astro', 'content'],
    repository: 'github.com/user/astro-blog'
  },
  {
    id: '24',
    name: 'react-game',
    description: 'Browser-based game built with React',
    framework: 'React',
    status: 'active',
    lastDeployed: '2024-12-27',
    deployments: 84,
    url: 'https://react-game.vercel.app',
    tags: ['game', 'react', 'entertainment'],
    repository: 'github.com/user/react-game'
  },
  {
    id: '25',
    name: 'nextjs-cms',
    description: 'Headless CMS with Next.js',
    framework: 'Next.js',
    status: 'active',
    lastDeployed: '2024-12-31',
    deployments: 267,
    url: 'https://nextjs-cms.vercel.app',
    tags: ['cms', 'nextjs', 'headless'],
    repository: 'github.com/user/nextjs-cms'
  },
  {
    id: '26',
    name: 'redwood-app',
    description: 'Full-stack app with RedwoodJS',
    framework: 'RedwoodJS',
    status: 'active',
    lastDeployed: '2024-12-28',
    deployments: 73,
    url: 'https://redwood-app.vercel.app',
    tags: ['redwood', 'fullstack', 'jamstack'],
    repository: 'github.com/user/redwood-app'
  }
];
