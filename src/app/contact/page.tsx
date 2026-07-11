"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIAssistant from "@/components/features/AIAssistant";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [aiOpen, setAiOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <Header onToggleAi={() => setAiOpen(!aiOpen)} />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary-blue to-indigo-950 text-white py-16 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary-gold">Connect With Us</span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-none">Contact Admissions & Admin Offices</h1>
          <p className="text-xs text-zinc-300 max-w-xl leading-relaxed">
            Reach out to our administrative, admissions, or technical cells. Submit an online inquiry form, or drop by our Guntur campus.
          </p>
        </div>
      </section>

      {/* Content grid */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm space-y-6">
            <h3 className="font-extrabold text-sm text-primary-blue border-b border-zinc-100 pb-2">University Contact Desks</h3>
            
            <div className="space-y-4 text-xs font-semibold text-zinc-600">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-gold shrink-0 mt-0.5" />
                <span>
                  <strong>Chalapathy Nagar</strong>,<br />
                  Lam, Guntur - 522034,<br />
                  Andhra Pradesh, India.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-primary-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block"><strong>Admissions:</strong> +91 86323 88888</span>
                  <span className="block text-[10px]"><strong>Administrative Desk:</strong> +91 86323 99999</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="text-primary-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block">info@chalapathy.edu.in</span>
                  <span className="block">admissions@chalapathy.edu.in</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={18} className="text-primary-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block"><strong>Office Working Hours:</strong></span>
                  <span className="block text-zinc-500 font-medium">Monday - Saturday: 09:00 AM - 04:30 PM IST</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form panel (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm">
          {!formSubmitted ? (
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <h3 className="font-extrabold text-sm text-primary-blue border-b border-zinc-100 pb-2">Send an Online Inquiry</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-600 block">Your Name</label>
                  <input 
                    type="text" required name="name" value={formData.name} onChange={handleInputChange}
                    placeholder="John Doe" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary-gold focus:bg-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-600 block">Email Address</label>
                  <input 
                    type="email" required name="email" value={formData.email} onChange={handleInputChange}
                    placeholder="john@gmail.com" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary-gold focus:bg-white"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-600 block">Subject</label>
                <input 
                  type="text" required name="subject" value={formData.subject} onChange={handleInputChange}
                  placeholder="Inquiry about B.Tech CSE details..." className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary-gold focus:bg-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-600 block">Message Details</label>
                <textarea 
                  required rows={4} name="message" value={formData.message} onChange={handleInputChange}
                  placeholder="Type your questions here..." className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary-gold focus:bg-white"
                />
              </div>
              <button 
                type="submit"
                className="px-6 py-2.5 bg-primary-blue hover:bg-primary-blue/90 text-white font-bold text-xs tracking-wider rounded-xl transition-all shadow-md flex items-center gap-1.5 uppercase"
              >
                Send Message <Send size={12} />
              </button>
            </form>
          ) : (
            <div className="p-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="font-extrabold text-sm text-primary-blue">Inquiry Sent Successfully!</h3>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your message regarding "{formData.subject}" has been queued. Our relations cell will contact you shortly.
              </p>
              <button 
                onClick={() => setFormSubmitted(false)}
                className="px-4 py-1.5 border border-zinc-200 hover:border-zinc-300 text-zinc-600 text-xs font-bold rounded-lg transition-colors"
              >
                Submit Another Query
              </button>
            </div>
          )}
        </div>

      </main>

      <Footer />
      <AIAssistant isOpen={aiOpen} onClose={() => setAiOpen(false)} />
    </div>
  );
}
