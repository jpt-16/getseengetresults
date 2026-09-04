import type { Metadata } from "next";
import { ResultsCarousel } from "@/components/ResultsCarousel";
import { Reveal } from "@/components/Reveal";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, TESTIMONIALS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Results",
  description:
    "Real athlete results and testimonials from GetSeenGetResults — film breakdowns, recruiting exposure, and training that gets athletes seen.",
};

export default function ResultsPage() {
  return (
    <>
      <div className="px-5 pt-[120px] pb-[clamp(48px,7vw,72px)]">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-[clamp(38px,7vw,64px)] leading-[0.95] tracking-tight text-cream uppercase">
            Guys who got seen
          </h1>
        </div>
      </div>

      <div className="pb-[clamp(48px,8vw,96px)]">
        <ResultsCarousel />
      </div>

      {/* INSTAGRAM CALLOUT */}
      <div className="border-y border-pine-700/60 bg-pine-900 px-5 py-[clamp(48px,8vw,96px)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8">
          <div className="min-w-[280px] flex-[1_1_320px]">
            <h2 className="font-display text-[clamp(34px,6vw,46px)] leading-[0.95] tracking-tight text-cream uppercase">
              Watch the training
            </h2>
            <p className="mt-5 max-w-[520px] text-[clamp(16px,2vw,18px)] leading-relaxed text-cream/88">
              Every session, drill and highlight goes up on Instagram. That is
              where you see the work as it happens.
            </p>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none rounded-lg bg-gold px-9 py-[19px] font-display text-[clamp(19px,2.6vw,24px)] tracking-[0.05em] text-ink uppercase transition-[transform,filter] duration-150 ease-out hover:scale-[1.03] hover:brightness-110 active:scale-[0.97]"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="px-5 py-[clamp(56px,9vw,104px)]">
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
    </>
  );
}
