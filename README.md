# Kambhampati Advaith — Portfolio

A world-class portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Deploy in 2 Minutes on Vercel

### Option 1: One-Click Vercel Deploy (Recommended)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your GitHub repo
4. Click **Deploy** — zero configuration needed

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. That's it.

---

## 🛠 Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
app/
├── components/
│   ├── Nav.tsx              # Fixed navigation with mobile menu
│   ├── Hero.tsx             # Animated hero with terminal card
│   ├── About.tsx            # Story-driven about section
│   ├── Experience.tsx       # Timeline of internships
│   ├── Projects.tsx         # Filterable project cards
│   ├── Skills.tsx           # Interactive skill category grid
│   ├── Research.tsx         # IEEE publication showcase
│   ├── Achievements.tsx     # Achievement cards
│   ├── Contact.tsx          # Contact form + links
│   ├── Footer.tsx
│   ├── LoadingScreen.tsx    # Animated loading screen
│   ├── CommandMenu.tsx      # ⌘K command palette
│   ├── CursorEffect.tsx     # Custom cursor (desktop)
│   └── ParticleCanvas.tsx   # Particle network background
├── globals.css              # Design system + animations
├── layout.tsx               # SEO metadata + fonts
└── page.tsx                 # Main page with scroll reveal
```

## ✨ Features

- ⌘K Command Menu for quick navigation
- Custom cursor with magnetic effect
- Particle canvas background
- Scroll-reveal animations on every section
- Animated typing effect in hero
- Interactive project filter (All / Full Stack / ML)
- Contact form with state
- Mobile-first responsive design
- Dark theme with blue-violet gradient accents
- Glassmorphism surface cards
- Loading screen animation
- SEO metadata + OpenGraph

## 🎨 Customization

1. Update `app/components/Hero.tsx` — your name, stats, and terminal content
2. Update `app/components/Experience.tsx` — real dates and descriptions  
3. Update `app/components/Projects.tsx` — add GitHub and live demo links
4. Update `app/components/Contact.tsx` — real LinkedIn URL
5. Add your resume PDF to `public/resume.pdf` and link the Download button

