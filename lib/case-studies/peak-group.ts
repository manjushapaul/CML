import type { CaseStudyData } from './nexspot'

export const peakGroupCaseStudy: CaseStudyData = {
  id: 'peak-group',
  title: 'Peak Group - Job Management System',
  summary: 'Comprehensive job management and cost tracking system for Peak Plumbing and Gas, providing centralized platform for managing commercial, civil, and residential jobs with real-time insights.',
  tags: ['Next.js 15', 'React 19', 'TypeScript', 'PHP', 'MySQL', 'Job Management', 'Cost Tracking'],
  liveUrl: 'https://peakplumbingandgas.com.au',
  pdfUrl: '/case-studies/peak-group.pdf',
  hero: {
    title: 'Peak Group - Job Management System',
    summary: 'A comprehensive job management and cost tracking system developed for Peak Plumbing and Gas, an Australian plumbing and gas services company. The application provides a centralized platform for managing commercial, civil, and residential jobs, tracking costs, managing labor rates, and maintaining maintenance forecasts. Built with Next.js 15 and React 19, the system streamlines operations and provides real-time insights into project management and financial tracking.',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'PHP API', 'MySQL', 'Job Management', 'Cost Tracking'],
  },
  overview: {
    client: 'Peak Plumbing and Gas - Australian Plumbing and Gas Services Company',
    problem: 'Peak Plumbing and Gas needed a comprehensive job management and cost tracking system to streamline their operations across commercial, civil, and residential projects. The system required centralized job management with the ability to track costs, manage labor rates, maintain maintenance forecasts, and prevent concurrent editing conflicts. Key requirements included: support for multiple job types (commercial, civil, residential) with separate management modules, detailed cost tracking with month-wise percentage allocation and spreadsheet interface, job locking system to prevent concurrent editing conflicts, Excel integration for bulk data import, user authentication and authorization, labor rate management, maintenance forecast tracking, and real-time data updates across multiple users.',
    goals: [
      'Build a centralized job management platform for commercial, civil, and residential jobs',
      'Implement comprehensive cost tracking with spreadsheet-like interface',
      'Create job locking system to prevent concurrent editing conflicts',
      'Develop Excel integration for bulk data import and export',
      'Implement user authentication and authorization system',
      'Build labor rate management and tracking system',
      'Create maintenance forecast tracking and management',
      'Design responsive UI with modern design principles',
      'Ensure real-time data updates across multiple users',
      'Optimize performance with code splitting and lazy loading',
    ],
    stats: {
      timeline: '12+ weeks',
      stack: ['Next.js 15.0.0', 'React 19.0.0', 'TypeScript 5.5.2', 'Tailwind CSS 3.4.4', 'NextAuth 5.0', 'PHP REST API', 'MySQL', 'Zod', '@hello-pangea/dnd'],
      role: 'Full-Stack Developer',
      outcomes: [
        'Successfully launched comprehensive job management system for Peak Plumbing and Gas',
        'Centralized platform managing commercial, civil, and residential jobs',
        'Job locking system prevented concurrent editing conflicts',
        'Excel integration enabled bulk data import and export',
        'Cost tracking system provided detailed financial insights',
        'Responsive design achieved excellent mobile usability',
        'System handles 30+ API endpoints with optimized performance',
        'Real-time data updates improved collaboration across teams',
      ],
    },
  },
  gallery: [
    {
      src: '/images/pb1.png',
      alt: 'Peak Group job management system interface',
      caption: 'Main dashboard showcasing job management interface with navigation and key features',
      tag: 'Dashboard',
    },
    {
      src: '/images/pb2.png',
      alt: 'Peak Group cost tracking and job details',
      caption: 'Job cost tracking interface with spreadsheet-like data entry and month-wise allocation',
      tag: 'Cost Tracking',
    },
  ],
  process: [
    {
      title: 'Requirements & Discovery',
      description: 'Analyzed Peak Plumbing and Gas business requirements and existing workflows. Researched job management systems, cost tracking methodologies, and concurrent editing solutions. Identified key features needed: multi-type job management (commercial, civil, residential), detailed cost tracking with percentage allocation, job locking system, Excel integration, user authentication, labor management, and maintenance forecasting.',
    },
    {
      title: 'Technology Stack Selection',
      description: 'Selected Next.js 15.0.0 (App Router) as the core framework with React 19.0.0 and TypeScript 5.5.2 for type safety. Implemented Tailwind CSS 3.4.4 for responsive styling and modern UI components. Integrated NextAuth 5.0.0-beta.19 for authentication with JWT token-based session management. Selected PHP REST API for backend services with MySQL database. Implemented Zod for schema validation, @hello-pangea/dnd for drag-and-drop functionality, and xlsx for Excel file processing.',
    },
    {
      title: 'Job Management System',
      description: 'Built comprehensive job management system with separate modules for commercial, civil, and residential jobs. Implemented CRUD operations for each job type with month and year-based filtering. Created job status tracking (pending/paid), archive functionality, and detailed job cost tracking. Developed job locking mechanism to prevent concurrent edits with user-based lock management and automatic lock release mechanisms.',
    },
    {
      title: 'Cost Tracking & Spreadsheet Interface',
      description: 'Developed detailed cost tracking system with spreadsheet-like interface for data entry. Implemented cost breakdown by stages with cost center management. Created month-wise percentage allocation with previous month comparison. Built Excel upload functionality for bulk data import and spreadsheet-style data visualization. Integrated real-time cost calculations and financial insights.',
    },
    {
      title: 'Authentication & Authorization',
      description: 'Implemented secure authentication system with email/password-based login and JWT token management. Created user signup functionality with password reset using token-based confirmation. Built protected routes with authentication hooks and user status management (active/inactive). Implemented cookie-based session storage with HTTP-only cookies for security.',
    },
    {
      title: 'Excel Integration & Data Management',
      description: 'Integrated Excel file processing using xlsx library for bulk data import. Created upload functionality for commercial, civil, and residential jobs. Implemented spreadsheet-style data visualization and export capabilities. Built data validation and error handling for Excel imports with user-friendly error messages.',
    },
    {
      title: 'Labor & Maintenance Management',
      description: 'Developed labor rate configuration and management system with admin interface for rate updates. Created maintenance forecast tracking with update and tracking capabilities. Implemented labor tracking across jobs with rate calculations. Built maintenance job management with forecast details management.',
    },
    {
      title: 'UI/UX Design & Performance',
      description: 'Designed responsive interface with mobile-first approach using Tailwind CSS. Implemented loading states with skeleton loaders, error handling with graceful fallbacks, and toast notifications for user feedback. Created collapsible sidebar navigation, sortable data tables with pagination, and debounced search functionality. Optimized performance with code splitting, lazy loading, and server-side rendering.',
    },
  ],
  results: {
    title: 'Results & Impact',
    bullets: [
      'Successfully launched comprehensive job management system for Peak Plumbing and Gas',
      'Centralized platform managing commercial, civil, and residential jobs in one system',
      'Job locking system prevented concurrent editing conflicts and data loss',
      'Excel integration enabled efficient bulk data import and export',
      'Cost tracking system provided detailed financial insights with month-wise allocation',
      'Responsive design achieved excellent mobile usability and accessibility',
      'System handles 30+ API endpoints with optimized performance and error handling',
      'Real-time data updates improved collaboration across multiple users',
      'User authentication and authorization ensured secure access to sensitive data',
      'Labor and maintenance management streamlined operational workflows',
      'Modern UI/UX design improved user satisfaction and productivity',
      'TypeScript implementation reduced bugs and improved code maintainability',
    ],
    nextSteps: [],
  },
  features: [
    'Job Management - Commercial, civil, and residential job CRUD operations',
    'Cost Tracking - Spreadsheet-like interface with month-wise percentage allocation',
    'Job Locking - Prevents concurrent editing conflicts with user-based lock management',
    'Excel Integration - Bulk data import and export for jobs and costs',
    'Authentication - Email/password login with JWT token-based sessions',
    'User Management - User listing, status updates, and role management',
    'Labor Management - Labor rate configuration and tracking',
    'Maintenance Forecast - Maintenance job tracking and forecast management',
    'Month/Year Filtering - Dynamic filtering with URL-based parameters',
    'Archive Functionality - Archive and unarchive jobs with status tracking',
    'Responsive Design - Mobile-first approach with Tailwind CSS',
    'Real-time Updates - Optimistic UI updates with error handling',
    'Search Functionality - Debounced search for performance optimization',
    'Data Tables - Sortable, filterable tables with pagination',
    'Form Validation - Zod schema validation for all forms',
    'Loading States - Skeleton loaders for better UX',
    'Error Handling - Graceful error messages and fallbacks',
    'Toast Notifications - User feedback for all actions',
    'Protected Routes - Authentication checks for secure access',
    'API Integration - 30+ RESTful API endpoints with PHP backend',
  ],
}



