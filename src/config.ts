export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string;
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    rss?: boolean;
  };
  // homepage: PostFilter;
  googleAnalysis?: string;
  search?: boolean;
}

export const siteConfig: SiteConfig = {
  site: "https://dinospacedive.com/", // TODO T
  title: "Dino Space Dive",
  slogan: "Dino Space Dive",
  description: "Welcome to my personal website",
  social: {
    github: "https://github.com/alehdezp", // leave empty if you don't want to show the github
    linkedin: "https://www.linkedin.com/in/alejandro-hernandez-padron/", // leave empty if you don't want to show the linkedin
    email: "alehdezp8@gmail.com", // leave empty if you don't want to show the email
    rss: true, // set this to false if you don't want to provide an rss feed
  },
  // homepage: {
  //   maxPosts: 5,
  //   tags: [],
  //   excludeTags: [],
  // },
  googleAnalysis: "", // your google analysis id
  search: true, // set this to false if you don't want to provide a search feature
};
// <reference types="astro/client" />
