import React, { useState } from "react";
import { Cloud, Terminal, Eye, EyeOff, Sun, Moon } from "lucide-react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";
import { toggleTheme } from "../../../shared/state/themeSlice";

export default function Login() {
  const { register, handleSubmit, errors, isSubmitting, onLoginSubmit } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme?.mode || "light");

  return (
    <div className="relative min-h-screen h-screen w-full bg-[var(--background)] text-[var(--on-background)] flex flex-col justify-between items-center p-4 overflow-y-auto transition-colors duration-300">
      {/* Top Bar with Theme Toggle */}
      <div className="absolute top-4 right-4 z-30">
        <button
          type="button"
          onClick={() => dispatch(toggleTheme())}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface-container-high)] text-[var(--on-surface)] border border-[var(--outline-variant)] text-xs font-medium hover:bg-[var(--surface-container-highest)] transition-colors cursor-pointer"
          aria-label="Toggle Theme"
        >
          {themeMode === "dark" ? (
            <>
              <Sun size={14} className="text-amber-400" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <Moon size={14} className="text-indigo-600" />
              <span>Dark Mode</span>
            </>
          )}
        </button>
      </div>

      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--primary)]/10 via-transparent to-transparent pointer-events-none" />

      {/* Spacer for top vertical balancing */}
      <div className="w-full flex-1 min-h-[1rem]" />

      {/* LOGIN CARD */}
      <div className="relative z-10 w-full max-w-[400px] bg-[var(--surface-container-low)] border border-[var(--outline-variant)] rounded-[var(--radius-xl)] p-6 sm:p-8 shadow-xl my-auto transition-colors duration-300">
        {/* LOGO BADGE */}
        <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] text-[var(--on-primary)] font-bold text-sm shadow-md">
          hub
        </div>

        {/* HEADER */}
        <h1 className="text-center text-xl font-bold text-[var(--on-surface)] tracking-tight">
          TEAM SYNC
        </h1>
        <p className="mt-1 text-center text-xs text-[var(--on-surface-variant)]">
          Sign in to your workspace
        </p>

        {/* SOCIAL BUTTONS */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[var(--outline-variant)] bg-[var(--surface-container-high)] py-2.5 text-xs font-semibold text-[var(--on-surface)] transition hover:bg-[var(--surface-container-highest)] cursor-pointer"
          >
            <Cloud size={15} className="text-[var(--on-surface-variant)]" />
            <span>GOOGLE</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[var(--outline-variant)] bg-[var(--surface-container-high)] py-2.5 text-xs font-semibold text-[var(--on-surface)] transition hover:bg-[var(--surface-container-highest)] cursor-pointer"
          >
            <Terminal size={15} className="text-[var(--on-surface-variant)]" />
            <span>GITHUB</span>
          </button>
        </div>

        {/* DIVIDER */}
        <div className="relative my-5 text-center">
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[var(--outline-variant)]" />
          <span className="relative z-10 bg-[var(--surface-container-low)] px-3 text-[11px] text-[var(--on-surface-variant)]">
            or continue with email
          </span>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onLoginSubmit)}
          noValidate
          className="space-y-4"
        >
          {/* EMAIL */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[var(--on-surface-variant)]"
            >
              EMAIL ADDRESS
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@company.com"
              className={`w-full rounded-[var(--radius-md)] border bg-[var(--surface-container-lowest)] py-2.5 px-3.5 text-xs text-[var(--on-surface)] placeholder:text-[var(--outline)] outline-none transition focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] ${
                errors.email ? "border-[var(--error)]" : "border-[var(--outline-variant)]"
              }`}
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-[var(--error)]">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-[10px] font-bold uppercase tracking-wider text-[var(--on-surface-variant)]"
              >
                PASSWORD
              </label>
              <Link
                to="#"
                className="text-xs text-[var(--primary)] hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className={`w-full rounded-[var(--radius-md)] border bg-[var(--surface-container-lowest)] py-2.5 pl-3.5 pr-10 text-xs text-[var(--on-surface)] placeholder:text-[var(--outline)] outline-none transition focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] ${
                  errors.password ? "border-[var(--error)]" : "border-[var(--outline-variant)]"
                }`}
                {...register("password", {
                  required: "Please enter your password",
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--on-surface-variant)] hover:text-[var(--on-surface)] cursor-pointer"
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-[var(--error)]">
                {errors.password.message}
              </p>
            )}
          </div>


          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-[var(--radius-md)] bg-[var(--primary)] py-2.5 text-xs font-semibold text-[var(--on-primary)] shadow-md transition hover:opacity-90 active:scale-[0.99] disabled:opacity-60 cursor-pointer"
          >
            {isSubmitting ? "Signing in…" : "Sign In"}
          </button>
        </form>

        {/* SIGN UP LINK */}
        <p className="mt-5 text-center text-xs text-[var(--on-surface-variant)]">
          Don&rsquo;t have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-[var(--primary)] hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>

      {/* Spacer for bottom vertical balancing */}
      <div className="w-full flex-1 min-h-[1rem]" />

      {/* FOOTER */}
      <footer className="relative z-10 py-2 text-center text-[11px] text-[var(--on-surface-variant)]">
        <p>&copy; 2024 TEAM SYNC. Enterprise Intelligence Platforms.</p>
        <div className="mt-1 flex items-center justify-center gap-4">
          <Link to="#" className="text-[var(--primary)] hover:underline transition">
            Privacy Policy
          </Link>
          <Link to="#" className="text-[var(--primary)] hover:underline transition">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}