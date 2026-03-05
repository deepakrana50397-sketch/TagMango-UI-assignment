import { Card } from "@/components/ui/Card";

export function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-3xl border border-[rgb(var(--border))] overflow-hidden"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <div
        className="p-5"
        style={{
          background:
            "linear-gradient(180deg, rgba(210,225,255,0.65) 0%, rgba(255,219,226,0.40) 100%)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
