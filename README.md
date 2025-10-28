# Second Line Psychiatry Website

A professional mental health practice website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd second-line-psychiatry
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
second-line-psychiatry/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx          # About page
│   │   ├── services/
│   │   │   └── page.tsx          # Services page
│   │   ├── privacy-policy/
│   │   │   └── page.tsx          # Privacy Policy
│   │   ├── terms/
│   │   │   └── page.tsx          # Terms of Service
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Homepage
│   │   └── globals.css           # Global styles
│   └── components/
│       ├── Header.tsx            # Navigation header
│       ├── Hero.tsx              # Hero section
│       ├── Introduction.tsx      # Brief intro
│       ├── Specialties.tsx       # Specialties cards
│       ├── TrustSection.tsx      # Credentials
│       ├── ScheduleSection.tsx   # Calendly integration
│       └── Footer.tsx            # Footer
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## 🎨 Features

- ✅ Responsive design (mobile-first)
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ SEO optimized
- ✅ Accessible (WCAG compliant)
- ✅ Fast page loads
- ✅ Calendly integration for scheduling
- ✅ HIPAA-compliant disclaimers

## 📝 Customization Needed

### 1. Calendly URL

Update the Calendly URL in `src/components/ScheduleSection.tsx`:

```typescript
// Line 17-20
window.Calendly.initPopupWidget({
  url: 'https://calendly.com/YOUR-CALENDLY-USERNAME'
})
```

### 2. Images

Add your images to the `public` directory:
- Logo (if separate from text logo)
- Dr. Richard's professional photo
- Any custom imagery

Update image references in:
- `src/app/about/page.tsx` (line 33-38 - profile photo)

### 3. Contact Information

Verify all contact information is correct in:
- `src/components/Footer.tsx`
- `src/components/ScheduleSection.tsx`
- `src/app/privacy-policy/page.tsx`
- `src/app/terms/page.tsx`

## 🚢 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Add your custom domain:**
   - In Vercel dashboard, go to your project
   - Click "Settings" > "Domains"
   - Add your domain
   - Follow DNS configuration instructions

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Deploy to production:**
   ```bash
   vercel --prod
   ```

## 🔧 Environment Variables

No environment variables are required for the basic setup. If you add features that require API keys or secrets:

1. Create `.env.local` file:
   ```
   NEXT_PUBLIC_YOUR_VAR=value
   ```

2. Add to Vercel via dashboard or CLI

## 📱 Pages Overview

### Homepage (`/`)
- Hero section with CTA
- Brief introduction
- Specialties overview
- Trust indicators
- Schedule section with Calendly

### About (`/about`)
- Full bio of Dr. Richard
- Professional experience
- Education & credentials
- Personal philosophy

### Services (`/services`)
- Detailed service descriptions
- Treatment approaches
- Specialization areas
- Telehealth information

### Privacy Policy (`/privacy-policy`)
- HIPAA compliance information
- Data collection practices
- Patient rights

### Terms of Service (`/terms`)
- Service agreement
- Telehealth policies
- Emergency disclaimers

## 🎯 HIPAA Compliance Notes

**Important:** The Calendly free tier is NOT HIPAA compliant. Current implementation:

1. ✅ Disclaimers added to scheduling section
2. ✅ Instructions not to include health information
3. ✅ Privacy policy explains data handling

**Recommendations:**
- Upgrade to Calendly Teams ($16/month) for BAA
- Or use alternative HIPAA-compliant scheduling
- Collect clinical info through separate secure portal

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Rebuild
npm run build
```

### Styling Issues

```bash
# Rebuild Tailwind
npx tailwindcss -i ./src/app/globals.css -o ./dist/output.css
```

## 📊 Performance Optimization

The site is optimized for performance with:
- Next.js static generation where possible
- Optimized images (add next/image for uploaded images)
- Minimal JavaScript
- CSS optimization via Tailwind

## 🔐 Security Checklist

- [ ] Update Calendly URL
- [ ] Review HIPAA disclaimers
- [ ] Add SSL certificate (automatic with Vercel)
- [ ] Test all forms
- [ ] Review privacy policy
- [ ] Test on multiple devices

## 📞 Support

For questions about this codebase:
- Check Next.js docs: https://nextjs.org/docs
- Check Tailwind docs: https://tailwindcss.com/docs
- Check Vercel docs: https://vercel.com/docs

## 📄 License

Private project for Second Line Psychiatry.

---

**Built with ❤️ for Second Line Psychiatry**