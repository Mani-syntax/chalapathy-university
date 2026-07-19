import { Cpu, Settings, Briefcase } from "lucide-react";
import type { School } from "@/types";

export const schools: School[] = [
  {
    name: "Computing Sciences",
    icon: Cpu,
    color: "#2563EB",
    slug: "school-of-computing-sciences",
    description: "Engineering Minds for the Digital Future. In a world driven by data, algorithms, and intelligent systems, we prepare students to become the architects of tomorrow's technology.",
    programs: ["B.Tech", "M.Tech", "MCA", "Ph.D"],
  },
  {
    name: "Engineering",
    icon: Settings,
    color: "#D91E18",
    slug: "school-of-engineering",
    description: "Engineering Solutions for a Smarter, Stronger Tomorrow. Blends core engineering fundamentals with modern technology and practical application.",
    programs: ["B.Tech", "M.Tech", "Ph.D"],
  },
  {
    name: "Business & Management",
    icon: Briefcase,
    color: "#F59E0B",
    slug: "school-of-business-management",
    description: "Shaping Visionary Leaders for Tomorrow's Business World. Nurturing strategic thinkers, decision-makers, and future business leaders.",
    programs: ["MBA"],
  }
];
