import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { ResultsCarousel } from "@/components/ResultsCarousel";
import { InstagramIcon } from "@/components/InstagramIcon";
import {
  APPLY_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  PROOF_POINTS,
  PROBLEM_POINTS,
  SYSTEM_STEPS,
  SERVICE_CATEGORIES,
  FILM_EVAL_OFFER,
  FOUNDER,
  TEAM,
  REFERRAL,
  TESTIMONIALS,
  SERVICE_AREAS,
  FAQS,
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
              See Our Results
            </a>
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

      {/* RESULTS */}
      <div id="results" className="py-[clamp(56px,9vw,104px)]">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-[clamp(34px,6vw,46px)] leading-[0.95] tracking-tight text-cream uppercase">
            Athletes we&rsquo;ve helped
          </h2>
          <h3 className="mt-10 text-[13px] font-bold tracking-[0.16em] text-stone uppercase">
            College commitments
          </h3>
        </div>
        <div className="mt-6">
          <ResultsCarousel />
        </div>
        <div className="mx-auto mt-14 max-w-6xl px-5">
          <h3 className="text-[13px] font-bold tracking-[0.16em] text-stone uppercase">
            In their words
          </h3>
          <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
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

      {/* GSGR SYSTEM */}
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
        </div>
      </div>

      {/* SERVICES */}
      <div
        id="services"
        className="border-t border-pine-700/60 bg-pine-900 px-5 py-[clamp(56px,9vw,104px)]"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-2xl font-display text-[clamp(34px,6vw,46px)] leading-[0.95] tracking-tight text-cream uppercase">
            Train. Get seen. Get recruited.
          </h2>
          <p className="mt-5 max-w-[620px] text-[16px] leading-relaxed text-cream/80">
            All ages, all levels, all positions. In-person training runs on
            turf in Massachusetts; film evaluation and recruiting support
            work from anywhere.
          </p>
          <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-10 gap-y-12">
            {SERVICE_CATEGORIES.map((category, i) => (
              <Reveal key={category.label} delayMs={i * 90}>
                <h3 className="font-display text-[15px] tracking-[0.16em] text-gold uppercase">
                  {String(i + 1).padStart(2, "0")} — {category.label}
                </h3>
                <div className="mt-5 flex flex-col gap-6">
                  {category.items.map((item) => (
                    <div
                      key={item.title}
                      className="border-t border-pine-700 pt-4"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h4 className="font-display text-lg tracking-tight text-cream uppercase">
                          {item.title}
                        </h4>
                        {item.price && (
                          <span className="font-display text-lg text-gold">
                            {item.price}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-[15px] leading-relaxed text-cream/78">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          {/* FILM EVAL SPOTLIGHT */}
          <Reveal className="mt-[clamp(40px,6vw,64px)] rounded-xl border border-gold/35 bg-pine-800 px-[clamp(28px,4vw,44px)] py-[clamp(32px,4.5vw,44px)]">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-8">
              <div>
                <span className="text-[12px] font-bold tracking-[0.2em] text-gold uppercase">
                  Start here
                </span>
                <h3 className="mt-2.5 font-display text-[clamp(26px,3.5vw,34px)] leading-tight tracking-tight text-cream uppercase">
                  {FILM_EVAL_OFFER.title}
                </h3>
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

      {/* TEAM */}
      <div id="team" className="px-5 py-[clamp(56px,9vw,104px)]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-[clamp(28px,5vw,56px)]">
            <div>
              <h2 className="font-display text-[clamp(34px,6vw,46px)] leading-[0.95] tracking-tight text-cream uppercase">
                Built by athletes who&rsquo;ve been through it.
              </h2>
              <p className="mt-[22px] text-[clamp(16px,2vw,18px)] leading-relaxed text-cream/90">
                GSGR is led by {FOUNDER.name}, {FOUNDER.title}, and a staff
                of current and former college athletes. We aren&rsquo;t
                marketers talking about recruiting — we&rsquo;ve actually
                played at the college level and been through the process
                ourselves. We coach the way we wish someone had coached us:
                hands-on, individualized work, not packed group sessions
                where you get twelve reps and a wristband.
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

          <div className="mt-[clamp(40px,6vw,64px)] grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-xl border border-pine-700 bg-pine-800"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-5 pt-4 pb-5">
                  <div className="font-display text-xl tracking-tight text-cream uppercase">
                    {member.name}
                  </div>
                  <div className="mt-1 text-[13px] font-semibold tracking-[0.1em] text-gold uppercase">
                    {member.role}
                  </div>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-cream/80">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[14px] text-stone">
            Plus many more special guests from the college level.
          </p>
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
            aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
            className="flex flex-none items-center gap-3 rounded-lg bg-gold px-9 py-[19px] font-display text-[clamp(19px,2.6vw,24px)] tracking-[0.05em] text-ink uppercase transition-[transform,filter] duration-150 ease-out hover:scale-[1.03] hover:brightness-110 active:scale-[0.97]"
          >
            <InstagramIcon className="h-6 w-6 flex-none" />
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div
        id="faq"
        className="border-t border-pine-700/60 bg-pine-900 px-5 py-[clamp(56px,9vw,104px)]"
      >
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
          <h2 className="m-0 font-display text-[clamp(38px,7.5vw,68px)] leading-[0.95] tracking-tight text-cream uppercase">
            Your recruiting process shouldn&rsquo;t be a guessing game.
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] text-[clamp(16px,2.2vw,19px)] leading-relaxed text-cream/90">
            Build your profile. Get noticed. Find the right opportunities.
          </p>
          <div className="mt-[34px] flex flex-wrap justify-center gap-3.5">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gold px-11 py-[19px] font-display text-[clamp(20px,3vw,26px)] tracking-[0.06em] text-ink uppercase transition-[transform,filter] duration-150 ease-out hover:scale-[1.03] hover:brightness-110 active:scale-[0.97]"
            >
              Apply to GSGR
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
