import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Schedule a consultation with NuScript. Tell us about your practice and we'll return a tailored plan for documentation, coding, and revenue cycle management.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <section className="relative bg-bone pt-16 md:pt-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex items-center justify-between border-b border-ink/10 pb-6">
            <span className="micro-label text-sage">§ CONTACT</span>
            <span className="micro-label text-sage">HIPAA-SECURE INTAKE</span>
          </div>
          <div className="py-16 md:py-20">
            <h1 className="max-w-3xl font-heading text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] tracking-tight text-ink">
              Every clean claim starts <span className="italic text-plasma">here</span>.
            </h1>
            <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-ink/70">
              Schedule a consultation. Tell us about your practice and we&apos;ll return a tailored
              plan — accurate documentation, compliant coding, and an accelerated revenue cycle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone pb-24 md:pb-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:px-12">
          <div className="md:col-span-7">
            <ContactForm />
          </div>
          <div className="md:col-span-5">
            <div className="border border-ink/15 bg-bone p-8">
              <span className="micro-label text-sage">Talk with our team</span>
              <div className="mt-6 space-y-6 font-body text-ink/75">
                <div>
                  <p className="micro-label text-sage">Email</p>
                  <a href="mailto:hello@nuscript.net" className="mt-1 block font-body text-base text-ink hover:text-plasma">
                    hello@nuscript.net
                  </a>
                  <a href="mailto:careers@nuscript.net" className="mt-1 block font-body text-base text-ink hover:text-plasma">
                    careers@nuscript.net
                  </a>
                </div>
                <div>
                  <p className="micro-label text-sage">Tamil Nadu, India</p>
                  <p className="mt-1 font-body text-base text-ink/80">NuScript Data Solutions Private Limited</p>
                  <p className="font-body text-base text-ink/65">Tristar Towers, 3rd Floor, East Wing</p>
                  <p className="font-body text-base text-ink/65">657 Avinashi Road, Coimbatore 641037</p>
                  <a href="tel:+914224960077" className="mt-1 block font-body text-base text-ink hover:text-plasma">
                    +91-422-496-0077
                  </a>
                </div>
                <div>
                  <p className="micro-label text-sage">Texas, United States</p>
                  <p className="mt-1 font-body text-base text-ink/80">NuScript Systems, Inc.</p>
                  <p className="font-body text-base text-ink/65">5900 Balcones Drive, Ste 11995</p>
                  <p className="font-body text-base text-ink/65">Austin, TX 78731</p>
                  <a href="tel:+14692420709" className="mt-1 block font-body text-base text-ink hover:text-plasma">
                    +1-469-242-0709
                  </a>
                </div>
              </div>
            </div>
            <ul className="mt-6 space-y-3 font-ui text-sm text-ink/65">
              {["HIPAA-secure intake", "Same-day response", "No obligation"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-plasma" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
