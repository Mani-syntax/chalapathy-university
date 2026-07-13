"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { ROUTES } from "@/constants";

export default function AdmissionsCard() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#D91E18] rounded-xl overflow-hidden shadow-md flex flex-col justify-between p-6 relative text-white border border-red-700 min-h-[280px]"
    >
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
        to={ROUTES.apply}
        className="relative z-10 mt-6 inline-flex items-center gap-1.5 bg-white text-[#D91E18] font-bold text-[12px] px-5 py-2.5 rounded-md shadow hover:bg-red-50 transition-colors w-fit"
      >
        Apply Now <ArrowRight size={13} />
      </Link>
    </motion.div>
  );
}
