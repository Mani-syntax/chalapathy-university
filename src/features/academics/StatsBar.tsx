"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { stats } from "@/data";

export default function StatsBar() {
  return (
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
                  {s.number}
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
  );
}
