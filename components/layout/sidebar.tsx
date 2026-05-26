"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  MessageSquare,
  BrainCircuit,
  Users,
  BarChart3,
  Settings,
  Sparkles,
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

  const pathname = usePathname();

  return (

    <aside className="w-72 h-screen hidden md:flex flex-col border-r border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[220px] h-[220px] bg-violet-500/10 blur-[100px] rounded-full" />

      {/* Logo */}
      <div className="relative z-10">

        <div className="flex items-center gap-3 mb-10">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/20">

            <Sparkles className="text-white" size={24} />

          </div>

          <div>

            <h1 className="text-2xl font-bold text-white tracking-wide">
              Svachalit
            </h1>

            <p className="text-xs text-gray-400 mt-1">
              Autonomous AI OS
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-3 relative z-10">

        {menuItems.map((item) => {

          const active = pathname === item.href;

          return (

            <Link
              key={item.title}
              href={item.href}
              className={`group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 border ${
                active
                  ? "bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border-violet-500/30 text-white shadow-lg shadow-violet-500/10"
                  : "border-transparent text-gray-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >

              <div
                className={`transition-all ${
                  active
                    ? "text-cyan-400"
                    : "group-hover:text-violet-400"
                }`}
              >

                <item.icon size={22} />

              </div>

              <span className="font-medium tracking-wide">
                {item.title}
              </span>

            </Link>

          );
        })}

      </nav>

      {/* Bottom Card */}
      <div className="mt-auto relative z-10">

        <div className="bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-white/10 rounded-3xl p-5">

          <p className="text-white font-semibold">
            Autonomous AI Active
          </p>

          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            Multi-agent orchestration engine currently optimizing workflows.
          </p>

          <div className="flex items-center gap-2 mt-4">

            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />

            <span className="text-emerald-400 text-sm">
              Systems Operational
            </span>

          </div>

        </div>

      </div>

    </aside>
  );
}