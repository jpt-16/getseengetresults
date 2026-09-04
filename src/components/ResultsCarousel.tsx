"use client";

import { useRef } from "react";
import Image from "next/image";
import { RESULTS } from "@/lib/content";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

export function ResultsCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.getBoundingClientRect().width + 24 : 340;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <>
      <div className="mx-auto flex max-w-6xl justify-end gap-2.5 px-5">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Previous"
          className="h-[46px] w-[46px] rounded-lg border border-cream/28 text-lg text-cream transition-[color,border-color,transform] duration-150 ease-out hover:border-gold hover:text-gold active:scale-[0.95]"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Next"
          className="h-[46px] w-[46px] rounded-lg border border-cream/28 text-lg text-cream transition-[color,border-color,transform] duration-150 ease-out hover:border-gold hover:text-gold active:scale-[0.95]"
        >
          →
        </button>
      </div>
      <div
        ref={scrollerRef}
        className="gsgr-scroll mt-9 flex gap-6 overflow-x-auto px-5 pb-5 pt-1"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {RESULTS.map((result, i) => (
          <div
            key={`${result.name}-${i}`}
            className={`w-[min(340px,82vw)] flex-none overflow-hidden rounded-xl ${
              result.placeholder
                ? "border border-dashed border-stone/55 bg-pine-900"
                : "border border-pine-700 bg-pine-800"
            }`}
            style={{ scrollSnapAlign: "center" }}
          >
            {result.photo ? (
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={result.photo}
                  alt={`Action shot — ${result.meta}`}
                  fill
                  sizes="340px"
                  className="object-cover"
                />
              </div>
            ) : (
              <PhotoPlaceholder
                label={
                  result.placeholder
                    ? "next athlete — reel still"
                    : `${result.name} — game or training clip still`
                }
                className="aspect-[16/10]"
              />
            )}
            <div className="px-6 pt-5 pb-6">
              <div
                className={`font-display text-[26px] leading-none tracking-tight uppercase ${
                  result.placeholder ? "text-cream/55" : "text-cream"
                }`}
              >
                {result.name}
              </div>
              <div className="mt-1.5 text-[13px] font-semibold tracking-[0.12em] text-stone uppercase">
                {result.meta}
              </div>
              {result.placeholder ? (
                <p className="mt-4 font-mono text-[13px] leading-relaxed text-stone">
                  [ drop in the reel caption or offer here ]
                </p>
              ) : (
                <p className="mt-4 text-[16px] leading-relaxed text-cream/88">
                  <span className="font-bold text-gold">&ldquo;</span>
                  {result.quote}
                  <span className="font-bold text-gold">&rdquo;</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-6xl px-5">
        <p className="mt-1.5 font-mono text-[12px] text-stone">
          Dashed cards are placeholders — send names, schools and captions to
          fill them.
        </p>
      </div>
    </>
  );
}
