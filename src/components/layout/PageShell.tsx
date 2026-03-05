export function PageShell({
  sidebar,
  children,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-6 py-6">
      {/* 1 col by default, 2 cols from lg and above */}
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="lg:sticky lg:top-[80px] lg:self-start">
          {sidebar}
        </aside>

        <main className="min-w-0">
          {/* center the feed column inside right panel */}
          <div className="mx-auto w-full max-w-[720px] space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
