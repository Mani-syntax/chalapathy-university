import React from "react";
import Link from "next/link";
import { 
  Globe, Share2, Camera, Users, Video, 
  MapPin, Phone, Mail, ChevronRight, ExternalLink 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-blue text-zinc-300 pt-16 pb-8 border-t border-white/5 font-sans relative z-10">
      
      {/* 5-Column Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Column 1: Logo & Brand Info */}
        <div className="space-y-5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-white to-zinc-200 flex flex-col items-center justify-center text-navy-blue font-extrabold shadow-md shrink-0">
              <span className="text-[11px] leading-none text-red-600 font-black">CITY</span>
              <span className="text-[6px] leading-none text-navy-blue tracking-widest mt-0.5 font-bold">CU</span>
            </div>
            <div>
              <div className="flex items-baseline gap-1.5 leading-none">
                <span className="font-black text-md text-red-500 tracking-tight">CITY</span>
                <span className="font-extrabold text-[12px] text-white tracking-wide">CHALAPATHI</span>
              </div>
              <span className="block text-[8px] text-zinc-300 font-bold uppercase tracking-widest mt-0.5">
                University
              </span>
            </div>
          </div>
          <p className="text-[11px] text-zinc-400 font-medium italic">
            Passion. Performance. Progress.
          </p>
          <p className="text-xs text-zinc-400 leading-relaxed font-medium">
            Accredited by NAAC, Chalapathi University is a premier seat of learning in Guntur, committed to academic excellence and research-driven innovation.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-2.5 pt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-gold hover:text-navy-blue rounded-lg transition-all" title="Facebook">
              <Globe size={14} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-gold hover:text-navy-blue rounded-lg transition-all" title="Instagram">
              <Camera size={14} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-gold hover:text-navy-blue rounded-lg transition-all" title="LinkedIn">
              <Users size={14} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-gold hover:text-navy-blue rounded-lg transition-all" title="YouTube">
              <Video size={14} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-extrabold text-xs uppercase tracking-wider mb-6 pb-2 border-b-2 border-gold w-14">
            Quick Links
          </h3>
          <ul className="space-y-2 text-xs font-semibold text-zinc-400">
            {[
              { label: "About Us", href: "/about" },
              { label: "Vision & Mission", href: "/about#vision-mission" },
              { label: "Leadership", href: "/about#leadership" },
              { label: "Governance", href: "/about#governance" },
              { label: "Accreditations", href: "/about#accreditation" }
            ].map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="flex items-center gap-1 hover:text-gold transition-colors py-0.5">
                  <ChevronRight size={12} className="text-gold" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Admissions */}
        <div>
          <h3 className="text-white font-extrabold text-xs uppercase tracking-wider mb-6 pb-2 border-b-2 border-gold w-14">
            Admissions
          </h3>
          <ul className="space-y-2 text-xs font-semibold text-zinc-400">
            {[
              { label: "Programs", href: "/admissions" },
              { label: "How to Apply", href: "/admissions/apply" },
              { label: "Scholarships", href: "/admissions#scholarships" },
              { label: "Fee Structure", href: "/admissions#fees" },
              { label: "International Admissions", href: "/admissions?tab=international" }
            ].map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="flex items-center gap-1 hover:text-gold transition-colors py-0.5">
                  <ChevronRight size={12} className="text-gold" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Academics */}
        <div>
          <h3 className="text-white font-extrabold text-xs uppercase tracking-wider mb-6 pb-2 border-b-2 border-gold w-14">
            Academics
          </h3>
          <ul className="space-y-2 text-xs font-semibold text-zinc-400">
            {[
              { label: "Schools", href: "/#schools" },
              { label: "Departments", href: "/academics#departments" },
              { label: "Faculty", href: "/academics#faculty" },
              { label: "Academic Calendar", href: "/academics#calendar" },
              { label: "Examination Cell", href: "/academics#exam-cell" }
            ].map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="flex items-center gap-1 hover:text-gold transition-colors py-0.5">
                  <ChevronRight size={12} className="text-gold" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Contact Information */}
        <div className="space-y-4">
          <h3 className="text-white font-extrabold text-xs uppercase tracking-wider mb-6 pb-2 border-b-2 border-gold w-14">
            Contact Us
          </h3>
          <div className="space-y-3.5 text-xs font-semibold text-zinc-400">
            <div className="flex items-start gap-2.5">
              <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
              <span>
                <strong>Chalapathi Nagar</strong>,<br />
                Lam, Guntur - 522034,<br />
                Andhra Pradesh, India.
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={16} className="text-gold shrink-0" />
              <span>+91 88866 30355</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={16} className="text-gold shrink-0" />
              <span className="break-all">info@chalapathiuniversity.edu.in</span>
            </div>
            <div className="pt-2">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 text-[11px] font-extrabold text-gold hover:underline"
              >
                Get Directions <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Strip */}
      <div className="max-w-7xl mx-auto px-6 mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-500 gap-4">
        <div>
          &copy; 2026 <strong>Chalapathi University</strong>. All Rights Reserved.
        </div>
        <div className="flex items-center gap-4 font-semibold">
          <Link href="/privacy-policy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
          <span>&bull;</span>
          <Link href="/terms-and-conditions" className="hover:text-zinc-300 transition-colors">Terms & Conditions</Link>
          <span>&bull;</span>
          <Link href="/sitemap" className="hover:text-zinc-300 transition-colors">Sitemap</Link>
          <span>&bull;</span>
          <Link href="/accessibility" className="hover:text-zinc-300 transition-colors">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}
