import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Ansh",
  DESCRIPTION: "Welcome to my Astro Sphere website, a portfolio and blog for you to get know about me!",
  AUTHOR: "Ansh",
}

// Work Page
export const WORK: Page = {
  TITLE: "CV",
  DESCRIPTION: "My work experience.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Reflecting on my coursework & writing on topics I am passionate about.",
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
    TEXT: "About", 
    HREF: "/ansh", 
  },
  { 
    TEXT: "CV", 
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

