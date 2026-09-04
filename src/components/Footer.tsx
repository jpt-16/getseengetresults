import Image from "next/image";
import { InstagramIcon } from "@/components/InstagramIcon";
import {
  APPLY_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  CONTACT_EMAIL,
} from "@/lib/content";

export function Footer() {
  return (
    <div className="border-t border-pine-700/70 px-5 pt-14 pb-10">
      <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-9">
        <div>
          <Image
            src="/gsgr-logo.png"
            alt="GetSeenGetResults"
            width={150}
            height={150}
            className="block rounded-xl border border-gold/30 object-cover"
          />
          <div className="mt-[18px] font-display text-[19px] leading-tight tracking-wide text-gold uppercase">
            Get Noticed.
            <br />
            Get Recruited.
          </div>
        </div>
        <div>
          <div className="text-[12px] font-bold tracking-[0.2em] text-stone uppercase">
            Site
          </div>
          <div className="mt-4 flex flex-col gap-2.5 text-[16px]">
            <a href="#services" className="text-cream hover:text-gold">
              Services
            </a>
            <a href="#results" className="text-cream hover:text-gold">
              Results
            </a>
            <a href="#pricing" className="text-cream hover:text-gold">
              Pricing
            </a>
            <a href="#team" className="text-cream hover:text-gold">
              About
            </a>
            <a href="#areas" className="text-cream hover:text-gold">
              Areas
            </a>
            <a href="#faq" className="text-cream hover:text-gold">
              FAQ
            </a>
          </div>
        </div>
        <div>
          <div className="text-[12px] font-bold tracking-[0.2em] text-stone uppercase">
            Get started
          </div>
          <div className="mt-4 flex flex-col gap-2.5 text-[16px]">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light"
            >
              Apply / intake form
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
              className="flex items-center gap-2 text-gold hover:text-gold-light"
            >
              <InstagramIcon className="h-5 w-5 flex-none" />
              Instagram {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
        <div>
          <div className="text-[12px] font-bold tracking-[0.2em] text-stone uppercase">
            Contact
          </div>
          <div className="mt-4 flex flex-col gap-2.5 text-[16px]">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-cream hover:text-gold"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-11 flex max-w-6xl flex-wrap justify-between gap-3 border-t border-stone/22 pt-[22px] text-[13px] text-stone">
        <span>© 2026 GetSeenGetResults. All rights reserved.</span>
        <span className="tracking-[0.12em] uppercase">
          Run by former D1 athletes
        </span>
      </div>
    </div>
  );
}
