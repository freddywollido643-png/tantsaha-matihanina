export function PageShell({ title }: { title: string }) {
  return (
    <main className="mx-auto max-w-md p-4 pb-24">
      <h1 className="mb-2 text-xl font-bold">{title}</h1>
      <p className="text-sm text-muted-foreground">Mbola eo am-pamolavolana.</p>
    </main>
  );
}
