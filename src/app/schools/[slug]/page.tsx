import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIAssistant from "@/components/features/AIAssistant";
import { 
  GraduationCap, BookOpen, Microscope, Award, 
  MapPin, CheckCircle2, FileText, ArrowRight, UserCheck 
} from "lucide-react";

// Robust mock dataset representing the 10 recommended schools
const SCHOOLS_DATA: Record<string, {
  name: string;
  tagline: string;
  dean: string;
  stats: { faculty: number; labs: number; publications: number; placementsRate: string };
  about: string;
  vision: string;
  departments: string[];
  features: string[];
  curriculum: { year1: string[]; year2: string[]; year3: string[]; year4: string[] };
  bgColor: string;
}> = {
  "school-of-engineering": {
    name: "School of Engineering",
    tagline: "Engineering the Future of Technology & Innovation",
    dean: "Dr. K. Srinivasa Rao, Ph.D. (IIT Madras)",
    stats: { faculty: 85, labs: 22, publications: 180, placementsRate: "94%" },
    about: "The School of Engineering is a premier hub for technical education, offering state-of-the-art infrastructure, globally aligned curricula, and robust industrial training programs to prepare job-ready engineers.",
    vision: "To become a globally recognised centre of engineering excellence, fostering innovation, cross-disciplinary research, and ethical leadership.",
    departments: [
      "Computer Science & Engineering",
      "Electronics & Communication Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical & Electronics Engineering"
    ],
    features: [
      "MOU with NVIDIA, Oracle Academy, and Cisco Network Academy.",
      "High-performance supercomputing lab and cloud engineering cell.",
      "100% internship support in companies like TCS, Infosys, and Cognizant."
    ],
    curriculum: {
      year1: ["Engineering Mathematics I & II", "Engineering Physics", "Programming for Problem Solving in C", "Engineering Graphics"],
      year2: ["Data Structures & Algorithms", "Digital Electronics", "Object Oriented Programming (Java)", "Database Management Systems"],
      year3: ["Design & Analysis of Algorithms", "Software Engineering", "Computer Networks", "Web Technologies"],
      year4: ["Cloud Computing", "Cryptography & Network Security", "Capstone Project Phase I & II", "Professional Electives"]
    },
    bgColor: "from-blue-600 to-indigo-900"
  },
  "school-of-pharmacy": {
    name: "School of Pharmacy",
    tagline: "Pioneering Pharmaceutical Care and Research",
    dean: "Dr. M. Venkata Ramana, M.Pharm, Ph.D. (BITS Pilani)",
    stats: { faculty: 48, labs: 16, publications: 220, placementsRate: "96%" },
    about: "The School of Pharmacy stands among the top-rated pharmacy institutions in Andhra Pradesh. With NAAC accreditation and AICTE approvals, it delivers elite hands-on clinical and industrial pharmacology knowledge.",
    vision: "To excel in pharmacy education, innovative research in drug discovery, and clinical services for global healthcare improvement.",
    departments: [
      "Pharmaceutics",
      "Pharmaceutical Chemistry",
      "Pharmacology",
      "Pharmacognosy",
      "Pharmacy Practice"
    ],
    features: [
      "In-house Drug Discovery & Analysis research cell.",
      "Tie-ups with leading hospitals for Pharm.D clinical residencies.",
      "DST-FIST funded analytical laboratory facility."
    ],
    curriculum: {
      year1: ["Human Anatomy & Physiology", "Pharmaceutical Analysis I", "Pharmaceutics I", "Inorganic Chemistry"],
      year2: ["Organic Chemistry II", "Physical Pharmaceutics I", "Microbiology", "Pathophysiology"],
      year3: ["Medicinal Chemistry II", "Industrial Pharmacy I", "Pharmacology II", "Pharmacognosy II"],
      year4: ["Biopharmaceutics & Pharmacokinetics", "Novel Drug Delivery Systems", "Project Work", "Social & Preventive Pharmacy"]
    },
    bgColor: "from-emerald-600 to-teal-900"
  },
  "school-of-management": {
    name: "School of Management",
    tagline: "Developing Global Business Leaders and Entrepreneurs",
    dean: "Dr. S. Rama Krishna, MBA, Ph.D.",
    stats: { faculty: 36, labs: 4, publications: 75, placementsRate: "92%" },
    about: "The School of Management offers rigorous business programs focusing on analytics, strategic leadership, finance management, and entrepreneurial growth. We combine corporate case studies with experiential learning.",
    vision: "To be a leading business school shaping socially responsible managers and startup leaders through excellent teaching and industrial research.",
    departments: [
      "Business Administration",
      "Finance & Accounting",
      "Marketing & Sales",
      "Human Resource Management",
      "Business Analytics"
    ],
    features: [
      "Bloomberg Terminal Financial Analysis laboratory.",
      "Quarterly CEO Meet program and Entrepreneurship Cell incubation support.",
      "Corporate mentorship modules with executives from KPMG and Deloitte."
    ],
    curriculum: {
      year1: ["Management Principles & Practices", "Managerial Economics", "Accounting for Managers", "Business Statistics"],
      year2: ["Organizational Behaviour", "Marketing Management", "Financial Management", "Human Resource Management"],
      year3: ["Strategic Management", "Operations Research", "Consumer Behaviour", "Research Methodology"],
      year4: ["Business Analytics", "International Business", "Summer Internship Project", "Business Law"]
    },
    bgColor: "from-amber-600 to-amber-900"
  },
  "school-of-sciences": {
    name: "School of Sciences",
    tagline: "Exploring Scientific Truth and Advancing Basic Research",
    dean: "Dr. A. Prabhakar, Ph.D.",
    stats: { faculty: 52, labs: 12, publications: 140, placementsRate: "88%" },
    about: "Offering foundational and advanced courses in Biotech, Physics, Chemistry, and Mathematics, the School of Sciences grooms the research scientists of tomorrow.",
    vision: "To foster basic science research that translates into impactful applications for nature and humanity.",
    departments: [
      "Biotechnology",
      "Physics",
      "Chemistry",
      "Mathematics",
      "Environmental Science"
    ],
    features: [
      "Joint research research links with national science academies.",
      "High-end chromatography and cell culture cleanroom setups.",
      "100% progression to premium PG & PhD programs worldwide."
    ],
    curriculum: {
      year1: ["Inorganic Chemistry I", "Classical Mechanics", "Plant Physiology", "Calculus & Algebra"],
      year2: ["Organic Chemistry II", "Electromagnetism", "Genetics & Molecular Biology", "Differential Equations"],
      year3: ["Physical Chemistry III", "Quantum Physics", "Recombinant DNA Technology", "Complex Analysis"],
      year4: ["Analytical Techniques", "Environmental Science Research", "Major Project Work", "Biostatistics"]
    },
    bgColor: "from-cyan-600 to-blue-900"
  },
  "school-of-agriculture": {
    name: "School of Agriculture",
    tagline: "Cultivating Sustainable Agricultural Practices",
    dean: "Dr. P. Raghava Reddy, Ph.D.",
    stats: { faculty: 40, labs: 8, publications: 90, placementsRate: "90%" },
    about: "Our School of Agriculture provides extensive farm-based practical modules in agronomy, horticulture, soil sciences, and plant pathology on our dedicated 15-acre student research farm.",
    vision: "To lead agricultural education and research in Andhra Pradesh, improving crop yields and sustainable agronomy solutions.",
    departments: [
      "Agronomy",
      "Horticulture",
      "Genetics & Plant Breeding",
      "Agricultural Engineering",
      "Soil Science & Agricultural Chemistry"
    ],
    features: [
      "15-acre organic farm and nursery research yard.",
      "Rural Agricultural Work Experience (RAWE) field residency programs.",
      "Government-funded research projects on smart IoT drip irrigation."
    ],
    curriculum: {
      year1: ["Fundamentals of Agronomy", "Fundamentals of Soil Science", "Introduction to Forestry", "Agricultural Heritage"],
      year2: ["Crop Production Technology (Kharif)", "Agricultural Finance & Cooperation", "Farm Machinery & Power", "Horticultural Crops"],
      year3: ["Pests of Crops & Management", "Diseases of Field Crops", "Rainfed Agriculture", "Farming System & Sustainable Agriculture"],
      year4: ["RAWE Village Placement Program", "Agro-Industrial Attachment", "Commercial Horticulture Project", "Experiential Learning Program"]
    },
    bgColor: "from-green-600 to-green-900"
  },
  "school-of-health-sciences": {
    name: "School of Health Sciences",
    tagline: "Empowering Professional Nursing and Public Health Care",
    dean: "Prof. S. Elizabeth, M.Sc (Nursing), Ph.D.",
    stats: { faculty: 45, labs: 10, publications: 65, placementsRate: "98%" },
    about: "Equipped with nursing practice labs, community healthcare cells, and high-fidelity anatomical mockups, the School prepares empathetic, high-skilled healthcare experts.",
    vision: "To establish excellence in nursing education and research, serving underprivileged patients with absolute medical care.",
    departments: [
      "Nursing Sciences",
      "Physiotherapy (BPT)",
      "Community Medicine",
      "Nutrition & Dietetics"
    ],
    features: [
      "Clinical ties with Guntur General Hospital and major corporate super-specialty hospitals.",
      "Community health check camp residencies in rural Andhra Pradesh.",
      "American Heart Association certified Basic Life Support (BLS) coaching."
    ],
    curriculum: {
      year1: ["Applied Anatomy & Physiology", "Nursing Foundations", "Nutrition & Dietetics", "Psychology"],
      year2: ["Medical Surgical Nursing I", "Pharmacology & Pathology", "Community Health Nursing I", "Sociology"],
      year3: ["Child Health Nursing", "Mental Health Nursing", "Midwifery & Obstetrical Nursing", "Nursing Research"],
      year4: ["Community Health Nursing II", "Management of Nursing Services", "Clinical Internship (6 Months)", "Health Economics"]
    },
    bgColor: "from-teal-600 to-emerald-950"
  },
  "school-of-law": {
    name: "School of Law",
    tagline: "Upholding Justice, Integrity, and Constitutional Values",
    dean: "Prof. G. Rama Murthy, LL.M, Ph.D.",
    stats: { faculty: 28, labs: 2, publications: 55, placementsRate: "85%" },
    about: "Our Bar Council of India (BCI) approved School of Law provides modern courtroom clinics, extensive mock trials, and internships under High Court judges to shape legal champions.",
    vision: "To be a premier destination for value-based legal education, nurturing advocates committed to rule of law and human rights.",
    departments: [
      "Constitutional Law",
      "Criminal Law",
      "Corporate & Business Law",
      "Intellectual Property Rights"
    ],
    features: [
      "State-of-the-art Moot Court Hall with regular inter-university events.",
      "Mandatory summer internships with leading law firms, NGO councils, and advocates.",
      "Free Legal Aid Clinic offering community grievance counseling."
    ],
    curriculum: {
      year1: ["Law of Torts & Consumer Protection", "Legal Methods & Systems", "Constitutional Law I", "English & Legal Communication"],
      year2: ["Law of Contracts I & II", "Family Law I (Hindu Law)", "Jurisprudence (Legal Theory)", "Constitutional Law II"],
      year3: ["Indian Penal Code (Criminal Law)", "Property Law", "Labour & Industrial Law", "Public International Law"],
      year4: ["Law of Evidence", "Environmental Law", "Drafting, Pleading & Conveyancing", "Moot Court Practice & Internships"]
    },
    bgColor: "from-red-800 to-indigo-950"
  },
  "school-of-humanities": {
    name: "School of Humanities",
    tagline: "Exploring Human Culture, Languages, and Creative Arts",
    dean: "Dr. S. K. Prasad, Ph.D.",
    stats: { faculty: 24, labs: 2, publications: 42, placementsRate: "80%" },
    about: "Focusing on creative arts, literature, journalism, and economics, the School fosters critical research and analytical writing capacities.",
    vision: "To stimulate critical thinking, creative expression, and social understanding of global human cultures.",
    departments: [
      "English Literature",
      "Economics",
      "Journalism & Mass Communication",
      "Applied Sociology"
    ],
    features: [
      "Dedicated Media Lab with audio-video recording studio.",
      "Annual Creative Writing and Literature fest 'Vaktrutva'.",
      "Publishing opportunities in the university quarterly review."
    ],
    curriculum: {
      year1: ["History of English Literature", "Microeconomics Principles", "Introduction to Mass Media", "Sociological Theories"],
      year2: ["Indian Writing in English", "Macroeconomics", "Reporting & Editing", "Social Anthropology"],
      year3: ["Postcolonial Literature", "Development Economics", "Public Relations & Advertising", "Methods of Social Research"],
      year4: ["Creative Writing Portfolio", "Digital Media Journalism", "Graduation Dissertation", "Human Rights & Ethics"]
    },
    bgColor: "from-pink-700 to-rose-950"
  },
  "school-of-allied-health-sciences": {
    name: "School of Allied Health Sciences",
    tagline: "Bridging Medical Technology and Patient Diagnosis",
    dean: "Dr. P. Satyanarayana, Ph.D.",
    stats: { faculty: 30, labs: 8, publications: 48, placementsRate: "95%" },
    about: "Our programs in Medical Lab Tech, Anaesthesia, and Optometry provide direct medical diagnostic expertise in association with multispecialty healthcare centres.",
    vision: "To develop skilled diagnostic professionals who form the vital backend support of patient healthcare delivery.",
    departments: [
      "Medical Laboratory Technology",
      "Anaesthesia & Operation Theatre Tech",
      "Optometry",
      "Radiology & Imaging Technology"
    ],
    features: [
      "Fully operational clinical biochemistry and pathology diagnostics lab.",
      "Mandatory 1-year clinical rotation in diagnostics departments.",
      "Corporate placements at Apollo Diagnostics and SRL Labs."
    ],
    curriculum: {
      year1: ["General Biochemistry", "Basic Anatomy & Histology", "General Pathology", "Biostatistics"],
      year2: ["Systemic Bacteriology", "Analytical Biochemistry", "Hematology & Blood Banking", "Clinical Operation Systems"],
      year3: ["Diagnostic Virology & Mycology", "Clinical Endocrinology", "Diagnostic Radiology Essentials", "Research Project Work"],
      year4: ["1-Year Mandatory Hospital Internship", "Operational Ethics & Safety", "Seminar Presentation", "Viva Voce"]
    },
    bgColor: "from-teal-800 to-indigo-900"
  },
  "school-of-artificial-intelligence": {
    name: "School of Artificial Intelligence",
    tagline: "Innovating Intelligent Solutions for a Cognitive World",
    dean: "Dr. R. Madhavan, Ph.D. (Stanford Affiliate)",
    stats: { faculty: 42, labs: 8, publications: 110, placementsRate: "97%" },
    about: "Offering specialized engineering degrees in Artificial Intelligence, Machine Learning, Data Science, and Cognitive Supercomputing, we stand as AP's premier AI centre.",
    vision: "To advance cutting-edge artificial intelligence systems research and train engineers who build trustworthy AI solutions.",
    departments: [
      "Artificial Intelligence & Machine Learning",
      "Data Science & Predictive Modeling",
      "Robotics & Autonomous Systems",
      "Natural Language Processing"
    ],
    features: [
      "Equipped with high-performance NVIDIA DGX server environments.",
      "Collaborative project labs with active AI startups and global tech grants.",
      "100% placements and top packages in core artificial intelligence roles."
    ],
    curriculum: {
      year1: ["Linear Algebra & Calculus", "Programming in Python", "Discrete Structures", "Intro to Cognitive Sciences"],
      year2: ["Data Structures & Algorithms", "Probability & Statistics", "Supervised Machine Learning", "Neural Networks"],
      year3: ["Deep Learning & Computer Vision", "Natural Language Processing", "Robotics & Reinforcement Learning", "AI Ethics & Bias Control"],
      year4: ["Generative AI & LLMs", "Predictive Analytics", "AI Capstone Research Project", "Advanced Edge Computing"]
    },
    bgColor: "from-indigo-600 to-slate-900"
  }
};

