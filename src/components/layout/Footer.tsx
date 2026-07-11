import React from "react";
import Link from "next/link";
import {
  MapPin, Phone, Mail, ExternalLink, ChevronRight,
  Globe, Camera, Users, Video,
} from "lucide-react";

export default function Footer() {
  const cols = [
    {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Admissions", href: "/admissions" },
        { label: "Academics", href: "/#schools" },
        { label: "Research", href: "/research" },
        { label: "Schools", href: "/#schools" },
      ],
    },
    {
      title: "Campus Life",
      links: [
        { label: "Hostels", href: "#" },
        { label: "Library", href: "#" },
        { label: "Sports", href: "#" },
        { label: "Clubs & Activities", href: "#" },
        { label: "Health Centre", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Downloads", href: "#" },
        { label: "Academic Calendar", href: "#" },
        { label: "Scholarships", href: "#" },
        { label: "Fee Structure", href: "#" },
        { label: "Mandatory Disclosure", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "ERP Portal", href: "/erp" },
        { label: "Student Login", href: "/erp?role=student" },
        { label: "Faculty Login", href: "/erp?role=faculty" },
        { label: "Help Desk", href: "#" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-[#081A36] text-[#94A3B8] pt-16 pb-8 font-[var(--font-inter)]">
      <div className="max-w-[1340px] mx-auto px-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10">
        {/* Col 1: Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 100 45" className="h-9 w-auto" fill="none">
              <path d="M22 10C16 10 11 14 11 22.5C11 31 16 35 22 35C27 35 30.5 32.5 31.5 29.5H23.5V25.5H36.5V26.5C36.5 34 30.5 39 22 39C11.5 39 3.5 31.5 3.5 22.5C3.5 13.5 11.5 6 22 6C30.5 6 36 11 36.5 18H29.5C28.5 15 25 10 22 10Z" fill="#FFFFFF"/>
              <rect x="42" y="16" width="7" height="23" fill="#D91E18"/>
              <circle cx="45.5" cy="9.5" r="4.5" stroke="#D91E18" strokeWidth="1.5"/>
              <circle cx="45.5" cy="9.5" r="1.5" fill="#D91E18"/>
              <path d="M54 16H72V20.5H66.5V39H59.5V20.5H54V16Z" fill="#FFFFFF"/>
              <path d="M74 16H81.5L88 28.5L94.5 16H102L91.5 33.5V39H84.5V33.5L74 16Z" fill="#FFFFFF"/>
            </svg>
            <div>
              <div className="flex items-baseline gap-1 leading-none">
                <span className="font-extrabold text-[13px] text-[#D91E18]">CITY</span>
                <span className="font-extrabold text-[10px] text-white">CHALAPATHI</span>
              </div>
              <span className="block text-[8px] text-[#94A3B8] font-bold tracking-[0.2em] mt-0.5">UNIVERSITY</span>
              <span className="block text-[5.5px] text-[#64748B] font-bold tracking-[0.2em] mt-0.5">LEARN • INNOVATE • LEAD</span>
            </div>
          </div>
          <p className="text-[12px] leading-relaxed text-[#94A3B8]">
            Empowering minds. Inspiring futures. Building a better world through education, research & innovation.
          </p>
          <div className="flex items-center gap-2 pt-1">
            {[Globe, Camera, Users, Video].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-md bg-white/5 hover:bg-[#D91E18] flex items-center justify-center text-[#94A3B8] hover:text-white transition-all">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Cols 2-5 */}
        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="text-white font-bold text-[12px] tracking-wide mb-5">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[12px] text-[#94A3B8] hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight size={10} className="text-[#D91E18]" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Col 6: Contact */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-[12px] tracking-wide mb-5">Contact Us</h4>
          <div className="space-y-3 text-[12px]">
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-[#D91E18] mt-0.5 shrink-0" />
              <span>Guntur, Andhra Pradesh - 522034, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[#D91E18] shrink-0" />
              <span>+91 863-2345678</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#D91E18] shrink-0" />
              <span>info@cityuniversity.edu.in</span>
            </div>
            <a href="#" className="inline-flex items-center gap-1 text-[11px] font-bold text-[#D91E18] hover:underline mt-2">
              Get Directions <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1340px] mx-auto px-5 mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-[#64748B] gap-3">
        <span>© 2026 <strong className="text-[#94A3B8]">CITY Chalapathi University</strong>. All Rights Reserved.</span>
        <div className="flex items-center gap-3 font-medium">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span>|</span>
          <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <span>|</span>
          <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          <span>|</span>
          <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}
