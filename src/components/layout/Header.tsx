"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  User, Users, Award, Briefcase, Phone, MapPin, 
  Search, Globe, ChevronDown, Menu, X, ArrowRight, Camera, Video
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
      {/* Top Header Bar - Light Gray Background, Dark Gray Text */}
      <div className="bg-[#F8F9FC] text-[#4A5568] text-[11px] h-[40px] px-6 flex justify-between items-center z-50 relative border-b border-zinc-200 font-sans">
        
        {/* Left Side Spaced Out Portals */}
        <div className="flex items-center gap-4">
          <Link href="/erp?role=student" className="flex items-center gap-1 hover:text-[#B31919] transition-colors font-semibold">
            <User size={12} className="text-[#4A5568]" /> Student Login
          </Link>
          <span className="text-zinc-300">|</span>
          <Link href="/erp?role=faculty" className="flex items-center gap-1 hover:text-[#B31919] transition-colors font-semibold">
            <Users size={12} className="text-[#4A5568]" /> Faculty Login
          </Link>
          <span className="text-zinc-300">|</span>
          <Link href="/alumni" className="flex items-center gap-1 hover:text-[#B31919] transition-colors font-semibold">
            <Award size={12} className="text-[#4A5568]" /> Alumni
          </Link>
          <span className="text-zinc-300">|</span>
          <Link href="/careers" className="flex items-center gap-1 hover:text-[#B31919] transition-colors font-semibold">
            <Briefcase size={12} className="text-[#4A5568]" /> Careers
          </Link>
          <span className="text-zinc-300">|</span>
          <Link href="/contact" className="flex items-center gap-1 hover:text-[#B31919] transition-colors font-semibold">
            <Phone size={12} className="text-[#4A5568]" /> Contact Us
          </Link>
        </div>

        {/* Right Side Info & Socials */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-[#4A5568] font-semibold">
            <MapPin size={12} className="text-[#B31919]" /> Guntur, Andhra Pradesh, India
          </span>
          <span className="text-zinc-300">|</span>
          
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#B31919] transition-colors font-semibold">
            <span>EN</span>
            <ChevronDown size={10} />
          </div>

          <span className="text-zinc-300">|</span>
          
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B31919] transition-colors" title="Facebook">
              <Globe size={12} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B31919] transition-colors" title="Instagram">
              <Camera size={12} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B31919] transition-colors" title="LinkedIn">
              <Users size={12} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B31919] transition-colors" title="YouTube">
              <Video size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Spaced out in a Single Horizontal Row */}
      <header className={`sticky top-0 z-40 w-full bg-white transition-all duration-300 border-b border-zinc-100 shadow-md ${
        scrolled ? "py-2" : "py-3.5"
      }`}>
        <div className="w-full max-w-[1440px] mx-auto px-6 flex justify-between items-center gap-4 font-sans">
          
          {/* Logo Mark & Text */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            {/* Styled "CiTY" logo mark */}
            <svg viewBox="0 0 100 45" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 10C16 10 11 14 11 22.5C11 31 16 35 22 35C27 35 30.5 32.5 31.5 29.5H23.5V25.5H36.5V26.5C36.5 34 30.5 39 22 39C11.5 39 3.5 31.5 3.5 22.5C3.5 13.5 11.5 6 22 6C30.5 6 36 11 36.5 18H29.5C28.5 15 25 10 22 10Z" fill="#0B3D91" />
              <rect x="42" y="16" width="7" height="23" fill="#B31919" />
              <circle cx="45.5" cy="9.5" r="4.5" stroke="#B31919" strokeWidth="1.5" />
              <circle cx="45.5" cy="9.5" r="1.5" fill="#B31919" />
              <path d="M54 16H72V20.5H66.5V39H59.5V20.5H54V16Z" fill="#0B3D91" />
              <path d="M74 16H81.5L88 28.5L94.5 16H102L91.5 33.5V39H84.5V33.5L74 16Z" fill="#0B3D91" />
            </svg>
            
            {/* Brand details */}
            <div className="flex flex-col text-left">
              <div className="flex items-baseline gap-1 leading-none">
                <span className="font-black text-xl text-[#B31919] tracking-tight">CITY</span>
                <span className="font-extrabold text-[13px] text-[#041E42] tracking-wide">CHALAPATHI</span>
              </div>
              <span className="block text-[11px] text-[#041E42] font-black uppercase tracking-widest mt-0.5 leading-none">
                UNIVERSITY
              </span>
              <div className="flex items-center gap-1 text-[7px] text-[#0B3D91] font-bold tracking-widest mt-1 leading-none uppercase">
                <span>Learn • Innovate • Lead</span>
                <span className="text-[#B31919] font-black">→</span>
              </div>
            </div>
          </Link>

          {/* Center Links (8 links) */}
          <nav className="hidden xl:flex items-center gap-1.5">
            {[
              { name: "About Us", href: "/about" },
              { name: "Admissions", href: "/admissions" },
              { name: "Academics", href: "/#schools" },
              { name: "Research", href: "/research" },
              { name: "Schools", href: "/#schools" },
              { name: "Campus Life", href: "/campus-life" },
              { name: "Placements", href: "/placements" },
              { name: "International", href: "/international" }
            ].map((menu, idx) => (
              <Link 
                key={idx} 
                href={menu.href}
                className="px-3 py-2 text-[13px] font-bold text-[#1A202C] hover:text-[#B31919] transition-colors rounded-lg whitespace-nowrap"
              >
                {menu.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#4A5568] hover:text-[#B31919] rounded-full transition-colors cursor-pointer"
              title="Search"
            >
              <Search size={16} />
            </button>
            
            {/* Solid Crimson Red ERP Login Button */}
            <Link 
              href="/erp" 
              className="px-4 py-2 bg-[#B31919] hover:bg-red-800 text-white text-xs font-extrabold rounded-md shadow-sm transition-all"
            >
              ERP Login
            </Link>
            
            {/* Solid Charcoal Black Apply Now Button */}
            <Link 
              href="/admissions/apply" 
              className="px-4.5 py-2 bg-[#1E2229] hover:bg-[#2C313B] text-white font-extrabold text-xs tracking-wider rounded-md shadow-sm transition-all"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Navigation Toggles */}
          <div className="flex xl:hidden items-center gap-2">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#4A5568] hover:text-[#B31919]"
            >
              <Search size={16} />
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4A5568] hover:bg-zinc-50 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        {searchOpen && (
          <div className="absolute top-full left-0 w-full bg-[#1E2229] border-t border-white/10 p-4 shadow-xl animate-slide-down">
            <div className="max-w-3xl mx-auto flex gap-2">
              <input 
                type="text" 
                placeholder="Search programs, admissions, faculty, notifications..." 
                className="flex-1 bg-white/10 text-white border border-white/20 rounded-lg px-4 py-2 text-xs focus:outline-none focus:border-[#B31919]"
              />
              <button className="bg-[#B31919] text-white font-bold px-6 py-2 rounded-lg text-xs hover:bg-red-800 transition-colors">
                Search
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[128px] z-30 bg-[#1E2229] flex flex-col p-6 overflow-y-auto xl:hidden border-t border-white/10 font-sans">
          <div className="flex flex-col gap-4 text-left">
            {[
              { name: "About Us", href: "/about" },
              { name: "Admissions", href: "/admissions" },
              { name: "Academics", href: "/#schools" },
              { name: "Research", href: "/research" },
              { name: "Schools", href: "/#schools" },
              { name: "Campus Life", href: "/campus-life" },
              { name: "Placements", href: "/placements" },
              { name: "International", href: "/international" }
            ].map((menu, idx) => (
              <Link 
                key={idx} 
                href={menu.href}
                className="text-zinc-200 hover:text-[#B31919] text-sm font-bold py-2 border-b border-white/5"
              >
                {menu.name}
              </Link>
            ))}

            <div className="flex flex-col gap-3 pt-6">
              <Link 
                href="/admissions/apply"
                className="w-full text-center py-3 bg-[#1E2229] text-white font-extrabold text-xs rounded-lg shadow-md"
              >
                Apply Now
              </Link>
              <Link 
                href="/erp"
                className="w-full text-center py-2.5 bg-[#B31919] text-white font-bold text-xs rounded-lg"
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
