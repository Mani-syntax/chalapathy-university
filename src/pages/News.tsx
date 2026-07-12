import React, { useState, useEffect } from "react";
import { ArrowRight, Calendar, Bookmark, X, Clock, MapPin, Share2 } from "lucide-react";

const NEWS_DATA = [
  {
    id: 1,
    title: "AI Research Lab Inaugurated on Campus",
    date: "12 May 2025",
    time: "10:30 AM",
    location: "Main Science Block, Room 302",
    category: "Innovation",
    excerpt: "In partnership with global tech giants, the new laboratory features advanced machine learning compute nodes for research projects.",
    bodyText: "Today marks a historic milestone for City Chalapathi Institute of Technology as we formally inaugurate our state-of-the-art Artificial Intelligence and Machine Learning Research Laboratory. Developed in close collaboration with global technology leaders, this research center is equipped with high-throughput multi-GPU processing systems and next-generation compute environments designed specifically for heavy workload deep learning and neural network model training. Under the direction of our senior AI research staff, undergraduate and doctoral scholars will collaborate on active research papers, smart industrial solutions, and healthcare diagnostics automation projects. Student cohorts will have access to real-time research fellowships, academic grants, and direct mentoring pipelines to build future computing technologies.",
    image: "/prog_computer.png"
  },
  {
    id: 2,
    title: "Engineering Students Win Smart Hackathon 2025",
    date: "06 May 2025",
    time: "09:00 AM",
    location: "Tech Exhibition Hub, New Delhi",
    category: "Achievement",
    excerpt: "Our team developed a decentralized IoT mesh network algorithm to win first prize at the national technology showcase competition.",
    bodyText: "We are extremely proud to announce that the student research team from our Electronics and Computer Science Engineering departments has won the prestigious National Smart Systems Hackathon 2025. Over a grueling 36-hour continuous sprint in New Delhi, the team designed and prototyped a self-healing, decentralized IoT mesh network framework tailored for real-time disaster management communication. The algorithm maintains high packet-delivery rates even during severe node disruptions. The project won first prize, carrying a gold trophy and a cash reward of ₹1,00,000, standing out among 250 participating institutions nationwide.",
    image: "/prog_engineering.png"
  },
  {
    id: 3,
    title: "MoU Signed with Top Global Corporations for Placements",
    date: "03 May 2025",
    time: "02:00 PM",
    location: "Administrative Boardroom",
    category: "Corporate Link",
    excerpt: "Enabling direct internship allocations, corporate-readiness workshops, and accelerated final semester student placements.",
    bodyText: "City Chalapathi Institute of Technology has officially entered into a strategic Memorandum of Understanding (MoU) with leading multinational software and core engineering firms. This collaboration significantly strengthens our training and placement initiatives. Beginning this academic term, corporate mentors will conduct regular guest workshops on enterprise architectures and cloud DevOps technologies. The agreement also establishes a dedicated early-internship pipeline, allowing final-year engineering and management students to undertake structured industrial projects directly at corporate campuses, paving a fast-track pathway for high-compensation final placements.",
    image: "/prog_management.png"
  },
  {
    id: 4,
    title: "New Pharmacy Research Formulations Published",
    date: "28 Apr 2025",
    time: "11:30 AM",
    location: "Bio-Sciences Laboratory Hall",
    category: "Research",
    excerpt: "Our department has published groundbreaking formulations on nano-carrier systems in high-impact medical journals.",
    bodyText: "The Department of Pharmaceutics at City Chalapathi has published a research breakthrough regarding target-oriented drug delivery systems. The research details a novel nano-carrier formulation that significantly increases the solubility and bioavailability of therapeutic drugs, offering potential applications for targeted anti-inflammatory treatments. Published in a highly respected international pharmaceutical journal, the research is the culmination of three years of rigorous laboratory analysis led by our postgraduate research scholars and senior faculty. This publication underscores our commitment to advancing pharmaceutical sciences on a global stage.",
    image: "/prog_pharmacy.png"
  },
  {
    id: 5,
    title: "Global Education Fair and Career Expo Hosts 30+ Universities",
    date: "15 Apr 2025",
    time: "10:00 AM",
    location: "Main University Auditorium",
    category: "International",
    excerpt: "Students interacted directly with global admission directors from US, UK, and European universities for postgraduate guidance.",
    bodyText: "We successfully hosted the annual Global Education Fair and Career Expo on our central campus yesterday. The event hosted admissions directors and official representatives from over 30 leading universities across the United States, United Kingdom, Australia, and European Union countries. Hundreds of undergraduate students from final and pre-final semesters attended the fair to discuss entry requirements, IELTS/GRE waivers, postgraduate research opportunities, and scholarship applications directly with the university officials, opening new international education horizons for our graduates.",
    image: "/prog_management.png"
  },
  {
    id: 6,
    title: "Annual Sports Meet Kickstarts with Inter-Department Matches",
    date: "10 Apr 2025",
    time: "08:30 AM",
    location: "Central Sports Arena",
    category: "Campus Life",
    excerpt: "The campus cricket and basketball tournaments kicked off with participation from over 500 student athletes.",
    bodyText: "The annual campus sports tournament commenced yesterday with a spectacular torch run and flag hoisting ceremony at the main sports complex. Over 500 student athletes representing all engineering, pharmacy, and science departments are participating in active inter-department tournaments spanning cricket, football, basketball, track & field events, and indoor sports. The opening matches saw high-energy contests, fostering team spirit and sportsmanship across the campus community.",
    image: "/students_admission.png"
  },
  {
    id: 7,
    title: "Workshop on Sustainable Construction Materials Conducted",
    date: "02 Apr 2025",
    time: "09:30 AM",
    location: "Civil Workshop Lab A",
    category: "Workshop",
    excerpt: "Civil engineering experts held a hands-on session demonstrating self-healing concrete applications.",
    bodyText: "A comprehensive technical workshop on modern green construction materials was held by our Civil Engineering Department. Industry practitioners and structural engineers attended to demonstrate application techniques for self-healing concrete and fly-ash geopolymer composites. Students participated in concrete casting laboratories and stress testing, gaining valuable insight into eco-friendly engineering practices.",
    image: "/prog_diploma.png"
  },
  {
    id: 8,
    title: "Alumni Meet 2025 Welcomes Back Distinguished Graduates",
    date: "24 Mar 2025",
    time: "05:00 PM",
    location: "Grand Lawn & Seminar Gardens",
    category: "Alumni Connect",
    excerpt: "Over 200 alumni reconnected on campus, sharing industry insights and instituting new scholarship grants.",
    bodyText: "The campus yesterday welcomed back more than 200 distinguished alumni representing graduates from the past two decades. The meet provided a platform for alumni to interact with current student cohorts, share industrial insights, and discuss mentorship opportunities. The alumni association announced the setup of a new student innovation fund to support budding startup projects on campus.",
    image: "/students_admission.png"
  }
];

