import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { FOUNDER, COACHES, SERVICE_AREAS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Why GSGR",
  description:
    "GetSeenGetResults is led by Caden Chase, D1 RB & Wrestler at Davidson College, and a staff of college athletes coaching youth and high school athletes across MA, NH, and NC.",
};

export default function AboutPage() {
  return (
    <>
      <div
        className="px-5 pt-[120px] pb-[clamp(56px,9vw,104px)]"
        style={{
          background:
            "linear-gradient(160deg,#0B2E13 0%,#1C4A20 55%,#2E7D32 130%)",
        }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-[clamp(28px,5vw,56px)]">
          <div>
            <h1 className="font-display text-[clamp(38px,7vw,64px)] leading-[0.95] tracking-tight text-cream uppercase">
              Coached by athletes who lived it
            </h1>
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
              <PhotoPlaceholder
                label="coach and athlete mid-drill — hands-on, close, real"
                className="h-full w-full"
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

      {/* SERVICE AREAS */}
      <div
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
            In-person training runs across Massachusetts, New Hampshire, and
            North Carolina. Film evaluation and recruiting support work from
            anywhere — send tape and we go to work.
          </p>
        </div>
      </div>
    </>
  );
}
