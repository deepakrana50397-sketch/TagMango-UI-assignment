import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { pinned } from "@/data/mock";

export function SubscriberCard() {
  return (
    <Card className="mx-auto w-full max-w-[680px] p-6">
      <div className="text-center">
        <div className="text-xl font-semibold">See what others shared</div>
        <div className="mt-2 text-sm text-[rgb(var(--muted))]">
          85+ participants already completed
        </div>

        <div className="mt-3 flex items-center justify-center -space-x-2">
          <Avatar text="R" className="h-8 w-8" />
          <Avatar text="S" className="h-8 w-8" />
          <Avatar text="A" className="h-8 w-8" />
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-[rgb(var(--border))] p-5">
        <div className="mb-4 flex items-center gap-2 text-xs text-[rgb(var(--muted))]">
          <span aria-hidden="true">📌</span>
          This is a pinned post
        </div>

        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar text="R" />
            <div>
              <div className="font-semibold">{pinned.author}</div>
              <div className="text-xs text-[rgb(var(--muted))]">{pinned.time}</div>
            </div>
          </div>

          <button className="rounded-lg px-2 py-1 text-xl leading-none text-[rgb(var(--muted))] hover:bg-black/5 dark:hover:bg-white/5">
            …
          </button>
        </div>

        <p className="mt-4 text-sm leading-6">{pinned.body}</p>

        <div className="mt-4 space-y-2">
          {pinned.list.map((item, idx) => (
            <div key={item} className="flex items-start gap-2 text-sm">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-slate-200 text-xs font-semibold dark:bg-white/10">
                {idx + 1}
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
