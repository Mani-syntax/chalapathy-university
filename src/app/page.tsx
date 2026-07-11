"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { 
  GraduationCap, Users, Award, Briefcase, Globe, Microscope, 
  Play, ArrowRight, BookOpen, ShieldCheck, Heart, Scale, Cpu, 
  Palette, Hammer, Dna, Building2, Handshake, Calendar
} from "lucide-react";

// Animation settings
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FC] font-sans overflow-x-hidden">
      <Header />

      {/* 1. HERO SECTION - Clean 2-Column Bright Layout */}
      <section className="relative bg-gradient-to-br from-white via-slate-50 to-[#F8F9FC] py-16 lg:py-24 overflow-hidden border-b border-zinc-100">
        <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            className="lg:col-span-6 space-y-6 text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#041E42] leading-[1.1] tracking-tight"
              variants={fadeInUp}
            >
              Redefining Education. <br />
              <span className="text-[#B31919]">Inspiring</span> Futures.
            </motion.h1>
            
            <motion.p 
              className="text-sm md:text-base text-zinc-600 max-w-lg leading-relaxed font-medium"
              variants={fadeInUp}
            >
              At CITY Chalapathi University, we empower learners to innovate, lead and create a better tomorrow.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 pt-2 items-center"
              variants={fadeInUp}
            >
              <Link 
                href="/#schools"
                className="px-6 py-3 bg-[#B31919] hover:bg-red-800 text-white font-extrabold text-xs tracking-wider rounded-md shadow-md hover:scale-[1.02] transition-all flex items-center gap-1.5 uppercase"
              >
                Explore Programs <ArrowRight size={14} />
              </Link>
              <Link 
                href="/campus-life#tour"
                className="px-6 py-3 border border-zinc-300 text-[#041E42] hover:bg-zinc-50 font-bold text-xs rounded-md transition-all flex items-center gap-2 group"
              >
                <div className="w-5 h-5 rounded-full bg-[#041E42] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <Play size={8} className="fill-current ml-0.5" />
                </div>
                Take Campus Tour
              </Link>
              <Link 
                href="/about"
                className="text-xs font-black text-[#B31919] hover:text-red-800 flex items-center gap-0.5 ml-2 hover:underline"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Campus Building Column */}
          <motion.div 
            className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-200"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-[#041E42]/5 mix-blend-multiply z-10"></div>
            <img 
              src="/campus_hero.png" 
              alt="CITY Chalapathi University Modern Campus" 
              className="w-full h-[350px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

        </div>
      </section>

      {/* 2. FLOATING STATISTICS BAR - White Card layout, Dark Navy Metrics */}
      <section className="max-w-[1440px] mx-auto w-full px-6 -mt-10 relative z-20">
        <motion.div 
          className="bg-white border border-zinc-200/80 rounded-xl py-6 px-8 shadow-xl grid grid-cols-2 md:grid-cols-6 gap-6 divide-y md:divide-y-0 md:divide-x divide-zinc-200 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { count: "150+", label: "Programs", icon: GraduationCap },
            { count: "30,000+", label: "Students", icon: Users },
            { count: "1,200+", label: "Faculty Members", icon: Users },
            { count: "500+", label: "Recruiters", icon: Briefcase },
            { count: "250+", label: "Global Partners", icon: Globe },
            { count: "100+", label: "Research Labs", icon: Microscope }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex items-center justify-center gap-3.5 p-3 md:first:p-0 md:pl-5 first:pl-0 border-zinc-200">
                <div className="w-10 h-10 rounded-full bg-[#F8F9FC] flex items-center justify-center text-[#041E42] shrink-0 border border-zinc-100">
                  <Icon size={18} />
                </div>
                <div className="text-left">
                  <span className="block text-lg font-black text-[#041E42] tracking-tight leading-none">{stat.count}</span>
                  <span className="block text-[10px] text-zinc-500 font-extrabold uppercase tracking-wider mt-1">{stat.label}</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </section>

      {/* 3. EXPLORE OUR SCHOOLS & ADMISSIONS OPEN 2026 */}
      <section id="schools" className="py-20 max-w-[1440px] mx-auto w-full px-6 space-y-8">
        
        <div className="flex justify-between items-end border-b border-zinc-200 pb-4">
          <div className="space-y-1 text-left">
            <h2 className="text-2xl font-black text-[#041E42] uppercase tracking-tight">Explore Our Schools</h2>
          </div>
          <Link 
            href="/schools" 
            className="text-xs font-black text-[#B31919] hover:underline flex items-center gap-0.5"
          >
            View All Schools <ArrowRight size={14} />
          </Link>
        </div>

        {/* Layout: Grid of Schools and red Admissions Open 2026 card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Engineering */}
          <Link href="/schools/school-of-engineering" className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between">
            <div>
              <div className="h-[140px] relative overflow-hidden bg-slate-100">
                <img src="/campus_hero.png" alt="Engineering" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 relative">
                {/* Circular Overlapping Icon */}
                <div className="absolute -top-6 left-4 w-10 h-10 rounded-full bg-[#B31919] text-white flex items-center justify-center border-2 border-white shadow-md">
                  <Cpu size={16} />
                </div>
                <h3 className="font-extrabold text-sm text-[#041E42] mt-4">School of Engineering</h3>
              </div>
            </div>
            <div className="p-4 pt-0 text-left">
              <span className="text-[11px] font-bold text-[#B31919] group-hover:underline flex items-center gap-0.5">Explore Programs <ChevronRight size={12} className="inline" /></span>
            </div>
          </Link>

          {/* Card 2: Management */}
          <Link href="/schools/school-of-management" className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between">
            <div>
              <div className="h-[140px] relative overflow-hidden bg-slate-100">
                <img src="/campus_hero.png" alt="Management" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 relative">
                <div className="absolute -top-6 left-4 w-10 h-10 rounded-full bg-[#F5B400] text-white flex items-center justify-center border-2 border-white shadow-md">
                  <Briefcase size={16} />
                </div>
                <h3 className="font-extrabold text-sm text-[#041E42] mt-4">School of Management</h3>
              </div>
            </div>
            <div className="p-4 pt-0 text-left">
              <span className="text-[11px] font-bold text-[#B31919] group-hover:underline flex items-center gap-0.5">Explore Programs <ChevronRight size={12} className="inline" /></span>
            </div>
          </Link>

          {/* Card 3: Pharmacy */}
          <Link href="/schools/school-of-pharmacy" className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between">
            <div>
              <div className="h-[140px] relative overflow-hidden bg-slate-100">
                <img src="/campus_hero.png" alt="Pharmacy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 relative">
                <div className="absolute -top-6 left-4 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center border-2 border-white shadow-md">
                  <Dna size={16} />
                </div>
                <h3 className="font-extrabold text-sm text-[#041E42] mt-4">School of Pharmacy</h3>
              </div>
            </div>
            <div className="p-4 pt-0 text-left">
              <span className="text-[11px] font-bold text-[#B31919] group-hover:underline flex items-center gap-0.5">Explore Programs <ChevronRight size={12} className="inline" /></span>
            </div>
          </Link>

          {/* Card 4: Law */}
          <Link href="/schools/school-of-law" className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between">
            <div>
              <div className="h-[140px] relative overflow-hidden bg-slate-100">
                <img src="/campus_hero.png" alt="Law" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 relative">
                <div className="absolute -top-6 left-4 w-10 h-10 rounded-full bg-amber-700 text-white flex items-center justify-center border-2 border-white shadow-md">
                  <Hammer size={16} />
                </div>
                <h3 className="font-extrabold text-sm text-[#041E42] mt-4">School of Law</h3>
              </div>
            </div>
            <div className="p-4 pt-0 text-left">
              <span className="text-[11px] font-bold text-[#B31919] group-hover:underline flex items-center gap-0.5">Explore Programs <ChevronRight size={12} className="inline" /></span>
            </div>
          </Link>

          {/* Card 5: Sciences */}
          <Link href="/schools/school-of-health-sciences" className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between">
            <div>
              <div className="h-[140px] relative overflow-hidden bg-slate-100">
                <img src="/campus_hero.png" alt="Sciences" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 relative">
                <div className="absolute -top-6 left-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center border-2 border-white shadow-md">
                  <Microscope size={16} />
                </div>
                <h3 className="font-extrabold text-sm text-[#041E42] mt-4">School of Sciences</h3>
              </div>
            </div>
            <div className="p-4 pt-0 text-left">
              <span className="text-[11px] font-bold text-[#B31919] group-hover:underline flex items-center gap-0.5">Explore Programs <ChevronRight size={12} className="inline" /></span>
            </div>
          </Link>

          {/* Card 6: Design */}
          <Link href="/schools/school-of-humanities" className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between">
            <div>
              <div className="h-[140px] relative overflow-hidden bg-slate-100">
                <img src="/campus_hero.png" alt="Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 relative">
                <div className="absolute -top-6 left-4 w-10 h-10 rounded-full bg-red-700 text-white flex items-center justify-center border-2 border-white shadow-md">
                  <Palette size={16} />
                </div>
                <h3 className="font-extrabold text-sm text-[#041E42] mt-4">School of Design</h3>
              </div>
            </div>
            <div className="p-4 pt-0 text-left">
              <span className="text-[11px] font-bold text-[#B31919] group-hover:underline flex items-center gap-0.5">Explore Programs <ChevronRight size={12} className="inline" /></span>
            </div>
          </Link>

          {/* Card 7: AI & Data Science */}
          <Link href="/schools/school-of-artificial-intelligence" className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between">
            <div>
              <div className="h-[140px] relative overflow-hidden bg-slate-100">
                <img src="/campus_hero.png" alt="AI & Data Science" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 relative">
                <div className="absolute -top-6 left-4 w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center border-2 border-white shadow-md">
                  <Cpu size={16} />
                </div>
                <h3 className="font-extrabold text-sm text-[#041E42] mt-4">School of AI & Data Science</h3>
              </div>
            </div>
            <div className="p-4 pt-0 text-left">
              <span className="text-[11px] font-bold text-[#B31919] group-hover:underline flex items-center gap-0.5">Explore Programs <ChevronRight size={12} className="inline" /></span>
            </div>
          </Link>

          {/* Card 8: Tall Crimson Admissions Open Card */}
          <div className="relative rounded-xl overflow-hidden shadow-md bg-[#B31919] text-white p-6 flex flex-col justify-between border border-red-800">
            {/* Outline vector representation of university dome */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-32 h-32">
              <Building2 size={128} />
            </div>

            <div className="space-y-3 relative z-10 text-left">
              <h3 className="text-xl font-black tracking-tight uppercase leading-tight">Admissions Open 2026</h3>
              <p className="text-xs text-red-100 leading-relaxed font-medium">
                Join a community of innovators and leaders. Your future starts here.
              </p>
            </div>

            <div className="pt-6 relative z-10 text-left">
              <Link 
                href="/admissions/apply"
                className="inline-flex items-center gap-1 bg-white text-[#B31919] hover:bg-zinc-100 font-extrabold text-xs px-5 py-2.5 rounded-md shadow transition-all uppercase"
              >
                Apply Now <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. NEWS & EVENTS + RANKINGS & ACCREDITATIONS */}
      <section className="max-w-[1440px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-zinc-200/60">
        
        {/* Column 1: News & Events (Left 5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex justify-between items-baseline border-b border-zinc-200 pb-3">
            <h3 className="text-sm font-black text-[#041E42] uppercase tracking-wider">News & Events</h3>
            <Link href="/news" className="text-xs font-black text-[#B31919] hover:underline">View All News →</Link>
          </div>

          <div className="space-y-4">
            {[
              { date: "12 MAY", title: "CITY University Launches AI & Robotics Center" },
              { date: "08 MAY", title: "International Conference on Innovation 2026" },
              { date: "03 MAY", title: "Students Win National Hackathon 2026" }
            ].map((row, idx) => (
              <div key={idx} className="flex gap-4 items-start text-xs border-b border-zinc-100/60 pb-4 last:border-0 last:pb-0 text-left">
                <div className="bg-[#B31919] text-white rounded p-2 text-center shrink-0 w-12 text-[10px] font-black uppercase leading-tight shadow-sm">
                  {row.date.split(" ")[0]} <br /> {row.date.split(" ")[1]}
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-zinc-800 leading-snug hover:text-[#B31919] cursor-pointer transition-colors">{row.title}</h4>
                  <Link href="/news" className="text-[10px] font-bold text-[#B31919] hover:underline block">Read More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Rankings & Accreditations (Right 7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="border-b border-zinc-200 pb-3 text-left">
            <h3 className="text-sm font-black text-[#041E42] uppercase tracking-wider">Rankings & Accreditations</h3>
          </div>
          
          {/* Horizontal layout of badges */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 text-center">
            {[
              { tag: "NAAC A+", desc: "Accredited" },
              { tag: "NIRF", desc: "Ranked" },
              { tag: "ARIIA", desc: "Top Performer" },
              { tag: "NBA", desc: "Accredited" },
              { tag: "UGC", desc: "Recognized" },
              { tag: "AICTE", desc: "Approved" }
            ].map((badge, idx) => (
              <div key={idx} className="p-3 bg-white border border-zinc-200 rounded-lg flex flex-col items-center justify-center space-y-1 shadow-sm hover:shadow transition-shadow">
                <div className="w-8 h-8 rounded-full bg-[#F8F9FC] flex items-center justify-center text-[#B31919] font-black text-[9px] shrink-0 border border-zinc-100">
                  CU
                </div>
                <span className="block text-[11px] font-black text-[#041E42] tracking-tight leading-none mt-1">{badge.tag}</span>
                <span className="block text-[7px] text-zinc-400 font-extrabold uppercase mt-0.5">{badge.desc}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 5. RED BOTTOM STRIP */}
      <section className="bg-[#B31919] text-white py-6 px-6 relative z-10 border-t border-red-800">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          
          {/* Left Core Pillars */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-[11px] font-black uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Building2 size={16} className="text-red-100" />
              <span>Modern Infrastructure</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-red-100" />
              <span>Global Exposure</span>
            </div>
            <div className="flex items-center gap-2">
              <Microscope size={16} className="text-red-100" />
              <span>Research Excellence</span>
            </div>
            <div className="flex items-center gap-2">
              <Handshake size={16} className="text-red-100" />
              <span>Industry Connect</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={16} className="text-red-100" />
              <span>Vibrant Campus Life</span>
            </div>
          </div>

          {/* Right Signature Quote & Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-right shrink-0">
            <div className="leading-tight">
              <span className="block text-xs font-bold italic">“Learn Today. Lead Tomorrow.”</span>
              <span className="block text-[10px] text-red-100 font-medium">Be part of a legacy of excellence and innovation.</span>
            </div>
            <Link 
              href="/about"
              className="px-5 py-2 bg-white text-[#B31919] hover:bg-zinc-100 font-extrabold text-[11px] tracking-wider rounded-full shadow-md uppercase transition-all"
            >
              Discover More →
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

// Chevron Down/Right helper
function ChevronRight({ size, className }: { size?: number, className?: string }) {
  return (
    <svg 
      className={className} 
      width={size || 14} 
      height={size || 14} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
