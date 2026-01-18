# Ovation MVP - Homepage Redesign

A comprehensive homepage redesign project for Ovation Workplace Services featuring three distinct design options. Built with Next.js, React, and TypeScript, showcasing modern web development practices and premium UI/UX design.

## 🚀 Key Features

- **Three Design Options** - Multiple modern homepage designs for client selection
- **Fully Responsive** - Mobile-optimized across all devices and screen sizes
- **Premium Animations** - Smooth transitions powered by Framer Motion
- **Custom Scrollbars** - Themed scrollbars matching each design option
- **Accessible** - WCAG compliant with keyboard navigation and screen reader support
- **Performance Optimized** - Next.js Image optimization and efficient rendering
- **Modern UI Components** - Glassmorphism, gradient effects, and interactive elements
- **Mega Menus** - Interactive navigation with dropdown menus
- **Type-Safe** - Full TypeScript implementation for type safety

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.2+
- **Styling**: Tailwind CSS 3.3+
- **Animations**: Framer Motion 12.26+
- **Icons**: Lucide React + Custom SVG assets
- **Deployment**: Vercel (configured)
- **Package Manager**: npm

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
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage (MVP options selection)
│   ├── globals.css              # Global styles
│   └── mvp-options/             # MVP design options (temporary)
│       ├── option-1/
│       ├── option-2/
│       └── option-3/
│
├── components/                   # React components
│   ├── ui/                      # Shared UI components (buttons, cards, etc.)
│   ├── layout/                  # Layout components (headers, footers, etc.)
│   ├── features/                # Feature-specific components
│   └── mvp/                     # MVP-specific components (temporary)
│       ├── option-1/            # Components for MVP Option 1
│       ├── option-2/            # Components for MVP Option 2
│       └── option-3/            # Components for MVP Option 3
│
├── lib/                         # Utilities and shared code
│   ├── constants/               # App constants (routes, configs, etc.)
│   └── utils/                   # Helper functions
│
├── types/                       # TypeScript type definitions
├── hooks/                       # Custom React hooks
├── styles/                      # Additional style files
│
└── public/                      # Static assets
    ├── icons/                   # SVG icons
    ├── images/                  # Image assets
    └── logos/                   # Logo files
```

**📖 For detailed folder structure documentation, see [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md)**

## 🎯 MVP Options

This project contains 3 different homepage design options for client selection. Each option offers a unique approach to showcasing IT solutions and services:

### Option 1 - Modern Dark Theme
**Route**: `/mvp-options/option-1`

- Dark theme with brand red (#b30920) accents
- Interactive mega menu navigation
- Premium glassmorphism effects
- Animated service tabs
- Scroll progress indicator
- Animated statistics counters
- Smooth parallax effects
- Custom dark-themed scrollbar

### Option 2 - Interactive Design
**Route**: `/mvp-options/option-2`

- Modern dark theme with mega menu
- Interactive carousel with Tinder-like swipe animations
- Service tabs at the top with synchronized content
- Side-by-side image and content layout
- Statistics section with animated counters
- Comprehensive CTA sections
- Custom dark-themed scrollbar

### Option 3 - Artistic Light Theme
**Route**: `/mvp-options/option-3`

- Light-themed B2B design
- Geometric background elements
- Particle animation background
- Custom cursor effects (desktop)
- Scroll snap sections
- 3D transform effects (desktop only)
- Animated scrollbar with glow effect
- Mobile-optimized (simplified animations)

**Navigate to the homepage (`/`) to select and preview each option.**

> **Note**: The MVP options structure is temporary and will be refactored after design selection. See [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md) for migration path.

## 🎨 Design Systems

Each MVP option follows a distinct design system with specific color palettes, typography, animations, and UI patterns.

### Option 1 Design System - Modern Dark Theme

#### Color Palette
- **Primary Brand**: `#b30920` (brand-red)
- **Background**: `#0a0a0f` (dark-bg)
- **Surface**: `#151520` (dark-surface)
- **Card**: `#1a1a2e` (dark-card)
- **Border**: `#2a2a3e` (dark-border)
- **Text Primary**: White (`#FFFFFF`)
- **Text Secondary**: Gray-300 (`#D1D5DB`)
- **Accent Gradients**: Red-500, Red-600 variants

