import { cn } from "@/lib/cn";

export function Avatar({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid h-10 w-10 place-items-center rounded-full",
        "border border-[rgb(var(--border))] bg-[rgb(var(--panel))] text-sm font-semibold",
        className
      )}
      aria-hidden="true"
    >
      {text}
    </div>
  );
}
