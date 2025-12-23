import type { CaseStudyData } from './nexspot'

export const nexcentCaseStudy: CaseStudyData = {
  id: 'nexcent',
  title: 'Nexcent - Business Growth Solutions',
  summary: 'Modern landing page for business growth solutions platform with interactive carousel and engaging sections',
  tags: ['Landing Page', 'Business Solutions', 'HTML/CSS', 'JavaScript'],
  liveUrl: 'https://nexcent-git-main-manjusha-pauls-projects.vercel.app/',
  pdfUrl: '/case-studies/nexcent.pdf',
  hero: {
    title: 'Nexcent - Business Growth Solutions',
    summary: 'A modern, responsive landing page for Nexcent, a business growth solutions platform. Features interactive hero carousel, client showcase, feature sections, testimonials, and compelling call-to-action sections designed to convert visitors into customers.',
    tags: ['Landing Page', 'Business Solutions', 'HTML/CSS', 'JavaScript', 'Swiper', 'Responsive Design'],
  },
  overview: {
    client: 'Nexcent - Business Growth Solutions Platform',
    problem: "The client needed a modern, conversion-focused landing page to showcase their business growth solutions platform. The page needed to effectively communicate the value proposition, highlight key features (membership management, event booking, community management), showcase client testimonials, and drive user engagement through interactive elements and clear call-to-actions.",
    goals: [
      'Create a modern, professional landing page design',
      'Implement interactive hero carousel with multiple value propositions',
      'Showcase client logos and testimonials for social proof',
      'Highlight key features and benefits clearly',
      'Include compelling statistics and impact metrics',
      'Ensure fully responsive design for all devices',
      'Optimize for fast loading and smooth user experience',
    ],
    stats: {
      timeline: '3 weeks',
      stack: ['HTML5', 'CSS3', 'JavaScript', 'Swiper.js', 'Tailwind CSS', 'Responsive Design'],
      role: 'Frontend Developer & UI Designer',
      outcomes: [
        'Successfully launched modern landing page with interactive elements',
        'Responsive design achieved 100% mobile compatibility',
        'Fast page load times improved user experience',
        'Clear call-to-actions increased engagement',
      ],
    },
  },
  gallery: [
    {
      src: '/images/nexcent.png',
      alt: 'Nexcent landing page overview',
      caption: 'Complete landing page with hero section, features, and testimonials',
      tag: 'Landing Page',
    },
  ],
  process: [
    {
      title: 'Requirements & Design Planning',
      description: 'Analyzed the client\'s requirements for a business growth solutions landing page. Planned the structure with hero section, features, testimonials, and CTA sections. Designed a clean, professional layout that effectively communicates the platform\'s value proposition.',
    },
    {
      title: 'Hero Section & Carousel Development',
      description: 'Built an interactive hero section with Swiper.js carousel featuring multiple slides highlighting different value propositions (Smart Solutions, Trusted by Clients, Award-Winning Service). Implemented smooth transitions and navigation controls.',
    },
    {
      title: 'Content Sections Development',
      description: 'Developed key content sections including client logos showcase, feature cards (Membership Organisations, National Associations, Clubs And Groups), case study sections, impact statistics, and testimonials with client branding.',
    },
    {
      title: 'Interactive Elements & Animations',
      description: 'Implemented interactive elements including client logo carousel, smooth scroll navigation, mobile hamburger menu, and hover effects. Added subtle animations to enhance user engagement without compromising performance.',
    },
    {
      title: 'Responsive Design Implementation',
      description: 'Ensured fully responsive design using Tailwind CSS, with mobile-first approach. Optimized layouts for all screen sizes, ensuring seamless experience across desktop, tablet, and mobile devices.',
    },
    {
      title: 'Testing & Optimization',
      description: 'Conducted cross-browser testing and performance optimization. Ensured fast loading times, smooth animations, and accessibility compliance. Launched with clean, production-ready code.',
    },
  ],
  results: {
    title: 'Results & Impact',
    bullets: [
      'Successfully launched modern, professional landing page',
      'Interactive carousel improved user engagement and time on page',
      'Fully responsive design achieved 100% mobile compatibility',
      'Fast page load times enhanced user experience',
      'Clear value propositions and CTAs improved conversion potential',
      'Client testimonials and statistics provided strong social proof',
    ],
    nextSteps: [
      'Add A/B testing for different hero messages',
      'Implement analytics tracking for user behavior',
      'Add lead capture forms for demo requests',
      'Integrate with email marketing platform',
      'Add more interactive elements and micro-animations',
      'Optimize SEO for better search visibility',
    ],
  },
}