#### Typography
- **Headings**: Bold, 700 weight
- **Body**: Regular, 400 weight
- **Responsive**: Font sizes scale with viewport
- **Line Height**: 1.2 for headings, 1.5 for body

#### Components & Patterns
- **Glassmorphism**: `backdrop-blur-md bg-dark-surface/80 border border-dark-border`
- **Premium Cards**: Gradient backgrounds with hover effects
- **Mega Menu**: Dark card background with red accents
- **Scroll Progress**: Red gradient indicator at top
- **Animations**: Fade-in, slide-in, scale-in, glow effects

#### Scrollbar
- **Track**: Dark background (`#1a1a1a`)
- **Thumb**: Red gradient (`#b30920` → `#8a0719`) with glow animation
- **Width**: 10px
- **Firefox**: `scrollbar-color: #b30920 #1a1a1a`

#### Animation Patterns
- **Duration**: 0.3s - 0.8s (smooth transitions)
- **Easing**: Cubic-bezier `[0.4, 0, 0.2, 1]`
- **Keyframes**: fadeIn, fadeInUp, slideInLeft, slideInRight, scaleIn, glow, float

---

### Option 2 Design System - Interactive Dark Theme

#### Color Palette
- **Primary Brand**: `#B91C3A` (ovation-brand-primary)
- **Primary Hover**: `#D42147` (ovation-brand-primary-hover)
- **Secondary**: `#8B1529` (ovation-brand-secondary)
- **Accent**: `#FF2D55` (ovation-brand-accent)
- **Background Primary**: `#0A0A0A` (ovation-bg-primary)
- **Background Secondary**: `#1A1A1A` (ovation-bg-secondary)
- **Background Tertiary**: `#2A2A2A` (ovation-bg-tertiary)
- **Text Primary**: White (`#FFFFFF`)
- **Text Secondary**: `#B3B3B3` (ovation-text-secondary)
- **Text Tertiary**: `#808080` (ovation-text-tertiary)
- **Border Primary**: `#333333` (ovation-border-primary)
- **Border Secondary**: `#404040` (ovation-border-secondary)

#### Typography Scale
- **H1**: 2.5rem (40px) mobile → 4.5rem (72px) desktop
- **H2**: 2rem (32px) mobile → 3.5rem (56px) desktop
- **H3**: 1.75rem (28px) mobile → 2.5rem (40px) desktop
- **H4**: 1.5rem (24px) mobile → 2rem (32px) desktop
- **Body**: 1rem (16px)
- **Body Large**: 1.125rem (18px) mobile → 1.25rem (20px) desktop
- **Font Weight**: 600-700 for headings, 400-500 for body

#### Layout & Spacing
- **Container**: Max-width 1440px, responsive padding (1rem → 2rem → 3rem)
- **Grid**: Responsive columns (1 → 2 → 4 on larger screens)
- **Gap**: 4-12 (1rem - 3rem) between elements
- **Section Padding**: Vertical padding 4rem - 8rem

#### Components & Patterns
- **Mega Menu**: Full-width panel with 4-column grid layout
- **Carousel**: Tinder-like swipe animations with synchronized tabs
- **Service Cards**: Image + content side-by-side layout
- **Value Cards**: Icon + content with hover effects
- **CTA Buttons**: Brand red with hover animations

#### Scrollbar
- **Track**: Very dark background (`#0A0A0A`)
- **Thumb**: Brand gradient (`#B91C3A` → `#8B1529`) with glow animation
- **Width**: 10px
- **Firefox**: `scrollbar-color: #B91C3A #0A0A0A`

#### Animation Patterns
- **Carousel**: Spring physics with elastic drag
- **Menu Transitions**: Staggered children animations (0.08s delay)
- **Hover Effects**: Scale transforms (1.05x), translate effects
- **Easing**: Cubic-bezier `[0.4, 0, 0.2, 1]` (standard)

---

### Option 3 Design System - Light Artistic Theme

#### Color Palette
- **Primary Brand**: `#b30920` (red)
- **Background**: White (`#FFFFFF`)
- **Background Secondary**: Light gray (`#f1f1f1`)
- **Text Primary**: Dark gray (`#111827`)
- **Text Secondary**: Medium gray (`#6B7280`)
- **Accent**: Brand red gradients
- **Border**: Light gray (`#E5E7EB`)

