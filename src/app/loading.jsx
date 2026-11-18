export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-accent1/20 border-t-accent1 animate-spin" />
        <p className="text-text-muted text-sm font-medium">Loading…</p>
      </div>
    </div>
  );
}
