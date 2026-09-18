export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-semibold text-2xl tracking-tight">Settings</h1>
        <p className="mt-1 text-muted-foreground">Configure Contrail preferences and investigation settings.</p>
      </div>

      <div className="rounded-lg border bg-card p-8">
        <p className="text-muted-foreground text-sm">
          This Contrail module is being built. No production data or tracing functionality is connected yet.
        </p>
      </div>
    </div>
  );
}