interface SchoolPageProps {
  params: Promise<{ slug: string }>;
}

export default async function SchoolPage({ params }: SchoolPageProps) {
  const { slug } = await params;
  const school = SCHOOLS_DATA[slug];

  if (!school) {
    return (
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
        <Header onToggleAi={() => {}} />
        <main className="flex-1 flex flex-col items-center justify-center p-12 text-center">
          <h2 className="text-xl font-bold text-red-500">School Not Found</h2>
          <p className="text-zinc-500 mt-2">The academic school path you are trying to visit does not exist.</p>
          <Link href="/" className="mt-4 px-4 py-2 bg-primary-blue text-white rounded-lg text-xs font-bold">
            Back to Homepage
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <Header onToggleAi={() => {}} />

      {/* Hero Header Banner */}
      <section className={`bg-gradient-to-r ${school.bgColor} text-white py-16 px-6 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-primary-gold font-bold text-[10px] uppercase tracking-wider">
              <GraduationCap size={12} /> Chalapathy Academic Schools
            </span>
            <h1 className="font-extrabold text-3xl md:text-4xl tracking-tight leading-none">{school.name}</h1>
            <p className="text-sm text-zinc-200 font-semibold max-w-xl">{school.tagline}</p>
            <div className="flex flex-wrap items-center gap-4 text-xs pt-2">
              <span className="flex items-center gap-1"><UserCheck size={14} className="text-primary-gold" /> Dean: {school.dean}</span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="lg:col-span-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 grid grid-cols-2 gap-4">
            <div>
              <span className="block text-[10px] text-zinc-300 font-bold uppercase tracking-wider">Core Faculty</span>
              <span className="block text-xl font-bold text-white mt-1">{school.stats.faculty}+</span>
            </div>
            <div>
              <span className="block text-[10px] text-zinc-300 font-bold uppercase tracking-wider">Research Labs</span>
              <span className="block text-xl font-bold text-white mt-1">{school.stats.labs} Labs</span>
            </div>
            <div>
              <span className="block text-[10px] text-zinc-300 font-bold uppercase tracking-wider">Papers Published</span>
              <span className="block text-xl font-bold text-white mt-1">{school.stats.publications}+</span>
            </div>
            <div>
              <span className="block text-[10px] text-zinc-300 font-bold uppercase tracking-wider">Placements Rate</span>
              <span className="block text-xl font-bold text-primary-gold mt-1">{school.stats.placementsRate}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Body Columns */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Columns (8 cols) */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* About Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-6 space-y-4">
            <h2 className="font-extrabold text-lg text-primary-blue flex items-center gap-2">
              <BookOpen size={20} className="text-primary-gold" /> About the School
            </h2>
            <p className="text-xs text-zinc-600 leading-relaxed font-medium">
              {school.about}
            </p>
            <div className="bg-slate-50 border-l-4 border-primary-gold p-4 text-xs font-semibold text-zinc-700 italic">
              <strong>Vision:</strong> {school.vision}
            </div>
          </div>

          {/* Departments Offered */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-6 space-y-4">
            <h2 className="font-extrabold text-lg text-primary-blue flex items-center gap-2">
              <GraduationCap size={20} className="text-primary-gold" /> Specialized Departments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {school.departments.map((dept, idx) => (
                <div key={idx} className="bg-slate-50 border border-zinc-100 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-gold shrink-0"></div>
                  <span className="font-bold text-xs text-zinc-700">{dept}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Curriculum */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-6 space-y-4">
            <h2 className="font-extrabold text-lg text-primary-blue flex items-center gap-2">
              <FileText size={20} className="text-primary-gold" /> Standard Course Curriculum
            </h2>
            <p className="text-[11px] text-zinc-500">A look at some core subject matters taught throughout the academic program years.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Year 1 Foundation", courses: school.curriculum.year1 },
                { title: "Year 2 Core", courses: school.curriculum.year2 },
                { title: "Year 3 Advanced", courses: school.curriculum.year3 },
                { title: "Year 4 Specializations", courses: school.curriculum.year4 }
              ].map((yr, idx) => (
                <div key={idx} className="border border-zinc-100 rounded-xl p-4 bg-zinc-50">
                  <span className="block text-xs font-extrabold text-primary-blue mb-3 border-b border-zinc-200 pb-1">{yr.title}</span>
                  <ul className="space-y-1.5 text-xs text-zinc-600 font-semibold">
                    {yr.courses.map((c, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 size={12} className="text-primary-gold shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Columns (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Key Achievements/Features */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-6 space-y-4">
            <h3 className="font-extrabold text-sm text-primary-blue uppercase tracking-wider border-b border-zinc-100 pb-2">
              Key Highlights
            </h3>
            <ul className="space-y-3.5 text-xs font-semibold text-zinc-600">
              {school.features.map((feat, idx) => (
                <li key={idx} className="flex gap-2">
                  <Award size={16} className="text-primary-gold shrink-0 mt-0.5" />
                  <span className="leading-normal">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTAs Box */}
          <div className="bg-gradient-to-br from-primary-blue to-indigo-950 text-white rounded-2xl p-6 space-y-4 shadow-lg">
            <h3 className="font-extrabold text-base tracking-wide text-white">Join Chalapathy Admissions</h3>
            <p className="text-[11px] text-zinc-300 leading-relaxed font-medium">
              Start your online digital admission application today. Reserve your seat and study under industry leaders.
            </p>
            <div className="space-y-3.5 pt-2">
              <Link 
                href="/admissions/apply" 
                className="block w-full text-center py-2.5 bg-primary-gold hover:bg-primary-gold/90 text-primary-navy font-extrabold text-xs tracking-wider rounded-xl transition-all uppercase"
              >
                Apply Online Now
              </Link>
              <Link 
                href="/contact" 
                className="block w-full text-center py-2.5 border border-white/20 hover:border-white/40 text-white font-bold text-xs rounded-xl transition-all"
              >
                Inquire Admissions Office
              </Link>
            </div>
          </div>

        </div>

      </main>

      <Footer />
      <AIAssistant isOpen={false} onClose={() => {}} />
    </div>
  );
}
