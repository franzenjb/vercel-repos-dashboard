# Vercel Repos Dashboard

Interactive dashboard displaying all your Vercel repositories with filtering, search, and detailed project information.

## Features

- 📊 **Dashboard View** - Browse all 26 Vercel projects in grid or list layout
- 🔍 **Search & Filter** - Find projects by name, framework, status, or tags
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile
- 🌙 **Dark Theme** - Sleek dark interface with blue accents
- 📄 **Project Details** - Detailed pages for each project with deployment info
- 🏷️ **Tag System** - Filter projects by multiple tags
- 📈 **Status Indicators** - Track active, paused, and archived projects

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **React 19** - Latest React features

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main dashboard page
│   └── project/[id]/
│       └── page.tsx         # Project detail page
├── components/
│   ├── FilterSidebar.tsx    # Search and filter sidebar
│   └── ProjectCard.tsx      # Project card component
├── data/
│   └── projects.ts          # Project data
└── public/
```

## Features in Detail

### Grid/List Views
Toggle between a card-based grid layout and a compact list layout to view your projects.

### Advanced Filtering
- **Search** - Search by project name or description
- **Framework** - Filter by framework (Next.js, React, Vue.js, etc.)
- **Status** - Filter by project status (active, paused, archived)
- **Tags** - Multi-select tag filtering

### Project Details
Each project page includes:
- Framework and deployment statistics
- Production URL with direct link
- Repository information
- Recent activity timeline

## License

ISC
