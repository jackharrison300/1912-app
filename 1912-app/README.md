# 1912 Institute Website

A modern, responsive React application for the 1912 Institute, built with Vite, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Sleek, professional design matching the 1912wt.com aesthetic
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Three Main Pages**:
  - Home: About 1912 and mission overview
  - Our People: Leadership team and advisory board
  - Our Vision: Mission, big issues, and the Desert Way
- **Interactive Navigation**: Smooth routing between pages
- **Professional Typography**: Clean, readable fonts and spacing
- **Arizona-themed Color Palette**: Desert-inspired colors throughout

## Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Responsive Design** with mobile-first approach

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation header with logo
│   └── Footer.tsx      # Footer with subscription info
├── pages/
│   ├── Home.tsx        # About 1912 page
│   ├── OurPeople.tsx   # Team and advisory board
│   └── OurVision.tsx   # Mission and vision
├── App.tsx             # Main app with routing
└── index.css           # Global styles and Tailwind imports

public/
└── assets/
    ├── about/          # Home page images
    ├── people/         # Team member photos
    ├── branding/       # Brand assets
    └── stock/          # Stock photography
```

## Design Philosophy

The website embodies the spirit of Arizona and the American West:
- **Desert-inspired colors**: Warm oranges and earth tones
- **Clean, modern layout**: Professional yet approachable
- **Strong typography**: Clear hierarchy and readability
- **Generous whitespace**: Breathing room for content
- **High-quality imagery**: Showcasing Arizona's beauty

## Customization

The design system is built with Tailwind CSS and includes custom colors:
- `desert-*`: Warm desert-inspired palette
- `arizona-*`: Cool blue tones representing Arizona skies

## Deployment

Build for production:
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## About 1912 Institute

The 1912 Institute is a nonpartisan research institution dedicated to making Arizona the best place in the world to pursue a high-quality education, raise a family, and build a business and career. This website serves as the digital home for their mission and community.