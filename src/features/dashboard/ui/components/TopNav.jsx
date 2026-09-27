import React from "react";
import { Search, Bell, Grid, Sparkles, Sun, Moon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../../shared/state/themeSlice";

export default function TopNav() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme?.mode || "dark");
  const employee = useSelector((state) => state.auth?.employee);

  // Avatar placeholder or user avatar
  const avatarUrl =
    employee?.avatar ||
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop";

  return (
    <header className="h-16 w-full bg-[var(--surface-container-lowest)] border-b border-[var(--outline-variant)] px-6 flex items-center justify-between transition-colors duration-300 select-none">
      {/* Left Section: Search Input */}
      <div className="flex items-center gap-4">
        <div className="relative w-64 sm:w-80">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--on-surface-variant)] pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search workspace..."
            className="w-full rounded-xl border border-[var(--outline-variant)] bg-[var(--surface-container-low)] py-2 pl-9 pr-4 text-xs text-[var(--on-surface)] placeholder:text-[var(--on-surface-variant)] outline-none transition focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
          />
        </div>
      </div>

      {/* Right Section: Actions & Profile */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <button
          type="button"
          className="relative p-2 rounded-xl text-[var(--on-surface-variant)] hover:text-[var(--on-surface)] hover:bg-[var(--surface-container-high)] transition-colors cursor-pointer"
          aria-label="Notifications"
        >
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[var(--primary)]" />
        </button>

        {/* Brand Mark Badge (_RK) */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[var(--surface-container-high)] border border-[var(--outline-variant)] text-xs font-bold text-[var(--on-surface)] cursor-default">
          <Sparkles size={14} className="text-[var(--primary)]" />
          <span className="tracking-wider">._RK</span>
        </div>

        {/* App Switcher */}
        <button
          type="button"
          className="p-2 rounded-xl text-[var(--on-surface-variant)] hover:text-[var(--on-surface)] hover:bg-[var(--surface-container-high)] transition-colors cursor-pointer"
          aria-label="App Switcher"
        >
          <Grid size={18} />
        </button>

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={() => dispatch(toggleTheme())}
          className="p-2 rounded-xl text-[var(--on-surface-variant)] hover:text-[var(--on-surface)] hover:bg-[var(--surface-container-high)] transition-colors cursor-pointer"
          aria-label="Toggle Theme"
        >
          {themeMode === "dark" ? (
            <Sun size={18} className="text-amber-400" />
          ) : (
            <Moon size={18} className="text-indigo-600" />
          )}
        </button>

        {/* User Profile Avatar */}
        <div className="flex items-center pl-1">
          <img
            src={avatarUrl}
            alt={employee?.fullName || "User Avatar"}
            className="h-9 w-9 rounded-full object-cover border border-[var(--outline-variant)] shadow-sm hover:ring-2 hover:ring-[var(--primary)] transition-all cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}
