import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ResultsCarousel } from "@/components/ResultsCarousel";
import { PackageCard } from "@/components/PackageCard";
import {
  PROOF_POINTS,
  SYSTEM_STEPS,
  IN_PERSON_PACKAGES,
  TESTIMONIALS,
} from "@/lib/content";

export default function Home() {
  const packages = IN_PERSON_PACKAGES.slice(1);

  return (
    <div>
      {/* HERO */}
      <div
        className="relative flex min-h-[min(760px,92svh)] items-end overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg,#0B2E13 0%,#1C4A20 50%,#2E7D32 100%)",
        }}
      >
        <div className="absolute inset-0" style={{ filter: "saturate(0.55) contrast(1.15)" }}>
          <Image
            src="/photos/hero-night-action.jpg"
            alt="Athlete breaking a tackle under the Friday night lights"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top,#0A0A0A 4%,rgba(10,10,10,0.72) 34%,rgba(11,46,19,0.55) 70%,rgba(11,46,19,0.35) 100%)",
          }}
        />
        <div
          className="gsgr-beam pointer-events-none absolute -top-[30%] left-[20%] h-[160%] w-[38%] blur-[28px]"
          style={{
            background:
              "linear-gradient(90deg,rgba(242,195,0,0) 0%,rgba(242,195,0,0.10) 45%,rgba(242,195,0,0) 100%)",
          }}
        />
        <div className="relative z-[2] mx-auto w-full max-w-6xl px-5 pt-[120px] pb-[clamp(48px,7vw,88px)]">
          <div className="mb-[22px] flex items-center gap-2.5">
            <span className="h-[2px] w-[26px] flex-none bg-gold" />
            <span className="text-[12px] font-bold tracking-[0.22em] text-gold uppercase">
              MA · NH · NC — Training &amp; Recruiting Exposure
            </span>
          </div>
          <h1 className="m-0 font-display text-[clamp(52px,12.5vw,124px)] leading-[0.86] tracking-tight uppercase">
            <span className="block text-cream">Get Seen.</span>
            <span className="block text-gold">Get Recruited.</span>
          </h1>
          <p className="mt-[26px] max-w-[560px] text-[clamp(17px,2.2vw,20px)] leading-[1.55] text-cream">
            Turn your athletic ability into real college opportunities.
            GSGR combines training, film evaluation, athlete branding, and
            recruiting guidance — everything it takes to get in front of
            college coaches.
          </p>
          <div className="mt-[34px] flex flex-wrap gap-3.5">
            <Link
              href="/apply"
              className="rounded-lg bg-gold px-8 py-4 font-display text-[clamp(18px,2.4vw,22px)] tracking-[0.06em] text-ink uppercase transition-[transform,filter] duration-150 ease-out hover:scale-[1.03] hover:brightness-110 active:scale-[0.97]"
            >
              Apply Now
            </Link>
            <Link
              href="/results"
              className="rounded-lg border border-cream/35 px-7 py-4 font-display text-[clamp(18px,2.4vw,22px)] tracking-[0.06em] text-cream uppercase transition-[color,border-color,transform] duration-150 ease-out hover:border-gold hover:text-gold active:scale-[0.97]"
            >
              See Our Results
            </Link>
          </div>
          <p className="mt-[22px] text-[13px] tracking-[0.1em] text-stone uppercase">
            All ages · All sports · Football focused
          </p>
        </div>
      </div>

      {/* PROOF BAR */}
      <div className="border-b border-pine-700/60 bg-pine-900 px-5 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-8 gap-y-5">
          {PROOF_POINTS.map((point) => (
            <div key={point} className="flex items-center gap-3">
              <span className="h-[7px] w-[7px] flex-none rounded-full bg-gold" />
              <span className="font-display text-[15px] tracking-[0.04em] text-cream uppercase">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES OVERVIEW */}
      <div
        className="px-5 py-[clamp(64px,10vw,112px)]"
        style={{
          background:
            "linear-gradient(160deg,#0B2E13 0%,#1C4A20 55%,#2E7D32 130%)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-3xl font-display text-[clamp(38px,7vw,58px)] leading-[0.95] tracking-tight text-cream uppercase">
            Everything you need to get recruited.
          </h2>
          <div className="mt-[clamp(40px,6vw,64px)] grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-8 gap-y-10">
            {SYSTEM_STEPS.map((item, i) => (
              <Reveal key={item.step} delayMs={i * 80}>
                <div className="font-display text-[clamp(44px,6vw,56px)] leading-none text-gold">
                  {item.step}
                </div>
                <h3 className="mt-3 font-display text-[22px] tracking-tight text-cream uppercase">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-cream/85">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
          <Link
            href="/services"
            className="mt-10 inline-flex items-center gap-2 font-display text-lg tracking-[0.04em] text-gold uppercase transition-colors hover:text-gold-light"
          >
            See all services ↓
          </Link>
        </div>
      </div>

      {/* RESULTS PREVIEW */}
      <div className="py-[clamp(56px,9vw,104px)]">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-[clamp(34px,6vw,46px)] leading-[0.95] tracking-tight text-cream uppercase">
            Real commitments. Real results.
          </h2>
        </div>
        <div className="mt-9">
          <ResultsCarousel limit={4} />
        </div>
        <div className="mx-auto max-w-6xl px-5">
          <Link
            href="/results"
            className="mt-1.5 inline-flex items-center gap-2 font-display text-lg tracking-[0.04em] text-gold uppercase transition-colors hover:text-gold-light"
          >
            See full results &amp; testimonials ↓
          </Link>
        </div>
      </div>

      {/* PACKAGES PREVIEW */}
      <div className="border-t border-pine-700/60 bg-pine-900 px-5 py-[clamp(56px,9vw,104px)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-[clamp(34px,6vw,46px)] leading-[0.95] tracking-tight text-cream uppercase">
            Packages that save you money
          </h2>
          <p className="mt-5 max-w-[620px] text-[16px] leading-relaxed text-cream/80">
            Buy sessions individually, or bundle up and save.
          </p>
          <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {packages.map((item, i) => (
              <PackageCard key={item.title} item={item} delayMs={i * 60} />
            ))}
          </div>
          <Link
            href="/pricing"
            className="mt-10 inline-flex items-center gap-2 font-display text-lg tracking-[0.04em] text-gold uppercase transition-colors hover:text-gold-light"
          >
            See full pricing &amp; packages ↓
          </Link>
        </div>
      </div>

      {/* TESTIMONIALS PREVIEW */}
      <div className="px-5 py-[clamp(56px,9vw,104px)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-[clamp(34px,6vw,46px)] leading-[0.95] tracking-tight text-cream uppercase">
            What athletes say
          </h2>
          <div className="mt-11 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {TESTIMONIALS.slice(0, 2).map((t, i) => (
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
          <Link
            href="/results"
            className="mt-10 inline-flex items-center gap-2 font-display text-lg tracking-[0.04em] text-gold uppercase transition-colors hover:text-gold-light"
          >
            Read more testimonials ↓
          </Link>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="relative overflow-hidden px-5 py-[clamp(64px,10vw,120px)]">
        <div
          className="pointer-events-none absolute top-[-40%] left-1/2 h-[180%] w-[min(900px,120%)] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center,rgba(46,125,50,0.45) 0%,rgba(11,46,19,0) 65%)",
          }}
        />
        <Reveal className="relative mx-auto max-w-[900px] text-center">
          <h2 className="m-0 font-display text-[clamp(38px,7.5vw,68px)] leading-[0.95] tracking-tight text-cream uppercase">
            Your recruiting process shouldn&rsquo;t be a guessing game.
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] text-[clamp(16px,2.2vw,19px)] leading-relaxed text-cream/90">
            Build your profile. Get noticed. Find the right opportunities.
          </p>
          <div className="mt-[34px] flex flex-wrap justify-center gap-3.5">
            <Link
              href="/apply"
              className="rounded-lg bg-gold px-11 py-[19px] font-display text-[clamp(20px,3vw,26px)] tracking-[0.06em] text-ink uppercase transition-[transform,filter] duration-150 ease-out hover:scale-[1.03] hover:brightness-110 active:scale-[0.97]"
            >
              Apply to GSGR
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
