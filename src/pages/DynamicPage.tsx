"use client";

import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Home, Calendar, BookOpen, Landmark, Info, Phone, ShieldCheck } from "lucide-react";

// Helper to generate dynamic, rich content based on current path
const getPageContent = (path: string) => {
  const cleanPath = path.toLowerCase().replace(/\/$/, "");

  // About Pages
  if (cleanPath.startsWith("/about")) {
    if (cleanPath.includes("history")) {
      return {
        title: "Our History & Heritage",
        category: "About Us",
        desc: "Established with a vision to nurture innovators, City Chalapathi Institute of Technology has a rich heritage of educational brilliance dating back over 25 years.",
        body: (
          <div className="space-y-6 text-gray-600 text-sm">
            <p>Founded in Guntur, Andhra Pradesh, our institution was established to bridge the gap between academic education and industry requirements. Over the past two and a half decades, we have evolved from a local college into a premier autonomous research university of national reputation.</p>
            <div className="border-l-4 border-[#D71920] pl-4 my-6 italic text-gray-700 font-medium">
              "To provide value-based quality technical education and produce competent engineers who can contribute to the progress of the society."
            </div>
            <h3 className="text-lg font-bold text-[#072A6C] mt-6">Milestones Journey</h3>
            <ul className="space-y-3 list-disc pl-5 mt-2">
              <li><strong>2001:</strong> Inception of the college with three basic undergraduate branches.</li>
              <li><strong>2008:</strong> Accredited by NBA for all core engineering departments.</li>
              <li><strong>2015:</strong> Conferred Autonomous Status, allowing custom industry-driven curricula.</li>
              <li><strong>2021:</strong> Awarded NAAC A+ accreditation for excellence in infrastructure and academics.</li>
            </ul>
          </div>
        )
      };
    }
    if (cleanPath.includes("vision")) {
      return {
        title: "Vision & Mission",
        category: "About Us",
        desc: "Our core beliefs and guiding stars directing our future pathways of excellence.",
        body: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="bg-white border border-gray-100 rounded-[16px] p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#072A6C] mb-4 flex items-center gap-2">
                <Info className="text-[#D71920]" size={20} /> OUR VISION
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To emerge as a premier destination for value-based technical education and research, creating globally competent leaders who drive social and technological progress through innovation.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-[16px] p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#072A6C] mb-4 flex items-center gap-2">
                <ShieldCheck className="text-[#D71920]" size={20} /> OUR MISSION
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm list-disc pl-5">
                <li>Impart high-quality, practical technical education through modern teaching methodologies.</li>
                <li>Foster an environment of innovation, research, and entrepreneurship.</li>
                <li>Collaborate with top industries and global universities to keep learning current.</li>
                <li>Nurture ethical, empathetic values alongside technical competency.</li>
              </ul>
            </div>
          </div>
        )
      };
    }
    if (cleanPath.includes("leadership")) {
      return {
        title: "Leadership & Governing Body",
        category: "About Us",
        desc: "Meet the visionary leaders directing the strategic progress of City Chalapathi Institute of Technology.",
        body: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              { name: "Sri Y. V. Anjaneyulu", role: "Chairman & President", desc: "A visionary educationist leading multiple initiatives in Guntur district." },
              { name: "Dr. K. Chandrasekhar", role: "Principal", desc: "Bringing over 30 years of academic and administrative engineering excellence." },
              { name: "Prof. P. V. Ramana", role: "Dean Academics", desc: "Ensuring industry-current curricular updates across all departments." }
            ].map((leader, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-[16px] p-6 shadow-sm text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl text-[#072A6C]">
                  {leader.name.split(" ").slice(-1)[0][0]}
                </div>
                <h4 className="font-extrabold text-[#072A6C] text-sm">{leader.name}</h4>
                <p className="text-xs text-[#D71920] font-semibold mt-1">{leader.role}</p>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">{leader.desc}</p>
              </div>
            ))}
          </div>
        )
      };
    }
    return {
      title: "About Our Institution",
      category: "About Us",
      desc: "City Chalapathi Institute of Technology is a leading autonomous engineering college dedicated to empowering tomorrow's innovators.",
      body: (
        <div className="space-y-6 text-gray-600 text-sm">
          <p>We believe in imparting hands-on, practical knowledge that equips our students to address real-world challenges. Explore our links to learn more about our vision, leadership, and glorious heritage.</p>
          <div className="grid grid-cols-3 gap-4 my-8">
            <Link to="/about/history" className="bg-white border border-gray-100 rounded-[16px] p-4 text-center hover:border-[#072A6C] transition-all">
              <span className="block font-bold text-[#072A6C] text-sm">History</span>
            </Link>
            <Link to="/about/vision" className="bg-white border border-gray-100 rounded-[16px] p-4 text-center hover:border-[#072A6C] transition-all">
              <span className="block font-bold text-[#072A6C] text-sm">Vision</span>
            </Link>
            <Link to="/about/leadership" className="bg-white border border-gray-100 rounded-[16px] p-4 text-center hover:border-[#072A6C] transition-all">
              <span className="block font-bold text-[#072A6C] text-sm">Leadership</span>
            </Link>
          </div>
        </div>
      )
    };
  }

  // Academics Pages
  if (cleanPath.startsWith("/academics")) {
    if (cleanPath.includes("computer-science")) {
      return {
        title: "Computer Science & Engineering",
        category: "Academics",
        desc: "Empowering next-generation developers, software engineers, and technology leaders.",
        body: (
          <div className="space-y-6 text-gray-600 text-sm">
            <p>Our curriculum covers fundamental computation structures, databases, algorithms, web dev, and distributed networks. We feature advanced labs with dedicated high-performance workstations.</p>
            <h4 className="text-[#072A6C] font-extrabold text-sm">Core Focus Areas</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
              <div className="bg-gray-100 rounded-lg p-3 text-center text-xs font-semibold text-gray-700">Full Stack Dev</div>
              <div className="bg-gray-100 rounded-lg p-3 text-center text-xs font-semibold text-gray-700">Cloud Computing</div>
              <div className="bg-gray-100 rounded-lg p-3 text-center text-xs font-semibold text-gray-700">Cybersecurity</div>
              <div className="bg-gray-100 rounded-lg p-3 text-center text-xs font-semibold text-gray-700">Database Systems</div>
            </div>
          </div>
        )
      };
    }
    if (cleanPath.includes("artificial-intelligence")) {
      return {
        title: "Artificial Intelligence & ML",
        category: "Academics",
        desc: "Unlocking automation, predictive modeling, and intelligent agent systems.",
        body: (
          <div className="space-y-6 text-gray-600 text-sm">
            <p>Learn machine learning, neural networks, natural language processing, and deep learning libraries. Guided research under professors actively published in IEEE conferences.</p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded text-xs text-blue-800">
              Note: This program requires mathematical aptitude in Linear Algebra and Probability.
            </div>
          </div>
        )
      };
    }
    if (cleanPath.includes("data-science")) {
      return {
        title: "Data Science",
        category: "Academics",
        desc: "Transforming big data into actionable insights and strategic decisions.",
        body: (
          <div className="space-y-6 text-gray-600 text-sm">
            <p>Curriculum structured around statistics, data visualization, Hadoop pipelines, and predictive analytics modeling using Python and R.</p>
          </div>
        )
      };
    }
    return {
      title: "Academics & Schools",
      category: "Academics",
      desc: "Comprehensive engineering, science, and diploma training pathways.",
      body: (
        <div className="space-y-6">
          <p className="text-gray-600 text-sm">Choose from our specialized undergraduate and postgraduate branches of study designed to secure industry placement.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <Link to="/academics/computer-science" className="bg-white border border-gray-100 p-5 rounded-[16px] shadow-sm hover:-translate-y-1 transition-all block">
              <h4 className="font-extrabold text-[#072A6C] text-sm">Computer Science & Engineering</h4>
              <p className="text-xs text-gray-500 mt-2">Explore algorithms, development, and network systems.</p>
            </Link>
            <Link to="/academics/artificial-intelligence" className="bg-white border border-gray-100 p-5 rounded-[16px] shadow-sm hover:-translate-y-1 transition-all block">
              <h4 className="font-extrabold text-[#072A6C] text-sm">AI & Machine Learning</h4>
              <p className="text-xs text-gray-500 mt-2">Train intelligent models and predictive automated systems.</p>
            </Link>
            <Link to="/academics/data-science" className="bg-white border border-gray-100 p-5 rounded-[16px] shadow-sm hover:-translate-y-1 transition-all block">
              <h4 className="font-extrabold text-[#072A6C] text-sm">Data Science</h4>
              <p className="text-xs text-gray-500 mt-2">Mine data streams and generate critical business analytics.</p>
            </Link>
          </div>
        </div>
      )
    };
  }

  // Admissions Pages
  if (cleanPath.startsWith("/admissions")) {
    if (cleanPath.includes("apply")) {
      return {
        title: "Apply Online",
        category: "Admissions",
        desc: "Start your journey today. Fill out our online application form to secure your seat.",
        body: (
          <form className="space-y-4 max-w-lg mt-4 bg-white border border-gray-100 p-6 rounded-[16px] shadow-sm">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Full Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-200 rounded-[8px] text-xs outline-none focus:ring-1 focus:ring-[#072A6C]" placeholder="Enter full name" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
              <input type="email" className="w-full px-3 py-2 border border-gray-200 rounded-[8px] text-xs outline-none focus:ring-1 focus:ring-[#072A6C]" placeholder="Enter email" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Selected Program</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-[8px] text-xs outline-none focus:ring-1 focus:ring-[#072A6C]">
                <option>Engineering (B.Tech)</option>
                <option>Computer Applications (MCA)</option>
                <option>Management (MBA)</option>
                <option>Pharmacy (B.Pharm)</option>
              </select>
            </div>
            <button type="button" onClick={() => alert("Application Saved! Registration details sent to email.")} className="w-full py-2.5 bg-[#D71920] hover:bg-[#b71217] text-white font-bold text-xs rounded-[8px] transition-colors">
              Submit Registration
            </button>
          </form>
        )
      };
    }
    if (cleanPath.includes("fees")) {
      return {
        title: "Academic Fee Structure",
        category: "Admissions",
        desc: "Transparent and competitive tuition fee details across all core streams.",
        body: (
          <div className="bg-white border border-gray-100 rounded-[16px] overflow-hidden shadow-sm mt-4">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 font-bold border-b border-gray-200">
                  <th className="p-4">Program Stream</th>
                  <th className="p-4">Annual Tuition Fee</th>
                  <th className="p-4">Exam Cell Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                <tr>
                  <td className="p-4 font-semibold text-[#072A6C]">B.Tech (Computer Science / AI)</td>
                  <td className="p-4">₹90,000 / Year</td>
                  <td className="p-4">₹5,000 / Year</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#072A6C]">B.Tech (ECE / Mech / EEE)</td>
                  <td className="p-4">₹75,000 / Year</td>
                  <td className="p-4">₹5,000 / Year</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#072A6C]">MCA (Computer Applications)</td>
                  <td className="p-4">₹55,000 / Year</td>
                  <td className="p-4">₹4,000 / Year</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#072A6C]">MBA (Management)</td>
                  <td className="p-4">₹65,000 / Year</td>
                  <td className="p-4">₹4,000 / Year</td>
                </tr>
              </tbody>
            </table>
          </div>
        )
      };
    }
    if (cleanPath.includes("scholarships")) {
      return {
        title: "Scholarships & Merit Schemes",
        category: "Admissions",
        desc: "Ensuring financial need never deters brilliant academic potential.",
        body: (
          <div className="space-y-4 text-gray-600 text-sm mt-4">
            <div className="bg-white border border-gray-100 p-5 rounded-[16px] shadow-sm">
              <h4 className="font-extrabold text-[#072A6C] text-sm mb-2">1. Merit Scholarship</h4>
              <p className="text-xs">Students securing top 100 ranks in entrance exams are eligible for a 50% tuition waiver.</p>
            </div>
            <div className="bg-white border border-gray-100 p-5 rounded-[16px] shadow-sm">
              <h4 className="font-extrabold text-[#072A6C] text-sm mb-2">2. Sports & Athletic Waiver</h4>
              <p className="text-xs">State or National level athletes receive up to 100% hostel and fee exemptions.</p>
            </div>
          </div>
        )
      };
    }
    return {
      title: "Admissions Portal",
      category: "Admissions",
      desc: "Enrollment processes, eligibility guidelines, fee charts, and student aids.",
      body: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <Link to="/admissions/apply" className="bg-[#072A6C] text-white p-6 rounded-[16px] shadow-sm flex flex-col justify-between min-h-[140px] hover:translate-y-[-2px] transition-transform">
            <h4 className="font-bold text-sm">Start Application</h4>
            <span className="text-xs text-blue-200 flex items-center gap-1">Online Application Form <ArrowRight size={12} /></span>
          </Link>
          <Link to="/admissions/fees" className="bg-white border border-gray-100 p-6 rounded-[16px] shadow-sm flex flex-col justify-between min-h-[140px] hover:translate-y-[-2px] transition-transform">
            <h4 className="font-bold text-[#072A6C] text-sm">Fee Structure</h4>
            <span className="text-xs text-[#D71920] flex items-center gap-1">View Stream Details <ArrowRight size={12} /></span>
          </Link>
          <Link to="/admissions/scholarships" className="bg-white border border-gray-100 p-6 rounded-[16px] shadow-sm flex flex-col justify-between min-h-[140px] hover:translate-y-[-2px] transition-transform">
            <h4 className="font-bold text-[#072A6C] text-sm">Scholarships</h4>
            <span className="text-xs text-[#D71920] flex items-center gap-1">Apply for Waivers <ArrowRight size={12} /></span>
          </Link>
        </div>
      )
    };
  }

  // Placements Pages
  if (cleanPath.startsWith("/placements")) {
    return {
      title: "Placements & Careers Cell",
      category: "Placements",
      desc: "Bridging campus learning with career placement inside global MNC tech giants.",
      body: (
        <div className="space-y-6 text-gray-600 text-sm">
          <p>Our dedicated placement cell hosts campus interviews, provides aptitude workshops, and guides internship allocations during the final semesters.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            <div className="bg-white border border-gray-100 p-5 rounded-[16px] text-center shadow-sm">
              <span className="block text-2xl font-extrabold text-[#072A6C]">₹18 LPA</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase mt-1 block">Highest Package</span>
            </div>
            <div className="bg-white border border-gray-100 p-5 rounded-[16px] text-center shadow-sm">
              <span className="block text-2xl font-extrabold text-[#072A6C]">₹5.5 LPA</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase mt-1 block">Average Package</span>
            </div>
            <div className="bg-white border border-gray-100 p-5 rounded-[16px] text-center shadow-sm">
              <span className="block text-2xl font-extrabold text-[#072A6C]">95%</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase mt-1 block">Placement Record</span>
            </div>
          </div>
        </div>
      )
    };
  }

  // Research Pages
  if (cleanPath.startsWith("/research")) {
    return {
      title: "Research & Innovation",
      category: "Research",
      desc: "Driving patent submissions, research sponsorships, and scientific breakthroughs.",
      body: (
        <div className="space-y-6 text-gray-600 text-sm">
          <p>We support active research communities. Faculty members are currently guiding projects funded by DST, AICTE, and local government departments.</p>
        </div>
      )
    };
  }

  // Campus Life Pages
  if (cleanPath.startsWith("/campus-life")) {
    return {
      title: "Campus Life & Amenities",
      category: "Campus Life",
      desc: "Explore details of hostels, libraries, dining halls, and student activity clubs.",
      body: (
        <div className="space-y-6 text-gray-600 text-sm">
          <p>A balanced academic life requires dynamic extracurricular involvement. We feature multi-court sports facilities and comfortable hostel options.</p>
        </div>
      )
    };
  }

  // Contact Pages
  if (cleanPath.startsWith("/contact")) {
    return {
      title: "Contact Our Office",
      category: "Support",
      desc: "Get in touch with admissions, administration, and campus security staff.",
      body: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="space-y-4">
            <h4 className="font-extrabold text-[#072A6C] text-sm">Office Address</h4>
            <p className="text-xs text-gray-600 leading-relaxed">City Chalapathi Institute of Technology<br />A.R. Nagar, Mothadaka, Guntur District,<br />Andhra Pradesh - 522034</p>
            <h4 className="font-extrabold text-[#072A6C] text-sm pt-2">Admission Hotlines</h4>
            <p className="text-xs text-gray-600">Mobile: +91 88866 30355, 88866 30356<br />Email: admissions@city.ac.in</p>
          </div>
          <div className="h-60 rounded-[16px] overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.974950454796!2d80.28581691486445!3d16.375218788685984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a79679802cfad%3A0xe67e2a901bbd33fe!2sChalapathi%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1657523129846!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )
    };
  }

  // Default fallback
  return {
    title: "University Information Page",
    category: "Information",
    desc: "Discover details, academic programs, and announcements from City Chalapathi Institute of Technology.",
    body: <p className="text-gray-600 text-sm">Please select a topic from the main navigation menu or search directory.</p>
  };
};

