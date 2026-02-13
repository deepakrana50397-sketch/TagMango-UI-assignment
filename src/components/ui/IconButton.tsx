import { cn } from "@/lib/cn";

export function IconButton({
  label,
  children,
  onClick,
  className,
}: {
  label: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-xl",
        "border border-[rgb(var(--border))] bg-[rgb(var(--panel))]",
        "hover:brightness-[0.98] active:translate-y-[1px]",
        "focus:outline-none focus:ring-2 focus:ring-[rgba(16,185,129,0.35)]",
        className
      )}
    >
      {children}
    </button>
  );
}
