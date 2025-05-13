# 🦖🍸 Welcome to Dino Space Dive

[![Made with Astro](https://astro.badg.es/v5/built-with-astro.svg)](https://astro.build)
[![Styled with Tailwind](https://img.shields.io/badge/styled%20with-Tailwind-06B6D4.svg)](https://tailwindcss.com/)

> Where prehistoric meets futuristic! The coolest cosmic dive bar in the
> development universe.

## 🌟 Cosmic Amenities

### 📖 Story Time at the Bar (Blog)

Pull up a meteor stool and share your tech tales! Our MDX-powered blog system
lets you write your stories with:

- Syntax-highlighted code blocks that shine like distant stars
- Tag system to organize your tales by constellation
- Automatic RSS feed to broadcast your stories across the cosmos

### 🏆 Dino Hall of Fame (Portfolio)

Show off your prehistoric projects in style! Our portfolio section features:

- Timeline display of your evolutionary journey
- Project cards that sparkle like nebulae
- Custom badges that roar with personality

### 🌓 Cosmic Day/Night Cycle

Toggle between light and dark mode faster than a meteor strike! Your eyes will
thank you during those late-night coding sessions.

### 🔍 Fossil Finder (Search)

Unearth any content with our powerful search feature. Find blog posts and
projects quicker than a raptor on rocket fuel!

### 🎨 More Stellar Features

- Responsive design that fits any screen size from tiny compsognathus to mighty
  T-Rex
- SEO optimization to make your content visible across the galaxy
- Analytics integration to track your cosmic visitors
- Social links to connect with other tech-savvy dinosaurs

---

# 🛠 Astro-Aleraptor Technical Guide

## Project Overview

Astro-Aleraptor is a modern portfolio and blog template built with:

- Astro 5.7.5
- Tailwind 4.1.3
- MDX support
- DaisyUI for enhanced UI components

## Installation

```bash
# Clone the repository
git clone https://github.com/alehdezp/astro-aleraptor.git

# Navigate to project directory
cd astro-aleraptor

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

## Available Commands

| Command             | Action                                       |
| ------------------- | -------------------------------------------- |
| `pnpm run dev`      | Start development server at `localhost:4321` |
| `pnpm run build`    | Build production site to `./dist/`           |
| `pnpm run preview`  | Preview production build locally             |
| `pnpm run new-post` | Create a new blog post                       |

## Project Structure

```
/
├── public/                # Static assets
├── src/
│   ├── assets/           # Project assets
│   ├── components/       # UI components
│   │   ├── ui/          # Reusable UI components
│   │   └── blog/        # Blog-specific components
│   ├── content/         # Blog posts and config
│   ├── layouts/         # Page layouts
│   ├── pages/          # Router pages
│   ├── scripts/        # Utility scripts
│   ├── styles/         # Global styles
│   └── utils/          # Helper functions
├── astro.config.mjs    # Astro configuration
└── tailwind.config.mjs # Tailwind configuration
```

## Configuration

### Site Configuration

Edit `src/config.ts` to customize:

- Site metadata
- Social links
- Google Analytics ID
- Search settings

```typescript
export const siteConfig = {
  site: "https://dinospacedive.com/",
  title: "Dino Space Dive",
  // ... other configurations
};
```

### Theme Customization

Modify `tailwind.config.mjs` to adjust:

- Color schemes
- Typography
- Custom components
- Responsive breakpoints

## Creating Content

### New Blog Posts

1. Run `pnpm run new-post`
2. Fill in the required metadata
3. Write your content in MDX
4. Posts appear automatically in the blog section

### Customizing Components

Components are organized in `src/components/` with:

- `ui/` for shared components
- `blog/` for blog-specific components
- Each component is fully customizable using Tailwind classes

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is MIT licensed - see [LICENSE](LICENSE) for details.

## Author

Created by [Alejandro Hernández](https://github.com/alehdezp)

---

🦖 _Happy coding, fellow dinosaurs! May your code be as strong as a T-Rex and as
elegant as a Pterodactyl!_ 🚀
