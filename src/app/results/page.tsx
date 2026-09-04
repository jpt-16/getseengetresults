import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ResultsCarousel } from "@/components/ResultsCarousel";
import { TESTIMONIALS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Results & Commitments | GetSeenGetResults",
  description:
    "Real college commitments and testimonials from athletes who trained with GetSeenGetResults.",
};

export default function ResultsPage() {
  return (
    <div>
      {/* HEADER */}
      <div
        className="px-5 pt-[120px] pb-[clamp(48px,8vw,88px)]"
        style={{
          background:
            "linear-gradient(160deg,#0B2E13 0%,#1C4A20 50%,#2E7D32 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-[clamp(42px,8vw,72px)] leading-[0.92] tracking-tight text-cream uppercase">
            Athletes we&rsquo;ve <span className="text-gold">helped</span>
          </h1>
          <p className="mt-5 max-w-[600px] text-[clamp(16px,2vw,19px)] leading-relaxed text-cream/90">
            Real commitments, real testimonials — no fabricated numbers, no
            stock results.
          </p>
        </div>
      </div>

      {/* COMMITMENTS */}
      <div className="py-[clamp(56px,9vw,104px)]">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-[clamp(34px,6vw,46px)] leading-[0.95] tracking-tight text-cream uppercase">
            Commitments
          </h2>
        </div>
        <div className="mt-9">
          <ResultsCarousel />
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="border-t border-pine-700/60 bg-pine-900 px-5 py-[clamp(56px,9vw,104px)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-[clamp(34px,6vw,46px)] leading-[0.95] tracking-tight text-cream uppercase">
            Athlete testimonials
          </h2>
          <div className="mt-11 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal
                key={i}
                delayMs={i * 70}
                className="rounded-xl border border-pine-700 bg-pine-800 px-7 pt-[30px] pb-8"
              >
                <div className="text-[15px] tracking-[0.08em] text-gold" aria-hidden>
                  {"★".repeat(t.rating)}
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-cream/85">
                  {t.quote}
                </p>
                <div className="mt-[22px] text-[16px] font-bold text-cream">
                  {t.name}
                </div>
                <div className="mt-1 text-[13px] tracking-[0.1em] text-stone uppercase">
                  {t.role}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
