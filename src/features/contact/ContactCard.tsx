"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT } from "@/constants";

export default function ContactCard() {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-sm space-y-4">
      <h4 className="text-[16px] font-[var(--font-poppins)] font-extrabold text-[#081A36]">
        Quick Contact
      </h4>
      <div className="space-y-3 text-[13px] text-[#444]">
        <div className="flex items-start gap-2.5">
          <MapPin size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
          <span>{CONTACT.address}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Phone size={16} className="text-[#D4AF37] shrink-0" />
          <span>{CONTACT.phone}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Mail size={16} className="text-[#D4AF37] shrink-0" />
          <span>{CONTACT.email}</span>
        </div>
      </div>
    </div>
  );
}
