"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ShieldCheck, 
  UserPlus, 
  FileText, 
  UploadCloud, 
  CreditCard, 
  Award, 
  Sparkles, 
  GraduationCap, 
  CheckCircle2, 
  Check, 
  Smartphone,
  Lock,
  FileCheck,
  Zap,
  Clock,
  ChevronRight
} from "lucide-react";

export const AdmissionsPortalView: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const steps = [
    {
      id: 0,
      stepNum: "01",
      title: "Register Yourself",
      shortTitle: "Account Creation",
      desc: "Create your official student admission portal account in under 2 minutes with basic contact details.",
      icon: UserPlus,
      badge: "Quick 2 Mins",
      features: ["No Registration Fee", "Instant Portal Access", "Single Sign-On"],
      ctaText: "Start Account Registration",
      ctaLink: "/admissions/apply"
    },
    {
      id: 1,
      stepNum: "02",
      title: "Verify Contact",
      desc: "Receive instant 6-digit OTP verification on your mobile and email for secure credentials activation.",
      icon: ShieldCheck,
      badge: "Instant Verification",
      features: ["Mobile & Email OTP", "256-bit SSL Security", "Auto Account Activation"],
      ctaText: "Verify Mobile & Email",
      ctaLink: "/admissions/apply"
    },
    {
      id: 2,
      stepNum: "03",
      title: "Fill Application Form",
      desc: "Enter academic marks, choose your preferred program stream (CSE, ECE, MBA), and enter personal details.",
      icon: FileText,
      badge: "Auto-Save Draft",
      features: ["Multi-Stream Selection", "Auto-Save Progress", "Edit Anytime Before Submit"],
      ctaText: "Fill Online Form",
      ctaLink: "/admissions/apply"
    },
    {
      id: 3,
      stepNum: "04",
      title: "Upload Required Documents",
      desc: "Upload scanned copies of 10th/12th marksheets, ID proof, and passport photo into your encrypted vault.",
      icon: UploadCloud,
      badge: "Secure Vault",
      features: ["Cloud Document Vault", "PDF & JPG Support", "Instant File Validation"],
      ctaText: "Upload Certificates",
      ctaLink: "/admissions/apply"
    },
    {
      id: 4,
      stepNum: "05",
      title: "Submit & Track Status",
      desc: "Pay nominal application fee online and receive real-time admission tracking ID with SMS notifications.",
      icon: CreditCard,
      badge: "Instant Confirmation",
      features: ["UPI / NetBanking / Cards", "Instant Tracking ID", "Counselor Callback"],
      ctaText: "Pay & Complete Application",
      ctaLink: "/admissions/apply"
    }
  ];

  // Auto-cycle through steps every 4 seconds unless user interacts
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, steps.length]);

  const current = steps[activeStep];

  return (
    <div className="space-y-16 py-4 font-[var(--font-poppins)] overflow-hidden">
      
      {/* 1. Hero Feature Banner with Animated Light Orbs */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#072A6C] via-[#0D3B8E] to-[#041A45] p-8 md:p-12 text-white shadow-2xl overflow-hidden border border-white/10">
        
        {/* Animated background glow circles */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#D4AF37]/20 blur-3xl pointer-events-none"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl pointer-events-none"
        />

        <div className="relative z-10 max-w-4xl space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-black tracking-widest uppercase"
          >
            <Sparkles size={14} className="animate-spin-slow" />
            <span>Academic Session 2026-27 Open</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight leading-tight"
          >
            Shape Your Future at <span className="bg-gradient-to-r from-white via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent">Chalapathi University</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm md:text-lg text-blue-100/90 font-light leading-relaxed max-w-2xl"
          >
            Empowering next-generation innovators with world-class infrastructure, industry-aligned curricula, 100% placement support, and lucrative merit scholarships.
          </motion.p>

          {/* Quick Stats Ticker */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-center sm:text-left"
          >
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-[#D4AF37]">₹25 LPA</p>
              <p className="text-[11px] text-blue-200 font-medium uppercase tracking-wider">Highest Package</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-white">100%</p>
              <p className="text-[11px] text-blue-200 font-medium uppercase tracking-wider">Placement Assistance</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-[#D4AF37]">50+</p>
              <p className="text-[11px] text-blue-200 font-medium uppercase tracking-wider">Global Corporate MOUs</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-white">Up to 100%</p>
              <p className="text-[11px] text-blue-200 font-medium uppercase tracking-wider">Merit Waivers</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. Three Animated Gateway Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Start Application */}
        <motion.div 
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Link 
            to="/admissions/apply" 
            className="group relative block bg-gradient-to-br from-[#072A6C] to-[#0A3A93] text-white p-7 rounded-2xl shadow-xl overflow-hidden min-h-[170px] flex flex-col justify-between border border-blue-400/20"
          >
            <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-[#D4AF37] border border-white/20">
                <GraduationCap size={20} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-[#D4AF37] text-white rounded-full">
                Step 1
              </span>
            </div>
            <div>
              <h4 className="font-extrabold text-lg md:text-xl text-white group-hover:text-[#D4AF37] transition-colors">
                Start Application 2026
              </h4>
              <p className="text-xs text-blue-200/90 font-light mt-1 flex items-center gap-1.5">
                <span>Online Admission Form</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </p>
            </div>
          </Link>
        </motion.div>

        {/* Card 2: Fee Structure */}
        <motion.div 
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Link 
            to="/admissions/fees" 
            className="group relative block bg-white border border-gray-100 hover:border-[#072A6C]/30 p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[170px] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#072A6C]/5 flex items-center justify-center text-[#072A6C]">
                <FileText size={20} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
                Fee Charts
              </span>
            </div>
            <div>
              <h4 className="font-extrabold text-lg md:text-xl text-[#072A6C]">
                Academic Fee Structure
              </h4>
              <p className="text-xs text-[#D4AF37] font-semibold mt-1 flex items-center gap-1.5">
                <span>View Stream Fee Breakdown</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </p>
            </div>
          </Link>
        </motion.div>

        {/* Card 3: Scholarships */}
        <motion.div 
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Link 
            to="/admissions/scholarships" 
            className="group relative block bg-white border border-gray-100 hover:border-[#D4AF37]/40 p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[170px] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                <Award size={20} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-[#D4AF37]/15 text-[#072A6C] rounded-full">
                Waivers
              </span>
            </div>
            <div>
              <h4 className="font-extrabold text-lg md:text-xl text-[#072A6C]">
                Scholarships & Financial Aid
              </h4>
              <p className="text-xs text-[#D4AF37] font-semibold mt-1 flex items-center gap-1.5">
                <span>Apply for Up to 100% Merit Waivers</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </p>
            </div>
          </Link>
        </motion.div>

      </div>

      {/* 3. GenRush-Style Interactive Stepper Section */}
      <div 
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="pt-10 border-t border-gray-100 space-y-10"
      >
        
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="px-4 py-1.5 bg-[#072A6C]/10 text-[#072A6C] text-xs font-black tracking-widest rounded-full uppercase">
            How It Works
          </span>
          <h3 className="text-3xl md:text-4xl font-black text-[#072A6C] tracking-tight">
            Admissions Process 2026
          </h3>
          <p className="text-xs md:text-sm text-gray-500 font-light">
            Click any step or watch the automated workflow preview below.
          </p>
        </div>

        {/* GenRush Horizontal Step Node Bar */}
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative flex items-center justify-between">
            
            {/* Background connecting track line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gray-200 rounded-full z-0" />
            
            {/* Animated active progress bar */}
            <motion.div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-[#072A6C] via-[#0A3A93] to-[#10B981] rounded-full z-0"
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {/* Step Nodes 01 - 05 */}
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isPast = index < activeStep;

              return (
                <button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(index);
                    setIsAutoPlaying(false);
                  }}
                  className="relative z-10 flex flex-col items-center group cursor-pointer border-none bg-transparent outline-none"
                >
                  <motion.div 
                    animate={{ scale: isActive ? 1.25 : 1 }}
                    transition={{ duration: 0.3 }}
                    className={`w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center font-black text-xs transition-all duration-300 shadow-md ${
                      isActive 
                        ? "bg-[#10B981] text-white ring-4 ring-[#10B981]/25 shadow-lg shadow-[#10B981]/40" 
                        : isPast 
                        ? "bg-[#072A6C] text-white" 
                        : "bg-white text-gray-400 border-2 border-gray-200 group-hover:border-[#072A6C]"
                    }`}
                  >
                    {isPast ? <Check size={16} strokeWidth={3} /> : step.stepNum}
                  </motion.div>
                  <span className={`text-[10px] md:text-xs font-bold mt-2.5 transition-colors ${
                    isActive ? "text-[#10B981]" : isPast ? "text-[#072A6C]" : "text-gray-400"
                  }`}>
                    {step.stepNum}
                  </span>
                </button>
              );
            })}

          </div>
        </div>

        {/* GenRush Two-Column Split (Left Info + Right Dynamic Device Mockup) */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 rounded-3xl p-6 md:p-10 border border-gray-100 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Active Step Details */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-5"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] text-xs font-extrabold uppercase tracking-wider">
                  <Zap size={14} />
                  <span>Step {current.stepNum} of 05</span>
                </div>

                <h3 className="text-2xl md:text-4xl font-black text-[#072A6C] tracking-tight leading-tight">
                  {current.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                  {current.desc}
                </p>

                {/* Feature Checklist */}
                <div className="space-y-2.5 pt-2">
                  {current.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs md:text-sm font-semibold text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-[#10B981]/20 flex items-center justify-center text-[#10B981] shrink-0">
                        <CheckCircle2 size={13} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4 flex items-center gap-4">
                  <Link
                    to={current.ctaLink}
                    className="px-7 py-3.5 bg-[#072A6C] hover:bg-[#10B981] text-white text-xs md:text-sm font-extrabold rounded-full inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 uppercase tracking-wider cursor-pointer"
                  >
                    <span>{current.ctaText}</span>
                    <ArrowRight size={16} />
                  </Link>

                  <button
                    onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                    className="px-4 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-full inline-flex items-center gap-1.5 transition-colors cursor-pointer border-none"
                  >
                    <span>Next Step</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: GenRush Mobile Screen / Dynamic Interface Preview */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[320px] md:max-w-[360px] aspect-[9/16] max-h-[480px] bg-slate-950 rounded-[40px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border-4 border-slate-800 relative overflow-hidden flex flex-col justify-between">
              
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-800 rounded-b-2xl z-30 flex items-center justify-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-900" />
                <div className="w-2 h-2 rounded-full bg-[#10B981]/80 animate-pulse" />
              </div>

              {/* Dynamic Screen Content */}
              <div className="relative w-full h-full bg-white rounded-[30px] pt-8 px-4 pb-4 overflow-hidden flex flex-col justify-between">
                
                {/* Header Status Bar inside Phone */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#072A6C] text-white flex items-center justify-center text-[8px] font-black">
                      CU
                    </div>
                    <span className="text-[10px] font-black text-[#072A6C] uppercase tracking-wider">Admissions Portal</span>
                  </div>
                  <span className="text-[9px] font-bold text-[#10B981] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Live 2026
                  </span>
                </div>

                {/* Animated Mockup Interface Screen per Step */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.35 }}
                    className="flex-1 my-3 flex flex-col justify-center space-y-3"
                  >

                    {/* Mockup Step 1: Account Registration */}
                    {activeStep === 0 && (
                      <div className="space-y-3">
                        <div className="p-3 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2">
                          <div className="flex items-center justify-between text-[10px] font-bold text-[#072A6C]">
                            <span>Account Registration</span>
                            <span className="text-[#10B981]">Step 1/5</span>
                          </div>
                          <div className="h-2 w-full bg-blue-200/60 rounded-full overflow-hidden">
                            <div className="h-full w-1/5 bg-[#10B981] rounded-full" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="p-2.5 rounded-xl border border-gray-200 bg-gray-50 flex items-center gap-2 text-xs font-semibold text-gray-700">
                            <UserPlus size={14} className="text-gray-400" />
                            <span>Full Name: Student Candidate</span>
                          </div>
                          <div className="p-2.5 rounded-xl border border-gray-200 bg-gray-50 flex items-center gap-2 text-xs font-semibold text-gray-700">
                            <Smartphone size={14} className="text-gray-400" />
                            <span>Mobile: +91 98492XXXXX</span>
                          </div>
                        </div>

                        <div className="p-3 bg-[#10B981] text-white text-center rounded-xl text-xs font-bold shadow-md">
                          Account Created ✓
                        </div>
                      </div>
                    )}

                    {/* Mockup Step 2: Verify Contact OTP */}
                    {activeStep === 1 && (
                      <div className="space-y-3 text-center">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#10B981] flex items-center justify-center mx-auto shadow-inner">
                          <ShieldCheck size={24} />
                        </div>
                        <h4 className="text-xs font-bold text-[#072A6C]">Enter 6-Digit OTP</h4>
                        <div className="flex justify-center gap-1.5">
                          {["9", "8", "4", "2", "0", "1"].map((num, idx) => (
                            <div key={idx} className="w-7 h-9 rounded-lg bg-slate-100 border border-emerald-400 text-xs font-extrabold flex items-center justify-center text-[#072A6C] shadow-xs">
                              {num}
                            </div>
                          ))}
                        </div>
                        <div className="p-2 rounded-xl bg-emerald-50 text-[#10B981] text-[10px] font-bold border border-emerald-200">
                          Mobile & Email Verified Successfully ✓
                        </div>
                      </div>
                    )}

                    {/* Mockup Step 3: Application Form Progress */}
                    {activeStep === 2 && (
                      <div className="space-y-2.5">
                        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                          <div className="flex items-center justify-between text-[10px] font-bold text-[#072A6C]">
                            <span>Selected Program</span>
                            <span className="text-[#10B981] font-black">B.Tech CSE</span>
                          </div>
                          <p className="text-[10px] text-gray-500">Qualifying Exam: 10+2 MPC (92%)</p>
                        </div>
                        <div className="p-2.5 rounded-xl bg-blue-50 text-[#072A6C] text-[10px] font-bold flex items-center justify-between">
                          <span>Form Auto-Saved Draft</span>
                          <span className="text-xs">75% Complete</span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-[#072A6C] rounded-full" />
                        </div>
                      </div>
                    )}

                    {/* Mockup Step 4: Document Vault Upload */}
                    {activeStep === 3 && (
                      <div className="space-y-2">
                        <div className="p-3 border-2 border-dashed border-emerald-300 bg-emerald-50/50 rounded-2xl text-center space-y-1">
                          <UploadCloud size={22} className="text-[#10B981] mx-auto" />
                          <p className="text-[10px] font-bold text-[#072A6C]">Encrypted Vault</p>
                        </div>
                        <div className="space-y-1.5">
                          <div className="p-2 rounded-xl bg-slate-50 border border-gray-200 flex items-center justify-between text-[10px] font-bold text-gray-700">
                            <span>12th_Marksheet.pdf</span>
                            <CheckCircle2 size={13} className="text-[#10B981]" />
                          </div>
                          <div className="p-2 rounded-xl bg-slate-50 border border-gray-200 flex items-center justify-between text-[10px] font-bold text-gray-700">
                            <span>Passport_Photo.jpg</span>
                            <CheckCircle2 size={13} className="text-[#10B981]" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Mockup Step 5: Submission & ETA Card */}
                    {activeStep === 4 && (
                      <div className="space-y-3 text-center">
                        <div className="w-12 h-12 rounded-full bg-[#10B981] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#10B981]/30">
                          <Check size={24} strokeWidth={3} />
                        </div>
                        <div>
                          <h4 className="text-xs font-black text-[#072A6C]">Application Submitted</h4>
                          <p className="text-[10px] text-gray-500 font-medium">Tracking ID: CU-2026-94820</p>
                        </div>
                        <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#072A6C] to-[#0A3A93] text-white text-[10px] font-bold shadow-md flex items-center justify-between">
                          <span>Status: Under Review</span>
                          <span className="text-[#D4AF37]">ETA 24 Hours</span>
                        </div>
                      </div>
                    )}

                  </motion.div>
                </AnimatePresence>

                {/* Footer Bar inside Phone */}
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[9px] font-bold text-gray-400">
                  <span>Chalapathy Admissions</span>
                  <span className="text-[#10B981]">Step 0{activeStep + 1} / 05</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
