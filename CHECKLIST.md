# Pre-Launch Checklist

Use this checklist before deploying your Code Meld Labs portfolio.

## 📝 Content Customization

- [ ] Update site name and tagline in `/lib/constants.ts` → `SITE_CONFIG`
- [ ] Update contact email in `/lib/constants.ts` → `SITE_CONFIG.email`
- [ ] Update Upwork stats (rating, success rate, reviews)
- [ ] Add/update team members in `TEAM_MEMBERS` array
  - [ ] Names and roles
  - [ ] Profile photos (replace placeholder URLs)
  - [ ] Skills lists
  - [ ] GitHub links
  - [ ] Bio descriptions
- [ ] Add/update projects in `PROJECTS` array
  - [ ] Project titles and descriptions
  - [ ] Project images (replace placeholder URLs)
  - [ ] Tags and categories
  - [ ] Live URLs and GitHub repos
  - [ ] Featured project flags
- [ ] Update services in `SERVICES` array
  - [ ] Service titles and descriptions
  - [ ] Feature lists
  - [ ] Icons (emoji or replace with components)
- [ ] Add/update testimonials in `TESTIMONIALS` array
  - [ ] Client names and roles
  - [ ] Testimonial content
  - [ ] Client photos
  - [ ] Ratings
- [ ] Update social media links
  - [ ] GitHub organization/personal
  - [ ] LinkedIn company page
  - [ ] Upwork profile URL

## 🎨 Visual Assets

- [ ] Add favicon (`/public/favicon.ico`)
- [ ] Add app icons for PWA
  - [ ] `icon-192.png` (192x192)
  - [ ] `icon-512.png` (512x512)
- [ ] Add Apple touch icon (`/public/apple-touch-icon.png`)
- [ ] Add Open Graph image (`/public/og-image.png` - 1200x630)
- [ ] Add logo (`/public/logo.png` - optional)
- [ ] Replace all placeholder team photos with real photos
- [ ] Replace all placeholder project screenshots with real ones
- [ ] Replace all placeholder testimonial photos with real ones

## 🎨 Design Customization (Optional)

- [ ] Update brand colors in `tailwind.config.js`
  - [ ] Primary color (default: #6366f1)
  - [ ] Accent color (default: #ec4899)
- [ ] Customize fonts if needed (currently: Inter + Manrope)
- [ ] Adjust hero gradient colors in `components/Hero.tsx`

## ⚙️ Configuration

- [ ] Update site URL in `/app/layout.tsx` → `metadataBase`
- [ ] Update site URL in `/app/sitemap.ts` → `baseUrl`
- [ ] Update site URL in `/app/robots.ts` → `sitemap`
- [ ] Configure EmailJS (optional, for contact form)
  - [ ] Create EmailJS account
  - [ ] Create email service
  - [ ] Create email template
  - [ ] Add environment variables
  - [ ] Update `components/Contact.tsx` with EmailJS code
- [ ] Add Google Analytics (optional)
- [ ] Configure image domains in `next.config.js` if using external images

## 🧪 Testing

- [ ] Test on desktop (1920px, 1440px, 1280px)
- [ ] Test on tablet (768px, 1024px)
- [ ] Test on mobile (375px, 414px)
- [ ] Test all navigation links
- [ ] Test smooth scrolling
- [ ] Test dark mode toggle
- [ ] Test all external links (projects, GitHub, social)
- [ ] Test contact form submission
- [ ] Test project filters (All, Next.js, PHP, AI)
- [ ] Test testimonials carousel (auto-advance, manual navigation)
- [ ] Test back-to-top button
- [ ] Test accessibility (keyboard navigation, screen readers)
- [ ] Test on different browsers (Chrome, Firefox, Safari)

## 🚀 Pre-Deployment

- [ ] Run `npm run build` locally (check for errors)
- [ ] Fix any TypeScript errors
- [ ] Fix any linting errors (`npm run lint`)
- [ ] Test production build locally (`npm run build && npm start`)
- [ ] Check Lighthouse scores (aim for 90+ in all categories)
- [ ] Optimize images (use TinyPNG or similar)
- [ ] Remove any console.log statements
- [ ] Update README.md with your project details (optional)

## 🌐 Deployment

- [ ] Push code to GitHub
- [ ] Connect repository to Vercel/Netlify
- [ ] Configure environment variables (if using EmailJS)
- [ ] Deploy to production
- [ ] Verify deployment is successful
- [ ] Test live site on mobile device
- [ ] Test all functionality on live site

## 📊 Post-Deployment

- [ ] Add custom domain (optional)
- [ ] Update DNS records (if using custom domain)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Set up Vercel Analytics (optional)
- [ ] Test site performance with PageSpeed Insights
- [ ] Share site URL on social media
- [ ] Add site URL to Upwork profile
- [ ] Monitor for any errors (check Vercel logs)

## 🎯 Nice to Have

- [ ] Add blog section (optional)
- [ ] Add case studies for projects (optional)
- [ ] Add more team member details (optional)
- [ ] Add loading animations (optional)
- [ ] Add page transitions (optional)
- [ ] Set up email newsletter (optional)
- [ ] Add live chat widget (optional)
- [ ] Create video intro for hero section (optional)

## ✅ Launch!

Once all essential items are checked, you're ready to launch! 🚀

**Estimated Time:**
- Content customization: 2-3 hours
- Visual assets: 1-2 hours
- Testing: 1 hour
- Deployment: 15 minutes
- **Total: ~4-6 hours for a polished launch**

---

*Remember: Launch with the essentials first, then iterate and improve over time!*






