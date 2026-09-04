import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { InstagramIcon } from "@/components/InstagramIcon";
import {
  FOUNDER,
  TEAM,
  SERVICE_AREAS,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About | GetSeenGetResults",
  description:
    "Meet the GetSeenGetResults team — current and former college athletes who coach the way they wish someone had coached them through recruiting.",
};

export default function AboutPage() {
  return (
    <div>
      {/* TEAM INTRO */}
      <div
        className="px-5 pt-[120px] pb-[clamp(48px,8vw,88px)]"
        style={{
          background:
            "linear-gradient(160deg,#0B2E13 0%,#1C4A20 50%,#2E7D32 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-[clamp(28px,5vw,56px)]">
            <div>
              <h1 className="font-display text-[clamp(38px,7vw,58px)] leading-[0.95] tracking-tight text-cream uppercase">
                Built by athletes who&rsquo;ve been through it.
              </h1>
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
        </div>
      </div>

      {/* TEAM GRID */}
      <div className="px-5 py-[clamp(56px,9vw,104px)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-[clamp(34px,6vw,46px)] leading-[0.95] tracking-tight text-cream uppercase">
            The team
          </h2>
          <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
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

      {/* INSTAGRAM CALLOUT */}
      <div className="border-t border-pine-700/60 bg-pine-900 px-5 py-[clamp(48px,8vw,96px)]">
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
    </div>
  );
}
