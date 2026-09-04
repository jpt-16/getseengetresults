import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PROBLEM_POINTS, SERVICE_CATEGORIES, FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | GetSeenGetResults",
  description:
    "Training, film evaluation, athlete branding, and recruiting management — everything GetSeenGetResults does to help athletes get seen and get recruited.",
};

export default function ServicesPage() {
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
            Train. Get seen. <span className="text-gold">Get recruited.</span>
          </h1>
          <p className="mt-5 max-w-[600px] text-[clamp(16px,2vw,19px)] leading-relaxed text-cream/90">
            Everything GSGR does falls into three pillars — building your
            athletic ability, building your recruiting profile, and putting
            that profile in front of the right people.
          </p>
        </div>
      </div>

      {/* PROBLEM */}
      <div className="px-5 py-[clamp(56px,9vw,104px)]">
        <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(28px,5vw,56px)]">
          <div>
            <h2 className="font-display text-[clamp(34px,6vw,46px)] leading-[0.95] tracking-tight text-cream uppercase">
              Being a good athlete isn&rsquo;t always enough.
            </h2>
            <p className="mt-5 max-w-[480px] text-[clamp(16px,2vw,18px)] leading-relaxed text-cream/85">
              Plenty of athletes have the ability. Most still struggle with
              the part nobody teaches them.
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            {PROBLEM_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3.5 border-b border-pine-700 pb-4 text-[17px] leading-snug text-cream/88"
              >
                <span className="mt-[3px] font-display text-stone" aria-hidden>
                  —
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SERVICE CATEGORIES */}
      <div className="border-t border-pine-700/60 bg-pine-900 px-5 py-[clamp(56px,9vw,104px)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-2xl font-display text-[clamp(34px,6vw,46px)] leading-[0.95] tracking-tight text-cream uppercase">
            What we do
          </h2>
          <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-10 gap-y-12">
            {SERVICE_CATEGORIES.map((category, i) => (
              <Reveal key={category.label} delayMs={i * 90}>
                <h3 className="font-display text-[15px] tracking-[0.16em] text-gold uppercase">
                  {String(i + 1).padStart(2, "0")} — {category.label}
                </h3>
                <div className="mt-5 flex flex-col gap-6">
                  {category.items.map((item) => (
                    <div key={item.title} className="border-t border-pine-700 pt-4">
                      <h4 className="font-display text-lg tracking-tight text-cream uppercase">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-[15px] leading-relaxed text-cream/78">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <Link
            href="/pricing"
            className="mt-10 inline-flex items-center gap-2 font-display text-lg tracking-[0.04em] text-gold uppercase transition-colors hover:text-gold-light"
          >
            See pricing &amp; packages ↓
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="px-5 py-[clamp(56px,9vw,104px)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-[clamp(34px,6vw,46px)] leading-[0.95] tracking-tight text-cream uppercase">
            Recruiting reality check
          </h2>
          <p className="mt-5 max-w-[620px] text-[16px] leading-relaxed text-cream/80">
            Myths vs. facts — the stuff that stops athletes before they even
            start.
          </p>
          <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {FAQS.map((faq, i) => (
              <Reveal
                key={i}
                delayMs={i * 70}
                className="rounded-xl border border-pine-700 bg-pine-800 px-7 pt-[26px] pb-7"
              >
                <div className="flex items-start gap-2.5">
                  <span className="font-display text-[13px] tracking-[0.12em] text-stone uppercase">
                    Myth
                  </span>
                </div>
                <p className="mt-1.5 text-[17px] leading-snug text-cream/70 italic">
                  &ldquo;{faq.myth}&rdquo;
                </p>
                <div className="mt-4 flex items-start gap-2.5">
                  <span className="font-display text-[13px] tracking-[0.12em] text-gold uppercase">
                    Fact
                  </span>
                </div>
                <p className="mt-1.5 text-[16px] leading-relaxed text-cream">
                  {faq.fact}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden px-5 py-[clamp(56px,9vw,96px)]">
        <Reveal className="relative mx-auto max-w-[800px] text-center">
          <h2 className="m-0 font-display text-[clamp(30px,5.5vw,48px)] leading-[0.95] tracking-tight text-cream uppercase">
            Ready to start? <span className="text-gold">Apply now.</span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <Link
              href="/apply"
              className="rounded-lg bg-gold px-9 py-4 font-display text-[18px] tracking-[0.06em] text-ink uppercase transition-[transform,filter] duration-150 ease-out hover:scale-[1.03] hover:brightness-110 active:scale-[0.97]"
            >
              Apply Now
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
