import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { APPLY_URL, CONTACT_EMAIL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Apply | GetSeenGetResults",
  description:
    "Apply to GetSeenGetResults — tell us your sport, position, and grad year, and we'll get back to you with next steps.",
};

export default function ApplyPage() {
  const embedUrl = `${APPLY_URL}?embedded=true`;

  return (
    <div>
      {/* HEADER / CTA */}
      <div
        className="relative overflow-hidden px-5 pt-[130px] pb-[clamp(48px,8vw,88px)] text-center"
        style={{
          background:
            "linear-gradient(160deg,#0B2E13 0%,#1C4A20 50%,#2E7D32 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute top-[-30%] left-1/2 h-[160%] w-[min(900px,120%)] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center,rgba(46,125,50,0.45) 0%,rgba(11,46,19,0) 65%)",
          }}
        />
        <Reveal className="relative mx-auto max-w-[800px]">
          <h1 className="m-0 font-display text-[clamp(38px,7.5vw,64px)] leading-[0.95] tracking-tight text-cream uppercase">
            Your recruiting process shouldn&rsquo;t be a guessing game.
          </h1>
          <p className="mx-auto mt-6 max-w-[560px] text-[clamp(16px,2.2vw,19px)] leading-relaxed text-cream/90">
            Fill out the form below and tell us your sport, position, and
            grad year. We&rsquo;ll get back to you with next steps.
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

      {/* EMBEDDED FORM */}
      <div className="px-5 py-[clamp(48px,8vw,88px)]">
        <div className="mx-auto max-w-[720px]">
          <div className="overflow-hidden rounded-xl border border-pine-700 bg-cream">
            <iframe
              src={embedUrl}
              title="GetSeenGetResults application form"
              className="block h-[1400px] w-full"
              loading="lazy"
            >
              Loading form…
            </iframe>
          </div>
          <p className="mt-4 text-center text-[14px] text-stone">
            Form not loading?{" "}
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light"
            >
              Open it in a new tab
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-gold hover:text-gold-light"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
