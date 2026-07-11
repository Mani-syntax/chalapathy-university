"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIAssistant from "@/components/features/AIAssistant";
import { GraduationCap, Landmark, FileText, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

export default function AdmissionsPage() {
  const [aiOpen, setAiOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { q: "What is the eligibility criteria for B.Tech Admissions?", a: "Candidates must have passed 10+2 (Intermediate) with Physics, Chemistry, and Mathematics with a minimum of 45% marks (40% for reserved categories). Ranks from AP EAPCET or JEE Main are given high priority." },
    { q: "How can I apply for a Merit Scholarship?", a: "Merit scholarships are automatically calculated during the Digital Admission Journey based on your Board Marks and Entrance ranks. If you score >95% in your 12th board, you qualify for up to a 100% tuition waiver." },
    { q: "Are there separate hostels for boys and girls?", a: "Yes, Chalapathy University provides completely separate, highly secure hostels for boys and girls with AC/Non-AC choices, 24/7 security surveillance, and healthy food courts." },
    { q: "What is the fee payment schedule?", a: "Fees are payable in two equal installments per academic year—the first installment at the start of the odd semester (July) and the second at the start of the even semester (January)." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <Header onToggleAi={() => setAiOpen(!aiOpen)} />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary-blue to-indigo-950 text-white py-16 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary-gold">Join Us</span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-none">Admissions 2026-27</h1>
          <p className="text-xs text-zinc-300 max-w-xl leading-relaxed">
            Begin your enrollment journey. Explore admission pathways, scholarship programs, fee breakdowns, and check common FAQs.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Admission Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Undergraduate (UG)", desc: "Admission based on 10+2 Board Marks and Entrance Ranks (AP EAPCET / JEE Main). Streams include Engineering, Pharmacy, Agriculture, Law, and Sciences." },
            { title: "Postgraduate (PG)", desc: "Join our master programs (MBA, M.Tech, M.Pharm, M.Sc, MA, LL.M). Admissions rely on graduation marks and state/national level entrance scores." },
            { title: "Doctoral (PhD)", desc: "Research fellowships and doctoral tracks. Selection includes written aptitude tests followed by presentation before the Research Committee." }
          ].map((track, idx) => (
            <div key={idx} className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm space-y-3">
              <h3 className="font-extrabold text-sm text-primary-blue flex items-center gap-1.5">
                <GraduationCap size={16} className="text-primary-gold" /> {track.title}
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                {track.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Fee Structure Table */}
        <div id="fees" className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-extrabold text-primary-blue flex items-center gap-2">
            <Landmark className="text-primary-gold" size={20} /> Academic Fee Structure (Approx.)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-zinc-50 text-zinc-500 font-extrabold uppercase border-b border-zinc-100">
                  <th className="py-3 px-4">Academic School</th>
                  <th className="py-3 px-4">Program Level</th>
                  <th className="py-3 px-4 text-right">Annual Tuition Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 font-medium text-zinc-600">
                {[
                  { school: "School of Engineering (CSE / AI)", level: "Undergraduate (B.Tech)", fee: "₹1,40,000" },
                  { school: "School of Pharmacy", level: "Undergraduate (B.Pharm)", fee: "₹95,000" },
                  { school: "School of Management", level: "Postgraduate (MBA)", fee: "₹1,20,000" },
                  { school: "School of Agriculture", level: "Undergraduate (B.Sc)", fee: "₹1,10,000" },
                  { school: "School of Law", level: "Integrated (BA LL.B)", fee: "₹85,000" }
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/50">
                    <td className="py-3 px-4 font-bold text-zinc-700">{item.school}</td>
                    <td className="py-3 px-4">{item.level}</td>
                    <td className="py-3 px-4 text-right font-bold text-primary-blue">{item.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Scholarships */}
        <div id="scholarships" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-primary-blue to-indigo-950 text-white p-8 rounded-2xl shadow-lg">
          <div className="space-y-4">
            <span className="text-[9px] font-extrabold tracking-widest text-primary-gold uppercase">Financial Aid</span>
            <h2 className="text-xl font-extrabold">Merit Scholarships & Fee Waivers</h2>
            <p className="text-xs text-zinc-300 leading-relaxed font-medium">
              We believe financial constraints should never block talented minds from pursuing higher education. Chalapathy offers extensive merit scholarships:
            </p>
            <ul className="space-y-2 text-xs text-zinc-300 font-semibold">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-primary-gold" /> 100% Tuition Waiver for Board topper students.</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-primary-gold" /> 50% waiver for EAPCET ranks under 10,000.</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-primary-gold" /> Special concession for outstanding sports achievements.</li>
            </ul>
          </div>
          <div className="text-center space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6">
            <h4 className="font-extrabold text-sm">Ready to Start Your Journey?</h4>
            <p className="text-[11px] text-zinc-300 font-medium">Complete our digital form and check scholarship approvals instantly.</p>
            <Link href="/admissions/apply" className="block py-2.5 bg-primary-gold hover:bg-primary-gold/90 text-primary-navy font-extrabold text-xs tracking-wider rounded-xl transition-all uppercase shadow-md">
              Apply Now Online
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <div id="faqs" className="space-y-6">
          <div className="border-b border-zinc-200 pb-2">
            <h2 className="text-xl font-extrabold text-primary-blue">Admissions FAQs</h2>
            <p className="text-xs text-zinc-500 mt-1">Frequently asked questions regarding admission requirements and processing.</p>
          </div>
          <div className="space-y-3.5">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-zinc-100 rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-4 flex justify-between items-center text-xs font-bold text-primary-blue hover:bg-zinc-50"
                >
                  <span>{faq.q}</span>
                  {activeFaq === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {activeFaq === idx && (
                  <div className="px-4 pb-4 text-xs text-zinc-600 leading-relaxed font-medium border-t border-zinc-50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
      <AIAssistant isOpen={aiOpen} onClose={() => setAiOpen(false)} />
    </div>
  );
}
