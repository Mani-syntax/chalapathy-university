"use client";

import React, { useState } from "react";
import { Compass, Play, Info, Eye, ChevronRight, HelpCircle, MapPin, Building, Trophy, BookOpen } from "lucide-react";

const campusLocations = [
  {
    id: "main-block",
    name: "Administrative & Academic Main Block",
    icon: Building,
    desc: "The central architectural hub of Chalapathy University, housing administrative offices, smart lecture halls, and executive boardrooms. Styled with premium glass facades and sustainable architecture.",
    stats: { BuiltArea: "1,20,000 sq ft", SmartClassrooms: "36", WiFiSpeed: "1 Gbps" },
    bgColor: "from-blue-900 to-indigo-950",
    hotspots: [
      { top: "40%", left: "30%", label: "Vice Chancellor's Office" },
      { top: "60%", left: "70%", label: "Smart Seminar Hall 1" }
    ]
  },
  {
    id: "library",
    name: "Central Library & Knowledge Resource Center",
    icon: BookOpen,
    desc: "A fully digitalized automated library housing over 80,000+ volumes, international journals, separate quiet study zones, and a dedicated digital learning lobby open late for students.",
    stats: { BooksCount: "80,000+", EJournals: "12,000+", SeatingCap: "500+" },
    bgColor: "from-emerald-900 to-teal-950",
    hotspots: [
      { top: "35%", left: "50%", label: "Digital Access Terminal" },
      { top: "55%", left: "20%", label: "Reference Section" }
    ]
  },
  {
    id: "sports",
    name: "Chalapathy Olympic Sports Arena",
    icon: Trophy,
    desc: "State-of-the-art sports complex featuring professional cricket nets, synthetic basketball and tennis courts, an indoor badminton arena, and a multi-station fitness gym.",
    stats: { TurfGrounds: "2", IndoorCourts: "6", FitnessGym: "Fully Equipped" },
    bgColor: "from-amber-900 to-yellow-950",
    hotspots: [
      { top: "45%", left: "60%", label: "Cricket Bowling Machine" },
      { top: "70%", left: "40%", label: "Indoor Badminton Courts" }
    ]
  },
  {
    id: "hostels",
    name: "Student Residential Hostels",
    icon: Building,
    desc: "Premium secure hostels with single, double, and triple sharing rooms. Fully furnished with air conditioning, 24/7 solar hot water, attached washrooms, and multi-cuisine messes.",
    stats: { Capacity: "2,500+ Beds", Rooms: "AC & Non-AC", Security: "24/7 CCTV & Guards" },
    bgColor: "from-indigo-900 to-purple-950",
    hotspots: [
      { top: "30%", left: "45%", label: "Wi-Fi Common Lounge" },
      { top: "65%", left: "80%", label: "Student Dining Hall" }
    ]
  },
  {
    id: "ai-labs",
    name: "NVIDIA Centre of Excellence & AI Research Labs",
    icon: Compass,
    desc: "Equipped with state-of-the-art supercomputing workstations, AI/ML clusters, and robotic arms, supporting research in neural networks, computer vision, and NLP.",
    stats: { Workstations: "60 High-End", SupercomputingNode: "1", PatentsFiled: "14+" },
    bgColor: "from-slate-900 to-zinc-950",
    hotspots: [
      { top: "25%", left: "35%", label: "GPU Workstation Row A" },
      { top: "50%", left: "65%", label: "Robotics Research Cell" }
    ]
  }
];

