"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIAssistant from "@/components/features/AIAssistant";
import { motion } from "framer-motion";
import { 
  GraduationCap, BookOpen, Microscope, Award, Globe, 
  ChevronRight, Play, Eye, FileDown, Headset, Calendar, 
  ArrowRight, ShieldCheck, Heart, Scale, Users, Cpu, Rocket 
} from "lucide-react";

// Fade in viewport animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [aiOpen, setAiOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FC] font-sans overflow-x-hidden">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-between overflow-hidden bg-[#041E42]">
        {/* Background Image with Dark Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out scale-105"
          style={{ backgroundImage: `url('/campus_hero.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#041E42] via-[#041E42]/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-10">
          
          {/* Left Content Column */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight"
              variants={fadeInUp}
            >
              Empowering <br />
              <span className="text-[#F5B400]">Future Leaders</span> <br />
              Through Innovation
            </motion.h1>
            
            <motion.p 
              className="text-sm md:text-base text-zinc-300 max-w-lg leading-relaxed font-medium"
              variants={fadeInUp}
            >
              A globally connected university shaping innovators, researchers and leaders of tomorrow.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 pt-2"
              variants={fadeInUp}
            >
              <Link 
                href="/admissions/apply"
                className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs tracking-wider rounded-lg shadow-lg hover:scale-[1.03] transition-all flex items-center gap-1.5 uppercase"
              >
                Apply Now <ArrowRight size={14} />
              </Link>
              <Link 
                href="/#schools"
                className="px-6 py-3.5 border-2 border-white text-white hover:bg-white hover:text-[#041E42] font-bold text-xs rounded-lg transition-all"
              >
                Explore Programs
              </Link>
              <Link 
                href="/campus-life#tour"
                className="px-6 py-3.5 border-2 border-white/30 text-white hover:border-white bg-white/5 backdrop-blur-sm hover:bg-white/10 font-bold text-xs rounded-lg transition-all flex items-center gap-2 group"
              >
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#041E42] shrink-0 group-hover:scale-110 transition-transform">
                  <Play size={10} className="fill-current ml-0.5" />
                </div>
                Virtual Campus Tour
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 2. FLOATING STATISTICS BAR */}
      <section className="max-w-7xl mx-auto w-full px-6 -mt-16 relative z-20 font-sans">
        <motion.div 
          className="bg-[#041E42] border border-white/10 rounded-2xl md:rounded-3xl py-7 px-8 text-white shadow-2xl grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { count: "150+", label: "Programs", icon: GraduationCap },
            { count: "30,000+", label: "Students", icon: Users },
            { count: "1,000+", label: "Faculty", icon: Users },
            { count: "500+", label: "Recruiters", icon: Award },
            { count: "250+", label: "International Partners", icon: Globe }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center justify-center p-3 md:first:p-0 md:pl-6 first:pl-0 border-white/10">
                <Icon className="text-[#F5B400] mb-2.5 opacity-90" size={22} />
                <span className="block text-xl md:text-2xl font-black text-white tracking-tight">{stat.count}</span>
                <span className="block text-[10px] text-zinc-400 font-extrabold uppercase tracking-wider mt-1">{stat.label}</span>
              </div>
            );
          })}
        </motion.div>
      </section>

      {/* 3. WHY CHOOSE CITY UNIVERSITY */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F5B400]">Elite Standards</span>
          <h2 className="text-3xl font-black text-[#041E42] tracking-tight uppercase">
            Why Choose <span className="text-red-600">CITY</span> University?
          </h2>
          <div className="w-16 h-1 bg-[#F5B400] mx-auto rounded-full"></div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { title: "AI Enabled Learning", desc: "Smart classrooms and personalized learning experiences.", icon: Cpu },
            { title: "Global Curriculum", desc: "Industry aligned programs with global academic standards.", icon: Globe },
            { title: "Industry Ready Programs", desc: "Skill based education designed with leading industries.", icon: GraduationCap },
            { title: "Research Excellence", desc: "World-class research labs and centers of excellence.", icon: Microscope },
            { title: "Startup Incubation", desc: "Support for ideas, innovation and entrepreneurship.", icon: Rocket },
            { title: "International Exchange", desc: "Global partnerships and student exchange opportunities.", icon: Users }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                variants={fadeInUp}
              >
                <div className="w-10 h-10 rounded-xl bg-[#0B3D91]/5 text-[#0B3D91] flex items-center justify-center mb-4.5 group-hover:bg-[#F5B400] group-hover:text-[#041E42] transition-colors duration-300">
                  <Icon size={20} />
                </div>
                <h4 className="font-extrabold text-sm text-[#041E42] group-hover:text-[#0B3D91] transition-colors">{item.title}</h4>
                <p className="text-xs text-zinc-500 mt-2 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* 4. OUR SCHOOLS SECTION */}
      <section id="schools" className="bg-white py-24 border-y border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          
          <div className="flex justify-between items-end border-b border-zinc-100 pb-4">
            <div className="space-y-1 text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F5B400]">Academic Disciplines</span>
              <h2 className="text-2xl md:text-3xl font-black text-[#041E42] uppercase">Our Schools</h2>
            </div>
            <Link 
              href="/schools" 
              className="text-xs font-bold text-[#0B3D91] hover:text-[#F5B400] transition-colors flex items-center gap-0.5"
            >
              View All Schools <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "School of Engineering", slug: "school-of-engineering", color: "from-blue-900/90 to-indigo-950/90" },
              { name: "School of Management", slug: "school-of-management", color: "from-red-900/90 to-rose-950/90" },
              { name: "School of Pharmacy", slug: "school-of-pharmacy", color: "from-emerald-900/90 to-teal-950/90" },
              { name: "School of Law", slug: "school-of-law", color: "from-purple-900/90 to-indigo-950/90" },
              { name: "School of Medical Sciences", slug: "school-of-health-sciences", color: "from-teal-900/90 to-cyan-950/90" },
              { name: "School of Agriculture", slug: "school-of-agriculture", color: "from-green-900/90 to-emerald-950/90" },
              { name: "School of Design", slug: "school-of-humanities", color: "from-amber-900/90 to-orange-950/90" },
              { name: "School of AI & Data Science", slug: "school-of-artificial-intelligence", color: "from-slate-900/90 to-zinc-950/90" }
            ].map((school, idx) => (
              <Link 
                key={idx} 
                href={`/schools/${school.slug}`}
                className="relative h-[180px] rounded-2xl overflow-hidden shadow-sm group cursor-pointer block"
              >
                {/* Background image mockup with gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${school.color} z-10 transition-opacity duration-300 group-hover:opacity-90`}></div>
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-100 group-hover:scale-105"
                  style={{ backgroundImage: `url('/campus_hero.png')` }}
                ></div>

                {/* Card Content */}
                <div className="absolute inset-0 z-20 p-5 flex flex-col justify-between text-white">
                  <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center">
                    <GraduationCap size={16} className="text-[#F5B400]" />
                  </div>
                  <div className="flex justify-between items-end">
                    <h3 className="font-extrabold text-xs max-w-[150px] leading-snug">{school.name}</h3>
                    <div className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-[#F5B400] group-hover:text-[#041E42] transition-colors">
                      <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 5. RESEARCH & PLACEMENTS */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Research Column */}
        <div className="bg-white border border-zinc-100 rounded-3xl p-8 shadow-sm space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-lg font-black text-[#041E42] border-b border-zinc-100 pb-3 uppercase">Research & Innovation</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { count: "120+", label: "Research Labs" },
                { count: "450+", label: "Patents Filed" },
                { count: "900+", label: "Publications" },
                { count: "40+", label: "Centres of Excellence" }
              ].map((res, idx) => (
                <div key={idx} className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl text-center">
                  <span className="block text-xl font-black text-[#0B3D91]">{res.count}</span>
                  <span className="block text-[10px] text-zinc-500 font-extrabold uppercase mt-1 tracking-wide">{res.label}</span>
                </div>
              ))}
            </div>
          </div>
          <Link 
            href="/research"
            className="w-fit px-5 py-2.5 bg-[#041E42] hover:bg-[#F5B400] hover:text-[#041E42] text-white text-xs font-bold rounded-lg shadow transition-all uppercase"
          >
            Explore Research
          </Link>
        </div>

        {/* Placements Column */}
        <div className="bg-white border border-zinc-100 rounded-3xl p-8 shadow-sm space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex justify-between items-baseline border-b border-zinc-100 pb-3">
              <h3 className="text-lg font-black text-[#041E42] uppercase">Placements</h3>
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Top Recruiters from around the world</span>
            </div>

            {/* Recruiter Logos */}
            <div className="grid grid-cols-3 gap-4 text-center">
              {["Google", "Microsoft", "Amazon", "Oracle", "Infosys", "TCS"].map((logo, idx) => (
                <div key={idx} className="py-2.5 px-4 bg-zinc-50 border border-zinc-100 rounded-xl font-black text-zinc-400 text-xs tracking-wider">
                  {logo}
                </div>
              ))}
            </div>

            {/* Placement stats */}
            <div className="grid grid-cols-3 gap-2 border-t border-zinc-100 pt-4">
              <div>
                <span className="block text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Highest Package</span>
                <span className="block text-md font-black text-[#041E42] mt-1">₹ 52 LPA</span>
              </div>
              <div>
                <span className="block text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Average Package</span>
                <span className="block text-md font-black text-[#041E42] mt-1">₹ 8.6 LPA</span>
              </div>
              <div>
                <span className="block text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Placement Rate</span>
                <span className="block text-md font-black text-emerald-600 mt-1">92% Placed</span>
              </div>
            </div>
          </div>

          <Link 
            href="/placements"
            className="w-fit px-5 py-2.5 bg-[#041E42] hover:bg-[#F5B400] hover:text-[#041E42] text-white text-xs font-bold rounded-lg shadow transition-all uppercase"
          >
            Placement Highlights
          </Link>
        </div>

      </section>

      {/* 6. CAMPUS LIFE SECTION */}
      <section className="relative py-24 flex items-center justify-center bg-[#041E42] overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/campus_life_bg.png')` }}
        >
          <div className="absolute inset-0 bg-[#041E42]/85 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-5xl mx-auto w-full px-6 relative z-10 flex flex-col items-center text-center space-y-10 font-sans">
          
          <div className="space-y-4">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F5B400]">Student Life</span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              CAMPUS LIFE: Experience Beyond Classrooms
            </h2>
            <p className="text-xs md:text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed">
              From state-of-the-art facilities to a vibrant student life, every moment at CITY is a step towards growth.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl border-y border-white/10 py-6">
            {[
              { count: "100+", label: "Clubs & Committees" },
              { count: "20+", label: "Sports Facilities" },
              { count: "24/7", label: "Wi-Fi Campus" },
              { count: "Modern", label: "Hostels & Amenities" }
            ].map((stat, idx) => (
              <div key={idx}>
                <span className="block text-xl md:text-2xl font-black text-[#F5B400]">{stat.count}</span>
                <span className="block text-[10px] text-zinc-400 font-extrabold uppercase tracking-wider mt-1">{stat.label}</span>
              </div>
            ))}
          </div>

          <Link 
            href="/campus-life"
            className="px-6 py-3.5 bg-[#F5B400] hover:bg-white text-[#041E42] font-extrabold text-xs tracking-wider rounded-lg shadow-lg hover:scale-[1.03] transition-all uppercase flex items-center gap-1.5"
          >
            Explore Campus Life <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* 7. NEWS + RANKINGS + EVENTS */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Column 1: Latest News */}
        <div className="bg-white border border-zinc-100 rounded-3xl p-6 shadow-sm space-y-6">
          <div className="flex justify-between items-baseline border-b border-zinc-100 pb-3">
            <h3 className="text-sm font-black text-[#041E42] uppercase tracking-wider">Latest News</h3>
            <Link href="/news" className="text-[10px] font-bold text-[#0B3D91] hover:underline">View All</Link>
          </div>

          <div className="space-y-4">
            {[
              { date: "12 May", title: "CITY University launches AI Research Center", desc: "A cutting-edge facility established to push advancements in deep learning models." },
              { date: "08 May", title: "Students win National Level Hackathon 2026", desc: "Our tech students secured top honors competing against 200+ universities." },
              { date: "03 May", title: "MoU Signed with Global University Partners", desc: "Partnership expands student exchange courses and collaborative research programs." }
            ].map((row, idx) => (
              <div key={idx} className="flex gap-4 items-start text-xs border-b border-zinc-50 pb-4 last:border-0 last:pb-0">
                <div className="bg-[#0B3D91]/5 border border-[#0B3D91]/10 rounded-lg p-2.5 text-center shrink-0 w-12 text-[10px] font-black text-[#0B3D91] uppercase leading-tight">
                  {row.date.split(" ")[0]} <br /> {row.date.split(" ")[1]}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-extrabold text-zinc-800 leading-snug">{row.title}</h4>
                  <Link href="/news" className="text-[10px] font-bold text-[#F5B400] hover:underline block">Read More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Rankings */}
        <div className="bg-white border border-zinc-100 rounded-3xl p-6 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-sm font-black text-[#041E42] uppercase tracking-wider border-b border-zinc-100 pb-3">Rankings & Accreditations</h3>
            
            {/* Accreditation Badges */}
            <div className="grid grid-cols-2 gap-4 text-center">
              {[
                { tag: "NAAC A+", desc: "Accredited" },
                { tag: "NIRF", desc: "Ranked" },
                { tag: "ARIIA", desc: "Top Performer" },
                { tag: "NBA", desc: "Approved" },
                { tag: "UGC", desc: "Recognized" }
              ].map((badge, idx) => (
                <div key={idx} className="p-3 bg-zinc-50 border border-zinc-100 rounded-xl space-y-0.5">
                  <span className="block text-xs font-black text-[#0B3D91]">{badge.tag}</span>
                  <span className="block text-[8px] text-zinc-400 font-extrabold uppercase">{badge.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <Link 
            href="/about#accreditation" 
            className="w-full text-center py-2.5 bg-[#041E42] hover:bg-[#F5B400] hover:text-[#041E42] text-white font-bold text-xs rounded-xl shadow transition-all uppercase"
          >
            View All Accreditations
          </Link>
        </div>

        {/* Column 3: Upcoming Events */}
        <div className="bg-white border border-zinc-100 rounded-3xl p-6 shadow-sm space-y-6">
          <div className="flex justify-between items-baseline border-b border-zinc-100 pb-3">
            <h3 className="text-sm font-black text-[#041E42] uppercase tracking-wider">Upcoming Events</h3>
            <Link href="/news#events" className="text-[10px] font-bold text-[#0B3D91] hover:underline">View Calendar</Link>
          </div>

          <div className="space-y-4">
            {[
              { date: "20 May", title: "International Conference on AI & Robotics", time: "10:00 AM Onwards" },
              { date: "25 May", title: "Annual Tech Fest 2026", time: "09:00 AM Onwards" },
              { date: "05 Jun", title: "Global Education Fair", time: "11:00 AM Onwards" }
            ].map((ev, idx) => (
              <div key={idx} className="flex gap-4 items-start text-xs border-b border-zinc-50 pb-4 last:border-0 last:pb-0">
                <div className="bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-lg p-2.5 text-center shrink-0 w-12 text-[10px] font-black text-[#F5B400] uppercase leading-tight">
                  {ev.date.split(" ")[0]} <br /> {ev.date.split(" ")[1]}
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-zinc-800 leading-snug">{ev.title}</h4>
                  <span className="block text-[10px] text-zinc-400 font-semibold">{ev.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 8. ADMISSION CTA BLOCK */}
      <section className="relative overflow-hidden bg-[#041E42] text-white py-20 px-6 font-sans">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('/students_admission.png')` }}
        ></div>

        <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4 text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F5B400]">Admissions Notice</span>
            <h2 className="text-3xl font-black tracking-tight uppercase">ADMISSIONS OPEN 2026</h2>
            <p className="text-xs md:text-sm text-zinc-300 max-w-xl leading-relaxed">
              Join a community of innovators and leaders. Shape your future with CITY University.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full">
            <Link 
              href="/admissions/apply"
              className="w-full text-center py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs tracking-wider rounded-xl transition-all shadow-md uppercase"
            >
              Apply Now
            </Link>
            <Link 
              href="/admissions?tab=brouchure"
              className="w-full text-center py-2.5 border border-white/20 hover:border-white text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5"
            >
              <FileDown size={14} /> Download Brochure
            </Link>
            <Link 
              href="/contact"
              className="w-full text-center py-2.5 border border-white/20 hover:border-white text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5"
            >
              <Headset size={14} /> Talk to Counselor
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
