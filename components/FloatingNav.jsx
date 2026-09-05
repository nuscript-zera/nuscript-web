"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FlaskConical, Layers, CalendarCheck, Microscope, History, Award } from "lucide-react";

const SECTIONS = [
  { id: "formula", label: "The Formula", icon: FlaskConical },
  { id: "services", label: "Services", icon: Layers },
  { to: "/contact", label: "Consultation", icon: CalendarCheck },
  { id: "science", label: "Science of Care", icon: Microscope },
  { to: "/about", label: "Our Journey", icon: History },
  { id: "certificate", label: "Certificate", icon: Award },
];

export default function FloatingNav() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const go = (s) => {
    if (s.to) router.push(s.to);
    else document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className="fixed bottom-5 right-5 z-50"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex flex-col items-end gap-2">
        <div
          className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="mb-2 flex flex-col items-center gap-1 rounded-3xl border border-ink/10 bg-bone/90 px-2 py-2 shadow-[0_8px_40px_-12px_rgba(13,27,30,0.25)] backdrop-blur-xl">
            {SECTIONS.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.label}>
                  <button
                    onClick={() => go(s)}
                    className="group flex w-full items-center gap-3 rounded-full px-4 py-2 text-left transition-colors hover:bg-plasma/15"
                  >
                    <Icon className="h-3.5 w-3.5 text-sage group-hover:text-ink" strokeWidth={1.25} />
                    <span className="font-ui text-[13px] font-medium tracking-wide text-ink/80 group-hover:text-ink">
                      {s.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 bg-ink text-bone shadow-[0_8px_30px_-8px_rgba(13,27,30,0.5)] transition-transform duration-500 hover:scale-105"
          aria-label="Navigation"
        >
          <span className="relative flex h-4 w-4 flex-col items-center justify-center">
            <span
              className={`h-px w-4 bg-bone transition-all duration-300 ${
                open ? "translate-y-[1px] rotate-45" : "-translate-y-[3px]"
              }`}
            />
            <span
              className={`mt-1 h-px w-4 bg-bone transition-all duration-300 ${
                open ? "-translate-y-[1px] -rotate-45" : "translate-y-[3px]"
              }`}
            />
          </span>
        </button>
      </div>
    </nav>
  );
}
