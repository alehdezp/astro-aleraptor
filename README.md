# 🦖🍸 Dino Space Dive

> Welcome to the coolest cosmic dive bar in the universe! A place where
> prehistoric creatures meet futuristic technology. Grab your favorite
> extinction juice and enjoy your stay! 🍻

## 🌌 About Dino Space Dive

Dino Space Dive is not just a website—it's an experience! A cosmic dive bar
themed portfolio and blog where space-faring dinosaurs can hang out, share tech
tales, and showcase their prehistoric projects.

## 🚀 Technologies

This cosmic establishment is built with a stellar tech stack:

- **[Astro 5.7.5](https://astro.build)**: The high-performance web framework for
  content-driven websites
- **[Tailwind CSS 4.1.3](https://tailwindcss.com)**
- **[TypeScript](https://www.typescriptlang.org)**
- **[MDX](https://mdxjs.com)**: Markdown component-based markup language
- **[DaisyUI](https://daisyui.com)**: Tailwind CSS component library for theming
- **[Vercel](https://vercel.com)**: Deployment platform for the modern web
- **[Giscus](https://giscus.app)**: Comments system powered by GitHub
  Discussions

## 🛠️ Development Commands

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

## 📁 Project Structure

```
/
├── public/                # Static assets (fonts, images)
├── src/
│   ├── assets/           # Project assets (processed by build)
│   ├── components/       # UI components
│   │   ├── ui/           # Reusable UI components
│   │   │   ├── blog/     # Blog-specific components
│   │   │   └── home/     # Homepage components
│   ├── content/         # Blog posts in MDX format
│   ├── layouts/         # Page layouts
│   ├── pages/           # Astro pages define routes
│   ├── scripts/         # Utility scripts and theme handling
│   ├── styles/          # Global styles
│   └── utils/           # Helper functions
├── astro.config.mjs     # Astro configuration
└── tailwind.config.mjs  # Tailwind configuration
```

## 🛸 Customize Your Space

### Site Configuration

Customize your space bar in `src/config.ts`:

```typescript
export const siteConfig = {
  site: "https://dinospacedive.com/",
  title: "Dino Space Dive",
  // ... other cosmic settings
};
```

### Content Management

Blog posts are stored as MDX files in `/src/content/blog/` with frontmatter:

```yaml
---
title: "Welcome Space Cowboy to DinoSpaceDive!"
description:
  "Welcome to my space-bar! Here you'll find a little introduction..."
date: 2025-05-14
tags: ["dino-space-dive", "me"]
image: "optional/path/to/image.jpg"
---
```

## 🦖 Credits and Acknowledgments

The blog was inspired by
[astro-zen-blog](https://github.com/larry-xue/astro-zen-blog) by Larry Xue.

The website is built under MIT license principles - feel free to use, modify,
and learn from this code, but please respect the attribution to the original
creators.

## 👨‍🚀 Author

Created by [Alejandro Hernández Padrón](https://github.com/alehdezp), a
velociraptor who types faster than he can run.

