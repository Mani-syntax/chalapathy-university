import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  Calendar, 
  X, 
  Clock, 
  MapPin, 
  Share2, 
  Flame, 
  GraduationCap, 
  BookOpen, 
  Trophy, 
  Users, 
  Link2,
  Check
} from "lucide-react";
import { useData } from "../context/DataContext";

// Social Share Icons Helper Components (Official SVG path logos)
const WhatsAppIcon = () => (
  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
    <path d="M11.94 0C5.346 0 0 5.346 0 11.94s5.346 11.94 11.94 11.94 11.94-5.346 11.94-11.94S18.534 0 11.94 0zm5.562 8.161l-1.875 8.835c-.142.628-.513.784-1.037.492l-2.85-2.102-1.375 1.325c-.154.154-.282.282-.577.282l.205-2.915 5.306-4.793c.23-.205-.05-.318-.358-.112l-6.56 4.13-2.825-.885c-.615-.192-.628-.615.128-.91l11.04-4.258c.513-.192.96.115.804.838z"/>
  </svg>
);

const RedditIcon = () => (
  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
    <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.64-6.29-1.72l1.37-4.3 3.8 1.15c.08.97.87 1.73 1.84 1.73 1.02 0 1.85-.83 1.85-1.85S19.52 1 18.5 1c-.81 0-1.5.52-1.74 1.25l-4.14-1.25c-.12-.03-.25.04-.29.16l-1.53 4.8C8.36 6.04 6.13 6.69 4.49 7.7 3.93 6.94 3.03 6.46 2.07 6.46c-1.65 0-3 1.35-3 3 0 1.07.57 2.01 1.43 2.54-.03.25-.05.51-.05.77 0 3.72 4.45 6.73 9.93 6.73 5.48 0 9.93-3.01 9.93-6.73 0-.26-.02-.52-.05-.77.86-.53 1.43-1.47 1.43-2.54zm-16.5 1c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm10.74 3.9c-.83.83-2.4 1.2-4.24 1.2s-3.41-.37-4.24-1.2c-.15-.15-.15-.38 0-.53.15-.15.38-.15.53 0 .68.68 2.03 1 3.71 1 1.68 0 3.03-.32 3.71-1 .15-.15.38-.15.53 0 .15.15.15.38 0 .53zm-.74-2.4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.204 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.164 0 7.397 2.967 7.397 6.93 0 4.136-2.607 7.464-6.22 7.464-1.215 0-2.358-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.36 11.985-11.987C23.97 5.39 18.592 0 12.017 0z"/>
  </svg>
);

const ThreadsIcon = () => (
  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.87 14.883c-.452.483-1.077.724-1.874.724-.627 0-1.182-.162-1.666-.486-.484-.324-.805-.765-.964-1.325a4.774 4.774 0 0 1-.161-1.282v-.942c.075-.417.202-.79.382-1.119.18-.33.435-.583.766-.757.33-.174.733-.261 1.208-.261.597 0 1.084.152 1.46.455.376.303.627.702.753 1.196.126.494.137 1.036.033 1.626h-4.22c.026.483.152.883.376 1.2.224.317.583.476 1.077.476.516 0 .914-.143 1.196-.428a1.725 1.725 0 0 0 .385-.688h1.636a3.298 3.298 0 0 1-.762 1.343l.004-.002zm-.62-4.088c-.027-.376-.145-.69-.356-.94-.21-.252-.53-.378-.96-.378-.456 0-.805.127-1.047.382-.242.254-.393.565-.453.935h2.816v.001z"/>
  </svg>
);

const NEWS_CATEGORIES_INFO = [
  {
    title: "ACADEMICS",
    desc: "Curriculum updates, academic activities and more.",
    articles: "32 Articles",
    icon: GraduationCap,
  },
  {
    title: "RESEARCH",
    desc: "Innovations, publications and research highlights.",
    articles: "28 Articles",
    icon: BookOpen,
  },
  {
    title: "SPORTS",
    desc: "Matches, tournaments and sports achievements.",
    articles: "18 Articles",
    icon: Trophy,
  },
  {
    title: "STUDENT LIFE",
    desc: "Clubs, events and student achievements.",
    articles: "24 Articles",
    icon: Users,
  }
];

