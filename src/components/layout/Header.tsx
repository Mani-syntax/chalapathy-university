"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MapPin, Search, ChevronDown, Menu, X,
  Globe, Camera, Users, Video, User, Award, Briefcase, Phone,
} from "lucide-react";

export default function Header({ onToggleAi }: { onToggleAi?: () => void } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const topLinks = [
    { label: "Student Login", href: "/erp?role=student", icon: User },
    { label: "Faculty Login", href: "/erp?role=faculty", icon: Users },
    { label: "Alumni", href: "/alumni", icon: Award },
    { label: "Careers", href: "/careers", icon: Briefcase },
    { label: "Contact Us", href: "/contact", icon: Phone },
  ];

  const navLinks = [
    "About Us", "Admissions", "Academics", "Research",
    "Schools", "Campus Life", "Placements", "International",
  ];

  const navHrefs: Record<string, string> = {
    "About Us": "/about",
    "Admissions": "/admissions",
    "Academics": "/#schools",
    "Research": "/research",
    "Schools": "/#schools",
    "Campus Life": "/campus-life",
    "Placements": "/placements",
    "International": "/international",
  };

  return (
    <>
      {/* ═══════ SECTION 1: TOP HEADER BAR ═══════ */}
      <div className="w-full h-10 bg-white border-b border-[#E5E7EB] text-[11px] font-medium text-[#222] select-none z-50 relative">
        <div className="max-w-[1340px] mx-auto h-full px-5 flex items-center justify-between">
          {/* Left links */}
          <div className="hidden md:flex items-center gap-1">
            {topLinks.map((l, i) => (
              <React.Fragment key={l.label}>
                {i > 0 && <span className="mx-1.5 text-[#D1D5DB]">|</span>}
                <Link
                  href={l.href}
                  className="flex items-center gap-1 text-[#444] hover:text-[#D91E18] transition-colors"
                >
                  <l.icon size={11} strokeWidth={2} />
                  {l.label}
                </Link>
              </React.Fragment>
            ))}
          </div>
          {/* Right info */}
          <div className="hidden md:flex items-center gap-3">
            <span className="flex items-center gap-1 text-[#444]">
              <MapPin size={11} className="text-[#D91E18]" />
              Guntur, Andhra Pradesh, India
            </span>
            <span className="text-[#D1D5DB]">|</span>
            <button className="flex items-center gap-0.5 text-[#444] hover:text-[#D91E18] transition-colors">
              EN <ChevronDown size={10} />
            </button>
            <span className="text-[#D1D5DB]">|</span>
            <div className="flex items-center gap-2.5 text-[#444]">
              <a href="#" className="hover:text-[#D91E18] transition-colors"><Globe size={12} /></a>
              <a href="#" className="hover:text-[#D91E18] transition-colors"><Camera size={12} /></a>
              <a href="#" className="hover:text-[#D91E18] transition-colors"><Users size={12} /></a>
              <a href="#" className="hover:text-[#D91E18] transition-colors"><Video size={12} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ SECTION 2: MAIN HEADER ═══════ */}
      <header
        className={`sticky top-0 z-40 w-full bg-white transition-all duration-300 ${
          scrolled ? "shadow-lg h-[70px]" : "h-[85px]"
        }`}
        style={{ borderBottom: "1px solid #E8E8E8" }}
      >
        <div className="max-w-[1340px] mx-auto h-full px-5 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <svg viewBox="0 0 100 45" className={`${scrolled ? "h-9" : "h-10"} w-auto transition-all`} fill="none">
              <path d="M22 10C16 10 11 14 11 22.5C11 31 16 35 22 35C27 35 30.5 32.5 31.5 29.5H23.5V25.5H36.5V26.5C36.5 34 30.5 39 22 39C11.5 39 3.5 31.5 3.5 22.5C3.5 13.5 11.5 6 22 6C30.5 6 36 11 36.5 18H29.5C28.5 15 25 10 22 10Z" fill="#0B3D91"/>
              <rect x="42" y="16" width="7" height="23" fill="#D91E18"/>
              <circle cx="45.5" cy="9.5" r="4.5" stroke="#D91E18" strokeWidth="1.5"/>
              <circle cx="45.5" cy="9.5" r="1.5" fill="#D91E18"/>
              <path d="M54 16H72V20.5H66.5V39H59.5V20.5H54V16Z" fill="#0B3D91"/>
              <path d="M74 16H81.5L88 28.5L94.5 16H102L91.5 33.5V39H84.5V33.5L74 16Z" fill="#0B3D91"/>
            </svg>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5 leading-none">
                <span className="font-[var(--font-poppins)] font-extrabold text-[20px] text-[#D91E18] tracking-tight">CITY</span>
                <span className="font-[var(--font-poppins)] font-extrabold text-[14px] text-[#081A36] tracking-wide">CHALAPATHI</span>
              </div>
              <span className="font-[var(--font-poppins)] font-extrabold text-[11px] text-[#081A36] tracking-[0.18em] leading-none mt-0.5">
                UNIVERSITY
              </span>
              <span className="text-[7.5px] text-[#0B3D91] font-bold tracking-[0.22em] mt-1 leading-none flex items-center gap-1">
                LEARN • INNOVATE • LEAD
                <span className="text-[#D91E18] text-[9px]">→</span>
              </span>
            </div>
          </Link>

          {/* Center nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((name) => (
              <Link
                key={name}
                href={navHrefs[name]}
                className="px-3 py-2 text-[13px] font-semibold text-[#1A1A1A] hover:text-[#D91E18] transition-colors whitespace-nowrap"
              >
                {name}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-9 h-9 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#444] hover:text-[#D91E18] hover:border-[#D91E18] transition-colors cursor-pointer"
            >
              <Search size={15} />
            </button>
            <Link
              href="/erp"
              className="h-9 px-5 bg-[#D91E18] hover:bg-[#b71612] text-white text-[12px] font-bold rounded-lg inline-flex items-center justify-center transition-colors shadow-sm"
            >
              ERP Login
            </Link>
            <Link
              href="/admissions/apply"
              className="h-9 px-5 bg-[#081A36] hover:bg-[#0d2347] text-white text-[12px] font-bold rounded-lg inline-flex items-center justify-center transition-colors shadow-sm"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex xl:hidden items-center gap-2">
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 text-[#444]"><Search size={16} /></button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-[#444]">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search overlay */}
        {searchOpen && (
          <div className="absolute top-full left-0 w-full bg-[#081A36] p-4 shadow-xl z-50 animate-slide-down">
            <div className="max-w-2xl mx-auto flex gap-2">
              <input
                type="text"
                placeholder="Search programs, faculty, events..."
                className="flex-1 bg-white/10 text-white border border-white/20 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#D91E18] placeholder:text-white/50"
              />
              <button className="bg-[#D91E18] text-white font-bold px-6 py-2.5 rounded-lg text-sm hover:bg-[#b71612] transition-colors">
                Search
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[125px] z-30 bg-white flex flex-col p-6 overflow-y-auto xl:hidden shadow-2xl">
          {navLinks.map((name) => (
            <Link
              key={name}
              href={navHrefs[name]}
              className="text-[15px] font-semibold text-[#222] hover:text-[#D91E18] py-3 border-b border-[#F0F0F0] transition-colors"
            >
              {name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-8">
            <Link href="/admissions/apply" className="w-full text-center py-3 bg-[#081A36] text-white font-bold text-sm rounded-lg">Apply Now</Link>
            <Link href="/erp" className="w-full text-center py-3 bg-[#D91E18] text-white font-bold text-sm rounded-lg">ERP Login</Link>
          </div>
        </div>
      )}
    </>
  );
}
