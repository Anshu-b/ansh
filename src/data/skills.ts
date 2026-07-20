export interface SkillCategory {
  category: string
  technologies: string[]
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    technologies: ["Python", "Java", "C", "C++", "SQL", "TypeScript", "JavaScript", "HTML/CSS", "R"],
  },
  {
    category: "Software Tools",
    technologies: [
      "Amazon Web Services",
      "Google Cloud Platform",
      "Databricks",
      "Docker",
      "Claude Code",
      "Codex",
      "Gemini",
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "NumPy",
      "HuggingFace",
      "Apache Spark",
      "Git/GitHub",
      "Linux Systems",
    ],
  },
  {
    category: "Domains",
    technologies: [
      "Cloud Development", 
      "AI/ML", 
      "Generative AI",
      "Internet of Things", 
      "Systems Engineering",
      "Data Structures & Algorithms",
      "Full-Stack Development"
    ],
  },
  {
    category: "Data Viz",
    technologies: [
      "Grafana",
      "Tableau", 
      "Matplotlib", 
      "Plotly", 
      "D3.js"],
  },
  {
    category: "Web",
    technologies: ["React", "Astro", "Solid.js", "Node.js", "FastAPI"],
  },
]
