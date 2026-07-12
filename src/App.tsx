import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import DynamicPage from "./pages/DynamicPage";
import Events from "./pages/Events";
import News from "./pages/News";

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
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

            {/* Academics Routes */}
            <Route path="/academics" element={<DynamicPage />} />
            <Route path="/academics/schools" element={<DynamicPage />} />
            <Route path="/academics/departments" element={<DynamicPage />} />
            <Route path="/academics/computer-science" element={<DynamicPage />} />
            <Route path="/academics/artificial-intelligence" element={<DynamicPage />} />
            <Route path="/academics/data-science" element={<DynamicPage />} />

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

            {/* Campus Life Routes */}
            <Route path="/campus-life" element={<DynamicPage />} />
            <Route path="/campus-life/hostels" element={<DynamicPage />} />
            <Route path="/campus-life/library" element={<DynamicPage />} />
            <Route path="/campus-life/sports" element={<DynamicPage />} />
            <Route path="/campus-life/clubs" element={<DynamicPage />} />

            {/* Placements Routes */}
            <Route path="/placements" element={<DynamicPage />} />
            <Route path="/placements/statistics" element={<DynamicPage />} />
            <Route path="/placements/recruiters" element={<DynamicPage />} />
            <Route path="/placements/training" element={<DynamicPage />} />

            {/* News Routes */}
            <Route path="/news" element={<News />} />
            <Route path="/news/latest" element={<DynamicPage />} />
            <Route path="/news/events" element={<Events />} />

            {/* Contact Route */}
            <Route path="/contact" element={<DynamicPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
