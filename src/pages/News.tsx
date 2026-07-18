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
          
          {/* Bottom Sheet on Mobile, Dropdown on Desktop */}
          <div className="fixed bottom-0 left-0 right-0 sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 bg-white rounded-t-[24px] sm:rounded-2xl p-6 shadow-2xl z-50 w-full sm:max-w-md max-h-[85vh] overflow-y-auto transform transition-transform duration-300 text-left border border-gray-100 flex flex-col gap-4 font-[var(--font-poppins)]">
            
            {/* Mobile Drag Handle */}
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-2 sm:hidden" />
            
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <h4 className="text-sm font-black text-[#072A6C] tracking-wide uppercase">Share News & Events</h4>
              <button onClick={() => setShowShare(false)} className="text-gray-400 hover:text-gray-600">
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <a 
                href={shareLinks.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-3 bg-[#25D366]/5 hover:bg-[#25D366]/10 text-gray-800 rounded-xl transition-all border border-[#25D366]/10 hover:border-[#25D366]/30 text-xs font-bold"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
                WhatsApp
              </a>
              <a 
                href={shareLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-3 bg-[#1877F2]/5 hover:bg-[#1877F2]/10 text-gray-800 rounded-xl transition-all border border-[#1877F2]/10 hover:border-[#1877F2]/30 text-xs font-bold"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#1877F2]" />
                Facebook
              </a>
              <a 
                href={shareLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-3 bg-black/5 hover:bg-black/10 text-gray-800 rounded-xl transition-all border border-black/10 hover:border-black/30 text-xs font-bold"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-black" />
                X (Twitter)
              </a>
              <a 
                href={shareLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-3 bg-[#0A66C2]/5 hover:bg-[#0A66C2]/10 text-gray-800 rounded-xl transition-all border border-[#0A66C2]/10 hover:border-[#0A66C2]/30 text-xs font-bold"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#0A66C2]" />
                LinkedIn
              </a>
              <a 
                href={shareLinks.telegram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-3 bg-[#24A1DE]/5 hover:bg-[#24A1DE]/10 text-gray-800 rounded-xl transition-all border border-[#24A1DE]/10 hover:border-[#24A1DE]/30 text-xs font-bold"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#24A1DE]" />
                Telegram
              </a>
              <a 
                href={shareLinks.reddit} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-3 bg-[#FF4500]/5 hover:bg-[#FF4500]/10 text-gray-800 rounded-xl transition-all border border-[#FF4500]/10 hover:border-[#FF4500]/30 text-xs font-bold"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF4500]" />
                Reddit
              </a>
              <a 
                href={shareLinks.pinterest} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-3 bg-[#BD081C]/5 hover:bg-[#BD081C]/10 text-gray-800 rounded-xl transition-all border border-[#BD081C]/10 hover:border-[#BD081C]/30 text-xs font-bold"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#BD081C]" />
                Pinterest
              </a>
              <a 
                href={shareLinks.threads} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-3 bg-[#000000]/5 hover:bg-[#000000]/10 text-gray-800 rounded-xl transition-all border border-black/10 hover:border-black/30 text-xs font-bold"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#000000]" />
                Threads
              </a>
              <a 
                href={shareLinks.email} 
                className="flex items-center gap-3 p-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl transition-all border border-gray-200 text-xs font-bold"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-gray-500" />
                Email Story
              </a>
              <button 
                onClick={() => { handleCopyLink(); setShowShare(false); }}
                className="flex items-center gap-3 p-3 bg-[#072A6C]/5 hover:bg-[#072A6C]/10 text-[#072A6C] rounded-xl transition-all border border-[#072A6C]/10 hover:border-[#072A6C]/30 text-xs font-bold text-left cursor-pointer outline-none"
              >
                <Link2 size={13} className="text-[#072A6C]" />
                Copy Page Link
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