const FILTER_CATEGORIES = ["All", "Research", "Placements", "Campus Life", "Events", "Sports", "Admissions", "Innovation", "Technology", "Pharmacy"];

export default function News() {
  const navigate = useNavigate();
  const { news, events } = useData();

  // Selected item tracking
  const [activeSelection, setActiveSelection] = useState<{ type: "news" | "event"; id: number }>({
    type: "news",
    id: news[0]?.id || 1
  });
  
  const [activeCategory, setActiveCategory] = useState("All");

  // Social sharing states
  const [showShare, setShowShare] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    document.title = "News & Events | Chalapathi University";
  }, []);

  const filteredNews = activeCategory === "All" 
    ? news 
    : news.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  const filteredEvents = activeCategory === "All"
    ? events
    : events.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  // Get active item details
  const activeItem = activeSelection.type === "news" 
    ? news.find(item => item.id === activeSelection.id) || news[0]
    : events.find(item => item.id === activeSelection.id) || events[0];

  // Dynamically configure meta tags for rich previews
  useEffect(() => {
    if (!activeItem) return;

    const title = `${activeItem.title} | Chalapathi University`;
    const desc = activeSelection.type === "news" 
      ? (activeItem as any).excerpt 
      : (activeItem as any).bodyText.substring(0, 150);
    const imgUrl = window.location.origin + activeItem.image;
    const pageUrl = window.location.origin + (activeSelection.type === "news" ? `/news/${activeItem.slug}` : `/news/events/${activeItem.slug}`);

    // Update canonical link
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", pageUrl);

    // Meta helper
    const updateMeta = (prop: string, val: string, isName = false) => {
      const attr = isName ? "name" : "property";
      let el = document.querySelector(`meta[${attr}='${prop}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, prop);
        document.head.appendChild(el);
      }
      el.setAttribute("content", val);
    };

    updateMeta("og:title", title);
    updateMeta("og:description", desc);
    updateMeta("og:image", imgUrl);
    updateMeta("og:url", pageUrl);
    updateMeta("og:type", "article");
    updateMeta("og:site_name", "Chalapathi University");
    updateMeta("twitter:card", "summary_large_image", true);
    updateMeta("twitter:title", title, true);
    updateMeta("twitter:description", desc, true);
    updateMeta("twitter:image", imgUrl, true);

  }, [activeSelection, activeItem]);

  // Social Sharing Links Creator
  const getShareLinks = () => {
    if (!activeItem) return {};
    
    const pageUrl = window.location.origin + (activeSelection.type === "news" ? `/news/${activeItem.slug}` : `/news/events/${activeItem.slug}`);
    const title = activeItem.title;
    const summary = activeSelection.type === "news" 
      ? (activeItem as any).excerpt 
      : (activeItem as any).bodyText.substring(0, 150);

    const encUrl = encodeURIComponent(pageUrl);
    const encTitle = encodeURIComponent(title);
    const encSummary = encodeURIComponent(summary);

    return {
      whatsapp: `https://api.whatsapp.com/send?text=${encTitle}%20${encUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encUrl}&text=${encTitle}`,
      linkedin: `https://www.linkedin.com/shareArticle?url=${encUrl}&title=${encTitle}&summary=${encSummary}`,
      telegram: `https://t.me/share/url?url=${encUrl}&text=${encTitle}`,
      email: `mailto:?subject=${encTitle}&body=${encSummary}%20${encUrl}`,
      reddit: `https://reddit.com/submit?url=${encUrl}&title=${encTitle}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${encUrl}&description=${encSummary}`,
      threads: `https://threads.net/intent/post?text=${encTitle}%20${encUrl}`
    };
  };

  const handleCopyLink = () => {
    if (!activeItem) return;
    const pageUrl = window.location.origin + (activeSelection.type === "news" ? `/news/${activeItem.slug}` : `/news/events/${activeItem.slug}`);
    
    navigator.clipboard.writeText(pageUrl);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const shareLinks = getShareLinks();

  return (
    <div className="min-h-screen bg-[#F7F9FC] font-[var(--font-poppins)] pb-24 relative select-none text-left">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#072A6C] to-indigo-950 text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-[1440px] mx-auto relative z-10 text-center lg:text-left space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white font-bold text-[10px] uppercase tracking-wider backdrop-blur-sm">
            Latest Bulletins & Activities
          </span>
          <h1 className="text-3xl lg:text-5xl font-[900] tracking-tight">News & Events Hub</h1>
          <p className="text-xs text-white font-light max-w-xl leading-relaxed">
            Stay updated with college announcements, hackathons, seminars, student achievements, and academic milestones.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-[1440px] mx-auto px-5 mt-10">

        {/* Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-gray-200 scrollbar-none whitespace-nowrap mb-8">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-[11px] font-bold border transition-all duration-200 cursor-pointer ${
                activeCategory === cat 
                  ? "bg-[#072A6C] text-white border-[#072A6C] shadow-sm" 
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🌟 3-COLUMN MASTER-DETAIL SPLIT HUB SECTION 🌟 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUMN 1: LATEST NEWS (Left, width 30%) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-[#072A6C] border-b border-gray-100 pb-3 mb-2">
              <Flame size={16} className="text-red-500 fill-current animate-pulse" />
              <h3 className="text-xs font-black uppercase tracking-wider">Latest News</h3>
            </div>
            
            <div className="h-[580px] overflow-y-auto pr-1 space-y-3.5 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
              {filteredNews.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-gray-100/60 shadow-sm">
                  <p className="text-xs text-gray-400">No news found.</p>
                </div>
              ) : (
                filteredNews.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSelection({ type: "news", id: item.id })}
                    className={`w-full bg-white rounded-2xl p-4 border text-left flex items-start gap-4 transition-all duration-300 shadow-sm hover:shadow group outline-none ${
                      activeSelection.type === "news" && activeSelection.id === item.id 
                        ? "border-[#072A6C] ring-1 ring-[#072A6C]" 
                        : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-gray-50">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-wider">
                        <span className="text-[#D71920]">{item.category}</span>
                        <span className="text-gray-400 font-medium">{item.date}</span>
                      </div>
                      <h4 className="text-xs font-bold text-gray-800 leading-snug line-clamp-2 group-hover:text-[#072A6C] transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* COLUMN 2: UPCOMING EVENTS (Center/Right, width 30%) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-[#072A6C] border-b border-gray-100 pb-3 mb-2">
              <Calendar size={16} className="text-[#F97316]" />
              <h3 className="text-xs font-black uppercase tracking-wider">Upcoming Events</h3>
            </div>

            <div className="h-[580px] overflow-y-auto pr-1 space-y-3.5 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
              {filteredEvents.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-gray-100/60 shadow-sm">
                  <p className="text-xs text-gray-400">No events found.</p>
                </div>
              ) : (
                filteredEvents.map((item) => {
                  const dateParts = item.date.split(" ");
                  const day = dateParts[0] || "17";
                  const month = (dateParts[1] || "JUL").toUpperCase();
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSelection({ type: "event", id: item.id })}
                      className={`w-full bg-white rounded-2xl p-4 border text-left flex items-start gap-4 transition-all duration-300 shadow-sm hover:shadow group outline-none ${
                        activeSelection.type === "event" && activeSelection.id === item.id 
                          ? "border-[#072A6C] ring-1 ring-[#072A6C]" 
                          : "border-gray-100 hover:border-gray-200"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F97316] flex flex-col items-center justify-center shrink-0 border border-orange-100/20 group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                        <span className="text-base font-black leading-none">{day}</span>
                        <span className="text-[8px] font-black uppercase tracking-widest leading-none mt-1">{month}</span>
                      </div>
                      
                      <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-wider">
                          <span className="text-[#F97316]">{item.category}</span>
                          <span className="text-gray-400 font-medium">{item.time}</span>
                        </div>
                        <h4 className="text-xs font-bold text-gray-800 leading-snug line-clamp-2 group-hover:text-[#072A6C] transition-colors">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-1 text-[9px] text-gray-400 font-semibold font-[var(--font-inter)]">
                          <MapPin size={9} />
                          <span className="truncate">{item.location}</span>
                        </div>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {/* COLUMN 3: DETAILS PREVIEW PANEL (Right-most, width 40%) */}
          <div className="lg:col-span-4 sticky top-24 bg-white rounded-3xl border border-gray-100/80 shadow-sm p-6 space-y-5 flex flex-col justify-between min-h-[500px]">
            {activeItem ? (
              <div className="space-y-5 animate-fade-in text-left">
                {/* Header Details */}
                <div className="flex items-center justify-between gap-4 border-b border-gray-50 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#072A6C]/10 text-[#072A6C] text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-full tracking-wider">
                      {activeItem.category}
                    </span>
                    <span className="text-[10px] text-gray-400 font-medium font-[var(--font-inter)]">{activeItem.date}</span>
                  </div>
                  
                  {/* Share trigger */}
                  <button 
                    onClick={() => setShowShare(!showShare)}
                    className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
                    title="Share item"
                  >
                    <Share2 size={14} />
                  </button>
                </div>

                {/* Preview banner */}
                <div 
                  onClick={() => navigate(activeSelection.type === "news" ? `/news/${activeItem.slug}` : `/news/events/${activeItem.slug}`)}
                  className="h-52 w-full rounded-2xl overflow-hidden relative cursor-pointer group/img bg-gray-100"
                >
                  <img src={activeItem.image} alt={activeItem.title} className="w-full h-full object-cover group-hover/img:scale-102 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-all" />
                </div>

                {/* Title */}
                <h3 
                  onClick={() => navigate(activeSelection.type === "news" ? `/news/${activeItem.slug}` : `/news/events/${activeItem.slug}`)}
                  className="text-sm md:text-base font-extrabold text-[#072A6C] leading-snug cursor-pointer hover:text-[#D71920] transition-colors line-clamp-2"
                >
                  {activeItem.title}
                </h3>

                {/* Event info table if Event */}
                {activeSelection.type === "event" && (
                  <div className="grid grid-cols-2 gap-3.5 bg-gray-50/70 p-3 rounded-xl text-left border border-gray-100">
                    <div className="flex items-center gap-2 text-[10px] text-gray-600 font-bold">
                      <Clock size={11} className="text-[#D71920]" />
                      <span className="truncate">{activeItem.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-600 font-bold">
                      <MapPin size={11} className="text-[#D71920]" />
                      <span className="truncate">{activeItem.location}</span>
                    </div>
                  </div>
                )}

                {/* Body text */}
                <p className="text-[11.5px] text-gray-500 font-light leading-relaxed font-[var(--font-inter)] line-clamp-5">
                  {activeSelection.type === "news" ? (activeItem as any).excerpt : (activeItem as any).bodyText}
                </p>

                {/* Action footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-4">
                  <button 
                    onClick={() => navigate(activeSelection.type === "news" ? `/news/${activeItem.slug}` : `/news/events/${activeItem.slug}`)}
                    className="h-10 px-5 bg-[#072A6C] hover:bg-[#D71920] text-white text-[11px] font-bold rounded-xl inline-flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                  >
                    <span>View Full Details</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-20 text-gray-400">Select an item to view preview.</div>
            )}
          </div>

        </div>

        {/* Bottom 4 Category Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-16">
          {NEWS_CATEGORIES_INFO.map((cat, idx) => {
            return (
              <div 
                key={idx} 
                className="bg-white rounded-[18px] p-4 border border-gray-100/80 shadow-sm flex items-start gap-3.5 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50/80 flex items-center justify-center shrink-0">
                  <span className="text-[#072A6C]"><Calendar size={20} /></span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-[#072A6C] tracking-wide">{cat.title}</span>
                    <span className="text-[9px] font-bold text-gray-400">{cat.articles}</span>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-normal font-[var(--font-inter)] font-light">{cat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* ======================================================== */}
      {/* 🌟 SOCIAL SHARING MENU (Bottom Sheet / Dropdown Modal)   */}
      {/* ======================================================== */}
      {showShare && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
            onClick={() => setShowShare(false)}
          />
          
          {/* Circular Button Icons Grid popup */}
          <div className="fixed bottom-0 left-0 right-0 sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 bg-white rounded-t-[24px] sm:rounded-2xl p-6 shadow-2xl z-50 w-full sm:max-w-md max-h-[85vh] overflow-y-auto transform transition-transform duration-300 text-left border border-gray-100 flex flex-col gap-5 font-[var(--font-poppins)]">
            
            {/* Mobile Drag Handle */}
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-2 sm:hidden" />
            
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <h4 className="text-sm font-black text-[#072A6C] tracking-wide uppercase">Share via</h4>
              <button onClick={() => setShowShare(false)} className="text-gray-400 hover:text-gray-600">
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-y-5 gap-x-4 text-center justify-items-center">
              {/* WhatsApp */}
              <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 flex items-center justify-center transition-all duration-300 hover:scale-105 shadow">
                  <WhatsAppIcon />
                </div>
                <span className="text-[10px] text-gray-500 font-medium group-hover:text-gray-700">WhatsApp</span>
              </a>

              {/* Facebook */}
              <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-[#1877F2] hover:bg-[#1877F2]/90 flex items-center justify-center transition-all duration-300 hover:scale-105 shadow">
                  <FacebookIcon />
                </div>
                <span className="text-[10px] text-gray-500 font-medium group-hover:text-gray-700">Facebook</span>
              </a>

              {/* X */}
              <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-black hover:bg-black/90 flex items-center justify-center transition-all duration-300 hover:scale-105 shadow">
                  <XIcon />
                </div>
                <span className="text-[10px] text-gray-500 font-medium group-hover:text-gray-700">X (Twitter)</span>
              </a>

              {/* LinkedIn */}
              <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-[#0A66C2] hover:bg-[#0A66C2]/90 flex items-center justify-center transition-all duration-300 hover:scale-105 shadow">
                  <LinkedInIcon />
                </div>
                <span className="text-[10px] text-gray-500 font-medium group-hover:text-gray-700">LinkedIn</span>
              </a>

              {/* Telegram */}
              <a href={shareLinks.telegram} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-[#24A1DE] hover:bg-[#24A1DE]/90 flex items-center justify-center transition-all duration-300 hover:scale-105 shadow">
                  <TelegramIcon />
                </div>
                <span className="text-[10px] text-gray-500 font-medium group-hover:text-gray-700">Telegram</span>
              </a>

              {/* Reddit */}
              <a href={shareLinks.reddit} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-[#FF4500] hover:bg-[#FF4500]/90 flex items-center justify-center transition-all duration-300 hover:scale-105 shadow">
                  <RedditIcon />
                </div>
                <span className="text-[10px] text-gray-500 font-medium group-hover:text-gray-700">Reddit</span>
              </a>

              {/* Pinterest */}
              <a href={shareLinks.pinterest} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-[#BD081C] hover:bg-[#BD081C]/90 flex items-center justify-center transition-all duration-300 hover:scale-105 shadow">
                  <PinterestIcon />
                </div>
                <span className="text-[10px] text-gray-500 font-medium group-hover:text-gray-700">Pinterest</span>
              </a>

              {/* Threads */}
              <a href={shareLinks.threads} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-[#000000] hover:bg-[#000000]/90 flex items-center justify-center transition-all duration-300 hover:scale-105 shadow">
                  <ThreadsIcon />
                </div>
                <span className="text-[10px] text-gray-500 font-medium group-hover:text-gray-700">Threads</span>
              </a>
            </div>

            {/* Bottom Actions Row (Email & Copy) */}
            <div className="flex gap-3 pt-3 border-t border-gray-100">
              <a 
                href={shareLinks.email} 
                className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-gray-200"
              >
                <span>Email Details</span>
              </a>
              <button 
                onClick={() => { handleCopyLink(); setShowShare(false); }}
                className="flex-1 py-2.5 bg-[#072A6C]/5 hover:bg-[#072A6C]/10 text-[#072A6C] text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-[#072A6C]/10 cursor-pointer outline-none"
              >
                <Link2 size={13} className="text-[#072A6C]" />
                <span>Copy Link</span>
              </button>
            </div>

          </div>
        </>
      )}

      {/* ============================================== */}
      {/* 🌟 TOAST NOTIFICATION                          */}
      {/* ============================================== */}
      {showToast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-[#072A6C] text-white text-xs font-bold px-5 py-3 rounded-2xl shadow-xl z-55 flex items-center gap-2 border border-white/10 animate-bounce">
          <Check size={14} className="text-green-400" />
          <span>Link copied successfully!</span>
        </div>
      )}

    </div>
  );
}
