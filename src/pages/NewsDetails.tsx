import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useData } from "../context/DataContext";
import { Calendar, Clock, MapPin, Share2, ArrowLeft, X, Link2, Check } from "lucide-react";

export default function NewsDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { news } = useData();

  // Share & Toast states
  const [showShare, setShowShare] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Find the current article
  const currentIdx = news.findIndex((item) => item.slug === slug);
  const article = currentIdx !== -1 ? news[currentIdx] : null;

  // Dynamically configure meta tags for rich previews
  useEffect(() => {
    if (!article) return;
    document.title = `${article.title} | News & Events | Chalapathi University`;
    window.scrollTo(0, 0);

    const title = `${article.title} | Chalapathi University`;
    const desc = article.excerpt || article.bodyText.substring(0, 150);
    const imgUrl = window.location.origin + article.image;
    const pageUrl = window.location.href;

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
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#F7F9FC] flex flex-col items-center justify-center p-6 text-center font-[var(--font-poppins)]">
        <h2 className="text-2xl font-black text-[#072A6C] mb-2">Article Not Found</h2>
        <p className="text-sm text-gray-500 mb-6 font-[var(--font-inter)]">The article you are looking for does not exist or has been removed.</p>
        <Link to="/news" className="px-5 py-2.5 bg-[#D71920] hover:bg-[#072A6C] text-white text-xs font-bold rounded-full transition-colors shadow-sm">
          Back to News Center
        </Link>
      </div>
    );
  }

  // Social Sharing Links Creator
  const getShareLinks = () => {
    const pageUrl = window.location.href;
    const title = article.title;
    const summary = article.excerpt || "";

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
    navigator.clipboard.writeText(window.location.href);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const shareLinks = getShareLinks();

  return (
    <div className="min-h-screen bg-[#F7F9FC] py-10 font-[var(--font-poppins)] relative text-left">
      <div className="max-w-[1100px] mx-auto px-5">
        
        {/* Back Link */}
        <Link 
          to="/news" 
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-[#D71920] transition-colors mb-6 uppercase tracking-wider"
        >
          <ArrowLeft size={14} /> Back to News Center
        </Link>

        {/* Main News Card */}
        <div className="bg-white rounded-[18px] overflow-hidden shadow-sm border border-gray-100/80 p-6 md:p-10 space-y-6">
          
          {/* Category & Date */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-5">
            <div className="flex items-center gap-2.5">
              <span className="bg-[#D71920]/10 text-[#D71920] text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full tracking-wider">
                {article.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold font-[var(--font-inter)]">
                <Calendar size={13} />
                <span>{article.date}</span>
                <span className="mx-1">•</span>
                <Clock size={13} />
                <span>{article.time}</span>
              </div>
            </div>

            {/* Share Menu trigger */}
            <button 
              onClick={() => setShowShare(!showShare)}
              className="w-9 h-9 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
              title="Share Article"
            >
              <Share2 size={16} />
            </button>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-extrabold text-[#072A6C] leading-snug tracking-tight">
            {article.title}
          </h1>

          {/* Location details */}
          {article.location && (
            <div className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold font-[var(--font-inter)]">
              <MapPin size={13} className="text-[#D71920]" />
              <span>{article.location}</span>
            </div>
          )}

          {/* Large Featured Image */}
          <div className="w-full h-[300px] md:h-[500px] rounded-[18px] overflow-hidden shadow-sm">
            <img 
              src={article.image || "/prog_computer.png"} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body Content */}
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed font-[var(--font-inter)] font-light">
            <p className="font-medium text-gray-800 text-base leading-relaxed">
              {article.excerpt}
            </p>
            <div className="whitespace-pre-line pt-2">
              {article.bodyText}
            </div>
          </div>

          {/* External Source Link */}
          {article.sourceUrl && (
            <div className="pt-6 border-t border-gray-100 mt-6 flex">
              <a 
                href={article.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D71920] hover:text-[#072A6C] transition-colors"
              >
                View News Here ➔
              </a>
            </div>
          )}

        </div>

      </div>

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
              <h4 className="text-sm font-black text-[#072A6C] tracking-wide uppercase">Share News Story</h4>
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
