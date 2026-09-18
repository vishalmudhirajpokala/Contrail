export default function TracePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-semibold text-2xl tracking-tight">Trace</h1>
        <p className="mt-1 text-muted-foreground">
          Trace blockchain activity from an address or transaction and follow connected flows.
        </p>
      </div>

      <div className="rounded-lg border bg-card p-8">
        <p className="text-muted-foreground text-sm">
          This Contrail module is being built. No production data or tracing functionality is connected yet.
        </p>
      </div>
    </div>
  );
}
