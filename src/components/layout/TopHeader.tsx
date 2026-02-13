import { IconButton } from "@/components/ui/IconButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function TopHeader({ dayText }: { dayText: string }) {
  return (
    <header className="sticky top-0 z-20 border-b border-[rgb(var(--border))] bg-[rgb(var(--panel))]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <div className="text-lg font-bold">
            Backstage<span className="text-[rgb(var(--brand))]">Pass</span>
          </div>

          <div className="ml-4 hidden items-center gap-3 md:flex">
            <button className="flex items-center gap-2 text-sm font-medium text-[rgb(var(--text))] hover:opacity-80">
              <span aria-hidden="true">←</span>
              Back
            </button>
            <span className="text-[rgb(var(--muted))]">|</span>
            <span className="text-sm font-semibold">{dayText}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden text-sm font-semibold md:block">
            9-Day Fitness Challenge
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-white/60 px-3 py-1 dark:bg-black/20">
              <span aria-hidden="true">🔥</span>
              <span className="text-sm font-semibold">30</span>
            </div>

            <IconButton label="Notifications">
              <span aria-hidden="true">🔔</span>
            </IconButton>

            <ThemeToggle />

            <IconButton label="Profile">
              <span aria-hidden="true">👤</span>
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  );
}
