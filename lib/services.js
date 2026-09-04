export const SERVICES = [
  {
    slug: "clinical-documentation",
    no: "01",
    title: "Clinical Documentation",
    tag: "Transcription & Scribing",
    img: "/clinical-doc.webp",
    short:
      "Medical transcription and scribing backed by 25+ years of expertise. Skilled clinical documentation editors deliver accurate, chart-ready notes with same-day turnaround.",
    specs: ["Medical transcription", "Medical scribing", "Multi-specialty"],
    overview:
      "From dictation to chart-ready note — same day. Our clinical documentation editors combine 25 years of expertise with AI-enhanced QA to deliver accurate notes across 40+ specialties.",
    features: [
      { title: "Medical Transcription", desc: "Accurate, chart-ready notes from dictation with same-day turnaround, formatted to your specifications." },
      { title: "Medical Scribing", desc: "Real-time charting support so clinicians focus on the patient, not the keyboard — integrated into your EHR." },
      { title: "Multi-Specialty Expertise", desc: "Specialty-specific templates and editors across 40+ disciplines, from cardiology to podiatry." },
      { title: "AI-Enhanced QA", desc: "Technology that amplifies human expertise — never replaces it — with senior audit before delivery." },
    ],
    process: [
      { step: "01", title: "Capture", desc: "Dictation or live-scribe intake through our HIPAA-secure platform." },
      { step: "02", title: "Edit", desc: "Skilled clinical documentation editors refine the note against the audio." },
      { step: "03", title: "QA", desc: "AI-enhanced quality assurance verifies 99.5%+ accuracy." },
      { step: "04", title: "Deliver", desc: "Chart-ready note returned same day to your EHR." },
    ],
  },
  {
    slug: "medico-legal-transcription",
    no: "02",
    title: "Medico-Legal Transcription",
    tag: "Verbatim Accuracy",
    img: "/medico-legal.webp",
    short:
      "Specialized verbatim transcription for medico-legal cases, independent medical examinations, and legal proceedings. Every word matters — word-perfect accuracy.",
    specs: ["Verbatim accuracy", "IME reports", "Legal compliance"],
    overview:
      "Verbatim transcription for medico-legal cases, independent medical examinations, and legal proceedings. Every word matters — we deliver word-perfect accuracy for the record.",
    features: [
      { title: "Verbatim Accuracy", desc: "Word-perfect transcription preserving every nuance of testimony — no paraphrasing, no summarizing." },
      { title: "Legal Knowledge Base", desc: "A proprietary database of attorney names, judges, carriers, and case citations ensures correct formatting." },
      { title: "Chain of Custody", desc: "Full audit trail from audio receipt to final delivery, with encrypted transmission at every step." },
      { title: "Rapid Turnaround", desc: "Same-day and next-day turnaround for urgent legal matters, without sacrificing accuracy." },
    ],
    process: [
      { step: "01", title: "Intake", desc: "Secure intake of audio and case context with chain-of-custody tracking." },
      { step: "02", title: "Transcribe", desc: "Verbatim transcription by trained medico-legal editors." },
      { step: "03", title: "Review", desc: "Word-perfect review against source audio by senior legal QA." },
      { step: "04", title: "Deliver", desc: "Formatted report delivered through a secure channel." },
    ],
  },
  {
    slug: "medical-coding",
    no: "03",
    title: "Medical Coding",
    tag: "ICD-10 · CPT · HCPCS",
    img: "/medical-coding.webp",
    short:
      "Certified coders ensure accurate ICD-10, CPT, and HCPCS code assignment aligned with U.S. clinical and billing standards, strengthening documentation integrity and payer compliance.",
    specs: ["ICD-10 & CPT", "Audit support", "Compliance tracking"],
    overview:
      "Certified coders assign ICD-10, CPT, and HCPCS codes aligned with U.S. clinical and billing standards, strengthening documentation integrity and payer compliance.",
    features: [
      { title: "ICD-10 & CPT", desc: "Accurate code assignment by certified, specialty-trained coders across all major payers." },
      { title: "Audit Support", desc: "Documentation structured to withstand payer audits, with clarifications prompted when gaps appear." },
      { title: "Compliance Tracking", desc: "Ongoing monitoring of coding compliance and payer-rule updates." },
      { title: "Denials Reduction", desc: "Clean, supported codes mean fewer denials and faster payment." },
    ],
    process: [
      { step: "01", title: "Review", desc: "Clinical documentation reviewed for completeness and specificity." },
      { step: "02", title: "Assign", desc: "Certified coders assign ICD-10, CPT, and HCPCS codes." },
      { step: "03", title: "QA", desc: "Compliance checks and audit-readiness verification." },
      { step: "04", title: "Submit", desc: "Codes delivered to your billing system, ready to bill." },
    ],
  },
  {
    slug: "revenue-cycle-management",
    no: "04",
    title: "Revenue Cycle Management",
    tag: "End-to-End RCM",
    img: "/rcm.webp",
    short:
      "End-to-end RCM services from charge capture to AR follow-up. Expert teams and intelligent workflows maximize collections while minimizing denials.",
    specs: ["Denials management", "Claims optimization", "AR follow-up"],
    overview:
      "End-to-end revenue cycle management from charge capture to AR follow-up. Expert teams and intelligent workflows maximize collections while minimizing denials.",
    features: [
      { title: "Charge Capture", desc: "Ensure every service rendered is captured and billed — clean documentation feeds clean charges." },
      { title: "Claims Optimization", desc: "Clean-claim submission with completeness and compliance checks to maximize first-pass yield." },
      { title: "Denials Management", desc: "Root-cause analysis and rapid appeal of denied claims, with systematic follow-up." },
      { title: "AR Follow-Up", desc: "Persistent follow-up on aging receivables with priority escalation, plus transparent reporting." },
    ],
    process: [
      { step: "01", title: "Capture", desc: "Charge capture across the full encounter." },
      { step: "02", title: "Submit", desc: "Clean-claim submission to payers." },
      { step: "03", title: "Manage", desc: "Denial management and rapid appeals." },
      { step: "04", title: "Collect", desc: "AR follow-up and final reconciliation." },
    ],
  },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);
