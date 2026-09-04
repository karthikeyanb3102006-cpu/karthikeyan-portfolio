export const profile = {
  name: "Karthikeyan.B",
  role: "B.Sc. IT Student | Aspiring IT & Web Developer",
  email: "karthikeyan.b3103006@gmail.com",
  footerEmail: "karthikeyan.b3102006@gmail.com",
  phone: "8072443060",
  location: "Coimbatore, Tamil Nadu, India",
  address: "463, NSK Street, Selvapuram, Coimbatore, Tamil Nadu",
  objective:
    "Motivated and hardworking professional seeking a position where I can apply my skills, grow within the organization, and contribute to team success.",
  resumeUrl: "/resume.pdf",
  // Add real links here when available
  links: {
    github: "https://github.com/karthikeyanb3102006-cpu",
    linkedin: "",
    projectDemo: "",
    projectRepo: "https://github.com/karthikeyanb3102006-cpu/karthikeyan-portfolio-ai",
  },
} as const;

export const education = [
  {
    period: "2024 – 2027",
    title: "B.Sc. Information Technology",
    place: "Sri Ramakrishna College of Arts and Sciences",
    score: "Pursuing",
  },
  {
    period: "2023 – 2024",
    title: "HSC",
    place: "Vasavi Vidhyalaya Matriculation Higher Secondary School",
    score: "77%",
  },
  {
    period: "2021 – 2022",
    title: "SSLC",
    place: "R.K. Sreerangammal Kalvi Nilayam Matriculation Higher Secondary School",
    score: "62%",
  },
];

export const skillGroups = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "Responsive Web Design"] },
  { category: "Programming", items: ["Python", "Java"] },
  { category: "Database", items: ["MySQL"] },
  { category: "Tools", items: ["Git & GitHub"] },
  { category: "Design", items: ["Basic UI/UX Design"] },
];

export const softSkills = [
  "Problem Solving",
  "Quick Learner",
  "Teamwork & Collaboration",
  "Communication",
  "Time Management",
  "Adaptability",
];

export const languages = ["Tamil", "English"];

export const internship = {
  role: "Web Development Intern",
  company: "INITZ Technologies",
  location: "Gandhipuram, Coimbatore",
  period: "28 Apr 2025 – 14 May 2025",
  description:
    "Successfully completed internship training in Web Development at INITZ Technologies, Coimbatore. Performance and conduct were rated very good, with sincere and regular participation in all phases of the training program.",
} as const;

export const project = {
  title: "AI-Powered Personalized Web Dashboard",
  description:
    "Designed and developed a personalized web dashboard that uses AI APIs to generate daily insights such as tasks, weather updates, and productivity suggestions.",
  features: [
    "AI-powered daily insights",
    "Task suggestions",
    "Weather updates",
    "Productivity suggestions",
    "User authentication",
    "Theme switching",
    "Modular widgets",
  ],
  tech: ["React.js", "Node.js", "AI APIs"],
};

export const secondProject = {
  title: "Success Real Estate",
  tagline: "Your Dream • Our Priority",
  description:
    "A premium real estate web app for browsing, searching, saving and enquiring about properties for sale or rent, built around a luxury black & gold brand identity with a mobile-first, minimal interface.",
  features: [
    "Property search & filters",
    "Rich listing detail pages",
    "Save favourites",
    "Enquiry / contact flow",
    "Buy, Rent or Sell onboarding",
    "Responsive premium UI",
  ],
  tech: ["TypeScript", "React", "Tailwind CSS", "PostgreSQL"],
  demo: "https://success-real-estate.vercel.app",
  repo: "https://github.com/karthikeyanb3102006-cpu/success-real-estate",
};

