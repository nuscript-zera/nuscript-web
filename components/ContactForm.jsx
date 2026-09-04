"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import BeakerProgress from "./BeakerProgress";

const STEPS = [
  {
    title: "Tell us about your practice",
    fields: [
      { name: "name", label: "Contact name", type: "text" },
      { name: "practice", label: "Practice / organization", type: "text" },
      { name: "phone", label: "Phone", type: "tel" },
    ],
  },
  {
    title: "What do you need?",
    fields: [
      { name: "services", label: "Services of interest", type: "text" },
      { name: "volume", label: "Approx. monthly volume", type: "text" },
      { name: "specialty", label: "Specialty", type: "text" },
    ],
  },
  {
    title: "Schedule the consultation",
    fields: [
      { name: "email", label: "Email", type: "email" },
      { name: "notes", label: "Notes for our team", type: "textarea" },
    ],
  },
];

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({});

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const back = () => setStep((s) => Math.max(0, s - 1));
  const current = STEPS[step];

  const submit = () => {
    const subject = encodeURIComponent(
      `Consultation request${form.name ? ` from ${form.name}` : ""}`
    );
    const body = encodeURIComponent(
      [
        `Contact name: ${form.name || "—"}`,
        `Practice / organization: ${form.practice || "—"}`,
        `Phone: ${form.phone || "—"}`,
        `Email: ${form.email || "—"}`,
        "",
        `Services of interest: ${form.services || "—"}`,
        `Approx. monthly volume: ${form.volume || "—"}`,
        `Specialty: ${form.specialty || "—"}`,
        "",
        `Notes: ${form.notes || "—"}`,
      ].join("\n")
    );
    window.location.href = `mailto:hello@nuscript.net?subject=${subject}&body=${body}`;
    setDone(true);
  };

  const next = () => (step < STEPS.length - 1 ? setStep((s) => s + 1) : submit());

  if (done) {
    return (
      <div className="border border-ink/15 bg-bone p-12 text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-plasma">
          <Check className="h-6 w-6 text-ink" strokeWidth={2} />
        </div>
        <h3 className="font-heading text-4xl italic text-ink">Received.</h3>
        <p className="mx-auto mt-4 max-w-xs font-body text-ink/65">
          Your email app should have opened with your request ready to send. Our team will reach
          out within one business day to schedule your consultation.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-ink/15 bg-bone p-8 md:p-12">
      <div className="mb-8 flex items-center justify-between">
        <span className="micro-label text-sage">Consultation intake</span>
        <BeakerProgress step={step + 1} total={STEPS.length} />
      </div>
      <h3 className="font-heading text-3xl leading-tight text-ink">{current.title}</h3>
      <div className="mt-6 space-y-5">
        {current.fields.map((f) => (
          <div key={f.name} className="relative">
            {f.type === "textarea" ? (
              <textarea
                id={f.name}
                rows={3}
                value={form[f.name] || ""}
                onChange={(e) => set(f.name, e.target.value)}
                placeholder=" "
                className="peer w-full resize-none border-b border-ink/20 bg-transparent pb-2 pt-6 font-body text-lg text-ink outline-none transition-colors focus:border-plasma"
              />
            ) : (
              <input
                id={f.name}
                type={f.type}
                value={form[f.name] || ""}
                onChange={(e) => set(f.name, e.target.value)}
                placeholder=" "
                className="peer w-full border-b border-ink/20 bg-transparent pb-2 pt-6 font-body text-lg text-ink outline-none transition-colors focus:border-plasma"
              />
            )}
            <label
              htmlFor={f.name}
              className="pointer-events-none absolute left-0 top-6 origin-left font-ui text-lg text-sage transition-all duration-200 peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:tracking-wider peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:tracking-wider"
            >
              {f.label}
            </label>
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={back}
          disabled={step === 0}
          className="inline-flex items-center gap-2 font-ui text-sm text-ink/50 transition-colors enabled:hover:text-ink disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} /> Back
        </button>
        <button
          onClick={next}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-ui text-sm font-medium text-bone transition-colors hover:bg-plasma hover:text-ink"
        >
          {step === STEPS.length - 1 ? "Submit request" : "Continue"}
          <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
        </button>
      </div>
    </div>
  );
}
