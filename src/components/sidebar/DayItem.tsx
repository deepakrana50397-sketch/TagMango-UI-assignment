import { cn } from "@/lib/cn";

export function DayItem({
  label,
  selected,
  locked,
  onClick,
}: {
  label: string;
  selected: boolean;
  locked?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={locked}
      onClick={onClick}
      className={cn(
        "w-full rounded-full px-5 py-3",
        "flex items-center justify-between text-left",
        "transition-colors duration-150",
        selected
          ? "bg-white text-[rgb(var(--text))]"
          : "bg-white/45 hover:bg-white/65",
        "border border-transparent",
        selected && "shadow-[0_8px_18px_rgba(0,0,0,0.06)]",
        locked && "opacity-60 cursor-not-allowed"
      )}
    >
      <span className="text-sm font-semibold">{label}</span>

      <span className="text-sm text-[rgb(var(--muted))]" aria-hidden="true">
        {selected ? "✅" : locked ? "🔒" : ""}
      </span>
    </button>
  );
}
