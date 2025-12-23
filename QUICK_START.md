# Quick Start Guide - Code Meld Labs

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies (1 minute)
```bash
cd /Users/manjushapaul/Projects/CML
npm install
```

### 2. Run Development Server (30 seconds)
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

### 3. Customize Content (5 minutes)
Edit `/lib/constants.ts` to update:
- Team members (names, photos, skills, GitHub)
- Projects (titles, images, descriptions, links)
- Services offered
- Testimonials
- Contact email
- Social media links

## ✨ What You Get

A fully functional Next.js 15 portfolio with:
- ✅ Hero section with Upwork stats
- ✅ Team member showcase
- ✅ Project portfolio with filters
- ✅ Services catalog
- ✅ Testimonials carousel
- ✅ Contact form
- ✅ Dark mode
- ✅ Smooth animations
- ✅ Fully responsive
- ✅ SEO optimized
- ✅ PWA ready

## 🎨 Customize Design

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#6366f1',  // Change to your brand color
  accent: '#ec4899',   // Change accent color
}
```

### Fonts
Current: Inter (headings) + Manrope (body)

To use different fonts:
1. Import from Google Fonts in `app/layout.tsx`
2. Update `tailwind.config.js` font variables

### Content Structure
All editable content is in `/lib/constants.ts`:
- `SITE_CONFIG` - Site name, tagline, email, Upwork stats
- `TEAM_MEMBERS` - Array of team member objects
- `PROJECTS` - Array of project objects
- `SERVICES` - Array of service objects
- `TESTIMONIALS` - Array of testimonial objects

## 📸 Add Images

### Team Photos
Replace URLs in `TEAM_MEMBERS` array (`lib/constants.ts`):
```ts
image: 'https://yoursite.com/team/photo.jpg'
```

### Project Images
Replace URLs in `PROJECTS` array:
```ts
image: 'https://yoursite.com/projects/project1.jpg'
```

### Image Tips
- Use high-quality images (at least 800x600 for projects)
- Optimize images before uploading (use TinyPNG)
- Add images to `/public/` folder and reference as `/image.jpg`
- Update `next.config.js` domains for external images

## 🔧 Common Customizations

### Update Upwork Stats
In `/lib/constants.ts`:
```ts
upwork: {
  rating: '5.0',
  successRate: '100%',
  reviews: '10+',
  jobsCompleted: '15+',
}
```

### Add New Team Member
Add to `TEAM_MEMBERS` array in `/lib/constants.ts`:
```ts
{
  name: 'Your Name',
  role: 'Your Role',
  image: 'photo-url',
  skills: ['Skill 1', 'Skill 2', ...],
  github: 'https://github.com/yourusername',
  bio: 'Your bio...',
}
```

### Add New Project
Add to `PROJECTS` array in `/lib/constants.ts`:
```ts
{
  id: 7,
  title: 'Project Name',
  category: 'Next.js', // or 'PHP' or 'AI'
  description: 'Project description',
  image: 'project-image-url',
  tags: ['Tag1', 'Tag2'],
  liveUrl: 'https://...',
  githubUrl: 'https://...',
  featured: true, // or false
}
```

### Change Contact Email
In `/lib/constants.ts`:
```ts
email: 'your-email@example.com'
```

## 🚀 Deploy (5 minutes)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

Quick version:
1. Push to GitHub
2. Connect to Vercel
3. Deploy (automatic)
4. Share your URL!

## 📱 Test Responsive Design

Open DevTools (F12) and test:
- Mobile (375px)
- Tablet (768px)
- Desktop (1280px)

All breakpoints are already optimized!

## 🎯 Next Steps

1. ✅ Run `npm run dev` to see your site
2. ✅ Edit `/lib/constants.ts` with your content
3. ✅ Add your photos and project images
4. ✅ Test on different screen sizes
5. ✅ Deploy to Vercel
6. ✅ Share with the world!

## 💡 Tips

- Start with content in `/lib/constants.ts`
- Add real images later (uses placeholder URLs now)
- Test dark mode (toggle in navbar)
- Use `npm run build` to test production build locally
- Check console for any warnings

## 🆘 Need Help?

- Check `README.md` for full documentation
- See `DEPLOYMENT.md` for deployment guide
- Contact: manjushapaul39@gmail.com

---

**You're ready to go! Happy coding! 🎉**






