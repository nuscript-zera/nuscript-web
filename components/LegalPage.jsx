import React from "react";

function RichText({ text }) {
  return (
    <>
      {text.split("\n").map((line, i) => {
        if (line.trim().startsWith("•")) {
          return (
            <div key={i} className="flex gap-3 mb-2">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-plasma" />
              <span>{line.trim().substring(1).trim()}</span>
            </div>
          );
        }
        if (line.includes("hello@nuscript.net")) {
          const parts = line.split("hello@nuscript.net");
          return (
            <p key={i} className="mb-2">
              {parts[0]}
              <a href="mailto:hello@nuscript.net" className="text-ink underline decoration-plasma underline-offset-4 hover:text-plasma">
                hello@nuscript.net
              </a>
              {parts[1]}
            </p>
          );
        }
        return line.trim() ? (
          <p key={i} className="mb-2">
            {line}
          </p>
        ) : (
          <div key={i} className="h-2" />
        );
      })}
    </>
  );
}

export default function LegalPage({ title, effective, intro, sections }) {
  return (
    <main>
      <section className="relative bg-bone pt-16 md:pt-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex items-center justify-between border-b border-ink/10 pb-6">
            <span className="micro-label text-sage">§ {title}</span>
            <span className="micro-label text-sage">LEGAL</span>
          </div>
          <div className="py-14 md:py-16">
            <h1 className="max-w-3xl font-heading text-[clamp(2.75rem,7vw,6rem)] leading-[0.92] tracking-tight text-ink">
              {title}
            </h1>
            {effective && <p className="mt-6 micro-label text-sage">{effective}</p>}
          </div>
        </div>
      </section>

      <section className="bg-bone pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          {intro && (
            <p className="mb-12 font-body text-lg leading-relaxed text-ink/70">{intro}</p>
          )}
          <div className="space-y-12">
            {sections.map((s, idx) => (
              <div key={idx}>
                <h2 className="mb-4 font-heading text-3xl leading-tight tracking-tight text-ink">
                  <span className="text-plasma">{String(idx + 1).padStart(2, "0")}</span> — {s.title}
                </h2>
                {s.subsections ? (
                  <div className="space-y-6">
                    {s.subsections.map((sub, j) => (
                      <div key={j}>
                        <h3 className="mb-2 font-ui text-sm font-semibold uppercase tracking-wider text-ink/70">
                          {sub.subtitle}
                        </h3>
                        <div className="font-body text-[15px] leading-relaxed text-ink/70">
                          <RichText text={sub.content} />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="font-body text-[15px] leading-relaxed text-ink/70">
                    <RichText text={s.content} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
