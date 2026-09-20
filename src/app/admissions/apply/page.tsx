"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIAssistant from "@/components/features/AIAssistant";
import { 
  User, BookOpen, GraduationCap, Upload, 
  CheckCircle, ArrowRight, ArrowLeft, Printer, 
  HelpCircle, ShieldCheck, AlertCircle 
} from "lucide-react";

const steps = [
  { id: "personal", title: "Personal Details", icon: User },
  { id: "academic", title: "Academic Background", icon: BookOpen },
  { id: "program", title: "Program Selection", icon: GraduationCap },
  { id: "documents", title: "Document Upload", icon: Upload },
  { id: "submit", title: "Review & Submit", icon: CheckCircle }
];

const schoolsAndPrograms = [
  {
    school: "School of Engineering",
    programs: ["B.Tech Computer Science & Engineering", "B.Tech Electronics & Communication", "B.Tech Civil Engineering"]
  },
  {
    school: "School of Pharmacy",
    programs: ["Bachelor of Pharmacy (B.Pharm)", "Doctor of Pharmacy (Pharm.D)", "M.Pharm Pharmaceutics"]
  },
  {
    school: "School of Management",
    programs: ["BBA Business Analytics", "MBA Finance & Marketing", "MBA Human Resource Management"]
  },
  {
    school: "School of Sciences",
    programs: ["B.Sc Biotechnology", "M.Sc Physics", "B.Sc Chemistry"]
  },
  {
    school: "School of Agriculture",
    programs: ["B.Sc (Hons.) Agriculture", "M.Sc Agronomy"]
  },
  {
    school: "School of Health Sciences",
    programs: ["B.Sc Nursing", "Bachelor of Physiotherapy (BPT)"]
  },
  {
    school: "School of Law",
    programs: ["BA LL.B (5-Year Integrated)", "BBA LL.B (5-Year Integrated)", "LL.M"]
  },
  {
    school: "School of Humanities",
    programs: ["BA English & Journalism", "MA Applied Psychology"]
  },
  {
    school: "School of Allied Health Sciences",
    programs: ["B.Sc Medical Lab Technology", "B.Sc Anaesthesia Technology"]
  },
  {
    school: "School of Artificial Intelligence",
    programs: ["B.Tech Artificial Intelligence & Machine Learning", "B.Tech Data Science"]
  }
];

