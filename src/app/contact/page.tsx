import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import {
  APPLY_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  SERVICE_AREAS,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with GetSeenGetResults — apply for training, film evaluation, or recruiting support in Massachusetts, New Hampshire, and North Carolina.",
};

export default function ContactPage() {
  return (
    <>
      <div className="relative overflow-hidden px-5 pt-[140px] pb-[clamp(48px,8vw,96px)]">
        <div
          className="pointer-events-none absolute top-[-40%] left-1/2 h-[180%] w-[min(900px,120%)] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center,rgba(46,125,50,0.45) 0%,rgba(11,46,19,0) 65%)",
          }}
        />
        <Reveal className="relative mx-auto max-w-[900px] text-center">
          <h1 className="m-0 font-display text-[clamp(42px,9vw,84px)] leading-[0.92] tracking-tight text-cream uppercase">
            Ready to <span className="text-gold">Get Seen?</span>
          </h1>
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

      {/* CONTACT DETAILS */}
      <div className="px-5 pb-[clamp(56px,9vw,104px)]">
        <div className="mx-auto max-w-3xl divide-y divide-pine-700 border-t border-b border-pine-700">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group flex items-center justify-between gap-6 py-6 transition-colors hover:text-gold"
          >
            <span className="text-[13px] font-semibold tracking-[0.14em] text-stone uppercase">
              Email
            </span>
            <span className="font-display text-xl tracking-tight text-cream uppercase group-hover:text-gold">
              {CONTACT_EMAIL}
            </span>
          </a>
          <a
            href={`tel:${CONTACT_PHONE_HREF}`}
            className="group flex items-center justify-between gap-6 py-6 transition-colors hover:text-gold"
          >
            <span className="text-[13px] font-semibold tracking-[0.14em] text-stone uppercase">
              Phone
            </span>
            <span className="font-display text-xl tracking-tight text-cream uppercase group-hover:text-gold">
              {CONTACT_PHONE}
            </span>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-6 py-6 transition-colors hover:text-gold"
          >
            <span className="text-[13px] font-semibold tracking-[0.14em] text-stone uppercase">
              Instagram
            </span>
            <span className="font-display text-xl tracking-tight text-cream uppercase group-hover:text-gold">
              {INSTAGRAM_HANDLE}
            </span>
          </a>
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
            In-person training runs across all three states. Film evaluation
            and recruiting support work from anywhere — send tape and we go
            to work.
          </p>
        </div>
      </div>
    </>
  );
}
