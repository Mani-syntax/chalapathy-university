import React from "react";
import Link from "next/link";
import { 
  Globe, Camera, Users, Video, 
  MapPin, Phone, Mail, ChevronRight, ExternalLink 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E2229] text-zinc-300 pt-16 pb-8 border-t border-white/5 font-sans relative z-10">
      
      {/* 6-Column Footer Grid */}
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
        
        {/* Column 1: Logo & Socials */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 100 45" className="h-10 w-auto bg-white/5 p-1 rounded" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 10C16 10 11 14 11 22.5C11 31 16 35 22 35C27 35 30.5 32.5 31.5 29.5H23.5V25.5H36.5V26.5C36.5 34 30.5 39 22 39C11.5 39 3.5 31.5 3.5 22.5C3.5 13.5 11.5 6 22 6C30.5 6 36 11 36.5 18H29.5C28.5 15 25 10 22 10Z" fill="#FFFFFF" />
              <rect x="42" y="16" width="7" height="23" fill="#B31919" />
              <circle cx="45.5" cy="9.5" r="4.5" stroke="#B31919" strokeWidth="1.5" />
              <circle cx="45.5" cy="9.5" r="1.5" fill="#B31919" />
              <path d="M54 16H72V20.5H66.5V39H59.5V20.5H54V16Z" fill="#FFFFFF" />
              <path d="M74 16H81.5L88 28.5L94.5 16H102L91.5 33.5V39H84.5V33.5L74 16Z" fill="#FFFFFF" />
            </svg>
            
            <div className="flex flex-col text-left">
              <div className="flex items-baseline gap-0.5 leading-none">
                <span className="font-black text-sm text-[#B31919] tracking-tight">CITY</span>
                <span className="font-extrabold text-[10px] text-white tracking-wide">CHALAPATHI</span>
              </div>
              <span className="block text-[8px] text-zinc-300 font-bold uppercase tracking-widest mt-0.5 leading-none">
                UNIVERSITY
              </span>
              <span className="block text-[5px] text-zinc-400 font-bold uppercase tracking-widest mt-0.5 leading-none">
                LEARN • INNOVATE • LEAD
              </span>
            </div>
          </div>
          
          <p className="text-xs text-zinc-400 leading-relaxed font-medium">
            Empowering minds. Inspiring futures. A better world through education, research & innovation.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-2.5 pt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-[#B31919] hover:text-white rounded-md transition-all" title="Facebook">
              <Globe size={13} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-[#B31919] hover:text-white rounded-md transition-all" title="Instagram">
              <Camera size={13} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-[#B31919] hover:text-white rounded-md transition-all" title="LinkedIn">
              <Users size={13} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-[#B31919] hover:text-white rounded-md transition-all" title="YouTube">
              <Video size={13} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-extrabold text-xs uppercase tracking-wider mb-5">
            Quick Links
          </h3>
          <ul className="space-y-2 text-xs font-semibold text-zinc-400">
            {[
              { label: "About Us", href: "/about" },
              { label: "Admissions", href: "/admissions" },
              { label: "Academics", href: "/#schools" },
              { label: "Research", href: "/research" },
              { label: "Schools", href: "/#schools" }
            ].map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="flex items-center gap-1 hover:text-[#B31919] transition-colors py-0.5">
                  <ChevronRight size={12} className="text-[#B31919]" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Campus Life */}
        <div>
          <h3 className="text-white font-extrabold text-xs uppercase tracking-wider mb-5">
            Campus Life
          </h3>
          <ul className="space-y-2 text-xs font-semibold text-zinc-400">
            {[
              { label: "Hostels", href: "/campus-life#hostels" },
              { label: "Library", href: "/campus-life#library" },
              { label: "Sports", href: "/campus-life#sports" },
              { label: "Clubs & Activities", href: "/campus-life#clubs" },
              { label: "Health Center", href: "/campus-life#health" }
            ].map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="flex items-center gap-1 hover:text-[#B31919] transition-colors py-0.5">
                  <ChevronRight size={12} className="text-[#B31919]" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div>
          <h3 className="text-white font-extrabold text-xs uppercase tracking-wider mb-5">
            Resources
          </h3>
          <ul className="space-y-2 text-xs font-semibold text-zinc-400">
            {[
              { label: "Downloads", href: "/resources#downloads" },
              { label: "Academic Calendar", href: "/academics#calendar" },
              { label: "Scholarships", href: "/admissions#scholarships" },
              { label: "Fee Structure", href: "/admissions#fees" },
              { label: "Mandatory Disclosure", href: "/resources#disclosures" }
            ].map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="flex items-center gap-1 hover:text-[#B31919] transition-colors py-0.5">
                  <ChevronRight size={12} className="text-[#B31919]" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Support */}
        <div>
          <h3 className="text-white font-extrabold text-xs uppercase tracking-wider mb-5">
            Support
          </h3>
          <ul className="space-y-2 text-xs font-semibold text-zinc-400">
            {[
              { label: "ERP Portal", href: "/erp" },
              { label: "Student Login", href: "/erp?role=student" },
              { label: "Faculty Login", href: "/erp?role=faculty" },
              { label: "Help Desk", href: "/contact#support" },
              { label: "Contact Us", href: "/contact" }
            ].map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="flex items-center gap-1 hover:text-[#B31919] transition-colors py-0.5">
                  <ChevronRight size={12} className="text-[#B31919]" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 6: Contact Us */}
        <div className="space-y-3">
          <h3 className="text-white font-extrabold text-xs uppercase tracking-wider mb-5">
            Contact Us
          </h3>
          <div className="space-y-3 text-xs font-semibold text-zinc-400">
            <div className="flex items-start gap-2.5">
              <MapPin size={16} className="text-[#B31919] shrink-0 mt-0.5" />
              <span>
                Guntur, Andhra Pradesh - 522034, India.
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={16} className="text-[#B31919] shrink-0" />
              <span>+91 863-2345678</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={16} className="text-[#B31919] shrink-0" />
              <span className="break-all">info@cityuniversity.edu.in</span>
            </div>
            <div className="pt-2">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#B31919] hover:underline"
              >
                Get Directions <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Strip */}
      <div className="max-w-[1440px] mx-auto px-6 mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-500 gap-4">
        <div>
          &copy; 2026 <strong>CITY Chalapathi University</strong>. All Rights Reserved.
        </div>
        <div className="flex items-center gap-4 font-semibold">
          <Link href="/privacy-policy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
          <span>|</span>
          <Link href="/terms-and-conditions" className="hover:text-zinc-300 transition-colors">Terms & Conditions</Link>
          <span>|</span>
          <Link href="/sitemap" className="hover:text-zinc-300 transition-colors">Sitemap</Link>
          <span>|</span>
          <Link href="/accessibility" className="hover:text-zinc-300 transition-colors">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}
