# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

Astro-Aleraptor is a modern portfolio and blog template built with Astro 5.7.5,
Tailwind 4.1.3, and MDX support. It's themed as "Dino Space Dive" - a cosmic
dive bar with prehistoric elements.

## Development Commands

```bash
# Start the development server
pnpm run dev

# Build the site for production
pnpm run build

# Preview the production build
pnpm run preview

# Create a new blog post (requires filename argument)
pnpm run new-post my-new-post
```

## Project Architecture

### Core Technologies

- **Astro 5.7.5**: The main framework for building the site
- **Tailwind CSS 4.1.3**: For styling with utility classes
- **MDX**: For content management with enhanced Markdown
- **DaisyUI**: For UI components and theming
- **Vercel**: Deployment platform
- **_Giscus Comments_**: For comments on blog posts

### Key Directories

- `/src/components/`: UI components used throughout the site
  - `/src/components/ui/`: Reusable UI components
  - `/src/components/ui/blog/`: Blog-specific components
  - `/src/components/ui/home/`: Homepage-specific components
- `/src/content/blog/`: Blog posts in MDX format
- `/src/layouts/`: Page layouts
- `/src/pages/`: Astro pages that define routes
- `/src/scripts/`: JavaScript utilities for theme handling

### Content Management

Blog posts are stored in `/src/content/blog/` as MDX files. Each post has
frontmatter with:

```yaml
---
title: Post Title
description: Post description
date: YYYY-MM-DD
tags: [tag1, tag2]
draft: true|false
image: optional/path/to/image.jpg
---
```

### Theme System

The site uses a custom theme implementation:

1. The theme system is managed by `/src/scripts/theme-handler.js` and
   `/src/scripts/fix-themes.js`
2. Themes are persisted in localStorage and respect system preferences
3. Special handling exists for Astro View Transitions to maintain theme state
   during navigation

### Search Functionality

Search is implemented via `/src/pages/api/search.json.ts` which generates a
searchable index of blog posts.

## Configuration

Site configuration is managed in `/src/config.ts` and includes:

```typescript
export const siteConfig: SiteConfig = {
  site: "https://dinospacedive.com/", // Site URL
  title: "Dino Space Dive", // Site title
  slogan: "Dino Space Dive", // Site slogan
  description: "Welcome to my personal website",
  social: {
    github: "https://github.com/alehdezp",
    linkedin: "https://www.linkedin.com/in/alejandro-hernandez-padron/",
    email: "alehdezp8@gmail.com",
    rss: true, // Enable RSS feed
  },
  googleAnalysis: "", // Google Analytics ID
  search: true, // Enable search feature
};
```

