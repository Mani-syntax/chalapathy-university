import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ShieldCheck, Award, Briefcase, Zap, Globe, ArrowRight } from "lucide-react";
import { certifications } from "../data/certifications";

export default function CertificationDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const cert = certifications.find(c => c.id === id);

  useEffect(() => {
    if (!cert) {
      // If invalid ID, redirect back to academics page
      navigate("/academics");
    }
  }, [cert, navigate]);

  if (!cert) return null;

  return (
    <div className="min-h-screen bg-[#F7F8FC] font-[var(--font-poppins)] pt-20">
      
      {/* 
        ========================================
        PREMIUM HERO SECTION
        ========================================
      */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100">
        
        {/* Subtle animated background gradients */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px]"
            style={{ backgroundColor: cert.color }}
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] bg-blue-100"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 md:py-24 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <Link 
              to="/academics" 
              className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-gray-500 hover:text-[#D71920] transition-colors"
            >
              <ArrowLeft size={14} /> Back to Academics
            </Link>
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100 shadow-sm">
                <ShieldCheck size={14} className="text-[#072A6C]" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#072A6C]">Global Certification Partner</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#072A6C] leading-[1.1] tracking-tight">
                {cert.name}
              </h1>
              
              <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-xl">
                {cert.description} Earn globally recognized credentials and master industry-standard tools directly through our integrated curriculum.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="h-14 px-8 bg-[#072A6C] hover:bg-[#051c4a] text-white font-bold text-[13px] rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_10px_30px_rgba(7,42,108,0.2)] hover:shadow-[0_15px_40px_rgba(7,42,108,0.3)] transform hover:-translate-y-1 cursor-pointer">
                Start Certification Pathway <ArrowRight size={16} />
              </button>
              <button className="h-14 px-8 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-bold text-[13px] rounded-xl flex items-center justify-center transition-all hover:bg-gray-50 cursor-pointer">
                View Syllabus
              </button>
            </div>
          </div>

          {/* Right Floating Visuals (Glassmorphism Logos) */}
          <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
            
            {/* Center Main Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="absolute z-20 w-[280px] h-[320px] bg-white/70 backdrop-blur-xl border border-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] p-8 flex flex-col items-center justify-center gap-8 group"
            >
              <div 
                className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${cert.color}, transparent)` }}
              />
              
              {/* Dynamic Logo rendering */}
              <div className="flex flex-wrap items-center justify-center gap-6">
                {cert.images.map((img, i) => (
                  <img 
                    key={i} 
                    src={img} 
                    alt={`${cert.name} Logo ${i+1}`} 
                    className="h-20 w-auto max-w-[140px] object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-110" 
                  />
                ))}
              </div>
              
              <div className="text-center relative z-10">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Official Credential</p>
                <h3 className="text-lg font-bold text-gray-800">{cert.name} Certified</h3>
              </div>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] right-[15%] z-30 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-[#D71920]"
            >
              <Award size={28} />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 25, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[15%] left-[10%] z-30 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-[#D4AF37]"
            >
              <Zap size={24} />
            </motion.div>

          </div>
        </div>
      </div>

      {/* 
        ========================================
        CONTENT SECTION
        ========================================
      */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Main Info */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-black text-[#072A6C] mb-4">Why {cert.name}?</h2>
              <p className="text-gray-600 leading-relaxed text-[15px] font-light">
                Industry certifications like {cert.name} bridge the gap between academic theory and real-world application. By integrating this credential into your degree program, Chalapathi University ensures you graduate with the exact specialized skills that top global employers are actively hiring for.
              </p>
              <p className="text-gray-600 leading-relaxed text-[15px] font-light mt-4">
                This pathway covers everything from foundational concepts to advanced practical implementation, preparing you for the official certification exam while you earn your academic credits.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-[20px] p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Briefcase size={20} className="text-[#072A6C]" /> Career Outcomes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Higher starting salary potential",
                  "Global recognition across industries",
                  "Priority consideration for top-tier roles",
                  "Demonstrated mastery of industry tools",
                  "Faster career progression",
                  "Direct pathway to specialized tech roles"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#072A6C] to-[#0A3D9C] p-8 rounded-[20px] text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              
              <Globe size={32} className="text-blue-300 mb-6" />
              
              <h3 className="text-3xl font-black mb-2">100%</h3>
              <p className="text-blue-100 text-sm font-medium mb-8">Industry Aligned Curriculum</p>
              
              <hr className="border-white/10 mb-8" />
              
              <h3 className="text-3xl font-black mb-2">Global</h3>
              <p className="text-blue-100 text-sm font-medium">Valid Credential</p>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-[20px] shadow-sm flex flex-col items-center text-center">
              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-4">Official Partner</p>
              <div className="flex justify-center items-center h-16 w-full mb-2">
                {/* Show the first logo as the partner logo */}
                <img src={cert.images[0]} alt={`${cert.name} Official Logo`} className="h-full w-auto object-contain max-w-[120px]" />
              </div>
              <p className="text-xs text-gray-500 font-light mt-4">Authorized Training & Certification Ecosystem</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
