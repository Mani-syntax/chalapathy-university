// ═══════════════════════════════════════════════
// Type Definitions — Chalapathi University
// ═══════════════════════════════════════════════

import type { LucideIcon } from "lucide-react";

// ── Navigation ──────────────────────────────────
export interface TopLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface NavLink {
  label: string;
  href: string;
}

// ── Schools ─────────────────────────────────────
export interface School {
  name: string;
  icon: LucideIcon;
  color: string;
  slug: string;
  description?: string;
  programs?: string[];
  image?: string;
}

// ── Statistics ──────────────────────────────────
export interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
}

// ── News & Events ───────────────────────────────
export interface NewsItem {
  day: string;
  month: string;
  title: string;
  excerpt?: string;
  href?: string;
}

export interface EventItem {
  day: string;
  month: string;
  title: string;
  time: string;
  location?: string;
}

// ── Accreditation Badges ────────────────────────
export interface Badge {
  tag: string;
  subtitle: string;
}

// ── Feature Strip ───────────────────────────────
export interface FeaturePillar {
  icon: LucideIcon;
  label: string;
}

// ── Footer ──────────────────────────────────────
export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

// ── Contact ─────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  category: "general" | "admissions" | "academics" | "placements" | "other";
}

// ── Admissions ──────────────────────────────────
export interface Program {
  name: string;
  duration: string;
  eligibility: string;
  seats: number;
  fee: string;
  school: string;
}

export interface ApplicationFormData {
  personalInfo: {
    fullName: string;
    dateOfBirth: string;
    gender: string;
    email: string;
    phone: string;
    address: string;
  };
  academicInfo: {
    qualification: string;
    institution: string;
    percentage: string;
    yearOfPassing: string;
  };
  programPreference: {
    school: string;
    program: string;
    campus: string;
  };
}
