import { GraduationCap, Users, Briefcase, Globe, Microscope } from "lucide-react";
import type { Stat } from "@/types";

export const stats: Stat[] = [
  { number: "150+", label: "Programs", icon: GraduationCap },
  { number: "30,000+", label: "Students", icon: Users },
  { number: "1,200+", label: "Faculty Members", icon: Users },
  { number: "500+", label: "Recruiters", icon: Briefcase },
  { number: "250+", label: "Global Partners", icon: Globe },
  { number: "100+", label: "Research Labs", icon: Microscope },
];
