import React from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function CertificateFooter() {
  return (
    <footer className="relative bg-bone pb-16 pt-24 md:pt-32">
      <div className="mx-auto max-w-[900px] px-6 text-center">
        <div className="relative border border-ink/15 px-6 py-14 md:px-20">
          <span className="absolute -left-px -top-px h-4 w-4 border-l border-t border-ink" />
          <span className="absolute -right-px -top-px h-4 w-4 border-r border-t border-ink" />
          <span className="absolute -bottom-px -left-px h-4 w-4 border-b border-l border-ink" />
          <span className="absolute -bottom-px -right-px h-4 w-4 border-b border-r border-ink" />

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-ink/20">
            <ShieldCheck className="h-7 w-7 text-ink" strokeWidth={1.25} />
          </div>
          <span className="micro-label text-sage">Certificate of Compliance</span>
          <img
            src="/nuscript-logo.svg"
            alt="NuScript"
            className="mx-auto mt-4 h-12 w-auto md:h-16"
          />
          <p className="mx-auto mt-5 max-w-md font-body text-base leading-relaxed text-ink/65">
            Clinical documentation and revenue cycle services delivered under HIPAA-compliant,
            SOC 2-aligned processes — verified across 40+ U.S. specialties.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {["HIPAA Compliant", "SOC 2 Aligned", "24/7 Operations", "40+ Specialties"].map((s) => (
              <span
                key={s}
                className="font-ui text-[11px] font-medium uppercase tracking-[0.2em] text-ink/45"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-xs border-t border-ink/15 pt-6">
            <p className="font-heading text-3xl text-ink">The NuScript Team</p>
            <p className="mt-1 micro-label text-sage">25+ Years · Healthcare Documentation</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
          <div>
            <span className="micro-label text-sage">Contact</span>
            <p className="mt-2 font-body text-sm text-ink/70">
              <a href="mailto:hello@nuscript.net" className="hover:text-ink hover:underline">
                hello@nuscript.net
              </a>
              <br />
              <a href="tel:+914224960077" className="hover:text-ink hover:underline">
                +91-422-496-0077
              </a>
            </p>
          </div>
          <div>
            <span className="micro-label text-sage">Online</span>
            <p className="mt-2 font-body text-sm text-ink/70">
              <a href="https://nuscript.net" className="hover:text-ink hover:underline">
                nuscript.net
              </a>
              <br />
              <Link href="/contact" className="hover:text-ink hover:underline">
                Schedule a consultation
              </Link>
            </p>
          </div>
          <div>
            <span className="micro-label text-sage">Coverage</span>
            <p className="mt-2 font-body text-sm text-ink/70">
              Extended coverage
              <br />
              across U.S. time zones
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink/10 pt-6 sm:flex-row">
          <span className="micro-label text-sage">© 2026 NuScript Data Solutions Private Limited</span>
          <div className="flex gap-6">
            <Link href="/about" className="micro-label text-sage hover:text-ink">
              About
            </Link>
            <Link href="/privacy-policy" className="micro-label text-sage hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms-of-use" className="micro-label text-sage hover:text-ink">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
