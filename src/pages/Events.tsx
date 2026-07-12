import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight, ArrowRight, Sparkles, ChevronDown } from "lucide-react";

// Mock Data for Featured/Slider Events
const FEATURED_EVENTS = [
  {
    id: 1,
    title: "International Conference on Artificial Intelligence & Robotics",
    date: "20 JUL 2026",
    time: "09:30 AM",
    venue: "Main University Auditorium",
    category: "Technology",
    desc: "Join global industry pioneers and researchers as they discuss neural architecture, humanoids, and automated reinforcement learning.",
    image: "/prog_computer.png"
  },
  {
    id: 2,
    title: "Annual Global Business Leadership Summit",
    date: "15 AUG 2026",
    time: "10:00 AM",
    venue: "MBA Seminar Block Center",
    category: "Management",
    desc: "A premium networking summit hosting executive speakers from top Fortune 500 organizations to discuss sustainable corporate scaling.",
    image: "/prog_management.png"
  },
  {
    id: 3,
    title: "National Pharmacy Innovation Research Forum",
    date: "05 SEP 2026",
    time: "11:00 AM",
    venue: "Bio-Sciences Laboratory Hall",
    category: "Healthcare",
    desc: "Showcasing groundbreaking breakthroughs in clinical pharmacy, pharmacology formulations, and drug delivery systems.",
    image: "/prog_pharmacy.png"
  }
];

// Mock Data for Upcoming Scroll Storytelling Events
const UPCOMING_EVENTS = [
  {
    id: 101,
    title: "Smart Systems Hackathon 2026",
    date: "12 OCT 2026",
    time: "08:00 AM",
    venue: "Campus Innovation Labs",
    desc: "A 36-hour sprint where students build software solutions to address environmental and civic issues using IoT and AI frameworks.",
    image: "/prog_computer.png"
  },
  {
    id: 102,
    title: "Vocational Engineering Showcase & Expo",
    date: "28 NOV 2026",
    time: "09:00 AM",
    venue: "Engineering Workshop Complex",
    desc: "Displaying student-designed machinery prototypes, CAD architectures, and sustainable electrical circuit grids.",
    image: "/prog_engineering.png"
  },
  {
    id: 103,
    title: "Postgraduate Convocation Ceremony 2026",
    date: "18 DEC 2026",
    time: "10:00 AM",
    venue: "University Grand Lawn Area",
    desc: "Honoring the accomplishments and conferring degrees to our graduating master's and doctoral scholars.",
    image: "/prog_mtech.png"
  }
];

