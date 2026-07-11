"use client";

import React from "react";
import Link from "next/link";
import { featurePillars } from "@/data";
import { ROUTES } from "@/constants";

export default function FeatureStrip() {
  return (
    <section className="bg-[#D91E18]">
      <div className="max-w-[1340px] mx-auto px-5 py-5 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white text-[11px] font-bold uppercase tracking-wider">
          {featurePillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.label} className="flex items-center gap-2">
                <Icon size={16} className="text-red-200" />
                <span>{p.label}</span>
              </div>
            );
          })}
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
            href={ROUTES.about}
            className="h-10 px-6 bg-white text-[#D91E18] hover:bg-red-50 text-[11px] font-bold rounded-full inline-flex items-center gap-1.5 shadow-md transition-colors whitespace-nowrap"
          >
            Discover More →
          </Link>
        </div>
      </div>
    </section>
  );
}
