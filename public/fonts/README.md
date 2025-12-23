# Fonts Directory

## Geist Font Setup

To use the Geist font (optional):

1. Download Geist font from [Vercel's Geist font page](https://vercel.com/font)
2. Download the `.woff2` files for the weights you need:
   - Geist-Regular.woff2 (400)
   - Geist-SemiBold.woff2 (600)
   - Geist-Bold.woff2 (700)
3. Place them in this directory (`/public/fonts/`)

## Fallback

The app currently uses Inter from Google Fonts as a fallback via `next/font/google`. The fonts will work perfectly fine without downloading Geist.

If you want to use the original Geist font:
- Download the files and place them here
- The `app/layout.tsx` is already configured to load them
- No code changes needed

## Alternative

You can also use system fonts or any other Google Fonts by updating:
1. Import in `app/layout.tsx`
2. Font variable in `tailwind.config.js`






