import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Bookmark, X, Clock, MapPin, CheckCircle } from "lucide-react";

interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  bodyText: string;
}

const EVENTS_DATA: EventItem[] = [
  {
    id: 1,
    title: "Air Taxi Demonstration & Aviation Forum",
    date: "17 Jul 2026",
    time: "09:30 AM",
    location: "Aeronautics Hangar & Airfield Complex",
    category: "Aerospace",
    image: "/prog_engineering.png",
    bodyText: "In collaboration with global aerospace research institutions and pioneering aviation companies, City Chalapathi Institute of Technology is proud to host the Air Taxi Demonstration and Aviation Forum. This event features real-world test flights and static exhibitions of cutting-edge electric Vertical Take-Off and Landing (eVTOL) air taxi models. Attendees will engage with senior flight control engineers, software architects, and regulators discussing flight path safety, battery technology, and battery charging infrastructure. The afternoon panel sessions will cover career pathways in modern avionics, autonomous navigation algorithms, and smart city infrastructure integration."
  },
  {
    id: 2,
    title: "Annual Innovation & Entrepreneurship Summit",
    date: "05 Aug 2026",
    time: "10:00 AM",
    location: "Campus Incubation & Startup Block",
    category: "Summit",
    image: "/prog_computer.png",
    bodyText: "The Annual Innovation & Entrepreneurship Summit at City Chalapathi stands as our premier event dedicated to building startup ecosystems. Student groups will pitch prototypes directly to angel investors, regional venture capital firms, and incubator heads. Keynote addresses from successful startup founders will share lessons on scaling, raising capital, and validating target markets. The summit hosts hands-on product design thinking sessions, intellectual property workshops for patent registrations, and networking tables connecting developers with business mentors."
  },
  {
    id: 3,
    title: "National Research Expo & Patent Showcase",
    date: "12 Sep 2026",
    time: "11:00 AM",
    location: "Bio-Sciences Laboratory & Exhibition Hall",
    category: "Research",
    image: "/prog_pharmacy.png",
    bodyText: "The National Research Expo is a celebrate-science event displaying active publications, doctoral research posters, and student innovations. Exhibitions cover structural engineering geopolymer research, target-oriented nano-carrier drug formulations, DST-funded smart irrigation devices, and artificial intelligence diagnostic apps. Senior scientists from national research institutes will evaluate student models and deliver talks on funding applications and research methodology."
  },
  {
    id: 4,
    // Past Event (Registration Closed)
    title: "Industry Connect: Corporate Leadership Panel",
    date: "10 Jun 2026",
    time: "10:00 AM",
    location: "MBA Seminar Block Center",
    category: "Corporate",
    image: "/prog_management.png",
    bodyText: "Connecting student skills with market needs, the Industry Connect hosts executive panels from software, finance, and core manufacturing companies. Panel discussions will cover high-growth career tracks in artificial intelligence, full-stack architectures, and supply chain logistics. Representatives will detail summer internship opportunities and direct corporate placement guidelines."
  },
  {
    id: 5,
    title: "Global Alumni Reunion & Endowment Gala",
    date: "14 Nov 2026",
    time: "06:00 PM",
    location: "University Grand Lawn Area",
    category: "Alumni Connect",
    image: "/students_admission.png",
    bodyText: "The Global Alumni Reunion welcomes back our distinguished graduates to campus for a formal evening of networking and celebration. Alumni will interact with faculty members and student groups to share career paths and industry trends. The evening will host the announcement of the Alumni Endowment Fund to support underprivileged student scholarships."
  }
];

