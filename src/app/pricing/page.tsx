import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { IN_PERSON_PACKAGES, ONLINE_SERVICES, REFERRAL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "In-person training packages and online recruiting services from GetSeenGetResults — drop-in sessions, Silver/Gold packages, film evaluation, workout plans, and more.",
};

export default function PricingPage() {
  return (
    <>
      <div className="px-5 pt-[120px] pb-[clamp(48px,7vw,72px)]">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-[clamp(38px,7vw,64px)] leading-[0.95] tracking-tight text-cream uppercase">
            Every way to work with us
          </h1>
          <p className="mt-5 max-w-[620px] text-[clamp(16px,2vw,18px)] leading-relaxed text-cream/85">
            All ages, all levels, all positions. In-person training runs on
            turf in Massachusetts; film evaluation and recruiting support
            work from anywhere.
          </p>
        </div>
      </div>

      <div className="px-5 pb-[clamp(48px,8vw,96px)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-[13px] font-bold tracking-[0.16em] text-stone uppercase">
            In-person training — all ages, levels, positions
          </h2>
          <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
            {IN_PERSON_PACKAGES.map((item, i) => (
              <Reveal
                key={item.title}
                delayMs={i * 60}
                className="rounded-xl border border-pine-700 bg-pine-800 px-[26px] pt-7 pb-[30px]"
              >
                <div className="font-display text-[34px] leading-none text-gold">
                  {item.price}
                </div>
                <h3 className="mt-3.5 mb-2.5 font-display text-xl leading-tight tracking-tight text-cream uppercase">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-cream/82">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>

          <h2 className="mt-12 text-[13px] font-bold tracking-[0.16em] text-stone uppercase">
            Online & recruiting services
          </h2>
          <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
            {ONLINE_SERVICES.map((item, i) => (
              <Reveal
                key={item.title}
                delayMs={i * 50}
                className="rounded-xl border border-pine-700 bg-pine-800 px-[26px] pt-7 pb-[30px]"
              >
                <div className="font-display text-[34px] leading-none text-gold">
                  {item.price}
                </div>
                <h3 className="mt-3.5 mb-2.5 font-display text-xl leading-tight tracking-tight text-cream uppercase">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-cream/82">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* REFERRAL */}
      <div className="border-y border-pine-700/60 bg-gold px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <div>
            <div className="font-display text-2xl leading-tight tracking-tight text-ink uppercase">
              {REFERRAL.headline}
            </div>
            <p className="mt-1 text-[15px] leading-relaxed text-ink/80">
              {REFERRAL.body}
            </p>
          </div>
          <span className="flex-none rounded-lg border-2 border-ink px-6 py-3 font-display text-2xl tracking-[0.04em] text-ink uppercase">
            {REFERRAL.cta}
          </span>
        </div>
      </div>
    </>
  );
}
