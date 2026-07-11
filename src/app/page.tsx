"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  GraduationCap, Users, Briefcase, Globe, Microscope,
  ArrowRight, Play, Building2, Handshake, Heart,
  Cpu, Dna, Palette, Hammer, BookOpen, Calendar,
} from "lucide-react";

/* ── animation helpers ────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

/* ── school data ──────────────────────────────── */
const schools = [
  { name: "Engineering", icon: Cpu, color: "#D91E18", slug: "school-of-engineering" },
  { name: "Management", icon: Briefcase, color: "#F59E0B", slug: "school-of-management" },
  { name: "Pharmacy", icon: Dna, color: "#7C3AED", slug: "school-of-pharmacy" },
  { name: "Law", icon: Hammer, color: "#92400E", slug: "school-of-law" },
  { name: "Sciences", icon: Microscope, color: "#2563EB", slug: "school-of-health-sciences" },
  { name: "Design", icon: Palette, color: "#DC2626", slug: "school-of-humanities" },
  { name: "AI & Data Science", icon: Cpu, color: "#0D9488", slug: "school-of-artificial-intelligence" },
];

/* ── stats data ───────────────────────────────── */
const stats = [
  { n: "150+", label: "Programs", icon: GraduationCap },
  { n: "30,000+", label: "Students", icon: Users },
  { n: "1,200+", label: "Faculty Members", icon: Users },
  { n: "500+", label: "Recruiters", icon: Briefcase },
  { n: "250+", label: "Global Partners", icon: Globe },
  { n: "100+", label: "Research Labs", icon: Microscope },
];

/* ── news data ────────────────────────────────── */
const news = [
  { d: "12", m: "MAY", title: "CITY University Launches AI & Robotics Center" },
  { d: "08", m: "MAY", title: "International Conference on Innovation 2026" },
  { d: "03", m: "MAY", title: "Students Win National Hackathon 2026" },
];

/* ── accreditations ───────────────────────────── */
const badges = [
  { tag: "NAAC A+", sub: "Accredited" },
  { tag: "nirf", sub: "Ranked" },
  { tag: "ARIIA", sub: "Top Performer" },
  { tag: "NBA", sub: "Accredited" },
  { tag: "UGC", sub: "Recognised" },
  { tag: "AICTE", sub: "Approved" },
];

/* ── events ───────────────────────────────────── */
const events = [
  { d: "20", m: "MAY", title: "International Conference on AI & Robotics", time: "10:00 AM" },
  { d: "25", m: "MAY", title: "Annual Tech Fest 2026", time: "09:00 AM" },
  { d: "05", m: "JUN", title: "Global Education Fair", time: "11:00 AM" },
];

