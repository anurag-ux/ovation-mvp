# Ovation MVP - Homepage Redesign

A modern, dark-themed redesign of the Ovation Workplace Services homepage built with Next.js, React, and TypeScript.

## 🚀 Features

- **Modern Dark Theme** - Premium dark UI with brand red (#b30920) accents
- **Fully Responsive** - Mobile-friendly design across all devices
- **Smooth Animations** - Premium animations and transitions throughout
- **Accessible** - WCAG compliant with keyboard navigation and screen reader support
- **Performance Optimized** - Next.js Image optimization and efficient rendering

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React + Custom SVG assets
- **Deployment**: Vercel

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

This project is configured for Vercel deployment:

1. Push to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Next.js settings
4. Deploy!

## 📁 Project Structure

```
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Homepage
│   └── globals.css   # Global styles
├── components/       # React components
│   ├── Header.tsx   # Navigation bar
│   ├── Hero.tsx     # Hero section
│   ├── CoreValues.tsx
│   ├── Services.tsx
│   ├── WhyChooseUs.tsx
│   ├── Statistics.tsx
│   └── Footer.tsx
└── public/           # Static assets
    ├── icons/       # SVG icons
    ├── images/      # Background images
    └── logos/       # Logo files
```

## 🎨 Customization

- **Brand Colors**: Edit `tailwind.config.js` for color customization
- **Animations**: Modify animations in `tailwind.config.js` and `app/globals.css`
- **Content**: Update component files in `components/` directory

## 📝 License

Private project for Ovation Workplace Services.
