import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SpecialtiesMarquee from "@/components/SpecialtiesMarquee";
import WhoNuScriptIs from "@/components/WhoNuScriptIs";
import WhatNuScriptDoes from "@/components/WhatNuScriptDoes";
import ValuesInAction from "@/components/ValuesInAction";
import Journey from "@/components/Journey";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "About Us",
  description:
    "NuScript is a HIPAA-compliant healthcare operations company with 25+ years of experience in clinical documentation and revenue cycle management for U.S. providers.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0">
          <img
            src="/about.webp"
            alt="NuScript team collaborating in a clinical operations setting"
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
          <div className="flex items-center justify-between border-b border-bone/20 pb-6">
            <span className="micro-label text-sage">§ ABOUT NUSCRIPT</span>
            <span className="micro-label text-sage">EST. 2000</span>
          </div>
          <h1 className="mt-10 max-w-4xl font-heading text-[clamp(3.5rem,10vw,9rem)] leading-[0.86] tracking-tight">
            25 years of <span className="italic text-plasma">healthcare</span> excellence.
          </h1>
          <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-bone/75">
            From traditional transcription to AI-enhanced documentation services — our evolution
            reflects healthcare&apos;s own transformation. Today we connect clinical documentation to
            revenue cycle from a single, trusted partner.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-plasma px-7 py-3.5 font-ui text-sm font-medium text-ink transition-transform hover:scale-105"
            >
              Schedule a consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
            </Link>
            <Link
              href="/"
              className="font-ui text-sm font-medium text-bone/70 underline-offset-8 hover:text-bone hover:underline"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <SpecialtiesMarquee />
      <WhoNuScriptIs />
      <WhatNuScriptDoes />
      <ValuesInAction />
      <Journey />
      <CtaBand
        title="Why providers trust NuScript."
        subtitle="Scalable teams, specialty-specific expertise, and transparent reporting — all from one partner."
      />
    </main>
  );
}
