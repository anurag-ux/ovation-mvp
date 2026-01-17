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
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage (MVP option selector)
│   ├── globals.css         # Global styles
│   └── options/            # MVP design options
│       ├── 1/              # Option 1 - Modern Dark Theme
│       │   └── page.tsx
│       ├── 2/              # Option 2 - Coming Soon
│       │   └── page.tsx
│       └── 3/              # Option 3 - Coming Soon
│           └── page.tsx
├── components/              # React components
│   ├── Header.tsx          # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── CoreValues.tsx
│   ├── Services.tsx
│   ├── WhyChooseUs.tsx
│   ├── Statistics.tsx
│   ├── Footer.tsx
│   └── ScrollProgress.tsx
└── public/                 # Static assets
    ├── icons/             # SVG icons
    ├── images/            # Background images
    └── logos/            # Logo files
```

## 🎯 MVP Options

This project contains 3 different homepage design options for client selection:

- **Option 1** (`/options/1`) - Modern dark theme with premium animations
- **Option 2** (`/options/2`) - Coming soon (placeholder)
- **Option 3** (`/options/3`) - Coming soon (placeholder)

Navigate to the homepage (`/`) to select and preview each option.

## 🎨 Customization

- **Brand Colors**: Edit `tailwind.config.js` for color customization
- **Animations**: Modify animations in `tailwind.config.js` and `app/globals.css`
- **Content**: Update component files in `components/` directory

## 📝 License

Private project for Ovation Workplace Services.
