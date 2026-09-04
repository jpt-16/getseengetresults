"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { APPLY_URL } from "@/lib/content";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#results", label: "Results" },
  { href: "#team", label: "About" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="sticky top-0 z-50 border-b transition-colors duration-200"
      style={{
        background: scrolled ? "rgba(11,46,19,0.97)" : "rgba(10,10,10,0.12)",
        borderColor: scrolled ? "rgba(46,125,50,0.8)" : "rgba(245,245,240,0)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <a href="#top" className="flex items-center gap-2.5 text-cream">
          <Image
            src="/gsgr-logo.png"
            alt="GetSeenGetResults"
            width={38}
            height={38}
            className="flex-none rounded-lg border border-gold/35 object-cover"
            priority
          />
          <span className="font-display text-[22px] leading-none tracking-wide">
            GSGR
          </span>
        </a>
        <div className="flex items-center gap-7">
          <div className="hidden items-center gap-6 text-[13px] font-semibold tracking-[0.14em] uppercase md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[15px] tracking-[0.06em] uppercase whitespace-nowrap rounded-lg bg-gold px-5 py-2.5 text-ink transition-[transform,filter] duration-150 ease-out hover:scale-[1.03] hover:brightness-110 active:scale-[0.97]"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}
