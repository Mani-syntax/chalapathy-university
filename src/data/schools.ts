import { Cpu, Briefcase, Dna, Hammer, Microscope, Palette } from "lucide-react";
import type { School } from "@/types";

export const schools: School[] = [
  {
    name: "Engineering",
    icon: Cpu,
    color: "#D4AF37",
    slug: "school-of-engineering",
    description: "Cutting-edge engineering programs across CSE, ECE, EEE, Mechanical, Civil and more.",
    programs: ["B.Tech", "M.Tech", "Ph.D"],
  },
  {
    name: "Management",
    icon: Briefcase,
    color: "#F59E0B",
    slug: "school-of-management",
    description: "AICTE-approved MBA and BBA programs with industry-integrated curriculum.",
    programs: ["BBA", "MBA", "Ph.D"],
  },
  {
    name: "Pharmacy",
    icon: Dna,
    color: "#7C3AED",
    slug: "school-of-pharmacy",
    description: "PCI-approved pharmacy programs with state-of-the-art pharmaceutical labs.",
    programs: ["B.Pharm", "M.Pharm", "Pharm.D", "Ph.D"],
  },
  {
    name: "Law",
    icon: Hammer,
    color: "#92400E",
    slug: "school-of-law",
    description: "BCI-recognised law programs with moot courts and legal aid clinics.",
    programs: ["BA LLB", "BBA LLB", "LLM", "Ph.D"],
  },
  {
    name: "Sciences",
    icon: Microscope,
    color: "#2563EB",
    slug: "school-of-health-sciences",
    description: "Comprehensive science programs in Physics, Chemistry, Mathematics and Biology.",
    programs: ["B.Sc", "M.Sc", "Ph.D"],
  },
  {
    name: "Design",
    icon: Palette,
    color: "#DC2626",
    slug: "school-of-humanities",
    description: "Creative design programs spanning UX/UI, graphic design, and industrial design.",
    programs: ["B.Des", "M.Des"],
  },
  {
    name: "AI & Data Science",
    icon: Cpu,
    color: "#0D9488",
    slug: "school-of-artificial-intelligence",
    description: "Future-ready programs in Artificial Intelligence, Machine Learning and Data Analytics.",
    programs: ["B.Tech AI", "M.Tech AI", "M.Sc Data Science", "Ph.D"],
  },
];
