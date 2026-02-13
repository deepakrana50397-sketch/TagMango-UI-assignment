import { cn } from "@/lib/cn";

export function DayItem({
  label,
  selected,
  locked,
  blurred,
  onClick,
}: {
  label: string;
  selected: boolean;
  locked?: boolean;
  blurred?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={locked}
      onClick={onClick}
      className={cn(
        "flex w-full items-center justify-between rounded-full px-4 py-3 text-left",
        "transition-all duration-200",
        selected
          ? "bg-white shadow-sm dark:bg-zinc-900"
          : "hover:bg-black/5 dark:hover:bg-white/5",
        locked && "cursor-not-allowed opacity-55",
        blurred && "opacity-75"
      )}
    >
      <span className="text-sm font-medium">{label}</span>

      <span aria-hidden="true" className="text-sm text-[rgb(var(--muted))]">
        {selected ? "✅" : locked ? "🔒" : blurred ? "⏳" : ""}
      </span>
    </button>
  );
}

