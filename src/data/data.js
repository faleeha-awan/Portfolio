export const personal = {
  name: "Faliha Awan",
  pronouns: "she/her",
  verified: true,
  photo: "/photo.jpeg", // replace with your actual photo
  about: "Software developer obsessed with tech innovation & business automation. Building real products for real clients.",
  intro: [
    "I'm Faliha Awan, a software developer and tech innovator passionate about building systems that automate and streamline how businesses operate. From production billing platforms for US healthcare companies to AI-powered cross-platform apps, I focus on shipping solutions that create real impact.",
    "Currently pursuing Bachelors in Computer Science & Engineering at TU Delft, my journey spans Stanford's Code in Place program — where I grew from student to Section Leader in one year — to a fellowship at the Recurse Centre in NYC, to leading ongoing development for live client projects."
  ],
  contact: {
    email: "falihaawan310@gmail.com",
    website: "www.falihaawan.com",
    phone: "+92 336 4729493",
  },
  skills: [
    "Flutter", "React", "Python", "JavaScript",
    "Git", "Node.js", "HTML/CSS", "Firebase",
    "Supabase", "SQL", "PostgreSQL", "Flask", "Django"
  ],
  languages: [
    { name: "English", flag: "🇬🇧" },
    { name: "Urdu", flag: "🇵🇰" },
    { name: "Punjabi", flag: "🇵🇰" },
  ],
  socials: {
    twitter: "#",
    github: "https://github.com/falihaawan",
    linkedin: "#",
  },
};

export const experience = [
  {
    id: 1,
    title: "Lead Web Developer",
    company: "BillsureMD",
    location: "Remote — U.S.",
    date: "Jul 2025 – Present",
    type: "Work",
    description: "Designed and built a responsive medical billing platform supporting 100+ daily users. Owns the full stack — billing workflows, dashboards, and automated email + Google Sheets integrations via Apps Script. Currently leading AI chatbot integration and ongoing performance optimizations.",
    bullets: [
      "Sole developer — full ownership from design to deployment",
      "Automated form handling and client notifications via Google Apps Script",
      "Leading AI chatbot integration for real-time billing support",
    ],
    image: "/billsuremd.jpg", // drop logo in public/ folder
    logo: "B",
    color: "#7B6EF6",
  },
  {
    id: 2,
    title: "Software Engineering Fellow",
    company: "Recurse Centre (RC)",
    location: "Remote / NYC, US",
    date: "May 2024 – Aug 2024",
    type: "Fellowship",
    description: "Competitive self-directed engineering fellowship in New York. Built cross-platform apps, implemented ray tracing in Rust, raster graphics in Python, and shipped multiple projects in a rigorous peer-driven environment.",
    bullets: [
      "Built cross-platform voting app for Election Commission of Pakistan in Flutter",
      "Implemented ray tracing in Rust and raster graphics in Python",
      "Created Morse Code Translator in Kotlin and currency converter web app",
    ],
    image: "/RC.jpg",
    logo: "RC",
    color: "#22d3ee",
  },
  {
    id: 3,
    title: "Operations Technology Coordinator",
    company: "OED",
    location: "Lahore, Pakistan",
    date: "Jul 2022 – Jan 2024",
    type: "Work",
    description: "Managed digital operations and data systems for education and relief programs. Coordinated project execution across teams of 20+ volunteers using digital tools to streamline communication and reporting.",
    bullets: [
      "Supported programs serving 200+ students and 300+ families",
      "Maintained records and documentation for fundraising involving 100+ donors",
      "Coordinated 20+ volunteers across remote teams",
    ],
    image: "/OED.png", // no public logo — fallback to initials
    logo: "OED",
    color: "#4a4a6a",
  },
];

export const education = [
  {
    id: 1,
    degree: "BSc Computer Science & Engineering",
    institution: "TU Delft",
    location: "Delft, Netherlands",
    date: "2025 – Present",
    description: "Pursuing a degree at one of Europe's top technical universities, building on a strong foundation in Mathematics, Computer Science, and Physics from Cambridge A Levels.",
    image: "/UNI.png",
    logo: "TU",
    color: "#22d3ee",
  },
  {
    id: 2,
    degree: "Section Leader",
    institution: "Stanford University",
    location: "Remote",
    date: "2024",
    description: "Selected to lead a section of Code in Place after completing the course as a student in 2023 — one of ~100 leaders chosen globally from thousands of applicants.",
    image: "/code_in_place.png",
    logo: "S",
    color: "#7B6EF6",
  },
  {
    id: 3,
    degree: "Cambridge International A Levels",
    institution: "International School Lahore",
    location: "Lahore, Pakistan",
    date: "Aug 2023 – Aug 2025",
    description: "Mathematics (A), Computer Science (A), Physics (B). Graduated in the top 5% of cohort. All mandatory subjects for engineering and computer science programmes completed.",
    image: "/ISL.jpg", // drop isl-logo.png in public/ if you have it
    logo: "ISL",
    color: "#4a4a6a",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Asian Regional Space Settlement Design Competition",
    subtitle: "1st Place — Asia",
    year: "2025",
    image: "/arssdc.jpg",
    highlight: true,
  },
  {
    id: 2,
    title: "International Computer Science Contest (ICSC)",
    subtitle: "Finalist — Top 10% of ~3,800 participants",
    year: "2025",
    image: "/ICSC.png",
    highlight: true,
  },
  {
    id: 3,
    title: "Code in Place (Student to Section Leader)",
    subtitle: "Stanford University",
    year: "2024",
    image: "code_in_place.png",
    highlight: false,
  },
  
];

export const projects = [
  {
    id: 1,
    title: "BillsureMD",
    tagline: "Automated medical billing platform for a live U.S. healthcare company",
    category: "Healthcare · Automation",
    status: "Live",
    tech: ["HTML", "CSS", "JavaScript", "Google Apps Script", "AI Chatbot"],
    date: "Jul 2025 – Present",
    github: "https://github.com/falihaawan",
    live: "https://billsuremd.com",
    image: null,
    color: "#1a1a2e",
  },
  {
    id: 2,
    title: "Repair App",
    tagline: "Cross-platform repair service app with AI, multilingual support & image workflows",
    category: "Mobile · AI",
    status: "In Progress",
    tech: ["Flutter", "Supabase", "SQL", "AI Chatbot"],
    date: "Jun 2025 – Present",
    github: "https://github.com/falihaawan",
    live: null,
    image: null,
    color: "#0d1f2d",
  },
  {
    id: 3,
    title: "Caku Palace",
    tagline: "E-commerce site with visual cake customizer and real-time AI assistant",
    category: "E-commerce · AI",
    status: "In Progress",
    tech: ["HTML", "CSS", "JavaScript", "Google Apps Script"],
    date: "Feb 2024 – Present",
    github: "https://github.com/falihaawan",
    live: null,
    image: null,
    color: "#1f1a2e",
  },
  {
    id: 4,
    title: "Secure Voting App",
    tagline: "Cross-platform voting system built for the Election Commission of Pakistan",
    category: "Civic Tech · Mobile",
    status: "In Progress",
    tech: ["Flutter", "Dart", "Firebase"],
    date: "May 2024 – Aug 2024",
    github: "https://github.com/falihaawan",
    live: null,
    image: null,
    color: "#1a2e1a",
  },
];