export const profile = {
  name: "Kareem Mohamed",
  role: "Software Engineer",
  tagline: "AI · Industrial Systems · Software",
  location: "Montreal, QC — currently Cairo, EG",
  email: "kareem.islam2001@gmail.com",
  linkedin: "https://www.linkedin.com/in/kareem-imohamed",
  // TODO(kareem): add your GitHub URL once confirmed.
  github: "",
  status: "Software Engineer @ Siemens — Industrial Copilot",
};

export const domains = [
  { label: "AI / Software", color: "amber" as const, detail: "Industrial Copilot, automation" },
  { label: "Data", color: "phosphor" as const, detail: "Analysis, pipelines, tooling" },
  { label: "Avionics", color: "amber" as const, detail: "Certification, systems integration" },
];

export const about = {
  eyebrow: "// ABOUT",
  paragraphs: [
    "I'm a Computer Engineering graduate who found the intersection of software, data, and industrial systems more interesting than any one of them alone.",
    "Before writing AI-powered automation software at Siemens, I spent time inside an aircraft avionics program at Bombardier and behind data pipelines as an analyst — two different worlds that taught the same lesson: systems fail quietly until you instrument them properly.",
    "I write Java and Python by default, reach for SQL and VBA when data needs shape, and I'm as comfortable making an interface feel right as I am making a backend behave. Based in Montreal, currently building in Cairo — always up for a technical conversation, especially over coffee.",
  ],
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  duration: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Siemens",
    role: "Software Engineer",
    start: "AUG 2026",
    end: "PRESENT",
    duration: "1 mo",
    location: "Cairo, Egypt",
    bullets: [
      "Contributing to the development of AI-powered software for industrial automation.",
      "Working with the Industrial Copilot team to build intelligent automation solutions.",
    ],
  },
  {
    company: "Development Experts",
    role: "Data Analyst",
    start: "MAY 2025",
    end: "JUL 2026",
    duration: "1 yr 3 mo",
    location: "Cairo, Egypt",
    bullets: [
      "Supported a consulting team as a remote data analyst, strengthening client engagements.",
      "Conducted data analysis in Excel and SQL, focused on data cleaning and summarization.",
      "Built VBA tools and macros to streamline reporting and improve turnaround.",
      "Shipped front-end updates — HTML, CSS, JavaScript — to the company site.",
    ],
  },
  {
    company: "Paper",
    role: "Math & Science Tutor",
    start: "JAN 2023",
    end: "SEP 2024",
    duration: "1 yr 9 mo",
    location: "Montreal, Quebec",
    bullets: [
      "Delivered personalized STEM tutoring from elementary through university level.",
      "Developed strategies to improve comprehension, retention, and problem-solving.",
      "Used technology and interactive tools to keep sessions engaging and effective.",
    ],
  },
  {
    company: "Bombardier",
    role: "Avionics Intern",
    start: "JAN 2023",
    end: "SEP 2023",
    duration: "9 mo",
    location: "Montreal, Quebec",
    bullets: [
      "Coordinated across engineering disciplines to integrate avionics systems into aircraft.",
      "Provided technical guidance on avionics systems and their certification process.",
      "Reviewed design change proposals for compliance with aircraft requirements.",
      "Prepared and approved technical documentation, reports, and presentations.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Languages",
    skills: ["Java", "Python", "SQL", "JavaScript"],
  },
  {
    label: "Data & Automation",
    skills: ["Data Analysis", "Microsoft Excel", "VBA & Macros", "Data Cleaning & Summarization"],
  },
  {
    label: "Front-End",
    skills: ["HTML", "CSS", "JavaScript", "Front-End Design"],
  },
];

export const education = {
  school: "Concordia University",
  degree: "Bachelor of Engineering — Computer Engineering",
  start: "SEP 2019",
  end: "APR 2025",
  location: "Montreal, Quebec",
};

export const certifications = [{ name: "Foundations: Data, Data, Everywhere", issuer: "Google" }];

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  link?: string;
  pending?: boolean;
};

// TODO(kareem): Replace with real descriptions, tech stacks, and links.
// Placeholder titles inferred from local project files — confirm before publishing.
export const projects: Project[] = [
  {
    title: "Real-Time Systems Project",
    summary: "Coursework project from Concordia's COEN 320. Description pending — add scope, stack, and outcomes.",
    tags: ["Add stack"],
    pending: true,
  },
  {
    title: "Conversational Chatbot",
    summary: "Description pending — add scope, stack, and outcomes.",
    tags: ["Add stack"],
    pending: true,
  },
  {
    title: "Capstone Project",
    summary: "Final-year Computer Engineering capstone. Description pending — add scope, stack, and outcomes.",
    tags: ["Add stack"],
    pending: true,
  },
];

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
