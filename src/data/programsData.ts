export interface ProgramDetail {
  slug: string;
  title: string;
  desc: string;
  duration: string;
  school: string;
  department: string;
  degreeType: string;
  overview: string;
  curriculum: string[];
  careers: { title: string; desc: string }[];
}

export const PROGRAMS_DATA: ProgramDetail[] = [
  // ==========================================
  // SCHOOL OF COMPUTING SCIENCES
  // ==========================================
  // Computer Science & Engineering
  {
    slug: "btech-cse",
    title: "B.Tech. Computer Science & Engineering",
    desc: "Empowering next-generation software architects.",
    duration: "4 Years",
    school: "school-of-computing-sciences",
    department: "Computer Science & Engineering",
    degreeType: "B.Tech",
    overview: "Foundation in computer systems and software architectures.",
    curriculum: ["Data Structures", "OS", "DBMS"],
    careers: [{ title: "Software Engineer", desc: "Build applications" }]
  },
  {
    slug: "mtech-cse",
    title: "M.Tech. Computer Science & Engineering",
    desc: "Advanced research in computing.",
    duration: "2 Years",
    school: "school-of-computing-sciences",
    department: "Computer Science & Engineering",
    degreeType: "M.Tech",
    overview: "Specialized knowledge in advanced computing paradigms.",
    curriculum: ["Advanced Algorithms", "Distributed Systems"],
    careers: [{ title: "System Architect", desc: "Design complex systems" }]
  },
  {
    slug: "mca",
    title: "MCA",
    desc: "Master of Computer Applications.",
    duration: "2 Years",
    school: "school-of-computing-sciences",
    department: "Computer Science & Engineering",
    degreeType: "MCA",
    overview: "Practical software development and IT management.",
    curriculum: ["App Development", "Cloud Computing"],
    careers: [{ title: "IT Consultant", desc: "Consult on IT solutions" }]
  },
  {
    slug: "phd-cse",
    title: "Ph.D. Computer Science & Engineering",
    desc: "Doctoral research in computer science.",
    duration: "3-5 Years",
    school: "school-of-computing-sciences",
    department: "Computer Science & Engineering",
    degreeType: "Ph.D",
    overview: "Original research contributing to the field of computer science.",
    curriculum: ["Research Methodology", "Thesis Work"],
    careers: [{ title: "Researcher", desc: "Conduct advanced research" }]
  },
  // Data Science
  {
    slug: "btech-cse-data-science",
    title: "B.Tech. CSE (Data Science)",
    desc: "Transforming big data into actionable insights.",
    duration: "4 Years",
    school: "school-of-computing-sciences",
    department: "Data Science",
    degreeType: "B.Tech",
    overview: "Predictive analytics and modeling using modern DBs.",
    curriculum: ["Big Data", "Data Visualization", "Stats"],
    careers: [{ title: "Data Scientist", desc: "Analyze data" }]
  },
  // Artificial Intelligence
  {
    slug: "btech-cse-ai",
    title: "B.Tech. CSE (Artificial Intelligence)",
    desc: "Unlocking intelligent agent systems.",
    duration: "4 Years",
    school: "school-of-computing-sciences",
    department: "Artificial Intelligence",
    degreeType: "B.Tech",
    overview: "Foundations of AI and autonomous systems.",
    curriculum: ["AI", "Neural Networks"],
    careers: [{ title: "AI Engineer", desc: "Develop AI models" }]
  },
  {
    slug: "btech-aiml",
    title: "B.Tech. Artificial Intelligence & Machine Learning",
    desc: "Advanced predictive modeling.",
    duration: "4 Years",
    school: "school-of-computing-sciences",
    department: "Artificial Intelligence",
    degreeType: "B.Tech",
    overview: "Core focus on ML algorithms and deep learning.",
    curriculum: ["Machine Learning", "Deep Learning"],
    careers: [{ title: "ML Engineer", desc: "Deploy ML models" }]
  },
  {
    slug: "mtech-cse-aiml",
    title: "M.Tech. CSE (AI & ML)",
    desc: "Postgraduate specialization in AI & ML.",
    duration: "2 Years",
    school: "school-of-computing-sciences",
    department: "Artificial Intelligence",
    degreeType: "M.Tech",
    overview: "Research-driven approach to AI technologies.",
    curriculum: ["Advanced ML", "NLP"],
    careers: [{ title: "AI Researcher", desc: "Innovate in AI" }]
  },
  // Cyber Security
  {
    slug: "btech-cse-cyber",
    title: "B.Tech. CSE (Cyber Security)",
    desc: "Securing networks and digital assets.",
    duration: "4 Years",
    school: "school-of-computing-sciences",
    department: "Cyber Security",
    degreeType: "B.Tech",
    overview: "Cryptography, ethical hacking and security.",
    curriculum: ["Cryptography", "Network Security"],
    careers: [{ title: "Security Analyst", desc: "Secure systems" }]
  },

  // ==========================================
  // SCHOOL OF ENGINEERING
  // ==========================================
  // Electronics and Communication Engineering
  {
    slug: "btech-ece",
    title: "B.Tech. Electronics and Communication Engineering",
    desc: "Designing communication systems.",
    duration: "4 Years",
    school: "school-of-engineering",
    department: "Electronics and Communication Engineering",
    degreeType: "B.Tech",
    overview: "Focus on electronic circuits and communication.",
    curriculum: ["Signals & Systems", "VLSI Design"],
    careers: [{ title: "Electronics Engineer", desc: "Design circuits" }]
  },
  {
    slug: "mtech-vlsi",
    title: "M.Tech. VLSI and Embedded Systems Design",
    desc: "Advanced electronics design.",
    duration: "2 Years",
    school: "school-of-engineering",
    department: "Electronics and Communication Engineering",
    degreeType: "M.Tech",
    overview: "Specialization in IC design and embedded tech.",
    curriculum: ["Advanced VLSI", "Embedded C"],
    careers: [{ title: "VLSI Engineer", desc: "Design chips" }]
  },
  {
    slug: "phd-ece",
    title: "Ph.D. Electronics and Communication Engineering",
    desc: "Doctoral research in ECE.",
    duration: "3-5 Years",
    school: "school-of-engineering",
    department: "Electronics and Communication Engineering",
    degreeType: "Ph.D",
    overview: "Research in advanced communication or electronics.",
    curriculum: ["Research Methodology"],
    careers: [{ title: "Researcher", desc: "Conduct research" }]
  },
  // Civil Engineering
  {
    slug: "btech-civil",
    title: "B.Tech. Civil Engineering",
    desc: "Building the infrastructure of tomorrow.",
    duration: "4 Years",
    school: "school-of-engineering",
    department: "Civil Engineering",
    degreeType: "B.Tech",
    overview: "Structural design and construction technology.",
    curriculum: ["Structural Analysis", "Fluid Mechanics"],
    careers: [{ title: "Civil Engineer", desc: "Design structures" }]
  },
  {
    slug: "mtech-structural",
    title: "M.Tech. Structural Engineering",
    desc: "Advanced structural design.",
    duration: "2 Years",
    school: "school-of-engineering",
    department: "Civil Engineering",
    degreeType: "M.Tech",
    overview: "Advanced study of structural integrity and materials.",
    curriculum: ["Advanced Structural Analysis"],
    careers: [{ title: "Structural Engineer", desc: "Ensure safety of structures" }]
  },
  {
    slug: "phd-structural",
    title: "Ph.D. Structural Engineering",
    desc: "Doctoral research in structures.",
    duration: "3-5 Years",
    school: "school-of-engineering",
    department: "Civil Engineering",
    degreeType: "Ph.D",
    overview: "Novel research in construction and structural engineering.",
    curriculum: ["Research Methodology"],
    careers: [{ title: "Researcher", desc: "Conduct structural research" }]
  },

  // ==========================================
  // SCHOOL OF BUSINESS & MANAGEMENT
  // ==========================================
  // Business and Management
  {
    slug: "mba",
    title: "MBA",
    desc: "Master of Business Administration.",
    duration: "2 Years",
    school: "school-of-business-management",
    department: "Business and Management",
    degreeType: "PG",
    overview: "Leadership and management training.",
    curriculum: ["Marketing", "Finance", "HR"],
    careers: [{ title: "Manager", desc: "Lead teams and business" }]
  }
];
