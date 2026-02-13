export function PageShell({
  sidebar,
  children,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
      <div className="grid gap-6 md:grid-cols-[320px_1fr]">
        <aside className="md:sticky md:top-[84px] md:self-start">
          {sidebar}
        </aside>
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
