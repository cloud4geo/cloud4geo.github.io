# Cloud4Geo Website

A modern, bilingual (English/Spanish) professional website for Cloud for Geo, a Peruvian technology company specializing in geospatial software development, online mapping services, and cloud infrastructure.

## Features

- 🌍 **Bilingual Support**: Full English and Spanish translations with easy language switching
- 🎨 **Modern Design**: Professional, responsive design with Tailwind CSS
- ⚡ **Static Export**: Optimized for static hosting (GitHub Pages, AWS S3, Netlify)
- 🚀 **Fast Performance**: Built with Next.js 14 and optimized for production
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🔄 **CI/CD Ready**: GitHub Actions workflow for automatic deployment

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Deployment**: GitHub Pages (or any static hosting)

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cloud4geo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production (Static Export)

To build the static site:

```bash
yarn build
# or
npm run build
```

The static files will be generated in the `out` directory, ready for deployment to any static hosting service.

**Important**: This site is configured for static export. All routes are pre-rendered at build time:
- `/en` - English version
- `/es` - Spanish version
- `/en/projects/[slug]` - Project pages in English
- `/es/projects/[slug]` - Project pages in Spanish

## Deployment

### GitHub Pages

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site to GitHub Pages when you push to the `main` branch.

To enable GitHub Pages:
1. Go to your repository settings
2. Navigate to Pages
3. Select "GitHub Actions" as the source

### Manual Deployment

You can deploy the `out` directory to any static hosting service:
- **Netlify**: Drag and drop the `out` folder
- **AWS S3**: Upload the contents of `out` to an S3 bucket configured for static website hosting
- **Vercel**: Use `vercel --prod` (though Next.js static export works great on Vercel too)

## Project Structure

```
cloud4geo/
├── app/
│   ├── [locale]/          # Locale-specific routes
│   │   ├── layout.tsx     # Locale layout with i18n provider
│   │   └── page.tsx       # Home page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Root redirect
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Clients.tsx
│   │   └── Contact.tsx
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   └── LanguageSwitcher.tsx
├── messages/              # Translation files
│   ├── en.json           # English translations
│   └── es.json           # Spanish translations
├── i18n.ts               # i18n configuration
├── middleware.ts         # Next.js middleware for routing
└── next.config.js        # Next.js configuration

```

## Customization

### Adding Content

Content is managed through translation files in the `messages/` directory:
- `messages/en.json` - English content
- `messages/es.json` - Spanish content

### Styling

The site uses Tailwind CSS. Customize colors and styles in `tailwind.config.js`.

### Adding Sections

1. Create a new component in `components/sections/`
2. Add translations to both `en.json` and `es.json`
3. Import and add the component to `app/[locale]/page.tsx`

## License

Copyright © 2024 Cloud for Geo. All rights reserved.
