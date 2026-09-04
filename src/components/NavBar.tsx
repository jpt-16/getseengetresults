"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        background:
          scrolled || menuOpen ? "rgba(11,46,19,0.97)" : "rgba(10,10,10,0.12)",
        borderColor:
          scrolled || menuOpen ? "rgba(46,125,50,0.8)" : "rgba(245,245,240,0)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-cream"
          onClick={() => setMenuOpen(false)}
        >
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
        </Link>
        <div className="flex items-center gap-7">
          <div className="hidden items-center gap-6 text-[13px] font-semibold tracking-[0.14em] uppercase md:flex">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/apply"
            className="hidden font-display text-[15px] tracking-[0.06em] uppercase whitespace-nowrap rounded-lg bg-gold px-5 py-2.5 text-ink transition-[transform,filter] duration-150 ease-out hover:scale-[1.03] hover:brightness-110 active:scale-[0.97] md:inline-block"
          >
            Apply Now
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 flex-none flex-col items-center justify-center gap-[5px] rounded-lg border border-cream/28 md:hidden"
          >
            <span
              className="h-[2px] w-5 bg-cream transition-transform duration-200"
              style={
                menuOpen
                  ? { transform: "translateY(7px) rotate(45deg)" }
                  : undefined
              }
            />
            <span
              className="h-[2px] w-5 bg-cream transition-opacity duration-200"
              style={menuOpen ? { opacity: 0 } : undefined}
            />
            <span
              className="h-[2px] w-5 bg-cream transition-transform duration-200"
              style={
                menuOpen
                  ? { transform: "translateY(-7px) rotate(-45deg)" }
                  : undefined
              }
            />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="border-t border-pine-700/60 px-5 pt-2 pb-5 md:hidden">
          <div className="flex flex-col gap-1 text-[15px] font-semibold tracking-[0.06em] uppercase">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-3 text-cream transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/apply"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block rounded-lg bg-gold px-5 py-3 text-center font-display text-[15px] tracking-[0.06em] text-ink uppercase"
          >
            Apply Now
          </Link>
        </div>
      )}
    </div>
  );
}
