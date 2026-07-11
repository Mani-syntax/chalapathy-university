"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Phone, Mail, MapPin, Search, Globe, ChevronDown, 
  Menu, X, Share2, Camera, Users, Video 
} from "lucide-react";

export default function Header({ onToggleAi }: { onToggleAi?: () => void } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* 40px Top Header Bar with Explicit Dark Navy Background and High-Contrast Text */}
      <div className="bg-[#041E42] text-white text-[11px] h-[40px] px-6 flex justify-between items-center z-50 relative border-b border-white/10 font-sans">
        {/* Left Contact Details */}
        <div className="flex items-center gap-5">
          <a href="tel:+918886630355" className="flex items-center gap-1.5 text-zinc-100 hover:text-[#F5B400] transition-colors font-semibold">
            <Phone size={11} className="text-[#F5B400]" /> +91 88866 30355
          </a>
          <a href="mailto:admissions@chalapathiuniversity.edu.in" className="flex items-center gap-1.5 text-zinc-100 hover:text-[#F5B400] transition-colors font-semibold">
            <Mail size={11} className="text-[#F5B400]" /> admissions@chalapathiuniversity.edu.in
          </a>
          <span className="flex items-center gap-1.5 text-zinc-300 font-semibold">
            <MapPin size={11} className="text-[#F5B400]" /> Guntur, Andhra Pradesh
          </span>
        </div>

        {/* Right Portal Links & Socials */}
        <div className="flex items-center gap-4">
          <Link href="/erp?role=student" className="text-zinc-100 hover:text-[#F5B400] transition-colors font-bold">Student Login</Link>
          <span className="text-white/20">|</span>
          <Link href="/erp?role=faculty" className="text-zinc-100 hover:text-[#F5B400] transition-colors font-bold">Faculty Login</Link>
          <span className="text-white/20">|</span>
          <Link href="/alumni" className="text-zinc-100 hover:text-[#F5B400] transition-colors font-bold">Alumni</Link>
          <span className="text-white/20">|</span>
          <Link href="/careers" className="text-zinc-100 hover:text-[#F5B400] transition-colors font-bold">Careers</Link>
          <span className="text-white/20">|</span>
          
          <div className="flex items-center gap-1 cursor-pointer text-zinc-100 hover:text-[#F5B400] transition-colors font-bold">
            <Globe size={11} className="text-[#F5B400]" />
            <span>EN</span>
            <ChevronDown size={10} />
          </div>

          <span className="text-white/20">|</span>
          
          {/* Social Icons */}
          <div className="flex items-center gap-3 text-zinc-100">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5B400] transition-colors" title="Facebook">
              <Globe size={12} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5B400] transition-colors" title="Instagram">
              <Camera size={12} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5B400] transition-colors" title="LinkedIn">
              <Users size={12} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5B400] transition-colors" title="YouTube">
              <Video size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Centered and Spaced out in a Single Horizontal Row */}
      <header className={`sticky top-0 z-40 w-full bg-white transition-all duration-300 border-b border-zinc-100 shadow-md ${
        scrolled ? "py-2" : "py-3"
      }`}>
        <div className="w-full max-w-[1440px] mx-auto px-6 flex justify-between items-center gap-4 font-sans">
          
          {/* Official CITY CHALAPATHI UNIVERSITY Logo Mark & Text */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            {/* Custom SVG trace representing the official "CiTY" logo mark */}
            <svg viewBox="0 0 100 45" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* C */}
              <path d="M22 10C16 10 11 14 11 22.5C11 31 16 35 22 35C27 35 30.5 32.5 31.5 29.5H23.5V25.5H36.5V26.5C36.5 34 30.5 39 22 39C11.5 39 3.5 31.5 3.5 22.5C3.5 13.5 11.5 6 22 6C30.5 6 36 11 36.5 18H29.5C28.5 15 25 10 22 10Z" fill="#0B3D91" />
              {/* i stem */}
              <rect x="42" y="16" width="7" height="23" fill="#E11D48" />
              {/* i dot target circles */}
              <circle cx="45.5" cy="9.5" r="4.5" stroke="#E11D48" strokeWidth="1.5" />
              <circle cx="45.5" cy="9.5" r="1.5" fill="#E11D48" />
              {/* T */}
              <path d="M54 16H72V20.5H66.5V39H59.5V20.5H54V16Z" fill="#0B3D91" />
              {/* Y */}
              <path d="M74 16H81.5L88 28.5L94.5 16H102L91.5 33.5V39H84.5V33.5L74 16Z" fill="#0B3D91" />
            </svg>
            
            {/* Logo Text Elements */}
            <div className="flex flex-col text-left">
              <div className="flex items-baseline gap-1 leading-none">
                <span className="font-black text-[15px] md:text-[17px] text-[#E11D48] tracking-tight">CITY</span>
                <span className="font-black text-[12px] md:text-[13px] text-[#041E42] tracking-wide">CHALAPATHI</span>
              </div>
              <div className="bg-[#0B3D91] text-white text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 mt-0.5 rounded text-center leading-none">
                UNIVERSITY
              </div>
              <span className="block text-[7px] text-zinc-400 font-semibold tracking-wider italic mt-0.5 leading-none">
                Passion. Performance. Progress.
              </span>
            </div>
          </Link>

          {/* Centered Desktop Menu Links */}
          <nav className="hidden xl:flex items-center gap-1.5">
            {[
              { name: "About", href: "/about" },
              { name: "Admissions", href: "/admissions" },
              { name: "Academics", href: "/#schools" },
              { name: "Research", href: "/research" },
              { name: "Innovation", href: "/research#incubation" },
              { name: "Schools", href: "/#schools" },
              { name: "Campus Life", href: "/campus-life" },
              { name: "Placements", href: "/placements" },
              { name: "International", href: "/international" },
              { name: "Contact", href: "/contact" }
            ].map((menu, idx) => (
              <Link 
                key={idx} 
                href={menu.href}
                className="px-2 py-2 text-[12px] xl:text-[13px] font-bold text-[#041E42] hover:text-[#0B3D91] transition-colors rounded-lg whitespace-nowrap"
              >
                {menu.name}
              </Link>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#041E42] hover:text-[#0B3D91] rounded-full transition-colors cursor-pointer"
              title="Search"
            >
              <Search size={16} />
            </button>
            <Link 
              href="/erp" 
              className="px-3.5 py-1.5 border border-[#041E42] text-[#041E42] hover:bg-[#041E42] hover:text-white text-[11px] font-bold rounded-lg transition-all"
            >
              ERP Login
            </Link>
            <Link 
              href="/admissions/apply" 
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase text-[11px] tracking-wider rounded-lg shadow-md transition-all"
            >
              APPLY NOW
            </Link>
          </div>

          {/* Mobile Toggles */}
          <div className="flex xl:hidden items-center gap-2">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#041E42] hover:text-[#0B3D91]"
            >
              <Search size={16} />
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#041E42] hover:bg-zinc-50 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        {searchOpen && (
          <div className="absolute top-full left-0 w-full bg-[#041E42] border-t border-white/10 p-4 shadow-xl animate-slide-down">
            <div className="max-w-3xl mx-auto flex gap-2">
              <input 
                type="text" 
                placeholder="Search programs, admissions, faculty, notifications..." 
                className="flex-1 bg-white/10 text-white border border-white/20 rounded-lg px-4 py-2 text-xs focus:outline-none focus:border-[#F5B400]"
              />
              <button className="bg-[#F5B400] text-[#041E42] font-bold px-6 py-2 rounded-lg text-xs hover:bg-[#F5B400]/90 transition-colors">
                Search
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[128px] z-30 bg-[#041E42] flex flex-col p-6 overflow-y-auto xl:hidden border-t border-white/10 font-sans">
          <div className="flex flex-col gap-4 text-left">
            {[
              { name: "About", href: "/about" },
              { name: "Admissions", href: "/admissions" },
              { name: "Academics", href: "/#schools" },
              { name: "Research", href: "/research" },
              { name: "Innovation", href: "/research#incubation" },
              { name: "Schools", href: "/#schools" },
              { name: "Campus Life", href: "/campus-life" },
              { name: "Placements", href: "/placements" },
              { name: "International", href: "/international" },
              { name: "Contact", href: "/contact" }
            ].map((menu, idx) => (
              <Link 
                key={idx} 
                href={menu.href}
                className="text-zinc-200 hover:text-[#F5B400] text-sm font-bold py-2 border-b border-white/5"
              >
                {menu.name}
              </Link>
            ))}

            <div className="flex flex-col gap-3 pt-6">
              <Link 
                href="/admissions/apply"
                className="w-full text-center py-3 bg-red-600 text-white font-extrabold text-xs rounded-lg shadow-md uppercase"
              >
                Apply Now
              </Link>
              <Link 
                href="/erp"
                className="w-full text-center py-2.5 border border-white/20 text-white font-bold text-xs rounded-lg hover:border-[#F5B400]"
              >
                ERP Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
