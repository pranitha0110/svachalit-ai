"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  MessageSquare,
  BrainCircuit,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Inbox",
    icon: MessageSquare,
    href: "/dashboard/inbox",
  },
  {
    title: "AI Agents",
    icon: BrainCircuit,
    href: "/dashboard/agents",
  },
  {
    title: "CRM",
    icon: Users,
    href: "/dashboard/crm",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/dashboard/analytics",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#0B1120] border-r border-white/10 p-5 hidden md:flex flex-col">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-white">
          Svachalit
        </h1>

        <p className="text-xs text-gray-400 mt-1">
          Autonomous AI OS
        </p>
      </div>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 hover:text-white transition"
          >
            <item.icon size={20} />
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}