interface Article {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  excerpt: string;
  bodyText: string;
  image: string;
}

export default function News() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    document.title = "University News | City Chalapathi Institute of Technology";
  }, []);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = "hidden";
      setShowShareMenu(false);
    } else {
      document.body.style.overflow = "";
      setShowShareMenu(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedArticle]);

  // Handle escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedArticle(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Get related articles excluding the active one
  const getRelatedArticles = (activeId: number) => {
    return NEWS_DATA.filter(item => item.id !== activeId).slice(0, 3);
  };

  return (
    <div className="min-h-screen bg-[#F7F8FC] font-[var(--font-poppins)] pb-24 relative">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#072A6C] to-indigo-950 text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-[1440px] mx-auto relative z-10 text-center lg:text-left space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white font-bold text-[10px] uppercase tracking-wider backdrop-blur-sm">
            Latest Bulletins
          </span>
          <h1 className="text-3xl lg:text-5xl font-[900] tracking-tight">University News</h1>
          <p className="text-xs text-gray-300 font-light max-w-xl leading-relaxed">
            Stay updated with academic breakthroughs, campus achievements, guest lectures, and student announcements.
          </p>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="max-w-[1440px] mx-auto px-5 mt-16">
        {/* News Heading */}
        <div className="flex justify-between items-end mb-8 pb-5 border-b border-gray-200">
          <div>
            <h2 className="text-2xl lg:text-3xl font-[800] text-[#072A6C]">
              News @ City Chalapathi
            </h2>
            <p className="text-[12px] text-gray-400 mt-1 font-light">Explore recent headlines, faculty achievements, and student innovations.</p>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS_DATA.map((newsItem, index) => (
            <button 
              key={index}
              onClick={() => setSelectedArticle(newsItem)}
              className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group text-left w-full cursor-pointer outline-none focus:ring-2 focus:ring-[#F97316]"
            >
              <div>
                {/* Image */}
                <div className="h-44 w-full rounded-2xl overflow-hidden mb-4 relative">
                  <img 
                    src={newsItem.image} 
                    alt={newsItem.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    draggable="false"
                  />
                </div>
                {/* Metadata */}
                <div className="flex items-center gap-3 text-[10px] text-gray-400 font-semibold mb-2">
                  <span className="text-[#F97316] uppercase tracking-wider flex items-center gap-1">
                    <Bookmark size={10} /> {newsItem.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={10} /> {newsItem.date}
                  </span>
                </div>
                {/* Title */}
                <h4 className="text-sm font-[800] text-[#072A6C] leading-snug line-clamp-2 group-hover:text-[#D71920] transition-colors">
                  {newsItem.title}
                </h4>
                {/* Excerpt */}
                <p className="text-[12px] text-gray-500 line-clamp-3 font-light mt-1.5 leading-relaxed">
                  {newsItem.excerpt}
                </p>
              </div>

              {/* Read Action button */}
              <div className="pt-4 border-t border-gray-50 mt-4 flex items-center justify-between text-[11px] font-bold text-[#072A6C] w-full">
                <span>Read Article</span>
                <ArrowRight size={12} className="text-[#D71920] group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 🌟 CENTERED MODAL POPUP OVERLAY                           */}
      {/* ======================================================== */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={() => setSelectedArticle(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Animated Modal Container */}
          <div 
            className="bg-white w-full max-w-[900px] rounded-[20px] overflow-hidden shadow-2xl relative animate-fade-in flex flex-col max-h-[90vh] text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close (X) Trigger */}
            <button 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto p-6 md:p-8 space-y-6">
              
              {/* Large Featured Image */}
              <div className="h-[280px] md:h-[380px] w-full rounded-2xl overflow-hidden relative shadow-sm">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-bold text-white bg-[#F97316] py-1 px-3 rounded-lg uppercase tracking-wider shadow-sm">
                  {selectedArticle.category}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl md:text-3xl font-[900] text-[#072A6C] tracking-tight leading-snug">
                {selectedArticle.title}
              </h2>

              {/* Metadata Panel */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-gray-500 font-semibold bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#D71920]" />
                  <span>{selectedArticle.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-[#D71920]" />
                  <span>{selectedArticle.time}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#D71920]" />
                  <span>{selectedArticle.location}</span>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-gray-100" />

              {/* Content Body */}
              <div className="text-sm text-gray-600 font-light leading-relaxed space-y-4">
                <p>{selectedArticle.bodyText}</p>
                <p>Collaborating with local and global stakeholders, City Chalapathi continues to design ecosystems that support professional readiness, technical excellence, and research publications. Contact the department administration office for enrollment procedures or specific course details.</p>
              </div>

              {/* Related Section (Read Next) */}
              <div className="pt-6 border-t border-gray-100 space-y-4">
                <h4 className="text-xs font-extrabold tracking-wider text-[#072A6C] uppercase">
                  Read Next
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {getRelatedArticles(selectedArticle.id).map((related, rIdx) => (
                    <button
                      key={rIdx}
                      onClick={() => setSelectedArticle(related)}
                      className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow text-left flex flex-col gap-2 transition-all w-full cursor-pointer hover:border-gray-200"
                    >
                      <span className="text-[9px] font-extrabold text-[#F97316] uppercase">{related.category}</span>
                      <h5 className="text-[12px] font-extrabold text-[#072A6C] line-clamp-2 leading-tight">
                        {related.title}
                      </h5>
                    </button>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-6 border-t border-gray-100 flex justify-end gap-3 items-center">
                <div className="relative">
                  <button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="h-10 px-5 border border-gray-200 hover:border-gray-300 text-gray-700 text-xs font-bold rounded-xl inline-flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
                  >
                    <Share2 size={13} /> Share Article
                  </button>

                  {showShareMenu && (
                    <div className="absolute bottom-12 right-0 bg-white border border-gray-200/80 rounded-xl shadow-xl p-1.5 z-30 flex flex-col gap-0.5 w-44 text-xs font-semibold text-gray-700 animate-fade-in">
                      <a 
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(selectedArticle.title + " " + window.location.origin + "/news#" + selectedArticle.id)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors flex items-center gap-2"
                        onClick={() => setShowShareMenu(false)}
                      >
                        <span>WhatsApp</span>
                      </a>
                      <a 
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.origin + "/news#" + selectedArticle.id)}&text=${encodeURIComponent(selectedArticle.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 hover:bg-sky-50 hover:text-sky-500 rounded-lg transition-colors flex items-center gap-2"
                        onClick={() => setShowShareMenu(false)}
                      >
                        <span>Twitter / X</span>
                      </a>
                      <a 
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin + "/news#" + selectedArticle.id)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors flex items-center gap-2"
                        onClick={() => setShowShareMenu(false)}
                      >
                        <span>LinkedIn</span>
                      </a>
                      <a 
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + "/news#" + selectedArticle.id)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors flex items-center gap-2"
                        onClick={() => setShowShareMenu(false)}
                      >
                        <span>Facebook</span>
                      </a>
                      <button 
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(`${window.location.origin}/news#${selectedArticle.id}`);
                          alert("Link copied to clipboard!");
                          setShowShareMenu(false);
                        }}
                        className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2 cursor-pointer font-semibold"
                      >
                        <span>Copy Link</span>
                      </button>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="h-10 px-6 bg-[#072A6C] hover:bg-[#072A6C]/90 text-white text-xs font-bold rounded-xl inline-flex items-center transition-all active:scale-95 cursor-pointer"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
