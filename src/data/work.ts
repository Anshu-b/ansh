export type WorkCategory = "experience" | "research" | "leadership"

export interface WorkEntry {
  slug: string
  company: string
  role: string
  location: string
  dateStart: string
  dateEnd: string
  category: WorkCategory
  bullets: string[] // HTML — bold with <strong>, links with <a>
}

export const WORK_ENTRIES: WorkEntry[] = [
  {
    slug: "aws-26",
    company: "Amazon Web Services",
    role: "SDE Intern",
    location: "Cupertino, CA",
    dateStart: "Jun 2026",
    dateEnd: "Sep 2026",
    category: "experience",
    bullets: [
      "Productionalized a serverless data pipeline and query service that aggregates hardware metadata and deployment events from 4 upstream sources into a unified REST API, replacing fragmented investigations for HWEng teams.",
      "Designed a novel ingestion pipeline with Annapurna Labs firmware telemetry, making visible 32% of bad deployment incidents across manufacturing lines, reducing average incident resolution time from 13 days to under 1 day, and enabling early detection of incompatible firmware installations.",
    ],
  },
  {
    slug: "aws-25",
    company: "Amazon Web Services",
    role: "SDE Intern",
    location: "San Diego, CA",
    dateStart: "Jun 2025",
    dateEnd: "Sep 2025",
    category: "experience",
    bullets: [
      "Designed and deployed an unsupervised machine learning API using SageMaker, Lambda, and S3 to analyze 10 million+ deployments across hardware rollouts and automatically surface anomalous behavior and unsafe deployments.",
      "Replaced manual signal inspection with automated anomaly scoring and deployment-level recommendations, reducing rollback investigation time by 75% and enabling engineers to evaluate rollout health 4x faster.",
    ],
  },
  {
    slug: "ds3",
    company: "Data Science Student Society (DS3 @ UC San Diego)",
    role: "President",
    location: "La Jolla, CA",
    dateStart: "Jun 2025",
    dateEnd: "Present",
    category: "leadership",
    bullets: [
      "Leading one of the largest data science student organizations in the U.S. (500+ members) by driving strategy, operations, and cross-campus engagement through industry talks, academic panels, technical workshops, hackathons, and projects.",
      "Previously as <strong>Software Director</strong> (2024–2025), coordinated the redesign of the DS3 website using React & GitHub to enhance UX for 500+ members, sponsors, and partners.",
      '<a href="https://www.ds3ucsd.com/" target="_blank" rel="noopener noreferrer">DS3 Website →</a>',
    ],
  },
  {
    slug: "chibalab",
    company: "Chiba Lab",
    role: "Research Assistant",
    location: "La Jolla, CA",
    dateStart: "Apr 2025",
    dateEnd: "Present",
    category: "research",
    bullets: [
      "Collaborating with Ph.D. student Akshay Nagarajan on an IoT-based educational platform leveraging embedded systems to improve K–12 learning outcomes.",
      "Responsible for constructing the backend infrastructure, database design, and data engineering pipelines.",
      "Contributing to a forthcoming research publication based on this work.",
    ],
  },
  {
    slug: "heysocialgood",
    company: "Hey Social Good",
    role: "Data Science Intern",
    location: "La Jolla, CA",
    dateStart: "Oct 2024",
    dateEnd: "Jun 2025",
    category: "experience",
    bullets: [
      "Operationalized an ML-based sustainability classification pipeline that converted 10,000+ subjective data points into standardized scores used in internal evaluations and customer-facing dashboards.",
      "Worked directly with the CEO to translate qualitative sustainability criteria into reproducible data-processing and classification workflows, improving consistency across company analyses.",
    ],
  },
  {
    slug: "tutor",
    company: "Halıcıoğlu Data Science Institute, UC San Diego",
    role: "Instructional Assistant",
    location: "La Jolla, CA",
    dateStart: "Jan 2025",
    dateEnd: "Present",
    category: "experience",
    bullets: [
      "Supported 800+ students across DSC 40A, DSC 100, COGS 9 (Kyle Shannon), and COGS 108 (Jason Fleischer) through office hours, grading, and technical instruction in Python, SQL, databases, algorithms, and machine learning.", 
      "Served as software lead by developing and maintaining course websites and migrating automated grading infrastructure to a new platform via custom scripting, increasing grading speed by 50% across large-enrollment courses.",
      '<a href="https://dsc40a.com/" target="_blank" rel="noopener noreferrer">DSC 40A Website →</a>',
      '<a href="https://kshannon-ucsd.github.io/cogs9/" target="_blank" rel="noopener noreferrer">COGS 9 Website →</a>',
    ],
  },
  {
    slug: "bumper",
    company: "Bumper: Investing for Teens",
    role: "Brand Ambassador",
    location: "Remote",
    dateStart: "Jun 2022",
    dateEnd: "Aug 2022",
    category: "experience",
    bullets: [
      "Developed user-interface designs using HTML, CSS, and Canva for a start-up finance app.",
      "Beta-tested iOS app using TestFlight and provided detailed feedback to the developer team.",
    ],
  },
  {
    slug: "fremont",
    company: "City of Fremont",
    role: "Summer Camp Lead-Counselor",
    location: "Fremont, CA",
    dateStart: "Jun 2022",
    dateEnd: "Aug 2022",
    category: "experience",
    bullets: [
      "Managed the Sports Jam summer programs for middle and elementary schoolers, using sports and crafts to instill values of open communication and teamwork.",
      "Led a team of high school students working with park-rangers to restore <em>California Nursery Historic Park</em> for its re-opening as part of the Youth Service Corps (YSC).",
    ],
  },
    {
    slug: "simplify",
    company: "Simplify",
    role: "Campus Ambassador",
    location: "Remote",
    dateStart: "Oct 2025",
    dateEnd: "Jan 2026",
    category: "experience",
    bullets: ["Promoted Simplify's AI-powered job application platform to 100+ students at UC San Diego.",
    ],
  },
]
export const experienceEntries = WORK_ENTRIES.filter(w => w.category === "experience")
export const researchEntries   = WORK_ENTRIES.filter(w => w.category === "research")
export const leadershipEntries = WORK_ENTRIES.filter(w => w.category === "leadership")
export const workEntries = experienceEntries.concat(researchEntries)
