"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { schools } from "@/data";
import SchoolCard from "./SchoolCard";
import { AdmissionsCard } from "@/features/admissions";

export default function SchoolsSection() {
  return (
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
        {schools.map((school) => (
          <SchoolCard key={school.slug} school={school} />
        ))}
        <AdmissionsCard />
      </div>
    </section>
  );
}
