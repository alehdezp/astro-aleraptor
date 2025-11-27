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

# Preview the production build (builds first, then previews)
pnpm run preview

# Create a new blog post (requires filename argument)
pnpm run new-post my-new-post
```

## Project Architecture

### Core Technologies

- **Astro 5.7.5**: Static site generator with islands architecture
- **Tailwind CSS 4.1.3**: Utility-first CSS framework
- **MDX**: Content management with component support in Markdown
- **DaisyUI**: Tailwind CSS component library for theming
- **Vercel**: Deployment platform (using `@astrojs/vercel` adapter)
- **Giscus**: Comments system powered by GitHub Discussions

### Astro Configuration

The Astro config (`astro.config.mjs`) includes:

- Site URL from `src/config.ts`
- Tailwind CSS via Vite plugin
- MDX integration for blog posts
- Sitemap generation
- Icon support via `astro-icon`
- Code syntax highlighting via `rehype-pretty-code` with "github-dark" theme
- Attribute support via `rehype-attr` for custom properties in Markdown

### Content Collections

Blog posts use Astro's content collections system defined in
`src/content/config.ts`:

- Collection: `blog`
- Schema enforces: title (required), description (optional), date (required as
  Date), tags (optional array), draft (optional boolean), image (optional
  string)
- Posts are stored as `.md` or `.mdx` files in `src/content/blog/`
- Created via `scripts/add-post.js` which generates template with current date

### Theme System

Custom theme implementation designed for Astro View Transitions:

- Managed by `src/scripts/theme-handler.js`
- Default theme: `cisco-cool` (always dark, ignoring system preferences)
- Themes stored in localStorage and applied via `data-theme` attribute on
  `<html>`
- DaisyUI integration for theme switching
- Astro View Transition event handlers preserve theme across navigation:
  - `astro:before-preparation`: Saves current theme
  - `astro:after-preparation`: Applies theme to new DOM
  - `astro:after-swap`: Re-applies theme after DOM swap
  - `astro:page-load`: Sets up theme listeners
- Theme buttons use `data-theme-value` attribute with click handlers
- Active theme indicated with checkmark (✓) in UI

### Search Functionality

Search API endpoint at `src/pages/api/search.json.ts` generates JSON index of
blog posts for client-side search.

### Styling System

Tailwind configuration (`tailwind.config.mjs`):

- Custom font: M PLUS Rounded 1c (applied via `font-mplus` class)
- Iconify integration with dynamic selectors (prefix: `i`)
- Typography plugin with customized prose styles
- Content paths include `.astro`, `.mdx`, and Iconify node_modules

## Configuration

Site-wide settings in `src/config.ts`:

```typescript
export const siteConfig: SiteConfig = {
  site: "https://dinospacedive.com/",
  title: "Dino Space Dive",
  slogan: "Dino Space Dive",
  description: "Welcome to my personal website",
  social: {
    github: "https://github.com/alehdezp",
    linkedin: "https://www.linkedin.com/in/alejandro-hernandez-padron/",
    email: "alehdezp8@gmail.com",
    rss: true, // Controls RSS feed generation
  },
  googleAnalysis: "", // Google Analytics ID
  search: true, // Controls search feature availability
};
```

## Key Implementation Details

### Creating New Blog Posts

Use `pnpm run new-post <filename>` which:

- Creates file at `src/content/blog/<filename>.md`
- Auto-populates frontmatter with current date
- Sets `draft: true` by default
- Provides template structure

### Icon Usage

Icons use Iconify with Tailwind integration:

- Icon classes: `i-[collection]-[icon-name]`
- Available collections: `@iconify-json/mdi`, `@iconify-json/simple-icons`,
  `@iconify-json/streamline`, `@iconify-json/streamline-emojis`
- Configured in `tailwind.config.mjs` with prefix `i`

