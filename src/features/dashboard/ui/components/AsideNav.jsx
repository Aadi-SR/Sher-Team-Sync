import React, { useState } from "react";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  MessageSquare,
  Settings,
  Plus,
} from "lucide-react";
import { Link, useLocation } from "react-router";

export default function AsideNav() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("Dashboard");

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Tasks", icon: ClipboardList, path: "/tasks" },
    { name: "Team", icon: Users, path: "/team" },
    { name: "Chat", icon: MessageSquare, path: "/chat" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <aside className="relative z-10 w-60 min-h-screen bg-[var(--surface-container-lowest)] border-r border-[var(--outline-variant)] flex flex-col justify-between p-5 transition-colors duration-300 select-none shadow-[var(--shadow-level-3)]">
      {/* Top Header & Brand */}
      <div>
        <div className="mb-8 px-2">
          <h1 className="text-2xl font-bold text-[var(--primary)] tracking-tight">
            Team Sync
          </h1>
          <p className="text-[11px] font-medium text-[var(--on-surface-variant)] mt-0.5">
            Enterprise Intelligence Platforms
          </p>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              activeTab === item.name || location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 group relative ${
                  isActive
                    ? "bg-[var(--surface-container-high)] text-[var(--on-surface)] shadow-sm"
                    : "text-[var(--on-surface-variant)] hover:bg-[var(--surface-container-low)] hover:text-[var(--on-surface)]"
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 rounded-r-full bg-[var(--primary)]" />
                )}
                <Icon
                  size={17}
                  className={`transition-colors ${
                    isActive
                      ? "text-[var(--primary)]"
                      : "text-[var(--on-surface-variant)] group-hover:text-[var(--on-surface)]"
                  }`}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Action Button */}
      <div className="pt-4 mt-auto">
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[var(--primary)] text-[var(--on-primary)] font-semibold text-xs shadow-md shadow-[var(--primary)]/20 transition-all hover:opacity-90 active:scale-[0.98] cursor-pointer"
        >
          <Plus size={16} strokeWidth={2.5} />
          <span>New Task</span>
        </button>
      </div>
    </aside>
  );
}
