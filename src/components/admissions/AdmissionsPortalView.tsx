"use client";

import React, { useState } from "react";
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
  HelpCircle, 
  PhoneCall, 
  Building2, 
  BookOpen, 
  Check, 
  ChevronDown,
  Laptop,
  Briefcase
} from "lucide-react";

export const AdmissionsPortalView: React.FC = () => {
  const [activeSchoolTab, setActiveSchoolTab] = useState<"computing" | "engineering" | "business">("computing");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      id: 1,
      stepNum: "01",
      title: "Register Yourself",
      desc: "Create your student admission account with email & mobile verification.",
      icon: UserPlus,
      badge: "Quick 2 Mins"
    },
    {
      id: 2,
      stepNum: "02",
      title: "Verify Contact",
      desc: "Receive OTP confirmation for instant portal credentials activation.",
      icon: ShieldCheck,
      badge: "Instant Verification"
    },
    {
      id: 3,
      stepNum: "03",
      title: "Fill Application Form",
      desc: "Enter academic history, preferred program streams, and personal details.",
      icon: FileText,
      badge: "Auto-Save Draft"
    },
    {
      id: 4,
      stepNum: "04",
      title: "Upload Documents",
      desc: "Attach 10th/12th marksheets, identity proof, and passport photograph.",
      icon: UploadCloud,
      badge: "Secure Storage"
    },
    {
      id: 5,
      stepNum: "05",
      title: "Submit & Track Status",
      desc: "Pay application fee online and receive real-time admission tracking ID.",
      icon: CreditCard,
      badge: "Instant Confirmation"
    }
  ];

  const programStreams = {
    computing: [
      {
        name: "B.Tech Computer Science & Engineering",
        duration: "4 Years",
        eligibility: "10+2 with 60% in MPC (Maths, Physics, Chemistry)",
        exam: "AP EAPCET / JEE Main / CU Entrance",
        seats: "180 Seats",
        route: "/academics/btech-cse"
      },
      {
        name: "B.Tech CSE (Artificial Intelligence & Machine Learning)",
        duration: "4 Years",
        eligibility: "10+2 with 60% in MPC",
        exam: "AP EAPCET / JEE Main",
        seats: "120 Seats",
        route: "/academics/btech-aiml"
      },
      {
        name: "B.Tech CSE (Cyber Security)",
        duration: "4 Years",
        eligibility: "10+2 with 60% in MPC",
        exam: "AP EAPCET / JEE Main",
        seats: "60 Seats",
        route: "/academics/btech-cyber"
      },
      {
        name: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        eligibility: "B.Sc / BCA / B.Tech with Mathematics",
        exam: "AP ICET / Merit Entry",
        seats: "60 Seats",
        route: "/academics/mca"
      }
    ],
    engineering: [
      {
        name: "B.Tech Electronics & Communication Engineering",
        duration: "4 Years",
        eligibility: "10+2 with 55% in MPC",
        exam: "AP EAPCET / JEE Main",
        seats: "120 Seats",
        route: "/academics/btech-ece"
      },
      {
        name: "B.Tech Electrical & Electronics Engineering",
        duration: "4 Years",
        eligibility: "10+2 with 55% in MPC",
        exam: "AP EAPCET / JEE Main",
        seats: "60 Seats",
        route: "/academics/btech-eee"
      },
      {
        name: "B.Tech Mechanical Engineering",
        duration: "4 Years",
        eligibility: "10+2 with 50% in MPC",
        exam: "AP EAPCET / State Entrance",
        seats: "60 Seats",
        route: "/academics/btech-[#mech]"
      },
      {
        name: "B.Tech Civil Engineering",
        duration: "4 Years",
        eligibility: "10+2 with 50% in MPC",
        exam: "AP EAPCET / State Entrance",
        seats: "60 Seats",
        route: "/academics/btech-civil"
      }
    ],
    business: [
      {
        name: "Master of Business Administration (MBA)",
        duration: "2 Years",
        eligibility: "Bachelor Degree with min 50% aggregate",
        exam: "AP ICET / CAT / MAT",
        seats: "120 Seats",
        route: "/academics/mba"
      },
      {
        name: "BBA (Digital Business & Analytics)",
        duration: "3 Years",
        eligibility: "10+2 in any stream with min 50%",
        exam: "Merit + Personal Interview",
        seats: "60 Seats",
        route: "/academics/programmes"
      }
    ]
  };

  const scholarships = [
    {
      title: "President's Gold Merit Scholarship",
      percentage: "Up to 100% Waiver",
      eligibility: "Top 100 EAPCET Rankers or 95%+ in 10+2 Board Exams",
      tag: "Highest Award"
    },
    {
      title: "Chalapathy Academic Excellence Aid",
      percentage: "50% Tuition Waiver",
      eligibility: "EAPCET Ranks 101-5000 or 90%+ in Qualifying Exam",
      tag: "Merit Tier 1"
    },
    {
      title: "Women in STEM & Leadership Grant",
      percentage: "25% Fee Rebate",
      eligibility: "All high-performing female candidates in Engineering & Tech",
      tag: "Empowerment"
    },
    {
      title: "National Sports & Defence Cadets Waiver",
      percentage: "30% Fee Waiver",
      eligibility: "National/State level athletes and children of Armed Forces",
      tag: "Special Honor"
    }
  ];

  const faqs = [
    {
      question: "When do Chalapathy University Admissions 2026 close?",
      answer: "Online applications for the Academic Session 2026-27 are currently open. Early application rounds offer priority seat allocation and merit scholarship evaluation."
    },
    {
      question: "Are direct management quota admissions available?",
      answer: "Yes, 30% of seats across streams are allocated under Management/B-Category Merit Quota based on 10+2 marks and national entrance test scores."
    },
    {
      question: "What documents are mandatory during application submission?",
      answer: "You will need scanned copies of 10th and 12th Marksheets, Transfer Certificate (TC), Conduct Certificate, Entrance Rank Card (if applicable), and Passport-size Photographs."
    },
    {
      question: "How can I check my application status after applying?",
      answer: "After submitting your form, you will receive a unique Application Tracking ID via SMS and Email. You can log into the Admissions Portal anytime to view real-time status updates."
    }
  ];

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
            Shape Your Future at <span className="bg-gradient-to-r from-white via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent">Chalapathy University</span>
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

      {/* 3. Interactive Animated 5-Step Admissions Roadmap */}
      <div className="pt-8 border-t border-gray-100 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="px-5 py-2 bg-[#072A6C] text-[#D4AF37] text-xs font-black tracking-[2px] rounded-full uppercase shadow-md border border-[#D4AF37]/30 inline-block">
            5-Step Enrollment Roadmap
          </span>
          <h3 className="text-2xl md:text-4xl font-black text-[#072A6C]">
            Admissions Process 2026
          </h3>
          <p className="text-xs md:text-sm text-gray-500 font-light">
            Follow this simple 5-step roadmap to secure your seat at Chalapathy University.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#072A6C] via-[#D4AF37] to-[#072A6C] mx-auto rounded-full" />
        </div>

        {/* Steps Grid with Framer Motion Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 relative">
          
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center relative group min-h-[240px]"
              >
                {/* Step Number Circle */}
                <div className="absolute top-4 right-4 text-xs font-black text-[#072A6C]/30 group-hover:text-[#D4AF37] transition-colors">
                  {step.stepNum}
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#072A6C]/5 flex items-center justify-center text-[#072A6C] mb-4 group-hover:bg-[#072A6C] group-hover:text-white transition-all duration-300 shadow-inner">
                    <IconComponent size={24} />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded-md mb-2">
                    {step.badge}
                  </span>
                  <h4 className="text-sm font-extrabold text-[#072A6C] leading-snug">
                    {step.title}
                  </h4>
                </div>

                <p className="text-[11px] text-gray-500 font-normal leading-relaxed mt-2">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}

        </div>

        <div className="text-center pt-2">
          <Link
            to="/admissions/apply"
            className="h-12 px-9 bg-[#072A6C] hover:bg-[#0D3B8E] text-white text-xs font-extrabold rounded-full inline-flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 uppercase tracking-widest"
          >
            <span>Proceed to Application Form</span>
            <ArrowRight size={16} className="text-[#D4AF37]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
