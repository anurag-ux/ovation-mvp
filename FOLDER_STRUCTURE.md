# Project Folder Structure

This document describes the folder structure for the Ovation MVP project, designed for pair programming and future expansion.

## 📁 Directory Structure

```
MVP/
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
├── public/                      # Static assets
│   ├── icons/                   # SVG icons
│   ├── images/                  # Image assets
│   └── logos/                   # Logo files
│
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── tailwind.config.js           # Tailwind CSS config
├── next.config.js               # Next.js config
└── README.md                    # Project documentation
```

## 🎯 Purpose of Each Directory

### `/app`
Next.js App Router directory containing pages and routes.
- **`mvp-options/`**: Temporary folder for MVP design options. Will be removed after final design selection.

### `/components`
React component library organized by purpose:

- **`ui/`**: Reusable UI components (buttons, inputs, cards, modals, etc.)
  - Use for shared components across different pages
  - Examples: `Button.tsx`, `Card.tsx`, `Input.tsx`

- **`layout/`**: Layout components (headers, footers, sidebars, etc.)
  - Use for structural components
  - Examples: `Header.tsx`, `Footer.tsx`, `Sidebar.tsx`

- **`features/`**: Feature-specific components
  - Use for components tied to specific features/domains
  - Examples: `ContactForm/`, `ServiceCard/`, `Testimonial/`

- **`mvp/`**: MVP-specific components (temporary)
  - Contains option-specific components that will be refactored after MVP selection
  - Each option folder is self-contained

### `/lib`
Shared utilities and constants:

- **`constants/`**: Application-wide constants
  - Routes, API endpoints, configuration values
  - Examples: `routes.ts`, `apiEndpoints.ts`, `config.ts`

- **`utils/`**: Helper functions
  - Reusable utility functions
  - Examples: `formatDate.ts`, `validateEmail.ts`, `helpers.ts`

### `/types`
TypeScript type definitions and interfaces.
- Shared types across the application
- Examples: `user.ts`, `service.ts`, `api.ts`

### `/hooks`
Custom React hooks.
- Reusable hooks for common functionality
- Examples: `useScroll.ts`, `useMediaQuery.ts`, `useLocalStorage.ts`

### `/styles`
Additional CSS/SCSS files (if needed).
- Custom styles beyond Tailwind
- Global overrides or theme files

## 🔄 Migration Path (After MVP Selection)

Once the MVP design is selected, the structure will evolve:

1. **Remove MVP folders**:
   - Delete `app/mvp-options/option-2/` and `option-3/` (if not selected)
   - Keep selected option or merge into main app

2. **Refactor MVP components**:
   - Move selected components from `components/mvp/option-X/` to appropriate folders
   - Components → `components/ui/` or `components/features/`
   - Layout components → `components/layout/`

3. **Build full website**:
   - Create routes in `app/` (e.g., `app/about/`, `app/services/`, `app/contact/`)
   - Add feature components in `components/features/`
   - Implement API routes in `app/api/`

## 📝 Naming Conventions

### Components
- Use PascalCase: `UserProfile.tsx`, `ServiceCard.tsx`
- Use descriptive names: `ContactForm.tsx` not `Form.tsx`

### Files
- TypeScript files: `*.ts`
- React components: `*.tsx`
- Styles: `*.css` or `*.module.css`

### Folders
- Use kebab-case: `user-profile/`, `service-card/`
- Feature folders match route names when possible

## 🤝 Pair Programming Guidelines

1. **Feature-based branching**: Work on features in separate branches
2. **Component ownership**: One person works on a component at a time
3. **Clear imports**: Use absolute imports with `@/` prefix
4. **Type safety**: Always use TypeScript types
5. **Documentation**: Add JSDoc comments for complex functions

## 🚀 Next Steps

After MVP selection, expand the structure:
- `app/about/` - About Us page
- `app/services/` - Services listing
- `app/contact/` - Contact form
- `app/api/` - API routes
- `components/features/contact/` - Contact form components
- `components/features/services/` - Service-related components

---

**Last Updated**: 2025-01-18
