import React, { useEffect } from "react";
import { ArrowRight, Calendar, Bookmark } from "lucide-react";

const NEWS_DATA = [
  {
    title: "AI Research Lab Inaugurated on Campus",
    date: "12 May 2025",
    category: "Innovation",
    excerpt: "In partnership with global tech giants, the new laboratory features advanced machine learning compute nodes for research projects.",
    image: "/prog_computer.png"
  },
  {
    title: "Engineering Students Win Smart Hackathon 2025",
    date: "06 May 2025",
    category: "Achievement",
    excerpt: "Our team developed a decentralized IoT mesh network algorithm to win first prize at the national technology showcase competition.",
    image: "/prog_engineering.png"
  },
  {
    title: "MoU Signed with Top Global Corporations for Placements",
    date: "03 May 2025",
    category: "Corporate Link",
    excerpt: "Enabling direct internship allocations, corporate-readiness workshops, and accelerated final semester student placements.",
    image: "/prog_management.png"
  },
  {
    title: "New Pharmacy Research Formulations Published",
    date: "28 Apr 2025",
    category: "Research",
    excerpt: "Our department has published groundbreaking formulations on nano-carrier systems in high-impact medical journals.",
    image: "/prog_pharmacy.png"
  },
  {
    title: "Global Education Fair and Career Expo Hosts 30+ Universities",
    date: "15 Apr 2025",
    category: "International",
    excerpt: "Students interacted directly with global admission directors from US, UK, and European universities for postgraduate guidance.",
    image: "/prog_management.png"
  },
  {
    title: "Annual Sports Meet Kickstarts with Inter-Department Matches",
    date: "10 Apr 2025",
    category: "Campus Life",
    excerpt: "The campus cricket and basketball tournaments kicked off with participation from over 500 student athletes.",
    image: "/students_admission.png"
  },
  {
    title: "Workshop on Sustainable Construction Materials Conducted",
    date: "02 Apr 2025",
    category: "Workshop",
    excerpt: "Civil engineering experts held a hands-on session demonstrating self-healing concrete applications.",
    image: "/prog_diploma.png"
  },
  {
    title: "Alumni Meet 2025 Welcomes Back Distinguished Graduates",
    date: "24 Mar 2025",
    category: "Alumni Connect",
    excerpt: "Over 200 alumni reconnected on campus, sharing industry insights and instituting new scholarship grants.",
    image: "/students_admission.png"
  }
];

export default function News() {
  useEffect(() => {
    document.title = "University News | City Chalapathi Institute of Technology";
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F8FC] font-[var(--font-poppins)] pb-24">
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

        {/* Responsive Grid: 4 in a row on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS_DATA.map((newsItem, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group"
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
              <div className="pt-4 border-t border-gray-50 mt-4 flex items-center justify-between text-[11px] font-bold text-[#072A6C]">
                <span>Read Article</span>
                <ArrowRight size={12} className="text-[#D71920] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
