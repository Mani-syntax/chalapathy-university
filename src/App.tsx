import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import { X, RefreshCw, CheckCircle2, Megaphone, Bell, Calendar, GraduationCap, FileText, Award, BookOpen } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import DynamicPage from "./pages/DynamicPage";
import Events from "./pages/Events";
import News from "./pages/News";
import AllEvents from "./pages/AllEvents";
import AdminPortal from "./pages/AdminPortal";
import { DataProvider, useData } from "./context/DataContext";

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const IconMap: Record<string, React.ComponentType<any>> = {
  GraduationCap: GraduationCap,
  Calendar: Calendar,
  FileText: FileText,
  Award: Award,
  BookOpen: BookOpen
};

function AppContent() {
  const { announcements } = useData();

  const [showSplash, setShowSplash] = useState(() => {
    const visited = sessionStorage.getItem("chalapathy_visited");
    return !visited;
  });

  const videoRef = React.useRef<HTMLVideoElement>(null);
  const fallbackTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = "hidden";
      
      // Safety fallback: dismiss splash screen after 10s if stuck loading
      fallbackTimerRef.current = setTimeout(() => {
        setShowSplash(false);
      }, 10000);

      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.log("Autoplay blocked or video error, fallback active:", err);
        });
      }

      return () => {
        if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
      sessionStorage.setItem("chalapathy_visited", "true");
    }
  }, [showSplash]);

  const handleVideoPlay = () => {
    // Clear safety loading timer once playback starts to avoid cutting video mid-play
    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
  };

  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [showAnnouncementsDrawer, setShowAnnouncementsDrawer] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    state: "",
    city: "",
    college: "",
    degree: "",
    program: "",
    captchaInput: "",
    agree: false
  });
  
  const [captchaCode, setCaptchaCode] = useState("6a3ca0");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Generate a random captcha code
  const generateCaptcha = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptchaCode(code);
  };

  useEffect(() => {
    if (showEnquiryModal) {
      generateCaptcha();
      document.body.style.overflow = "hidden";
    } else if (showAnnouncementsDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        state: "",
        city: "",
        college: "",
        degree: "",
        program: "",
        captchaInput: "",
        agree: false
      });
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showEnquiryModal, showAnnouncementsDrawer]);

  // Handle escape key listener to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowEnquiryModal(false);
        setShowAnnouncementsDrawer(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.captchaInput.toLowerCase() !== captchaCode.toLowerCase()) {
      alert("Invalid Captcha code! Please try again.");
      generateCaptcha();
      return;
    }
    if (!formData.agree) {
      alert("Please authorize us to contact you by ticking the checkbox.");
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {showSplash && (
          <motion.div
            key="splash"
            className="fixed inset-0 z-[999999] bg-black flex items-center justify-center select-none"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          >
            <video
              ref={videoRef}
              src="/videodisplay.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              onPlay={handleVideoPlay}
              onError={() => setShowSplash(false)}
              onEnded={() => {
                setTimeout(() => {
                  setShowSplash(false);
                }, 1500); // 1.5-second pause on final frame
              }}
              className="w-full h-full object-cover"
            />
            <style dangerouslySetInnerHTML={{__html: `
              .intro-speech-bubble {
                position: absolute;
                bottom: 96px;
                right: 24px;
                background: #ffffff;
                border: 3.5px solid #D71920;
                border-radius: 16px;
                padding: 12px 22px;
                font-weight: 900;
                font-size: 11px;
                color: #072A6C;
                text-transform: uppercase;
                letter-spacing: 0.12em;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
                cursor: pointer;
                outline: none;
                transition: all 0.2s ease;
                z-index: 1000000;
              }
              .intro-speech-bubble:hover {
                transform: scale(1.05);
              }
              .intro-speech-bubble:active {
                transform: scale(0.95);
              }
              .intro-speech-bubble::after, .intro-speech-bubble::before {
                top: 100%;
                left: 25%;
                border: solid transparent;
                content: "";
                height: 0;
                width: 0;
                position: absolute;
                pointer-events: none;
              }
              .intro-speech-bubble::after {
                border-top-color: #ffffff;
                border-width: 9px;
                margin-left: -9px;
              }
              .intro-speech-bubble::before {
                border-top-color: #D71920;
                border-width: 13px;
                margin-left: -13px;
              }
            `}} />
            
            <button
              onClick={() => setShowSplash(false)}
              className="intro-speech-bubble"
            >
              Skip Intro ➔
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F7F8FC]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About Routes */}
            <Route path="/about" element={<DynamicPage />} />
            <Route path="/about/history" element={<DynamicPage />} />
            <Route path="/about/vision" element={<DynamicPage />} />
            <Route path="/about/leadership" element={<DynamicPage />} />
            <Route path="/about/advantage" element={<DynamicPage />} />

            {/* Academics Routes */}
            <Route path="/academics" element={<DynamicPage />} />
            <Route path="/academics/schools" element={<DynamicPage />} />
            <Route path="/academics/departments" element={<DynamicPage />} />
            <Route path="/academics/computer-science" element={<DynamicPage />} />
            <Route path="/academics/artificial-intelligence" element={<DynamicPage />} />
            <Route path="/academics/data-science" element={<DynamicPage />} />
            <Route path="/academics/calendar" element={<DynamicPage />} />
            <Route path="/academics/flexibilities" element={<DynamicPage />} />
            <Route path="/academics/programmes" element={<DynamicPage />} />
            <Route path="/academics/grading" element={<DynamicPage />} />
            <Route path="/academics/degrees" element={<DynamicPage />} />
            <Route path="/academics/electives" element={<DynamicPage />} />
            <Route path="/academics/rules" element={<DynamicPage />} />
            <Route path="/academics/teaching" element={<DynamicPage />} />
            <Route path="/academics/bos" element={<DynamicPage />} />
            <Route path="/academics/*" element={<DynamicPage />} />

            {/* Admissions Routes */}
            <Route path="/admissions" element={<DynamicPage />} />
            <Route path="/admissions/undergraduate" element={<DynamicPage />} />
            <Route path="/admissions/postgraduate" element={<DynamicPage />} />
            <Route path="/admissions/phd" element={<DynamicPage />} />
            <Route path="/admissions/international" element={<DynamicPage />} />
            <Route path="/admissions/fees" element={<DynamicPage />} />
            <Route path="/admissions/scholarships" element={<DynamicPage />} />
            <Route path="/admissions/apply" element={<DynamicPage />} />

            {/* Research Routes */}
            <Route path="/research" element={<DynamicPage />} />
            <Route path="/research/projects" element={<DynamicPage />} />
            <Route path="/research/publications" element={<DynamicPage />} />
            <Route path="/research/patents" element={<DynamicPage />} />

            {/* Management Routes */}
            <Route path="/management" element={<DynamicPage />} />
            <Route path="/management/board-members" element={<DynamicPage />} />
            <Route path="/management/faculty" element={<DynamicPage />} />
            <Route path="/management/staff" element={<DynamicPage />} />

            {/* Campus Life Routes */}
            <Route path="/campus-life" element={<DynamicPage />} />
            <Route path="/campus-life/hostels" element={<DynamicPage />} />
            <Route path="/campus-life/library" element={<DynamicPage />} />
            <Route path="/campus-life/sports" element={<DynamicPage />} />
            <Route path="/campus-life/clubs" element={<DynamicPage />} />
            <Route path="/campus-life/*" element={<DynamicPage />} />

            {/* Placements Routes */}
            <Route path="/placements" element={<DynamicPage />} />
            <Route path="/placements/statistics" element={<DynamicPage />} />
            <Route path="/placements/recruiters" element={<DynamicPage />} />
            <Route path="/placements/training" element={<DynamicPage />} />

            {/* News Routes */}
            <Route path="/news" element={<News />} />
            <Route path="/news/latest" element={<DynamicPage />} />
            <Route path="/news/events" element={<Events />} />
            <Route path="/news/events/all" element={<AllEvents />} />

            {/* Contact Route */}
            <Route path="/contact" element={<DynamicPage />} />

            {/* Legal / Policy Routes */}
            <Route path="/privacy-policy" element={<DynamicPage />} />
            <Route path="/terms-conditions" element={<DynamicPage />} />
            <Route path="/sitemap" element={<DynamicPage />} />
            
            {/* Admin Portal Route */}
            <Route path="/admin" element={<AdminPortal />} />
          </Routes>
        </main>
        <Footer />
      </div>

      {/* ======================================================== */}
      {/* 🌟 SLIMMED NON-OVERLAPPING STACKED RIGHT-SIDE TABS       */}
      {/* ======================================================== */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 items-end font-[var(--font-poppins)]">
        {/* Announcements Tab (Gold/Dark Text) */}
        <button
          onClick={() => setShowAnnouncementsDrawer(true)}
          className="w-[48px] h-[220px] bg-[#D4AF37] hover:bg-[#c29e28] text-gray-900 font-bold text-[10px] tracking-[1.5px] rounded-l-xl shadow-md transition-all duration-300 hover:-translate-x-1 flex items-center justify-center [writing-mode:vertical-lr] rotate-180 whitespace-nowrap cursor-pointer select-none uppercase border border-r-0 border-white/10 outline-none"
        >
          Announcements
        </button>
        {/* Admission Enquiry Tab (Maroon/White Text) */}
        <button
          onClick={() => setShowEnquiryModal(true)}
          className="w-[48px] h-[220px] bg-[#D71920] hover:bg-[#b71217] text-white font-bold text-[10px] tracking-[1.5px] rounded-l-xl shadow-md transition-all duration-300 hover:-translate-x-1 flex items-center justify-center [writing-mode:vertical-lr] rotate-180 whitespace-nowrap cursor-pointer select-none uppercase border border-r-0 border-white/10 outline-none"
        >
          Admission Enquiry
        </button>
      </div>

      {/* ======================================================== */}
      {/* 🌟 SLIDING LEFT-SIDE ANNOUNCEMENTS DRAWER                 */}
      {/* ======================================================== */}
      {showAnnouncementsDrawer && (
        <div 
          className="fixed inset-0 z-50 flex items-center bg-black/40 backdrop-blur-sm"
          onClick={() => setShowAnnouncementsDrawer(false)}
        >
          <div 
            className="bg-[#F7F8FC] w-full max-w-[400px] h-full shadow-2xl relative flex flex-col text-left rounded-r-2xl transform transition-transform duration-300 animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header (Maroon) */}
            <div className="bg-[#D71920] text-white p-5 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2">
                <Megaphone size={18} className="text-[#D4AF37]" />
                <h3 className="font-extrabold text-sm tracking-wide">Chalapathi Announcements</h3>
              </div>
              <button 
                onClick={() => setShowAnnouncementsDrawer(false)}
                className="text-white/80 hover:text-white transition-colors cursor-pointer outline-none"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable list items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {announcements.map((item, idx) => {
                const Icon = IconMap[item.iconName] || Megaphone;
                return (
                  <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow transition-shadow flex gap-3.5 items-start">
                    <div className="w-9 h-9 rounded-full bg-[#072A6C]/5 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#072A6C]" />
                    </div>
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] text-[#D71920] font-extrabold uppercase tracking-wider">Announcement</span>
                        <span className="text-[9px] text-gray-400 font-medium">{item.date}</span>
                      </div>
                      <h4 className="text-xs font-bold text-[#072A6C] line-clamp-1 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-gray-200/60 bg-white flex justify-end">
              <button 
                onClick={() => setShowAnnouncementsDrawer(false)}
                className="h-9 px-5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Close Drawer
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 🌟 ADMISSION ENQUIRY POPUP MODAL (SRM DESIGN)             */}
      {/* ======================================================== */}
      {showEnquiryModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={() => setShowEnquiryModal(false)}
        >
          <div 
            className="bg-white w-full max-w-[620px] rounded-[16px] overflow-hidden shadow-2xl relative animate-fade-in flex flex-col max-h-[92vh] text-left border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setShowEnquiryModal(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 hover:bg-white/45 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Form Content */}
            <div className="p-6 md:p-8 overflow-y-auto">
              <h3 className="text-lg font-black uppercase text-[#072A6C] mb-1">Admission Enquiry</h3>
              <p className="text-xs text-gray-500 mb-6">Enter details below to consult with our career counselors</p>
              
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 space-y-4">
                  <CheckCircle2 size={56} className="text-emerald-500" />
                  <h4 className="text-base font-extrabold text-[#072A6C]">Enquiry Submitted Successfully!</h4>
                  <p className="text-xs text-gray-500 text-center max-w-[340px]">Our admissions helpdesk representative will contact you on your registered mobile number shortly.</p>
                  <button 
                    onClick={() => setShowEnquiryModal(false)}
                    className="h-10 px-6 bg-[#072A6C] hover:bg-[#051c4a] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-[var(--font-poppins)]">
                  {/* Grid Rows */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase text-gray-500">Applicant Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-10 px-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#072A6C] font-light"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase text-gray-500">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-10 px-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#072A6C] font-light"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase text-gray-500">Mobile Number *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="10-digit number"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full h-10 px-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#072A6C] font-light"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase text-gray-500">State *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Andhra Pradesh"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full h-10 px-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#072A6C] font-light"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase text-gray-500">City *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Guntur"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full h-10 px-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#072A6C] font-light"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase text-gray-500">Target Degree *</label>
                      <select 
                        required
                        value={formData.degree}
                        onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                        className="w-full h-10 px-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#072A6C] font-bold bg-white"
                      >
                        <option value="">Select Degree</option>
                        <option value="btech">B.Tech Engineering</option>
                        <option value="mtech">M.Tech Specialization</option>
                        <option value="mba">MBA Management</option>
                        <option value="mca">MCA Software Application</option>
                        <option value="pharmacy">Pharmacy streams</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase text-gray-500">Academic Program *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Computer Science Engineering"
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full h-10 px-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#072A6C] font-light"
                      />
                    </div>
                  </div>

                  {/* CAPTCHA validation */}
                  <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl flex items-center justify-between gap-4 mt-2">
                    <div className="flex items-center gap-3">
                      <div className="px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-300 font-mono text-base font-bold tracking-widest text-gray-800 rounded select-none shadow-inner border border-gray-300">
                        {captchaCode}
                      </div>
                      <button 
                        type="button" 
                        onClick={generateCaptcha}
                        className="p-1 rounded hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer outline-none"
                      >
                        <RefreshCw size={16} />
                      </button>
                    </div>
                    <div className="flex-1 space-y-1 max-w-[200px]">
                      <label className="text-[9px] font-bold uppercase text-gray-500">Verify Captcha *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Enter code"
                        value={formData.captchaInput}
                        onChange={(e) => setFormData({ ...formData, captchaInput: e.target.value })}
                        className="w-full h-9 px-3.5 border border-gray-200 rounded focus:outline-none focus:border-[#072A6C] font-bold text-center"
                      />
                    </div>
                  </div>

                  {/* Terms checkbox */}
                  <div className="flex gap-2 items-start pt-2">
                    <input 
                      type="checkbox" 
                      id="agree" 
                      required
                      className="w-3.5 h-3.5 mt-0.5 border border-gray-300 rounded accent-[#072A6C] cursor-pointer"
                      checked={formData.agree}
                      onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                    />
                    <label htmlFor="agree" className="text-[10px] text-gray-500 leading-normal font-light cursor-pointer select-none">
                      I authorize City Chalapathi Institute of Technology and its representatives to contact me regarding updates and notifications through Email, SMS, WhatsApp, and Calls. This consent overrides any DND/NDNC registration.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full h-11 bg-[#D71920] hover:bg-[#b71217] text-white font-bold text-xs rounded-lg transition-colors cursor-pointer mt-2"
                  >
                    Submit
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </BrowserRouter>
  );
}

export default function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
}
