import { Activity, AlertTriangle, Network, Search } from "lucide-react";

const sections = [
  {
    title: "Investigation",
    description: "Start by tracing an address or transaction.",
    icon: Search,
  },
  {
    title: "Recent Activity",
    description: "Connected transaction activity will appear here.",
    icon: Activity,
  },
  {
    title: "Active Alerts",
    description: "Suspicious activity signals will appear here.",
    icon: AlertTriangle,
  },
  {
    title: "Network & Entities",
    description: "Investigated entities and relationships will appear here.",
    icon: Network,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-semibold text-3xl tracking-tight">Contrail Overview</h1>
        <p className="mt-2 text-muted-foreground">
          Investigate blockchain activity, trace transaction flows, and analyze connected entities from one operational
          workspace.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <div key={section.title} className="rounded-xl border bg-card p-6">
              <Icon className="mb-4 size-5 text-muted-foreground" />

              <h2 className="font-medium">{section.title}</h2>

              <p className="mt-2 text-muted-foreground text-sm">{section.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
