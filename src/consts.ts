import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Astro Sphere",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Mark Horn",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/ansh", 
  },
  { 
    TEXT: "Work", 
    HREF: "/ansh/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/ansh/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/ansh/projects", 
  },
  { 
    TEXT: "HomeForesting", 
    HREF: "http://anshu-b.github.io/home-foresting/", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "anshbhatnagar1612@gmail.com",
    HREF: "mailto:anshbhatnagar1612@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "Anshu-b",
    HREF: "https://github.com/Anshu-b"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Ansh Bhatnagar",
    HREF: "https://www.linkedin.com/in/ansh-bhatnagar-721286234/",
  },
]