export default function AllEvents() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [showRegForm, setShowRegForm] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    document.title = "Explore All Events | City Chalapathi Institute of Technology";
  }, []);

  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedEvent]);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setRegSuccess(true);
  };

  const isRegistrationClosed = (dateStr: string) => {
    return new Date(dateStr) < new Date();
  };

  const resetModal = () => {
    setSelectedEvent(null);
    setShowRegForm(false);
    setRegSuccess(false);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7]/30 font-[var(--font-poppins)] pb-24 relative">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#072A6C] to-indigo-950 text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-[1440px] mx-auto relative z-10 text-center lg:text-left space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white font-bold text-[10px] uppercase tracking-wider backdrop-blur-sm">
            Event Directory
          </span>
          <h1 className="text-3xl lg:text-5xl font-[900] tracking-tight">All Campus Events</h1>
          <p className="text-xs text-gray-300 font-light max-w-xl leading-relaxed">
            Browse through our full schedule of upcoming and past campus activities, and register online.
          </p>
        </div>
      </section>

      {/* 3-Card Grid Section */}
      <section className="max-w-[1440px] mx-auto px-5 mt-16">
        <div className="mb-8 pb-5 border-b border-gray-200">
          <h2 className="text-2xl lg:text-3xl font-[800] text-[#072A6C]">
            Explore Events
          </h2>
          <p className="text-[12px] text-gray-400 mt-1 font-light">Showing all technical summits, academic expos, and student forums.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS_DATA.map((item, idx) => {
            const closed = isRegistrationClosed(item.date);
            return (
              <button 
                key={idx}
                onClick={() => {
                  setSelectedEvent(item);
                  setShowRegForm(false);
                  setRegSuccess(false);
                }}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full text-left w-full cursor-pointer outline-none focus:ring-2 focus:ring-[#F97316]"
              >
                <div className="h-56 overflow-hidden bg-slate-900 relative w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                    draggable="false"
                  />
                  {closed && (
                    <div className="absolute top-4 right-4 bg-gray-500/90 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-sm uppercase tracking-wider">
                      Registration Closed
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between w-full">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[10px] text-gray-400 font-semibold uppercase">
                      <span className="text-[#F97316]">{item.category}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                    <h4 className="text-base font-extrabold text-[#072A6C] leading-snug line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                  <div className="pt-4 border-t border-gray-50 mt-5 flex justify-between items-center text-xs font-bold text-[#072A6C]">
                    <span className={closed ? "text-gray-400" : "text-[#072A6C]"}>
                      {closed ? "View Archive" : "Register Now"}
                    </span>
                    <ArrowRight size={14} className={closed ? "text-gray-400" : "text-[#F97316]"} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 🌟 CENTERED EVENT MODAL POPUP OVERLAY                     */}
      {/* ======================================================== */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={resetModal}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-white w-full max-w-[900px] rounded-[20px] overflow-hidden shadow-2xl relative animate-fade-in flex flex-col max-h-[90vh] text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Trigger */}
            <button 
              onClick={resetModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto p-6 md:p-8 space-y-6">
              
              {/* Event Image */}
              <div className="h-[280px] md:h-[350px] w-full rounded-2xl overflow-hidden relative shadow-sm">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-bold text-white bg-[#F97316] py-1 px-3 rounded-lg uppercase tracking-wider shadow-sm">
                  {selectedEvent.category}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl md:text-3xl font-[900] text-[#072A6C] tracking-tight leading-snug">
                {selectedEvent.title}
              </h2>

              {/* Metadata Panel */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-gray-500 font-semibold bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#D71920]" />
                  <span>{selectedEvent.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-[#D71920]" />
                  <span>{selectedEvent.time}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#D71920]" />
                  <span>{selectedEvent.location}</span>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-gray-100" />

              {/* Main Content Body or Registration Form */}
              {!showRegForm ? (
                <div className="text-sm text-gray-600 font-light leading-relaxed space-y-4 animate-fade-in">
                  <p>{selectedEvent.bodyText}</p>
                </div>
              ) : (
                <div className="animate-fade-in">
                  {regSuccess ? (
                    <div className="bg-green-50 border border-green-100 p-6 rounded-2xl text-center space-y-3">
                      <CheckCircle className="mx-auto text-green-500" size={40} />
                      <h4 className="text-lg font-bold text-green-800">Registration Successful!</h4>
                      <p className="text-xs text-green-600 font-light">A confirmation email along with entry tickets has been dispatched for <strong>{formData.name}</strong>.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleRegisterSubmit} className="space-y-4 max-w-md bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="text-sm font-bold text-[#072A6C]">Complete Registration Details</h4>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-600 mb-1">Full Name</label>
                        <input 
                          type="text" 
                          required 
                          className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-[#072A6C] bg-white"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-600 mb-1">Email Address</label>
                        <input 
                          type="email" 
                          required 
                          className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-[#072A6C] bg-white"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-600 mb-1">Contact Number</label>
                        <input 
                          type="tel" 
                          required 
                          className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-[#072A6C] bg-white"
                          placeholder="Your phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <button 
                        type="submit" 
                        className="w-full py-2.5 bg-[#D71920] hover:bg-[#b71217] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                      >
                        Submit Registration
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* Footer Actions */}
              <div className="pt-6 border-t border-gray-100 flex justify-end gap-3">
                {isRegistrationClosed(selectedEvent.date) ? (
                  <button
                    disabled
                    className="h-10 px-6 bg-gray-300 text-gray-500 text-xs font-bold rounded-xl cursor-not-allowed inline-flex items-center gap-1.5"
                  >
                    Registration Closed
                  </button>
                ) : !showRegForm ? (
                  <button
                    onClick={() => setShowRegForm(true)}
                    className="h-10 px-6 bg-gradient-to-r from-[#D71920] to-[#b71217] text-white text-xs font-bold rounded-xl inline-flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
                  >
                    Register Now <ArrowRight size={13} />
                  </button>
                ) : (
                  <button
                    onClick={() => setShowRegForm(false)}
                    className="h-10 px-5 border border-gray-200 hover:border-gray-300 text-gray-700 text-xs font-bold rounded-xl transition-all cursor-pointer"
                  >
                    Back to Details
                  </button>
                )}
                <button
                  onClick={resetModal}
                  className="h-10 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl inline-flex items-center transition-all active:scale-95 cursor-pointer"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