export default function DigitalAdmissionJourney() {
  const [aiOpen, setAiOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    fatherName: "",
    sscMarks: "",
    hscMarks: "",
    entranceExam: "EAPCET",
    entranceRank: "",
    selectedSchool: "",
    selectedProgram: "",
    photoUploaded: false,
    marksheetUploaded: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Reset selected program if school changes
      ...(name === "selectedSchool" ? { selectedProgram: "" } : {})
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockId = `CU-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    setApplicationId(mockId);
    
    // Save to LocalStorage
    const appRecord = {
      id: mockId,
      ...formData,
      submissionDate: new Date().toLocaleDateString(),
      status: "Under Review"
    };
    localStorage.setItem("university_admission_app", JSON.stringify(appRecord));
    
    setIsSubmitted(true);
  };

  const selectedSchoolData = schoolsAndPrograms.find(
    (s) => s.school === formData.selectedSchool
  );

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <Header onToggleAi={() => setAiOpen(!aiOpen)} />

      {/* Main Page Layout */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
        {!isSubmitted ? (
          <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 overflow-hidden">
            {/* Admission Process Title Banner */}
            <div className="bg-gradient-to-r from-primary-blue to-indigo-950 px-8 py-8 text-white">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary-gold">Digital Admissions</span>
              <h1 className="font-extrabold text-2xl mt-1">Undergraduate & Postgraduate Admission Journey</h1>
              <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                Complete our step-by-step digital admission portal. Apply to courses, submit documents, and reserve seats in minutes.
              </p>
            </div>

            {/* Stepper Indicators */}
            <div className="px-8 py-6 border-b border-zinc-100 bg-zinc-50">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {steps.map((step, idx) => {
                  const StepIcon = step.icon;
                  const isCompleted = idx < currentStep;
                  const isActive = idx === currentStep;
                  return (
                    <div key={step.id} className="flex items-center gap-3.5 flex-1 last:flex-initial">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all ${
                        isCompleted 
                          ? "bg-emerald-500 text-white" 
                          : isActive 
                            ? "bg-primary-gold text-primary-navy ring-4 ring-primary-gold/20" 
                            : "bg-zinc-200 text-zinc-500"
                      }`}>
                        {isCompleted ? "✓" : idx + 1}
                      </div>
                      <div className="text-left">
                        <span className={`block text-xs font-bold leading-tight ${isActive ? "text-primary-blue" : "text-zinc-500"}`}>
                          {step.title}
                        </span>
                      </div>
                      {idx < steps.length - 1 && (
                        <div className="hidden md:block flex-1 h-[2px] bg-zinc-200 mx-2"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form Panel */}
            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              
              {/* STEP 1: PERSONAL DETAILS */}
              {currentStep === 0 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="font-extrabold text-base text-primary-blue border-b border-zinc-100 pb-2">Step 1: Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-600 block">Full Name (As in School Certificate) <span className="text-[#D4AF37]">*</span></label>
                      <input 
                        type="text" required name="fullName" value={formData.fullName} onChange={handleInputChange}
                        placeholder="John Doe" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary-gold focus:bg-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-600 block">Parent / Guardian Name <span className="text-[#D4AF37]">*</span></label>
                      <input 
                        type="text" required name="fatherName" value={formData.fatherName} onChange={handleInputChange}
                        placeholder="Robert Doe" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary-gold focus:bg-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-600 block">Email Address <span className="text-[#D4AF37]">*</span></label>
                      <input 
                        type="email" required name="email" value={formData.email} onChange={handleInputChange}
                        placeholder="johndoe@gmail.com" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary-gold focus:bg-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-600 block">Mobile Number <span className="text-[#D4AF37]">*</span></label>
                      <input 
                        type="tel" required name="phone" value={formData.phone} onChange={handleInputChange}
                        placeholder="+91 98765 43210" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary-gold focus:bg-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-600 block">Date of Birth <span className="text-[#D4AF37]">*</span></label>
                      <input 
                        type="date" required name="dob" value={formData.dob} onChange={handleInputChange}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary-gold focus:bg-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-600 block">Gender <span className="text-[#D4AF37]">*</span></label>
                      <select 
                        required name="gender" value={formData.gender} onChange={handleInputChange}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary-gold focus:bg-white"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: ACADEMIC DETAILS */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="font-extrabold text-base text-primary-blue border-b border-zinc-100 pb-2">Step 2: Academic Qualifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-600 block">Class 10th (SSC) GPA / Percentage <span className="text-[#D4AF37]">*</span></label>
                      <input 
                        type="text" required name="sscMarks" value={formData.sscMarks} onChange={handleInputChange}
                        placeholder="e.g. 9.8 GPA or 95%" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary-gold focus:bg-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-600 block">Class 12th (HSC/Inter) Percentage <span className="text-[#D4AF37]">*</span></label>
                      <input 
                        type="text" required name="hscMarks" value={formData.hscMarks} onChange={handleInputChange}
                        placeholder="e.g. 96.5%" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary-gold focus:bg-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-600 block">Entrance Exam Taken</label>
                      <select 
                        name="entranceExam" value={formData.entranceExam} onChange={handleInputChange}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary-gold focus:bg-white"
                      >
                        <option value="AP EAPCET">AP EAPCET</option>
                        <option value="JEE Main">JEE Main</option>
                        <option value="NEET">NEET / PG Entrance</option>
                        <option value="None">None (Direct Merit)</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-600 block">Entrance Exam Rank (If applicable)</label>
                      <input 
                        type="number" name="entranceRank" value={formData.entranceRank} onChange={handleInputChange}
                        placeholder="e.g. 14205" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary-gold focus:bg-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: PROGRAM SELECTION */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="font-extrabold text-base text-primary-blue border-b border-zinc-100 pb-2">Step 3: School & Program Preference</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-600 block">Select Academic School <span className="text-[#D4AF37]">*</span></label>
                      <select 
                        required name="selectedSchool" value={formData.selectedSchool} onChange={handleInputChange}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary-gold focus:bg-white"
                      >
                        <option value="">Choose School</option>
                        {schoolsAndPrograms.map((s, idx) => (
                          <option key={idx} value={s.school}>{s.school}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-600 block">Select Specific Program <span className="text-[#D4AF37]">*</span></label>
                      <select 
                        required name="selectedProgram" value={formData.selectedProgram} onChange={handleInputChange}
                        disabled={!formData.selectedSchool}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary-gold focus:bg-white disabled:opacity-50"
                      >
                        <option value="">Choose Course</option>
                        {selectedSchoolData?.programs.map((prog, idx) => (
                          <option key={idx} value={prog}>{prog}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: DOCUMENT UPLOADS */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="font-extrabold text-base text-primary-blue border-b border-zinc-100 pb-2">Step 4: Academic Documents</h3>
                  <p className="text-[11px] text-zinc-500">Please upload scanned copies of your academic documents. Formats allowed: PDF, JPEG, PNG (Max size: 2MB).</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Passport Photo */}
                    <div className="border-2 border-dashed border-zinc-200 hover:border-primary-gold rounded-2xl p-6 text-center space-y-3 transition-colors bg-zinc-50">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mx-auto shadow-sm border border-zinc-100">
                        <Upload size={16} className="text-zinc-500" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-zinc-700">Passport Size Photograph <span className="text-[#D4AF37]">*</span></span>
                        <span className="block text-[10px] text-zinc-400 mt-0.5">JPEG format only</span>
                      </div>
                      <button 
                        type="button"
                        onClick={() => setFormData(p => ({ ...p, photoUploaded: true }))}
                        className={`text-xs font-bold py-1.5 px-4 rounded-lg transition-all ${
                          formData.photoUploaded 
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                            : "bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200"
                        }`}
                      >
                        {formData.photoUploaded ? "✓ Photo Attached" : "Attach File"}
                      </button>
                    </div>

                    {/* Class 12th Marks Memo */}
                    <div className="border-2 border-dashed border-zinc-200 hover:border-primary-gold rounded-2xl p-6 text-center space-y-3 transition-colors bg-zinc-50">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mx-auto shadow-sm border border-zinc-100">
                        <Upload size={16} className="text-zinc-500" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-zinc-700">Class 12th / Inter Marks Memo <span className="text-[#D4AF37]">*</span></span>
                        <span className="block text-[10px] text-zinc-400 mt-0.5">PDF or Image format</span>
                      </div>
                      <button 
                        type="button"
                        onClick={() => setFormData(p => ({ ...p, marksheetUploaded: true }))}
                        className={`text-xs font-bold py-1.5 px-4 rounded-lg transition-all ${
                          formData.marksheetUploaded 
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                            : "bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200"
                        }`}
                      >
                        {formData.marksheetUploaded ? "✓ Document Attached" : "Attach File"}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: REVIEW AND SUBMIT */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="font-extrabold text-base text-primary-blue border-b border-zinc-100 pb-2">Step 5: Review Details</h3>
                  <div className="border border-zinc-100 rounded-2xl overflow-hidden shadow-sm bg-zinc-50 text-xs">
                    <div className="bg-primary-navy text-white px-5 py-3 font-bold">Applicant Brief</div>
                    <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="block text-[10px] text-zinc-400 font-bold uppercase">Candidate Name</span>
                        <span className="font-bold text-zinc-700">{formData.fullName || "Not Specified"}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-zinc-400 font-bold uppercase">Parent/Guardian</span>
                        <span className="font-bold text-zinc-700">{formData.fatherName || "Not Specified"}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-zinc-400 font-bold uppercase">Email & Phone</span>
                        <span className="font-bold text-zinc-700">{formData.email} | {formData.phone}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-zinc-400 font-bold uppercase">Date of Birth</span>
                        <span className="font-bold text-zinc-700">{formData.dob}</span>
                      </div>
                      <div className="border-t border-zinc-200/60 md:col-span-2 pt-3">
                        <span className="block text-[10px] text-zinc-400 font-bold uppercase">Selected Program</span>
                        <span className="font-extrabold text-primary-blue text-sm">{formData.selectedProgram} ({formData.selectedSchool})</span>
                      </div>
                      <div className="border-t border-zinc-200/60 md:col-span-2 pt-3">
                        <span className="block text-[10px] text-zinc-400 font-bold uppercase">Academic Merits</span>
                        <span className="font-bold text-zinc-700">10th GPA: {formData.sscMarks} | 12th Marks: {formData.hscMarks}</span>
                        {formData.entranceRank && (
                          <span className="block font-semibold text-zinc-600 mt-1">Entrance Exam Rank: {formData.entranceRank} ({formData.entranceExam})</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Declaration Statement */}
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-3 text-xs text-amber-800">
                    <ShieldCheck size={20} className="text-amber-500 shrink-0" />
                    <div>
                      <span className="font-bold block">Declaration by Candidate</span>
                      <p className="mt-1 font-medium leading-relaxed">
                        I hereby declare that the particulars furnished above are true and complete to the best of my knowledge. I understand that any false declaration will lead to immediate cancellation of admission.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Action Buttons */}
              <div className="flex justify-between items-center pt-6 border-t border-zinc-100">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className="flex items-center gap-1.5 px-5 py-2.5 border border-zinc-200 hover:border-zinc-300 text-zinc-600 text-xs font-bold rounded-xl transition-all disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ArrowLeft size={14} /> Back
                </button>

                {currentStep < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-1.5 px-6 py-2.5 bg-primary-blue hover:bg-primary-blue/90 text-white text-xs font-bold rounded-xl transition-all"
                  >
                    Continue <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center gap-1.5 px-7 py-3 bg-gradient-to-r from-primary-gold to-accent-amber text-primary-navy hover:to-accent-amber/90 text-xs font-extrabold tracking-wider rounded-xl shadow-md transition-all uppercase"
                  >
                    Submit Application <CheckCircle size={14} />
                  </button>
                )}
              </div>

            </form>
          </div>
        ) : (
          /* Submission Confirmation Success Screen */
          <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 overflow-hidden p-10 text-center space-y-6 animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle size={32} />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-xl font-extrabold text-primary-blue">Application Submitted Successfully!</h2>
              <p className="text-xs text-zinc-500 max-w-md mx-auto leading-relaxed">
                Thank you for applying to Chalapathy University. Your application is being processed by our Admissions CRM.
              </p>
            </div>

            {/* Reference info card */}
            <div className="max-w-md mx-auto border border-zinc-100 rounded-xl p-5 bg-zinc-50 text-xs space-y-3.5">
              <div className="flex justify-between items-center border-b border-zinc-200/60 pb-2.5">
                <span className="text-[10px] text-zinc-400 font-bold uppercase">Application Reference ID</span>
                <span className="font-extrabold text-indigo-700 text-sm">{applicationId}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-400 font-bold uppercase">Candidate Name</span>
                <span className="font-bold text-zinc-700">{formData.fullName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-400 font-bold uppercase">Selected Program</span>
                <span className="font-bold text-zinc-700">{formData.selectedProgram}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-400 font-bold uppercase">Application Status</span>
                <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded text-[10px] font-bold">Under Review</span>
              </div>
            </div>

            <div className="flex justify-center gap-3 pt-4">
              <button 
                onClick={() => window.print()}
                className="flex items-center gap-1.5 px-5 py-2.5 border border-zinc-200 hover:border-zinc-300 text-zinc-700 text-xs font-bold rounded-xl transition-all"
              >
                <Printer size={14} /> Print Receipt
              </button>
              <button 
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(0);
                  setFormData({
                    fullName: "", email: "", phone: "", dob: "", gender: "", fatherName: "",
                    sscMarks: "", hscMarks: "", entranceExam: "EAPCET", entranceRank: "",
                    selectedSchool: "", selectedProgram: "", photoUploaded: false, marksheetUploaded: false
                  });
                }}
                className="px-5 py-2.5 bg-primary-blue hover:bg-primary-blue/90 text-white text-xs font-bold rounded-xl transition-all"
              >
                Submit New Application
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <AIAssistant isOpen={aiOpen} onClose={() => setAiOpen(false)} />
    </div>
  );
}
