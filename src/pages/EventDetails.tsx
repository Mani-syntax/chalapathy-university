import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useData } from "../context/DataContext";
import { Calendar, Clock, MapPin, Share2, ArrowLeft, CheckCircle, X, Link2, Check } from "lucide-react";

export default function EventDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { events } = useData();
  
  // Share & Toast states
  const [showShare, setShowShare] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  // Registration Form States
  const [showRegForm, setShowRegForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", rollNo: "" });
  const [regSuccess, setRegSuccess] = useState(false);

  // Find current event
  const currentIdx = events.findIndex((item) => item.slug === slug);
  const eventItem = currentIdx !== -1 ? events[currentIdx] : null;

  // Dynamically configure meta tags for rich previews
  useEffect(() => {
    if (!eventItem) return;
    document.title = `${eventItem.title} | Events | Chalapathi University`;
    window.scrollTo(0, 0);

    const title = `${eventItem.title} | Chalapathi University`;
    const desc = eventItem.bodyText ? eventItem.bodyText.substring(0, 150) : "";
    const imgUrl = window.location.origin + eventItem.image;
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
  }, [eventItem]);

  if (!eventItem) {
    return (
      <div className="min-h-screen bg-[#F7F9FC] flex flex-col items-center justify-center p-6 text-center font-[var(--font-poppins)]">
        <h2 className="text-2xl font-black text-[#072A6C] mb-2">Event Not Found</h2>
        <p className="text-sm text-gray-500 mb-6 font-[var(--font-inter)]">The event you are looking for does not exist or has been removed.</p>
        <Link to="/news/events/all" className="px-5 py-2.5 bg-[#D71920] hover:bg-[#072A6C] text-white text-xs font-bold rounded-full transition-colors shadow-sm">
          Back to Event Directory
        </Link>
      </div>
    );
  }

  // Registration date cutoff check
  const isRegistrationClosed = (eventDateStr: string) => {
    try {
      const parts = eventDateStr.split(" ");
      if (parts.length >= 3) {
        const day = parseInt(parts[0], 10);
        const monthStr = parts[1];
        const year = parseInt(parts[2], 10);
        const months: Record<string, number> = {
          Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
          Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
        };
        const month = months[monthStr.substring(0, 3)] ?? 0;
        const eventDate = new Date(year, month, day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return today > eventDate;
      }
    } catch (e) {
      return false;
    }
    return false;
  };

  const closed = isRegistrationClosed(eventItem.date);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setRegSuccess(true);
  };

  // Social Sharing Links Creator
  const getShareLinks = () => {
    const pageUrl = window.location.href;
    const title = eventItem.title;
    const summary = eventItem.bodyText ? eventItem.bodyText.substring(0, 150) : "";

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

        {/* Main Event Box */}
        <div className="bg-white rounded-[18px] overflow-hidden shadow-sm border border-gray-100/80 p-6 md:p-10 space-y-6 text-left">
          
          {/* Category & Status */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-5">
            <div className="flex items-center gap-2.5">
              <span className="bg-[#F97316]/10 text-[#F97316] text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full tracking-wider">
                {eventItem.category}
              </span>
              {closed && (
                <span className="bg-gray-100 text-gray-500 text-[10px] font-bold uppercase px-3 py-1.5 rounded-full tracking-wider">
                  Registration Closed
                </span>
              )}
            </div>

            {/* Share Trigger */}
            <button 
              onClick={() => setShowShare(!showShare)}
              className="w-9 h-9 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
              title="Share Event"
            >
              <Share2 size={16} />
            </button>
          </div>

          {/* Event Image */}
          <div className="h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden relative shadow-sm">
            <img 
              src={eventItem.image} 
              alt={eventItem.title} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Event Title */}
          <h1 className="text-2xl md:text-4xl font-[900] text-[#072A6C] tracking-tight leading-snug">
            {eventItem.title}
          </h1>

          {/* Details Panel */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-500 font-semibold bg-gray-50 p-5 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#F97316] flex items-center justify-center shrink-0">
                <Calendar size={14} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-gray-400 font-bold uppercase">Date</span>
                <span className="text-gray-700 font-bold">{eventItem.date}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#F97316] flex items-center justify-center shrink-0">
                <Clock size={14} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-gray-400 font-bold uppercase">Time</span>
                <span className="text-gray-700 font-bold">{eventItem.time}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#F97316] flex items-center justify-center shrink-0">
                <MapPin size={14} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-gray-400 font-bold uppercase">Location</span>
                <span className="text-gray-700 font-bold">{eventItem.location}</span>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Body content & Registration form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Description Body */}
            <div className="lg:col-span-2 space-y-5 text-sm text-gray-600 font-light leading-relaxed">
              <p>{eventItem.bodyText}</p>
            </div>

            {/* Registration Box */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 self-start space-y-4">
              <h3 className="text-sm font-black text-[#072A6C] uppercase tracking-wider">Registration</h3>
              
              {closed ? (
                <div className="text-xs text-gray-400 bg-gray-100/50 p-4 rounded-xl text-center font-medium">
                  We are no longer accepting registrations for this event since it has concluded.
                </div>
              ) : regSuccess ? (
                <div className="bg-green-50 border border-green-100 p-4 rounded-xl text-center space-y-2">
                  <CheckCircle className="mx-auto text-green-500" size={32} />
                  <h4 className="text-xs font-bold text-green-800">Successfully Registered!</h4>
                  <p className="text-[10px] text-green-600 font-light">Ticket details have been sent to <strong>{formData.email}</strong>.</p>
                </div>
              ) : !showRegForm ? (
                <div className="space-y-3">
                  <p className="text-[11px] text-gray-500 font-medium">Secure your seat for this upcoming campus activity online today.</p>
                  <button 
                    onClick={() => setShowRegForm(true)}
                    className="w-full py-2.5 bg-[#D71920] hover:bg-[#072A6C] text-white text-xs font-bold rounded-xl transition-all cursor-pointer hover:shadow-md"
                  >
                    Register Online
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-3.5 text-left">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 mb-1 uppercase">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-[#072A6C] bg-white"
                      placeholder="Enter name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 mb-1 uppercase">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-[#072A6C] bg-white"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 mb-1 uppercase">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-[#072A6C] bg-white"
                      placeholder="Enter phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button 
                      type="button"
                      onClick={() => setShowRegForm(false)}
                      className="flex-1 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-[11px] font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 py-2 bg-[#D71920] hover:bg-[#b71217] text-white text-[11px] font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Confirm
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

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
              <h4 className="text-sm font-black text-[#072A6C] tracking-wide uppercase">Share Event Details</h4>
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
