// ── Profile dict (displayed as Python dict in cell 1) ─────────────────────
export const PROFILE: { key: string; value: string }[] = [
  { key: "name",      value: "Ansh Bhatnagar" },
  { key: "role",      value: "SDE Intern | Amazon Web Services" },
  { key: "org",       value: "President @ DS3 · Founder @ AWS Student Builder Group · GDG on Campus @ UCSD" },
  { key: "hackathon", value: "Director @ DataHacks 2026 (~$100k raised, 450+ students)" },
  { key: "studying",  value: "Data Science, Cognitive Science, Math-CS @ UCSD" },
  { key: "building",  value: "things that hold up in production" },
]

// ── Bio paragraph (displayed below the dict) ───────────────────────────────
export const BIO =
  "I like to move fast, take ownership, and build things that actually work — even if that means breaking a few things along the way. " +
  "I'm not trying to fit into one lane: I want to understand how systems work end-to-end, from the infrastructure to the model to the real-world impact."

// ── Organizations (displayed as table in cell 2) ───────────────────────────
export interface Organization {
  name: string
  role: string
  description: string
}

export const ORGANIZATIONS: Organization[] = [
  {
    name: "DataHacks 2026",
    role: "Director",
    description: "450+ students, raised ~$100k. Judges from Apple, Google, NVIDIA, YCombinator, Microsoft.",
  },
  {
    name: "Data Science Student Society (DS3)",
    role: "President",
    description: "Scaled from 200 to 600+ members. Consulting, projects, workshops, and networking.",
  },
  {
    name: "AWS Student Builder Group @ UC San Diego",
    role: "Founder & Lead",
    description: "Founded and led an AWS-backed organization focused on cloud computing education.",
  },
  {
    name: "Google Developer Group (GDG) on Campus @ UC San Diego",
    role: "Founder & Lead",
    description: "Built UCSD's GDG chapter, bridging students with Google's developer ecosystem.",
  },
]

// ── Coursework (displayed in cell 4) ──────────────────────────────────────
export interface CourseEntry {
  code: string
  description: string
}

export const COURSEWORK: CourseEntry[] = [
  { 
    code: "CSE 29",    
    description: "Systems Programming — memory, processes, how software actually runs" 
  },
  { 
    code: "DSC 120",   
    description: "Signal Processing — transforms, filtering, structure from raw signals" 
  },
  { 
    code: "DSC 190",   
    description: "IoT & Sensors — end-to-end systems, streaming pipelines, hardware-software" 
  },
  { 
    code: "DSC 80",    
    description: "Pandas, ML practice (140A-B: models to deployment)" 
  },
  { 
    code: "COGS 181",  
    description: "Deep Learning — neural nets, architectures, training" 
  },
  { 
    code: "COGS 150",  
    description: "Large Language Models — transformers, prompting, real applications" 
  },
  { 
    code: "MATH 173A", 
    description: "Optimization — gradients, convexity, ML as optimization" 
  },
  { 
    code: "MGT 175",   
    description: "Supply Chain & Operations — scale, tradeoffs, uncertainty" 
  },
]