export default function Events() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Dynamic Page Title
  useEffect(() => {
    document.title = "University Events | City Chalapathi Institute of Technology";
  }, []);

  // Auto Slider
  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setDirection(1);
      setActiveIdx((prev) => (prev + 1) % FEATURED_EVENTS.length);
    }, 6000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const handlePrev = () => {
    stopAutoPlay();
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + FEATURED_EVENTS.length) % FEATURED_EVENTS.length);
    startAutoPlay();
  };

  const handleNext = () => {
    stopAutoPlay();
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % FEATURED_EVENTS.length);
    startAutoPlay();
  };

  // Sticky Poster scroll state for Apple-style storytelling section
  const [stickyActiveIdx, setStickyActiveIdx] = useState(0);
  const storytellingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!storytellingRef.current) return;
      const elements = storytellingRef.current.querySelectorAll(".upcoming-event-item");
      let activeIndex = 0;
      let minDistance = Infinity;

      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - window.innerHeight / 3);
        if (distance < minDistance) {
          minDistance = distance;
          activeIndex = index;
        }
      });

      setStickyActiveIdx(activeIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentFeatured = FEATURED_EVENTS[activeIdx];

  return (
    <div className="min-h-screen bg-[#F7F8FC] overflow-x-hidden font-[var(--font-poppins)] relative selection:bg-[#D71920]/20">
      
      {/* 🔮 Background mesh gradient for premium feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent pointer-events-none z-0" />
      
      {/* ======================================================== */}
      {/* 🌟 EVENTS HERO SECTION                                    */}
      {/* ======================================================== */}
      <section className="relative w-full h-[540px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/campus_hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        
        {/* Soft floating blur circles */}
        <div className="absolute top-20 left-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-red-500/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-5 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white font-bold text-[11px] uppercase tracking-widest backdrop-blur-md">
              <Sparkles size={12} className="text-[#D4AF37]" /> Explore Campus Life
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[900] text-white tracking-tight leading-none">
              UNIVERSITY EVENTS
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto font-light leading-relaxed">
              Discover academic conferences, business summits, medical forums, and student hackathons shaping tomorrow's tech landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center pt-8"
          >
            <div className="animate-bounce flex flex-col items-center gap-1 text-gray-400 cursor-pointer">
              <span className="text-[10px] uppercase font-bold tracking-widest">Scroll Down</span>
              <ChevronDown size={16} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 🌟 FEATURED EVENTS SECTION                                */}
      {/* ======================================================== */}
      <section className="py-24 relative z-10 max-w-[1440px] mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">Featured Showcases</span>
            <h2 className="text-3xl font-[800] text-[#072A6C] tracking-tight">SPOTLIGHT EVENTS</h2>
          </div>
          
          {/* Arrow controllers */}
          <div className="flex gap-2">
            <button 
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 text-gray-700 hover:border-[#072A6C] hover:text-[#072A6C] flex items-center justify-center shadow-sm transition-all active:scale-90"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 text-gray-700 hover:border-[#072A6C] hover:text-[#072A6C] flex items-center justify-center shadow-sm transition-all active:scale-90"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ⏰ PREMIUM FLOATING DATE/TIME DISPLAY */}
        <div className="relative mb-6 z-20 flex justify-center">
          <div className="bg-[#072A6C] text-white py-3.5 px-8 rounded-2xl shadow-lg border border-white/10 flex items-center gap-6 divide-x divide-white/20">
            <div className="flex items-center gap-2.5">
              <Calendar className="text-[#D4AF37]" size={16} />
              <div className="overflow-hidden h-5 min-w-[110px] relative">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={currentFeatured.date}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="block text-xs font-bold font-mono tracking-wide absolute"
                  >
                    {currentFeatured.date}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
            <div className="flex items-center gap-2.5 pl-6">
              <Clock className="text-[#D4AF37]" size={16} />
              <div className="overflow-hidden h-5 min-w-[80px] relative">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={currentFeatured.time}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="block text-xs font-bold font-mono tracking-wide absolute"
                  >
                    {currentFeatured.time}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* 🖼️ DYNAMIC GRID DISPLAY: LEFT POSTER, RIGHT CONTENT */}
        <div className="bg-white border border-gray-200/60 rounded-3xl p-6 lg:p-8 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[460px] relative overflow-hidden">
          
          {/* Animated Background Orbs inside card */}
          <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-slate-50 pointer-events-none z-0" />
          
          {/* Left Side: Animated Image Frame */}
          <div className="lg:col-span-5 h-[340px] rounded-2xl overflow-hidden relative shadow-md bg-gray-900 group z-10">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={activeIdx}
                src={currentFeatured.image}
                alt={currentFeatured.title}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-4 left-4 text-[10px] font-bold text-white/80 tracking-widest uppercase bg-black/30 py-1 px-2.5 rounded backdrop-blur-sm">
              {currentFeatured.category}
            </span>
          </div>

          {/* Right Side: Animated Text Content */}
          <div className="lg:col-span-7 space-y-6 z-10">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold">
                  <MapPin size={14} className="text-[#D71920]" />
                  <span>{currentFeatured.venue}</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-[900] text-[#072A6C] leading-snug tracking-tight">
                  {currentFeatured.title}
                </h3>

                <p className="text-xs text-gray-500 font-light leading-relaxed max-w-xl">
                  {currentFeatured.desc}
                </p>

                <div className="pt-4">
                  <button 
                    onClick={() => alert(`Registration details for "${currentFeatured.title}" sent to counselor office.`)}
                    className="h-11 px-7 bg-gradient-to-r from-[#D71920] to-[#b71217] text-white text-[12px] font-bold rounded-xl inline-flex items-center gap-2 hover:shadow-lg active:scale-95 transition-all cursor-pointer shadow-md hover:brightness-110"
                  >
                    Register For Event <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 🌟 UPCOMING EVENTS (APPLE-STYLE STORYTELLING SCROLL)     */}
      {/* ======================================================== */}
      <section className="bg-slate-50 border-t border-gray-200/60 py-24 relative" ref={storytellingRef}>
        <div className="max-w-[1440px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE: Large Sticky Event Poster */}
          <div className="lg:col-span-5 lg:sticky lg:top-[120px] h-[450px] rounded-3xl overflow-hidden shadow-xl bg-slate-900 border border-gray-200 relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={stickyActiveIdx}
                src={UPCOMING_EVENTS[stickyActiveIdx].image}
                alt="Active event poster"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.02, y: -30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">Storytelling Highlight</span>
              <h4 className="font-extrabold text-sm tracking-tight">{UPCOMING_EVENTS[stickyActiveIdx].title}</h4>
            </div>
          </div>

          {/* RIGHT SIDE: Scrollable Event Details */}
          <div className="lg:col-span-7 space-y-24">
            <div>
              <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">Calendar Timeline</span>
              <h2 className="text-3xl font-[800] text-[#072A6C] tracking-tight">UPCOMING EVENTS</h2>
              <p className="text-xs text-gray-400 mt-2 font-light">Scroll down to explore upcoming details. The left poster will smoothly transition based on your position.</p>
            </div>

            <div className="space-y-20">
              {UPCOMING_EVENTS.map((item, idx) => (
                <div 
                  key={item.id}
                  className="upcoming-event-item bg-white border border-gray-200/60 p-6 lg:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  {/* Subtle index tag */}
                  <span className="absolute top-6 right-6 text-2xl font-black text-gray-100">0{idx + 1}</span>

                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500">
                      <span className="text-[#D71920] flex items-center gap-1">
                        <Calendar size={13} /> {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} /> {item.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} /> {item.venue}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-[#072A6C] tracking-tight">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">{item.desc}</p>
                    
                    <div className="pt-2">
                      <button 
                        onClick={() => alert(`Details for "${item.title}" will open inside the university portal.`)}
                        className="text-[12px] font-bold text-[#072A6C] hover:text-[#D71920] flex items-center gap-1 transition-colors cursor-pointer group"
                      >
                        Read More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