export default function VirtualTour() {
  const [activeLoc, setActiveLoc] = useState(campusLocations[0]);
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Simulated 360 rotation control
  const handleRotate = (direction: "left" | "right") => {
    setRotationAngle((prev) => {
      let next = direction === "left" ? prev - 30 : prev + 30;
      if (next >= 360) next -= 360;
      if (next < 0) next += 360;
      return next;
    });
    setSelectedHotspot(null);
  };

  const LocationIcon = activeLoc.icon;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 overflow-hidden font-sans max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Tour Navigation & Sidebar (5 cols) */}
        <div className="lg:col-span-4 bg-zinc-50 border-r border-zinc-100 p-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 font-bold text-[10px] uppercase tracking-wide">
                <Compass size={12} className="animate-spin-slow" /> Interactive 360 Experience
              </span>
              <h3 className="text-xl font-extrabold text-primary-blue mt-1">Virtual Campus Tour</h3>
              <p className="text-xs text-zinc-500 mt-1">Select a landmark below to teleport to the scene.</p>
            </div>

            <div className="flex flex-col gap-2">
              {campusLocations.map((loc) => {
                const Icon = loc.icon;
                return (
                  <button
                    key={loc.id}
                    onClick={() => {
                      setActiveLoc(loc);
                      setRotationAngle(0);
                      setSelectedHotspot(null);
                    }}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                      activeLoc.id === loc.id 
                        ? "bg-primary-blue text-white border-primary-blue shadow-md" 
                        : "bg-white border-zinc-100 hover:border-zinc-200 text-zinc-700"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${activeLoc.id === loc.id ? "bg-white/10 text-primary-gold" : "bg-zinc-50 text-zinc-500"}`}>
                      <Icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-extrabold text-xs truncate leading-snug">{loc.name}</div>
                      <div className={`text-[10px] truncate mt-0.5 ${activeLoc.id === loc.id ? "text-zinc-300" : "text-zinc-400"}`}>
                        {Object.keys(loc.stats)[0]}: {Object.values(loc.stats)[0]}
                      </div>
                    </div>
                    <ChevronRight size={14} className={activeLoc.id === loc.id ? "text-primary-gold" : "text-zinc-300"} />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-zinc-200/60">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-50 text-indigo-700 rounded-lg shrink-0">
                <Info size={14} />
              </div>
              <p className="text-[10px] text-zinc-500 font-medium leading-relaxed">
                Click hotspots within the 360 viewer to display micro-details of campus facilities. Use rotation keys to scan the horizon.
              </p>
            </div>
          </div>
        </div>

        {/* 360 Viewport Display (8 cols) */}
        <div className="lg:col-span-8 bg-zinc-900 flex flex-col justify-between relative overflow-hidden h-[420px] lg:h-[500px]">
          
          {/* Panoramic Backdrop Viewport */}
          <div className={`absolute inset-0 bg-gradient-to-tr ${activeLoc.bgColor} flex flex-col items-center justify-center p-6 transition-all duration-700`}>
            
            {/* Visual Simulator Matrix */}
            <div 
              className="w-72 h-72 rounded-full border border-white/10 flex items-center justify-center relative transition-transform duration-500 ease-out shadow-2xl"
              style={{ transform: `rotate(${rotationAngle}deg)` }}
            >
              {/* Central Radar Circle */}
              <div className="w-56 h-56 rounded-full border border-white/5 bg-white/5 backdrop-blur-[2px] flex flex-col items-center justify-center relative">
                <LocationIcon size={64} className="text-white/20 animate-pulse-slow" />
                <div className="text-[9px] font-extrabold text-white/40 uppercase tracking-widest mt-2">360 Viewport</div>
                
                {/* Hotspot Markers */}
                {activeLoc.hotspots.map((hs, hIdx) => (
                  <button
                    key={hIdx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedHotspot(hs.label);
                    }}
                    style={{ top: hs.top, left: hs.left }}
                    className="absolute p-2 bg-primary-gold hover:bg-white text-primary-navy rounded-full shadow-lg border-2 border-white animate-ping-slow scale-100 hover:scale-110 transition-transform cursor-pointer"
                    title={hs.label}
                  >
                    <Eye size={12} />
                  </button>
                ))}
              </div>
            </div>

            {/* Compass Compass Rose Indicator */}
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-lg text-[10px] text-white flex items-center gap-1.5 font-bold">
              <Compass size={12} className="text-primary-gold animate-spin-slow" />
              HEADING: {rotationAngle}° {rotationAngle === 0 ? "(North)" : rotationAngle === 90 ? "(East)" : rotationAngle === 180 ? "(South)" : rotationAngle === 270 ? "(West)" : ""}
            </div>

            {/* Hotspot Info Panel */}
            {selectedHotspot && (
              <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-2xl border border-zinc-100 text-xs font-medium text-zinc-800 animate-slide-down flex justify-between items-center z-20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-gold animate-ping"></div>
                  <span><strong>Hotspot Facility:</strong> {selectedHotspot}</span>
                </div>
                <button 
                  onClick={() => setSelectedHotspot(null)}
                  className="text-[10px] font-extrabold text-zinc-400 hover:text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded"
                >
                  Close
                </button>
              </div>
            )}
          </div>

          {/* Viewport Top Title */}
          <div className="relative z-10 p-5 bg-gradient-to-b from-black/80 to-transparent text-white flex justify-between items-start">
            <div className="space-y-1">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-primary-gold">Now Viewing</span>
              <h4 className="font-extrabold text-sm tracking-wide leading-tight">{activeLoc.name}</h4>
            </div>
            <span className="px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[9px] font-bold rounded uppercase tracking-wider">
              Simulation Live
            </span>
          </div>

          {/* Viewport Bottom Controls */}
          <div className="relative z-10 p-5 bg-gradient-to-t from-black/90 to-transparent flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] text-zinc-300 font-medium leading-relaxed max-w-md text-center md:text-left">
              {activeLoc.desc}
            </p>

            {/* Controls panel */}
            <div className="flex items-center gap-2 shrink-0">
              <button 
                onClick={() => handleRotate("left")}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-xs font-bold text-white transition-colors cursor-pointer"
              >
                Rotate Left
              </button>
              <button 
                onClick={() => handleRotate("right")}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-xs font-bold text-white transition-colors cursor-pointer"
              >
                Rotate Right
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Facilities Stats Footer */}
      <div className="bg-primary-blue border-t border-white/5 py-4 px-6 grid grid-cols-3 gap-4 text-center">
        {Object.entries(activeLoc.stats).map(([key, val], idx) => (
          <div key={idx} className="border-r border-white/10 last:border-0">
            <span className="block text-[9px] text-primary-gold font-extrabold uppercase tracking-widest leading-none">{key.replace(/([A-Z])/g, " $1").trim()}</span>
            <span className="block text-xs font-extrabold text-white mt-1 leading-none">{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