#### Typography
- **Headings**: Bold, dark gray
- **Body**: Regular, readable contrast on light background
- **Responsive**: Fluid typography scaling
- **Font Family**: System font stack

#### Layout & Spacing
- **Container**: Full-width with responsive padding
- **Scroll Snap**: Vertical proximity snap for sections
- **Grid**: Responsive columns based on content
- **Section Spacing**: Generous vertical rhythm

#### Components & Patterns
- **Geometric Background**: Rotating/floating shapes (desktop only)
- **Particle Background**: Animated connecting particles (desktop only)
- **Custom Cursor**: Interactive cursor effects (desktop only)
- **3D Transforms**: Scale, rotate effects (desktop only)
- **Cards**: Light backgrounds with subtle shadows
- **Gradient Overlays**: Red gradient accents

#### Scrollbar
- **Track**: Light gray (`#f1f1f1`)
- **Thumb**: Red gradient (`#b30920` → `#8a0719`) with glow animation
- **Width**: 12px
- **Border**: White border around thumb (2px)
- **Firefox**: `scrollbar-color: #b30920 #f1f1f1`

#### Animation Patterns
- **Particle System**: Connecting lines with dynamic movement
- **Geometric Shapes**: Rotating/floating animations
- **3D Effects**: Transform-based animations (disabled on mobile)
- **Scroll Snap**: Smooth section-to-section navigation
- **Framer Motion**: Advanced spring physics and layout animations

#### Mobile Optimization
- **Simplified**: Complex 3D effects disabled
- **Reduced**: Particle count and animation speed reduced
- **Hidden**: Custom cursor, geometric backgrounds hidden
- **Performance**: Lighter animations for better mobile performance

---

## 🎨 Customization

### Brand Colors
Edit `tailwind.config.js` to customize brand colors:
- `brand-red`: Primary brand color (#b30920)
- `dark-bg`, `dark-surface`, `dark-card`: Dark theme colors
- Option 2 uses `ovation-brand-primary` and related colors

### Animations
- **Tailwind Animations**: Defined in `tailwind.config.js`
- **Custom Animations**: Defined in `app/globals.css`
- **Framer Motion**: Component-level animations in individual components

### Content
- **Components**: Update files in `components/mvp/option-X/` directory
- **Constants**: Update routes and configs in `lib/constants/routes.ts`
- **Types**: Add or modify TypeScript types in `types/index.ts`

### Styling
- **Global Styles**: `app/globals.css`
- **Custom Scrollbars**: Defined in `app/globals.css` using `data-page-option` attributes
- **Tailwind Config**: `tailwind.config.js` for theme customization

## 🤝 Pair Programming Structure

This project is organized for collaborative pair programming and future expansion:

### Structure Benefits
- **Feature-based organization**: Components organized by purpose and feature
- **Clear separation**: MVP components isolated from future website components
- **Shared utilities**: Common functions in `lib/utils/` and constants in `lib/constants/`
- **Type safety**: TypeScript types centralized in `types/`
- **Scalable architecture**: Ready for additional pages, features, and API routes

### Development Workflow
1. Work on features in separate branches
2. One person works on a component at a time
3. Use absolute imports with `@/` prefix
4. Maintain TypeScript type safety
5. Add JSDoc comments for complex functions

See [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md) for detailed guidelines and migration path.

## 📚 Additional Documentation

- **[FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md)** - Detailed folder structure and organization guidelines
- **Component Documentation** - Check individual component files for implementation details

## 🔧 Development

### Environment Setup
```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Run development server
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Image Domains
External image domains are configured in `next.config.js`:
- `www.ovationwps.com`
- `admin.ovationwps.com`
- `images.unsplash.com`

## 🚀 Deployment

This project is configured for Vercel deployment:

1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Vercel will auto-detect Next.js settings
4. Deploy automatically on every push to main branch

Configuration files:
- `vercel.json` - Vercel deployment configuration
- `.gitignore` - Git ignore rules

## 📝 License

Private project for Ovation Workplace Services.

---

**Last Updated**: January 2025  
**Version**: 0.1.0
