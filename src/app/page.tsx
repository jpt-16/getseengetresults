import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { APPLY_URL, SERVICES } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div
        className="relative flex min-h-[min(760px,92svh)] items-end overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg,#0B2E13 0%,#1C4A20 50%,#2E7D32 100%)",
        }}
      >
        <div className="absolute inset-0" style={{ filter: "saturate(0.55) contrast(1.15)" }}>
          <PhotoPlaceholder
            label="gritty full-bleed training shot — turf, cones, sweat, night lights"
            className="h-full w-full"
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
            <Link
              href="/results"
              className="rounded-lg border border-cream/35 px-7 py-4 font-display text-[clamp(18px,2.4vw,22px)] tracking-[0.06em] text-cream uppercase transition-[color,border-color,transform] duration-150 ease-out hover:border-gold hover:text-gold active:scale-[0.97]"
            >
              See the Work
            </Link>
          </div>
          <p className="mt-[22px] text-[13px] tracking-[0.1em] text-stone uppercase">
            All ages · All sports · Football focused
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="px-5 py-[clamp(56px,9vw,104px)]">
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
          <Link
            href="/pricing"
            className="mt-10 inline-flex items-center gap-2 font-display text-lg tracking-[0.04em] text-gold uppercase transition-colors hover:text-gold-light"
          >
            See full pricing →
          </Link>
        </div>
      </div>

      {/* WHY TEASER */}
      <div
        className="px-5 py-[clamp(56px,9vw,104px)]"
        style={{
          background:
            "linear-gradient(160deg,#0B2E13 0%,#1C4A20 55%,#2E7D32 130%)",
        }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(34px,6vw,46px)] leading-[0.95] tracking-tight text-cream uppercase">
            Coached by athletes who lived it
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] text-[clamp(16px,2vw,18px)] leading-relaxed text-cream/90">
            GSGR is led by Caden Chase, D1 RB &amp; Wrestler at Davidson
            College, alongside a staff of college athletes who have been
            through the recruiting process — the film, the camps, the calls,
            the silence — and coach the way they wish someone had coached
            them.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 font-display text-lg tracking-[0.04em] text-gold uppercase transition-colors hover:text-gold-light"
          >
            Meet the coaching staff →
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
    </>
  );
}
