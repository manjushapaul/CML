// Editable content for the website

export const SITE_CONFIG = {
  name: 'Code Meld Labs',
  tagline: 'Full-Stack Experts in Next.js, PHP & AI',
  email: 'manjushapaul39@gmail.com',
  upwork: {
    rating: '5.0',
    successRate: '100%',
    reviews: '10+',
    jobsCompleted: '15+',
  },
  social: {
    github: 'https://github.com/code-meld-labs',
    upwork: 'https://www.upwork.com/freelancers/codemeldlabs',
    linkedin: 'https://www.linkedin.com/company/code-meld-labs',
  },
}

export const TEAM_MEMBERS = [
  {
    name: 'Manjusha Paul',
    role: 'Full-Stack Developer',
    image: '/images/profiles.jpg',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/manjushapaul',
    bio: 'Expert in modern web development with a focus on performance and user experience.',
  },
  {
    name: 'Jaison James',
    role: 'AI/ML Engineer',
    image: '/images/jaisonj.jpg',
    skills: ['Python', 'TensorFlow', 'OpenAI APIs', 'LangChain'],
    github: 'https://github.com/jaisonjames',
    bio: 'Building intelligent automation solutions and AI-powered SaaS applications.',
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'NexSpot Landing Page',
    category: 'Next.js',
    description: 'Modern landing page design for coworking space with elegant UI and smooth animations.',
    image: '/images/nexspot.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://collective-workspace.vercel.app',
    githubUrl: 'https://github.com/code-meld-labs/collective-workspace',
    featured: true,
  },
  {
    id: 2,
    title: 'Crypto Trading Dashboard',
    category: 'Next.js',
    description: 'Landing page design for cryptocurrency trading platform with modern UI.',
    image: '/images/crypto.png',
    tags: ['Next.js', 'Chart.js', 'WebSocket', 'TailwindCSS'],
    liveUrl: 'https://crypto-latest.vercel.app/',
    githubUrl: 'https://github.com/code-meld-labs/crypto-dashboard',
    featured: true,
  },
  {
    id: 3,
    title: 'AI Chatbot Landing Page',
    category: 'AI',
    description: 'Landing page design for AI chatbot SaaS platform with modern aesthetics.',
    image: '/images/ai.png',
    tags: ['Next.js', 'OpenAI', 'LangChain', 'Redis'],
    liveUrl: 'https://ai-chatbot-saas.vercel.app',
    githubUrl: 'https://github.com/code-meld-labs/ai-chatbot',
    featured: true,
  },
  {
    id: 4,
    title: 'Pontoon Custom Sports Apparel',
    category: 'PHP',
    description: 'Landing page design for e-commerce platform with product showcase.',
    image: '/images/Pontoon-Custom-Sports-Apparel.png',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
    liveUrl: 'https://pontoonsports.com/',
    githubUrl: 'https://github.com/code-meld-labs/ecommerce',
    featured: false,
  },
  {
    id: 5,
    title: 'Nexcent Landing Page',
    category: 'AI',
    description: 'Landing page design for automation platform with clean and professional layout.',
    image: '/images/nexcent.png',
    tags: ['Python', 'FastAPI', 'Celery', 'React'],
    liveUrl: 'https://automation-suite.vercel.app',
    githubUrl: 'https://github.com/code-meld-labs/automation-suite',
    featured: false,
  },
  {
    id: 6,
    title: 'PsychicOz Mobile Application',
    category: 'React Native',
    description: 'Comprehensive cross-platform mobile application connecting users with psychic readers for spiritual consultations.',
    image: '/images/Simulator Screenshot - iPhone 17 Pro - 2025-12-18 at 14.35.23.png',
    tags: ['React Native', 'TypeScript', 'Pusher', 'Twilio', 'OpenTok', 'Real-time Chat'],
    liveUrl: 'https://psychicoz.com/',
    githubUrl: 'https://github.com/code-meld-labs/psychicoz',
    featured: false,
  },
  {
    id: 7,
    title: 'Psychicoz',
    category: 'Next.js',
    description: 'Comprehensive online psychic reading platform with multi-channel communication and advanced filtering.',
    image: '/images/psy.png',
    tags: ['Next.js', 'TypeScript', 'Real-time Chat', 'Video Calling', 'E-commerce'],
    liveUrl: 'https://psychicoz.com/',
    githubUrl: 'https://github.com/code-meld-labs/psychicoz',
    featured: false,
  },
  {
    id: 8,
    title: 'Peak Group - Job Management System',
    category: 'Next.js',
    description: 'Comprehensive job management and cost tracking system for Peak Plumbing and Gas with centralized platform for managing commercial, civil, and residential jobs.',
    image: '/images/pbhome.jpg',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'PHP', 'MySQL', 'Job Management'],
    liveUrl: 'https://peakplumbingandgas.com.au',
    githubUrl: 'https://github.com/code-meld-labs/peak-group',
    featured: false,
  },
]

export const SERVICES = [
  {
    icon: '⚡',
    title: 'Next.js & React Development',
    description: 'Modern, performant web applications with the latest React and Next.js features.',
    features: ['App Router', 'Server Components', 'Static Generation', 'API Routes'],
  },
  {
    icon: '🔧',
    title: 'PHP & Laravel Development',
    description: 'Robust backend systems and legacy application modernization.',
    features: ['REST APIs', 'Database Design', 'Legacy Migration', 'Performance Optimization'],
  },
  {
    icon: '🤖',
    title: 'AI Automation & Integration',
    description: 'Intelligent solutions powered by cutting-edge AI and machine learning.',
    features: ['OpenAI Integration', 'Custom AI Agents', 'Process Automation', 'NLP Solutions'],
  },
  {
    icon: '💎',
    title: 'SaaS Development',
    description: 'Complete SaaS platforms from MVP to production with subscription management.',
    features: ['Multi-tenancy', 'Payment Integration', 'Authentication', 'Admin Dashboards'],
  },
  {
    icon: '🎨',
    title: 'UI/UX Design & Implementation',
    description: 'Beautiful, responsive interfaces with modern design principles.',
    features: ['Tailwind CSS', 'Responsive Design', 'Accessibility', 'Animation'],
  },
  {
    icon: '📱',
    title: 'Crypto & Web3 Applications',
    description: 'Blockchain integrations and cryptocurrency trading platforms.',
    features: ['Web3.js/Ethers.js', 'Smart Contracts', 'Wallet Integration', 'DeFi Protocols'],
  },
]

export const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc',
    content: 'Code Meld Labs delivered our MVP ahead of schedule with exceptional quality. Their expertise in Next.js and attention to detail made the entire process smooth.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, CryptoTrader Pro',
    content: 'Outstanding work on our crypto dashboard. The real-time features work flawlessly, and the UI is intuitive. Highly recommend for any Web3 projects.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, AI Solutions',
    content: 'The AI chatbot integration exceeded our expectations. The team\'s knowledge of OpenAI and LangChain is impressive. Will definitely work with them again.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
  },
  {
    name: 'David Park',
    role: 'CTO, HealthTech Solutions',
    content: 'Professional, responsive, and highly skilled. They built our healthcare portal with strict compliance requirements and delivered a secure, scalable solution.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
]


