import { Card } from "@/components/ui/Card";

export function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <Card className="overflow-hidden">
      {/* top decorative strip (blur/glass feel) */}
      <div className="h-20 bg-gradient-to-r from-slate-200/60 via-white/40 to-rose-200/50 dark:from-white/10 dark:via-white/5 dark:to-white/10" />
      <div className="p-4">{children}</div>
    </Card>
  );
}
