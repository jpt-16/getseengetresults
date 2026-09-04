import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { ResultsCarousel } from "@/components/ResultsCarousel";
import {
  APPLY_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  SERVICES,
  FOUNDER,
  COACHES,
  IN_PERSON_PACKAGES,
  ONLINE_SERVICES,
  REFERRAL,
  TESTIMONIALS,
  SERVICE_AREAS,
} from "@/lib/content";

export default function Home() {
  return (
    <div id="top">
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
            <span className="block text-cream">Get Noticed.</span>
            <span className="block text-gold">Get Recruited.</span>
          </h1>
          <p className="mt-[26px] max-w-[560px] text-[clamp(17px,2.2vw,20px)] leading-[1.55] text-cream">
            Train with former D1 football and wrestling athletes. Real film
            breakdowns, real workouts, and real exposure to college coaches —
            for youth and high school athletes in Massachusetts, New
            Hampshire, and North Carolina.
          </p>
          <div className="mt-[34px] flex flex-wrap gap-3.5">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gold px-8 py-4 font-display text-[clamp(18px,2.4vw,22px)] tracking-[0.06em] text-ink uppercase transition-[transform,filter] duration-150 ease-out hover:scale-[1.03] hover:brightness-110 active:scale-[0.97]"
            >
              Apply Now
            </a>
            <a
              href="#results"
              className="rounded-lg border border-cream/35 px-7 py-4 font-display text-[clamp(18px,2.4vw,22px)] tracking-[0.06em] text-cream uppercase transition-[color,border-color,transform] duration-150 ease-out hover:border-gold hover:text-gold active:scale-[0.97]"
            >
              See the Work
            </a>
          </div>
          <p className="mt-[22px] text-[13px] tracking-[0.1em] text-stone uppercase">
            All ages · All sports · Football focused
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <div id="services" className="px-5 py-[clamp(56px,9vw,104px)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-2xl font-display text-[clamp(34px,6vw,46px)] leading-[0.95] tracking-tight text-cream uppercase">
            Four ways we get you seen
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-9 md:grid-cols-2">
            {SERVICES.map((service, i) => (
              <div
                key={service.title}
                className={`border-t border-pine-700 pt-6 ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <h3
                  className={`font-display leading-tight tracking-tight text-cream uppercase ${
                    i === 0 ? "text-[clamp(26px,3vw,34px)]" : "text-2xl"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mt-3 text-cream/78 leading-relaxed ${
                    i === 0 ? "max-w-2xl text-[17px]" : "text-[16px]"
                  }`}
                >
                  {service.body}
                </p>
              </div>
            ))}
          </div>
          <a
            href="#pricing"
            className="mt-10 inline-flex items-center gap-2 font-display text-lg tracking-[0.04em] text-gold uppercase transition-colors hover:text-gold-light"
          >
            See full pricing ↓
          </a>
        </div>
      </div>

      {/* PRICING */}
      <div id="pricing" className="border-t border-pine-700/60 bg-pine-900 px-5 py-[clamp(56px,9vw,104px)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-[clamp(34px,6vw,46px)] leading-[0.95] tracking-tight text-cream uppercase">
            Every way to work with us
          </h2>
          <p className="mt-5 max-w-[620px] text-[clamp(16px,2vw,18px)] leading-relaxed text-cream/85">
            All ages, all levels, all positions. In-person training runs on
            turf in Massachusetts; film evaluation and recruiting support
            work from anywhere.
          </p>

          <h3 className="mt-11 text-[13px] font-bold tracking-[0.16em] text-stone uppercase">
            In-person training — all ages, levels, positions
          </h3>
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
                <h4 className="mt-3.5 mb-2.5 font-display text-xl leading-tight tracking-tight text-cream uppercase">
                  {item.title}
                </h4>
                <p className="text-[15px] leading-relaxed text-cream/82">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>

          <h3 className="mt-12 text-[13px] font-bold tracking-[0.16em] text-stone uppercase">
            Online & recruiting services
          </h3>
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
                <h4 className="mt-3.5 mb-2.5 font-display text-xl leading-tight tracking-tight text-cream uppercase">
                  {item.title}
                </h4>
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

      {/* WHY */}
      <div
        id="why"
        className="px-5 py-[clamp(56px,9vw,104px)]"
        style={{
          background:
            "linear-gradient(160deg,#0B2E13 0%,#1C4A20 55%,#2E7D32 130%)",
        }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-[clamp(28px,5vw,56px)]">
          <div>
            <h2 className="font-display text-[clamp(34px,6vw,46px)] leading-[0.95] tracking-tight text-cream uppercase">
              Coached by athletes who lived it
            </h2>
            <p className="mt-[22px] text-[clamp(16px,2vw,18px)] leading-relaxed text-cream/90">
              GSGR is led by {FOUNDER.name}, {FOUNDER.title}. We focus on
              real development — growing as an athlete and a man, not just
              workouts — and we coach the way we wish someone had coached us
              through recruiting. Every athlete gets hands-on,
              individualized work; no packed group sessions where you get
              twelve reps and a wristband.
            </p>
            <p className="mt-4 text-[clamp(16px,2vw,18px)] leading-relaxed text-cream/90">
              We&rsquo;ve trained{" "}
              <strong className="font-semibold text-cream">
                30+ athletes
              </strong>
              , youth through high school, across{" "}
              <strong className="font-semibold text-cream">
                Massachusetts, New Hampshire, and North Carolina
              </strong>{" "}
              — all ages, all sports, with the deepest bench in football.
            </p>
          </div>
          <Reveal
            className="relative overflow-hidden rounded-xl border border-gold/25"
            style={{ aspectRatio: "4 / 5", minHeight: 320 }}
          >
            <div style={{ filter: "saturate(0.6) contrast(1.1)" }} className="absolute inset-0">
              <Image
                src="/photos/drill-training-catch.jpg"
                alt="Athletes competing for the ball at a GSGR training session"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top,rgba(10,10,10,0.55) 0%,rgba(11,46,19,0.15) 55%,rgba(11,46,19,0) 100%)",
              }}
            />
          </Reveal>
        </div>
      </div>

      {/* COACHING STAFF */}
      <div className="px-5 py-[clamp(56px,9vw,104px)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-[clamp(34px,6vw,46px)] leading-[0.95] tracking-tight text-cream uppercase">
            Coaching staff
          </h2>
          <div className="mt-10 border-t border-pine-700">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-pine-700 py-5">
              <div className="font-display text-xl tracking-tight text-cream uppercase">
                {FOUNDER.name}
              </div>
              <div className="text-[15px] text-cream/75">
                Founder — {FOUNDER.title}
              </div>
            </div>
            {COACHES.map((coach) => (
              <div
                key={coach.name}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-pine-700 py-5"
              >
                <div className="font-display text-xl tracking-tight text-cream uppercase">
                  {coach.name}
                </div>
                <div className="text-[15px] text-cream/75">{coach.role}</div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[14px] text-stone">
            Plus many more special guests from the college level.
          </p>
        </div>
      </div>

      {/* RESULTS */}
      <div id="results" className="py-[clamp(56px,9vw,104px)]">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-[clamp(34px,6vw,46px)] leading-[0.95] tracking-tight text-cream uppercase">
            Guys who got seen
          </h2>
        </div>
        <div className="mt-9">
          <ResultsCarousel />
        </div>
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

      {/* SERVICE AREAS */}
      <div
        id="areas"
        className="px-5 py-[clamp(56px,9vw,104px)] text-center"
        style={{
          background:
            "linear-gradient(160deg,#0B2E13 0%,#1C4A20 60%,#2E7D32 130%)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-[clamp(34px,6vw,46px)] leading-[0.95] tracking-tight text-cream uppercase">
            Three states, one standard
          </h2>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {SERVICE_AREAS.map((area, i) => (
              <span key={area.abbr} className="flex items-center gap-3">
                <span className="font-display text-[clamp(40px,7vw,64px)] leading-none tracking-wide text-gold">
                  {area.abbr}
                </span>
                {i < SERVICE_AREAS.length - 1 && (
                  <span className="text-[clamp(24px,4vw,36px)] text-cream/30" aria-hidden>
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-[620px] text-[17px] leading-relaxed text-cream/88">
            In-person training runs across all three states. Film evaluation
            and recruiting support work from anywhere — send tape and we go
            to work.
          </p>
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
          <h2 className="m-0 font-display text-[clamp(42px,9vw,84px)] leading-[0.92] tracking-tight text-cream uppercase">
            Ready to <span className="text-gold">Get Seen?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] text-[clamp(16px,2.2vw,19px)] leading-relaxed text-cream/90">
            Fill out the intake form and tell us your sport, position, and
            grad year. We will get back to you with next steps.
          </p>
          <div className="mt-[34px] flex flex-wrap justify-center gap-3.5">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gold px-11 py-[19px] font-display text-[clamp(20px,3vw,26px)] tracking-[0.06em] text-ink uppercase transition-[transform,filter] duration-150 ease-out hover:scale-[1.03] hover:brightness-110 active:scale-[0.97]"
            >
              Apply Now
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
