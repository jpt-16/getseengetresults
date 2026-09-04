import { Reveal } from "@/components/Reveal";
import { APPLY_URL, type PricingItem } from "@/lib/content";

// Savings/value math restated visually from the package descriptions
// already in content.ts (4 x $40 = $160, 8 x $40 = $320) — nothing new.
const PACKAGE_DETAILS: Record<
  string,
  { perSession: string; regularValue: string; savings: string; recommended?: boolean }
> = {
  "Silver Package": { perSession: "$30/session", regularValue: "$160", savings: "$40" },
  "Gold Package": {
    perSession: "$25/session",
    regularValue: "$320",
    savings: "$120",
    recommended: true,
  },
};

export function PackageCard({
  item,
  delayMs = 0,
}: {
  item: PricingItem;
  delayMs?: number;
}) {
  const details = PACKAGE_DETAILS[item.title];

  return (
    <Reveal
      delayMs={delayMs}
      className={`relative rounded-xl px-[26px] pt-7 pb-[30px] ${
        details?.recommended
          ? "border-2 border-gold bg-pine-800"
          : "border border-pine-700 bg-pine-800"
      }`}
    >
      {details?.recommended && (
        <span className="absolute -top-3 left-[26px] rounded-full bg-gold px-3 py-1 font-display text-[12px] tracking-[0.08em] text-ink uppercase">
          Recommended — best value
        </span>
      )}
      <div className="flex items-baseline gap-3">
        <span className="font-display text-[34px] leading-none text-gold">
          {item.price}
        </span>
        {details && (
          <span className="text-[13px] text-stone line-through">
            {details.regularValue}
          </span>
        )}
      </div>
      <h4 className="mt-3.5 mb-1 font-display text-xl leading-tight tracking-tight text-cream uppercase">
        {item.title}
      </h4>
      {details && (
        <div className="mb-3 flex flex-wrap gap-x-3 gap-y-1 text-[13px] font-semibold tracking-[0.04em] text-gold uppercase">
          <span>{details.perSession}</span>
          <span>· Save {details.savings}</span>
        </div>
      )}
      <p className="text-[15px] leading-relaxed text-cream/82">{item.body}</p>
      <a
        href={APPLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-block rounded-lg bg-gold px-6 py-3 font-display text-[15px] tracking-[0.06em] text-ink uppercase transition-[transform,filter] duration-150 ease-out hover:scale-[1.03] hover:brightness-110 active:scale-[0.97]"
      >
        Apply Now
      </a>
    </Reveal>
  );
}
