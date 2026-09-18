import {
  Activity,
  AlertTriangle,
  BarChart3,
  FileText,
  GitBranch,
  LayoutDashboard,
  type LucideIcon,
  Network,
  Settings,
  WalletCards,
} from "lucide-react";

export type NavBadge = "new" | "soon";

export interface NavSubItem {
  id: string;
  title: string;
  url: string;
  icon?: LucideIcon;
  badge?: NavBadge;
  disabled?: boolean;
  newTab?: boolean;
}

interface NavItemBase {
  id: string;
  title: string;
  icon?: LucideIcon;
  badge?: NavBadge;
  disabled?: boolean;
  newTab?: boolean;
}

export interface NavMainLinkItem extends NavItemBase {
  url: string;
  subItems?: never;
}

export interface NavMainParentItem extends NavItemBase {
  subItems: NavSubItem[];
}

export type NavMainItem = NavMainLinkItem | NavMainParentItem;

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Overview",
    items: [
      {
        id: "overview",
        title: "Overview",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    id: 2,
    label: "Investigate",
    items: [
      {
        id: "trace",
        title: "Trace",
        url: "/dashboard/trace",
        icon: GitBranch,
      },
      {
        id: "transactions",
        title: "Transactions",
        url: "/dashboard/transactions",
        icon: Activity,
      },
      {
        id: "entities",
        title: "Entities",
        url: "/dashboard/entities",
        icon: WalletCards,
      },
      {
        id: "alerts",
        title: "Alerts",
        url: "/dashboard/alerts",
        icon: AlertTriangle,
      },
    ],
  },
  {
    id: 3,
    label: "Analyze",
    items: [
      {
        id: "analytics",
        title: "Analytics",
        url: "/dashboard/analytics",
        icon: BarChart3,
      },
      {
        id: "graph",
        title: "Graph Explorer",
        url: "/dashboard/graph",
        icon: Network,
      },
    ],
  },
  {
    id: 4,
    label: "Reports",
    items: [
      {
        id: "reports",
        title: "Reports",
        url: "/dashboard/reports",
        icon: FileText,
      },
    ],
  },
  {
    id: 5,
    label: "System",
    items: [
      {
        id: "settings",
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
      },
    ],
  },
];