/* ══════════════════════════════════════════════════
   HOME PAGE
   ══════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* ═══ SECTION 3 — HERO 720 px ═══ */}
      <section className="relative w-full" style={{ height: "720px" }}>
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/campus_hero.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F7F7] via-[#F7F7F7]/85 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1340px] mx-auto h-full px-5 flex items-center">
          <motion.div
            className="w-full lg:w-[45%] space-y-7"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h1
              className="font-[var(--font-poppins)] text-[48px] md:text-[60px] lg:text-[72px] font-extrabold leading-[1.08] tracking-tight"
              variants={fadeUp}
            >
              <span className="text-[#081A36]">Redefining Education.</span>
              <br />
              <span className="text-[#D91E18]">Inspiring</span>{" "}
              <span className="text-[#081A36]">Futures.</span>
            </motion.h1>

            <motion.p
              className="text-[15px] md:text-[16px] text-[#555] leading-relaxed max-w-md"
              variants={fadeUp}
            >
              At CiTY Chalapathi University, we empower learners to innovate, lead and create a better tomorrow.
            </motion.p>

            <motion.div className="flex flex-wrap items-center gap-4" variants={fadeUp}>
              <Link
                href="/#schools"
                className="h-11 px-7 bg-[#D91E18] hover:bg-[#b71612] text-white text-[13px] font-bold rounded-full inline-flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
              >
                Explore Programs <ArrowRight size={15} />
              </Link>
              <Link
                href="/campus-life"
                className="h-11 px-7 bg-white border border-[#D1D5DB] hover:border-[#081A36] text-[#222] text-[13px] font-bold rounded-full inline-flex items-center gap-2 transition-all"
              >
                <div className="w-5 h-5 rounded-full bg-[#081A36] flex items-center justify-center text-white">
                  <Play size={8} className="fill-current ml-0.5" />
                </div>
                Take Campus Tour
              </Link>
              <Link
                href="/about"
                className="text-[13px] font-bold text-[#D91E18] hover:text-[#b71612] flex items-center gap-1 transition-colors"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 4 — STATISTICS BAR ═══ */}
      <section className="max-w-[1340px] mx-auto w-full px-5 -mt-14 relative z-20">
        <motion.div
          className="bg-white rounded-[18px] shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-[#F0F0F0] py-6 px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 divide-y lg:divide-y-0 lg:divide-x divide-[#F0F0F0]"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="flex items-center gap-3 px-3">
                <div className="w-11 h-11 rounded-full bg-[#F7F7F7] flex items-center justify-center text-[#081A36] shrink-0 border border-[#E5E7EB]">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <span className="block text-[20px] font-extrabold text-[#081A36] leading-none font-[var(--font-poppins)]">
                    {s.n}
                  </span>
                  <span className="block text-[10px] text-[#888] font-semibold uppercase tracking-wider mt-1">
                    {s.label}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </section>

      {/* ═══ SECTION 5 — EXPLORE OUR SCHOOLS ═══ */}
      <section id="schools" className="max-w-[1340px] mx-auto w-full px-5 pt-20 pb-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-[22px] font-[var(--font-poppins)] font-extrabold text-[#081A36]">
            Explore Our Schools
          </h2>
          <Link
            href="/schools"
            className="text-[12px] font-bold text-[#D91E18] hover:underline flex items-center gap-0.5"
          >
            View All Schools <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {schools.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/schools/${s.slug}`}
                className="group bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-[130px] relative overflow-hidden bg-[#F7F7F7]">
                  <img
                    src="/campus_hero.png"
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="px-4 pb-4 relative">
                  <div
                    className="absolute -top-5 left-4 w-10 h-10 rounded-full flex items-center justify-center text-white border-[3px] border-white shadow-md"
                    style={{ background: s.color }}
                  >
                    <Icon size={16} />
                  </div>
                  <p className="font-[var(--font-poppins)] font-bold text-[13px] text-[#081A36] mt-7 leading-snug">
                    School of<br />{s.name}
                  </p>
                </div>
              </Link>
            );
          })}

          {/* Admissions Card */}
          <div className="bg-[#D91E18] rounded-xl overflow-hidden shadow-md flex flex-col justify-between p-6 relative text-white border border-red-700">
            <div className="absolute right-2 bottom-2 opacity-10">
              <Building2 size={100} />
            </div>
            <div className="relative z-10 space-y-3">
              <h3 className="text-[20px] font-[var(--font-poppins)] font-extrabold leading-tight">
                Admissions Open 2026
              </h3>
              <p className="text-[12px] text-red-100 leading-relaxed">
                Join a community of innovators and leaders. Your future starts here.
              </p>
            </div>
            <Link
              href="/admissions/apply"
              className="relative z-10 mt-6 inline-flex items-center gap-1.5 bg-white text-[#D91E18] font-bold text-[12px] px-5 py-2.5 rounded-md shadow hover:bg-red-50 transition-colors w-fit"
            >
              Apply Now <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — NEWS & EVENTS + RANKINGS ═══ */}
      <section className="bg-[#F7F7F7] border-y border-[#E5E7EB]">
        <div className="max-w-[1340px] mx-auto px-5 py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* News */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex justify-between items-baseline">
              <h3 className="text-[16px] font-[var(--font-poppins)] font-extrabold text-[#081A36]">
                News & Events
              </h3>
              <Link href="/news" className="text-[11px] font-bold text-[#D91E18] hover:underline">
                View All News →
              </Link>
            </div>
            <div className="space-y-4">
              {news.map((n, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start bg-white rounded-lg p-3 border border-[#E5E7EB] shadow-sm hover:shadow transition-shadow"
                >
                  <div className="w-12 shrink-0 rounded bg-[#D91E18] text-white text-center py-1.5 shadow-sm">
                    <span className="block text-[14px] font-extrabold leading-none">{n.d}</span>
                    <span className="block text-[8px] font-bold tracking-wider mt-0.5">{n.m}</span>
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#222] leading-snug">{n.title}</h4>
                    <Link
                      href="/news"
                      className="text-[10px] font-bold text-[#D91E18] hover:underline mt-1 inline-block"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rankings */}
          <div className="lg:col-span-4 space-y-5">
            <h3 className="text-[16px] font-[var(--font-poppins)] font-extrabold text-[#081A36]">
              Rankings & Accreditations
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {badges.map((b, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg border border-[#E5E7EB] p-3 flex flex-col items-center justify-center text-center shadow-sm hover:shadow transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F7F7F7] border border-[#E5E7EB] flex items-center justify-center mb-2">
                    <span className="text-[8px] font-extrabold text-[#081A36]">CU</span>
                  </div>
                  <span className="text-[12px] font-extrabold text-[#081A36] leading-none">
                    {b.tag}
                  </span>
                  <span className="text-[8px] text-[#888] font-semibold uppercase mt-0.5">
                    {b.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Events */}
          <div className="lg:col-span-3 space-y-5">
            <div className="flex justify-between items-baseline">
              <h3 className="text-[16px] font-[var(--font-poppins)] font-extrabold text-[#081A36]">
                Upcoming Events
              </h3>
              <Link href="#" className="text-[11px] font-bold text-[#D91E18] hover:underline">
                View Calendar →
              </Link>
            </div>
            <div className="space-y-4">
              {events.map((e, i) => (
                <div
                  key={i}
                  className="flex gap-3 items-start bg-white rounded-lg p-3 border border-[#E5E7EB] shadow-sm hover:shadow transition-shadow"
                >
                  <div className="w-11 shrink-0 rounded bg-[#081A36] text-white text-center py-1.5">
                    <span className="block text-[13px] font-extrabold leading-none">{e.d}</span>
                    <span className="block text-[7px] font-bold tracking-wider mt-0.5">{e.m}</span>
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-[#222] leading-snug">{e.title}</h4>
                    <span className="text-[10px] text-[#888] font-medium mt-0.5 inline-block">
                      {e.time} Onwards
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — RED FEATURE STRIP ═══ */}
      <section className="bg-[#D91E18]">
        <div className="max-w-[1340px] mx-auto px-5 py-5 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white text-[11px] font-bold uppercase tracking-wider">
            {[
              { icon: Building2, label: "Modern Infrastructure" },
              { icon: Globe, label: "Global Exposure" },
              { icon: Microscope, label: "Research Excellence" },
              { icon: Handshake, label: "Industry Connect" },
              { icon: Heart, label: "Vibrant Campus Life" },
            ].map((p) => (
              <div key={p.label} className="flex items-center gap-2">
                <p.icon size={16} className="text-red-200" />
                <span>{p.label}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-5 shrink-0">
            <div className="text-right text-white">
              <span className="block text-[16px] font-extrabold italic font-[var(--font-poppins)] leading-tight">
                &ldquo;Learn Today. Lead Tomorrow.&rdquo;
              </span>
              <span className="block text-[10px] text-red-100 font-medium mt-0.5">
                Be part of a legacy of excellence and innovation.
              </span>
            </div>
            <Link
              href="/about"
              className="h-10 px-6 bg-white text-[#D91E18] hover:bg-red-50 text-[11px] font-bold rounded-full inline-flex items-center gap-1.5 shadow-md transition-colors whitespace-nowrap"
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
