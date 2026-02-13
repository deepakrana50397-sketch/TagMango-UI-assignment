import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { IconButton } from "@/components/ui/IconButton";

export default function Page() {
  return (
    <div className="min-h-screen bg-[rgb(var(--bg))] px-4 py-10">
      <div className="mx-auto max-w-2xl space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">TagMango UI – Setup Check</h1>
          <p className="mt-1 text-sm text-[rgb(var(--muted))]">
            Verifying tokens + Tailwind + primitives (Card/Avatar/IconButton).
          </p>
        </div>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar text="A" />
              <div>
                <div className="text-sm font-semibold">Ashraf</div>
                <div className="text-xs text-[rgb(var(--muted))]">@ashraf</div>
              </div>
            </div>

            <IconButton label="Menu">
              <span aria-hidden="true">⋯</span>
            </IconButton>
          </div>

          <p className="mt-4 text-sm leading-6">
            If you can see this card with proper spacing, border, and shadow,
            your base setup is correct.
          </p>

          <div className="mt-4 flex items-center gap-2">
            <IconButton label="Like">
              <span aria-hidden="true">❤️</span>
            </IconButton>
            <IconButton label="Comment">
              <span aria-hidden="true">💬</span>
            </IconButton>
            <IconButton label="Share">
              <span aria-hidden="true">↗</span>
            </IconButton>
          </div>
        </Card>

        <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-4 text-sm">
          <div className="font-semibold">Quick checklist</div>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-[rgb(var(--muted))]">
            <li>Card has rounded corners + subtle shadow</li>
            <li>Text colors look correct</li>
            <li>Buttons hover + focus ring works</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
