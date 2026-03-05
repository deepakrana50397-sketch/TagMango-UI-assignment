import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { feed } from "@/data/mock";

export function FeedPostCard() {
  return (
    <Card className="overflow-hidden">
      {/* confetti header */}
      <div className="relative bg-emerald-50 px-6 py-3 text-center text-sm font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200">
        Your Submission
        <div className="pointer-events-none absolute inset-0 opacity-90">
          <span className="absolute left-6 top-2">🎉</span>
          <span className="absolute right-8 top-2">🎊</span>
          <span className="absolute left-1/2 top-1">✨</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar text="A" />
            <div className="leading-tight">
              <div className="font-semibold">{feed.user}</div>
              <div className="text-xs text-[rgb(var(--muted))]">{feed.time}</div>
            </div>
          </div>

          <button
            aria-label="More options"
            className="rounded-lg px-2 py-1 text-xl leading-none text-[rgb(var(--muted))] hover:bg-black/5 dark:hover:bg-white/10"
          >
            …
          </button>
        </div>

        <p className="mt-4 text-sm text-[rgb(var(--text))]">{feed.text}</p>

        {/* media */}
        <div className="mt-4 overflow-hidden rounded-3xl border border-[rgb(var(--border))] bg-black/5 dark:bg-white/5">
          <div className="aspect-[16/9]" />
        </div>

        {/* reactions row */}
        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-2 py-1">
              🙏
            </span>
            <span className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-2 py-1">
              😍 {feed.reactions}
            </span>
            <span className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-2 py-1">
              🙂
            </span>
            <span className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-2 py-1">
              💬
            </span>
          </div>

          <div className="text-[rgb(var(--muted))]">{feed.comments} Comments</div>
        </div>
      </div>
    </Card>
  );
}