export default function DynamicPage() {
  const { pathname } = useLocation();
  const content = getPageContent(pathname);

  useEffect(() => {
    document.title = `${content.title} | City Chalapathi Institute of Technology`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, content.title]);

  // Generate breadcrumb links based on path segments
  const pathSegments = pathname.split("/").filter((x) => x);

  return (
    <div className="flex-1 w-full bg-[#F7F8FC] py-10 font-[var(--font-poppins)]">
      <div className="max-w-[1440px] mx-auto px-5">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-6 bg-white py-2.5 px-4 rounded-full border border-gray-100 shadow-sm w-fit">
          <Link to="/" className="hover:text-[#D71920] flex items-center gap-1 transition-colors">
            <Home size={12} /> Home
          </Link>
          {pathSegments.map((segment, index) => {
            const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const isLast = index === pathSegments.length - 1;
            const cleanLabel = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

            return (
              <React.Fragment key={url}>
                <ChevronRight size={10} className="text-gray-300 shrink-0" />
                {isLast ? (
                  <span className="text-gray-600 font-semibold truncate max-w-[150px]">{cleanLabel}</span>
                ) : (
                  <Link to={url} className="hover:text-[#D71920] transition-colors shrink-0">
                    {cleanLabel}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Layout Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main Info */}
          <div className="lg:col-span-8 bg-white border border-gray-200/60 rounded-[16px] p-8 shadow-sm">
            <span className="text-[11px] font-bold text-[#D71920] uppercase tracking-wider block mb-1">{content.category}</span>
            <h1 className="text-[28px] md:text-[34px] font-[800] text-[#072A6C] leading-snug tracking-tight mb-4">
              {content.title}
            </h1>
            <p className="text-[14px] text-gray-500 leading-relaxed font-light mb-8 pb-6 border-b border-gray-100">
              {content.desc}
            </p>
            <div>
              {content.body}
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#072A6C] text-white rounded-[16px] p-6 shadow-sm">
              <h3 className="font-bold text-sm mb-3">Quick Navigation</h3>
              <ul className="space-y-2 text-xs text-blue-200">
                <li><Link to="/about" className="hover:text-white transition-colors flex items-center justify-between">About Institution <ArrowRight size={10} /></Link></li>
                <li><Link to="/academics" className="hover:text-white transition-colors flex items-center justify-between">Academic Programs <ArrowRight size={10} /></Link></li>
                <li><Link to="/admissions" className="hover:text-white transition-colors flex items-center justify-between">Enrollment & Fees <ArrowRight size={10} /></Link></li>
                <li><Link to="/placements" className="hover:text-white transition-colors flex items-center justify-between">Placements & Statistics <ArrowRight size={10} /></Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors flex items-center justify-between">Contact Support <ArrowRight size={10} /></Link></li>
              </ul>
            </div>

            <div className="bg-white border border-gray-100 rounded-[16px] p-6 shadow-sm">
              <h3 className="font-bold text-sm text-[#072A6C] mb-3">Admission Helpdesk</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">Have questions about registration, courses, or hostels? Reach our advisors directly.</p>
              <a href="tel:8886630355" className="h-10 w-full bg-[#D71920] hover:bg-[#b71217] text-white font-bold text-xs rounded-[8px] flex items-center justify-center gap-1.5 transition-colors">
                <Phone size={13} /> Call Counselor
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
