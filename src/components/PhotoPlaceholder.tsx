export function PhotoPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-pine-900 ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(242,195,0,0.06) 0px, rgba(242,195,0,0.06) 1px, transparent 1px, transparent 14px)",
      }}
    >
      <span className="max-w-[80%] text-center font-mono text-[11px] leading-relaxed tracking-[0.08em] text-stone uppercase">
        [ {label} ]
      </span>
    </div>
  );
}
