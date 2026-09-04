import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PackageCard } from "@/components/PackageCard";
import {
  APPLY_URL,
  FILM_EVAL_OFFER,
  IN_PERSON_PACKAGES,
  ONLINE_SERVICES,
  REFERRAL,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing & Packages | GetSeenGetResults",
  description:
    "See every GetSeenGetResults price — individual training and film evaluation services, plus Silver and Gold packages that bundle sessions and save.",
};

export default function PricingPage() {
  const individualServices = [IN_PERSON_PACKAGES[0], ...ONLINE_SERVICES];
  const packages = IN_PERSON_PACKAGES.slice(1);

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
            Pricing &amp; <span className="text-gold">packages</span>
          </h1>
          <p className="mt-5 max-w-[620px] text-[clamp(16px,2vw,19px)] leading-relaxed text-cream/90">
            All ages, all levels, all positions. In-person training runs on
            turf in Massachusetts; film evaluation and recruiting support
            work from anywhere. Buy a single service, or save with a
            package.
          </p>
        </div>
      </div>

      <div className="px-5 py-[clamp(56px,9vw,104px)]">
        <div className="mx-auto max-w-6xl">
          {/* FILM EVAL SPOTLIGHT */}
          <Reveal className="rounded-xl border border-gold/35 bg-pine-800 px-[clamp(28px,4vw,44px)] py-[clamp(32px,4.5vw,44px)]">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-8">
              <div>
                <span className="text-[12px] font-bold tracking-[0.2em] text-gold uppercase">
                  Start here
                </span>
                <h2 className="mt-2.5 font-display text-[clamp(26px,3.5vw,34px)] leading-tight tracking-tight text-cream uppercase">
                  {FILM_EVAL_OFFER.title}
                </h2>
                <p className="mt-3 max-w-[480px] text-[16px] leading-relaxed text-cream/85">
                  {FILM_EVAL_OFFER.body}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <span className="font-display text-[34px] leading-none text-gold">
                    {FILM_EVAL_OFFER.price}
                  </span>
                  <a
                    href={APPLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-gold px-6 py-3 font-display text-[16px] tracking-[0.06em] text-ink uppercase transition-[transform,filter] duration-150 ease-out hover:scale-[1.03] hover:brightness-110 active:scale-[0.97]"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
              <ul className="flex flex-col gap-3.5">
                {FILM_EVAL_OFFER.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-cream/90"
                  >
                    <span className="mt-[2px] font-display text-gold" aria-hidden>
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* INDIVIDUAL SERVICES */}
          <h2 className="mt-14 text-[13px] font-bold tracking-[0.16em] text-stone uppercase">
            Individual services — pay per session or per service
          </h2>
          <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
            {individualServices.map((item, i) => (
              <Reveal
                key={item.title}
                delayMs={i * 40}
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

          {/* PACKAGES */}
          <h2 className="mt-14 text-[13px] font-bold tracking-[0.16em] text-stone uppercase">
            Packages — bundle sessions and save
          </h2>
          <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {packages.map((item, i) => (
              <PackageCard key={item.title} item={item} delayMs={i * 60} />
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
    </div>
  );
}
