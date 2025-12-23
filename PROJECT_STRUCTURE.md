# Project Structure

Complete file structure of the Code Meld Labs portfolio:

```
code-meld-labs/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with fonts, metadata, structured data
│   ├── page.tsx                 # Home page (imports all sections)
│   ├── globals.css              # Global styles, Tailwind, custom classes
│   ├── sitemap.ts               # Auto-generated sitemap
│   └── robots.ts                # Robots.txt configuration
│
├── components/                   # React Components
│   ├── About.tsx                # Team members section
│   ├── BackToTop.tsx            # Scroll to top button
│   ├── Contact.tsx              # Contact form
│   ├── Footer.tsx               # Footer with links and social
│   ├── Hero.tsx                 # Hero section with Upwork stats
│   ├── Navbar.tsx               # Navigation bar with dark mode toggle
│   ├── Projects.tsx             # Projects grid with filters
│   ├── Services.tsx             # Services catalog cards
│   ├── Testimonials.tsx         # Testimonials carousel
│   └── ThemeProvider.tsx        # Dark mode context provider
│
├── lib/                          # Utilities and Data
│   ├── constants.ts             # ⭐ Editable content (team, projects, etc.)
│   └── structured-data.ts       # SEO structured data helpers
│
├── public/                       # Static Assets
│   ├── fonts/                   # Font files (optional)
│   │   └── README.md            # Instructions for Geist font
│   ├── manifest.json            # PWA manifest
│   └── README.md                # Instructions for icons and images
│
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
├── .node-version                # Node.js version for deployment
├── .nvmrc                       # Node version manager config
├── CHECKLIST.md                 # Pre-launch checklist
├── DEPLOYMENT.md                # Deployment guide
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.js            # PostCSS configuration
├── PROJECT_STRUCTURE.md         # This file
├── QUICK_START.md               # Quick start guide
├── README.md                    # Main documentation
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── vercel.json                  # Vercel deployment config

```

## Key Files to Edit

### 1. Content (`/lib/constants.ts`)
**Most important file for customization!**
- Site configuration (name, tagline, email)
- Upwork statistics
- Team members data
- Projects portfolio
- Services offered
- Testimonials
- Social media links

### 2. Styling (`/tailwind.config.js`)
- Brand colors (primary, accent)
- Font families
- Custom animations
- Breakpoints (already optimized)

### 3. Components (`/components/*.tsx`)
- Reusable UI components
- All sections of the site
- Can be customized individually

### 4. Global Styles (`/app/globals.css`)
- Tailwind imports
- Custom CSS classes
- Smooth scroll behavior
- Scrollbar styling
- Dark mode transitions

### 5. Layout (`/app/layout.tsx`)
- Metadata and SEO
- Font loading
- Structured data
- Theme provider

## Component Hierarchy

```
App Layout (layout.tsx)
├── ThemeProvider
│   ├── Navbar
│   ├── Main Content (page.tsx)
│   │   ├── Hero
│   │   ├── About
│   │   ├── Projects
│   │   ├── Services
│   │   ├── Testimonials
│   │   ├── Contact
│   │   └── BackToTop
│   └── Footer
```

## Data Flow

```
constants.ts (data)
     ↓
Components (render data)
     ↓
page.tsx (composition)
     ↓
layout.tsx (wrapping)
     ↓
User sees the site!
```

## Configuration Files

- **package.json** - Dependencies and npm scripts
- **tsconfig.json** - TypeScript compiler options
- **next.config.js** - Next.js settings (images, etc.)
- **tailwind.config.js** - Tailwind CSS customization
- **postcss.config.js** - PostCSS plugins
- **vercel.json** - Vercel deployment settings
- **.eslintrc.json** - Code linting rules

## Documentation Files

- **README.md** - Comprehensive project documentation
- **QUICK_START.md** - Get started in 3 steps
- **DEPLOYMENT.md** - Deployment instructions
- **CHECKLIST.md** - Pre-launch checklist
- **PROJECT_STRUCTURE.md** - This file

## Static Assets (Need to Add)

Add these to `/public/` before deployment:
- `favicon.ico` - Browser tab icon
- `icon-192.png` - PWA icon (192x192)
- `icon-512.png` - PWA icon (512x512)
- `apple-touch-icon.png` - iOS home screen icon
- `og-image.png` - Social media preview (1200x630)
- `logo.png` - Company logo (optional)

## NPM Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
```

## Tech Stack Summary

- **Framework**: Next.js 15.0.3 (App Router)
- **Language**: TypeScript 5.6.2
- **Styling**: Tailwind CSS 3.4.13
- **Animations**: Framer Motion 11.5.4
- **Icons**: Lucide React 0.446.0
- **Forms**: EmailJS (optional)
- **Fonts**: Inter & Manrope (Google Fonts)

## Features Included

✅ Responsive design (mobile-first)
✅ Dark mode with system preference
✅ Smooth scroll and animations
✅ SEO optimized (metadata, sitemap, robots.txt)
✅ Accessibility (ARIA labels, semantic HTML)
✅ Performance optimized (Next Image, code splitting)
✅ PWA ready (manifest.json)
✅ Type-safe (TypeScript)
✅ Production-ready (Vercel deployment config)

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization Priority

1. **High Priority** (must customize):
   - `/lib/constants.ts` - All content
   - Email in contact form
   - Social media links

2. **Medium Priority** (should customize):
   - Brand colors in Tailwind config
   - Add real images to `/public/`
   - Favicon and app icons

3. **Low Priority** (optional):
   - Fonts
   - Animation timings
   - Component layouts

---

**Everything is organized for easy customization and deployment!**






