import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Maps internal page keys to clean, lowercase URLs. Old Base44 CamelCase
// paths (e.g. /ClinicalDocumentation) are 301-redirected to these via
// public/_redirects so existing links keep working.
const ROUTES = {
  Home: "/",
  About: "/about",
  Contact: "/contact",
  ClinicalDocumentation: "/clinical-documentation",
  MedicoLegalTranscription: "/medico-legal-transcription",
  MedicalCoding: "/medical-coding",
  RevenueCycleManagement: "/revenue-cycle-management",
  PrivacyPolicy: "/privacy-policy",
  TermsOfUse: "/terms-of-use",
};

export function createPageUrl(pageName) {
  return ROUTES[pageName] || "/";
}
