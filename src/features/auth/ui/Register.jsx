import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  Cloud,
  Terminal,
  Sun,
  Moon,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";
import { toggleTheme } from "../../../shared/state/themeSlice";

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    errors,
    isSubmitting,
    onRegisterSubmit,
    getPasswordStrength,
    Link,
  } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const password = watch("password", "");
  const strength = getPasswordStrength(password);
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme?.mode || "light");

  return (
    <div className="h-screen w-full bg-[var(--background)] text-[var(--on-background)] flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden transition-colors duration-300 relative">
      {/* Theme Toggle Button */}
      <div className="absolute top-4 right-4 z-30">
        <button
          type="button"
          onClick={() => dispatch(toggleTheme())}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface-container-high)] text-[var(--on-surface)] border border-[var(--outline-variant)] text-xs font-medium hover:bg-[var(--surface-container-highest)] transition-colors cursor-pointer shadow-sm"
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

      {/* LEFT PANEL */}
      <div className="relative hidden lg:flex lg:w-[42%] flex-col justify-between overflow-hidden border-r border-[var(--outline-variant)] bg-[var(--surface-container-low)] p-8 lg:p-10 h-full">
        <img
          src={HERO_IMAGE_URL}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface-container-low)]/40 via-[var(--surface-container-low)]/80 to-[var(--surface-container-low)]" />
        <div className="relative z-10">
          <span className="text-sm font-medium tracking-wide text-[var(--on-surface-variant)]">
            Synthetix AI
          </span>
        </div>

        <div className="relative z-10 max-w-sm space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-[var(--primary)]">
            <Sparkles size={14} strokeWidth={2} />
            <span>Next-gen intelligence</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-semibold leading-snug text-[var(--on-surface)]">
            Accelerate your team&rsquo;s intelligence.
          </h1>
          <p className="text-xs lg:text-sm leading-relaxed text-[var(--on-surface-variant)]">
            Connect your enterprise data to our specialized AI models and
            unlock unparalleled strategic insights in seconds.
          </p>

          <div className="flex gap-10 pt-2">
            <div>
              <p className="text-base lg:text-lg font-semibold text-[var(--on-surface)]">
                99.9%
              </p>
              <p className="text-xs text-[var(--on-surface-variant)]">Uptime SLA</p>
            </div>
            <div>
              <p className="text-base lg:text-lg font-semibold text-[var(--on-surface)]">
                ISO
              </p>
              <p className="text-xs text-[var(--on-surface-variant)]">
                27001 Certified
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-4 border-t border-[var(--outline-variant)] pt-3 text-xs text-[var(--on-surface-variant)]">
          Synthetix AI
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex flex-1 flex-col justify-between h-full px-6 py-4 sm:px-10 lg:px-16 lg:py-6 overflow-y-auto lg:overflow-hidden">
        <div className="mx-auto my-auto w-full max-w-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--on-surface)] tracking-tight">
            Create your account
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[var(--on-surface-variant)]">
            Experience the future of collaborative data intelligence.
          </p>

          <form
            onSubmit={handleSubmit(onRegisterSubmit)}
            noValidate
            className="mt-4 space-y-3"
          >
            {/* Full name */}
            <div>
              <label
                htmlFor="fullName"
                className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[var(--on-surface-variant)]"
              >
                FULL NAME
              </label>
              <div className="relative">
                <User
                  size={15}
                  strokeWidth={2}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--on-surface-variant)]"
                />
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className={`w-full rounded-[var(--radius-md)] border bg-[var(--surface-container-lowest)] py-2.5 pl-9 pr-3 text-xs text-[var(--on-surface)] placeholder:text-[var(--outline)] outline-none transition focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] ${
                    errors.fullName ? "border-[var(--error)]" : "border-[var(--outline-variant)]"
                  }`}
                  {...register("fullName", {
                    required: "Please enter your full name",
                    minLength: { value: 2, message: "Name is too short" },
                  })}
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-xs text-[var(--error)]">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[var(--on-surface-variant)]"
              >
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <Mail
                  size={15}
                  strokeWidth={2}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--on-surface-variant)]"
                />
                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  className={`w-full rounded-[var(--radius-md)] border bg-[var(--surface-container-lowest)] py-2.5 pl-9 pr-3 text-xs text-[var(--on-surface)] placeholder:text-[var(--outline)] outline-none transition focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] ${
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
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-[var(--error)]">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[var(--on-surface-variant)]"
              >
                PASSWORD
              </label>
              <div className="relative">
                <Lock
                  size={15}
                  strokeWidth={2}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--on-surface-variant)]"
                />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full rounded-[var(--radius-md)] border bg-[var(--surface-container-lowest)] py-2.5 pl-9 pr-9 text-xs text-[var(--on-surface)] placeholder:text-[var(--outline)] outline-none transition focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] ${
                    errors.password ? "border-[var(--error)]" : "border-[var(--outline-variant)]"
                  }`}
                  {...register("password", {
                    required: "Please create a password",
                    minLength: { value: 8, message: "Use at least 8 characters" },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--on-surface-variant)] hover:text-[var(--on-surface)] cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>

              {password && (
                <div className="mt-1.5">
                  <div className="h-1 w-full overflow-hidden rounded-full bg-[var(--surface-container-high)]">
                    <div
                      className={`h-full rounded-full transition-all ${strength.color}`}
                      style={{ width: `${strength.percent}%` }}
                    />
                  </div>
                  <p className="mt-0.5 text-[11px] text-[var(--primary)]">
                    {strength.label}
                  </p>
                </div>
              )}
              {errors.password && (
                <p className="mt-1 text-xs text-[var(--error)]">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Terms */}
            <div>
              <label className="flex items-start gap-2 text-xs text-[var(--on-surface-variant)] cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="mt-0.5 h-3.5 w-3.5 rounded border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] accent-[var(--primary)] focus:ring-[var(--primary)]"
                  {...register("agree", {
                    required: "You must accept the terms to continue",
                  })}
                />
                <span>
                  I agree to the{" "}
                  <Link
                    to="#"
                    className="text-[var(--primary)] hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="#"
                    className="text-[var(--primary)] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
              {errors.agree && (
                <p className="mt-1 text-xs text-[var(--error)]">
                  {errors.agree.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-[var(--radius-md)] bg-[var(--primary)] py-2.5 text-xs font-semibold text-[var(--on-primary)] shadow-md transition hover:opacity-90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? "Creating account…" : "Create Account"}
            </button>

            <div className="relative my-4 text-center">
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[var(--outline-variant)]" />
              <span className="relative z-10 bg-[var(--background)] px-3 text-[11px] text-[var(--on-surface-variant)]">
                or continue with
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
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

            <p className="mt-4 text-center text-xs text-[var(--on-surface-variant)]">
              Already have an account?{" "}
              <Link
                to="/"
                className="font-semibold text-[var(--primary)] hover:underline"
              >
                Log In
              </Link>
            </p>
          </form>
        </div>

        <div className="mx-auto mt-4 flex w-full max-w-sm flex-col gap-2 border-t border-[var(--outline-variant)] pt-3 text-[11px] text-[var(--on-surface-variant)] sm:flex-row sm:items-center sm:justify-between">
          <span>TEAM SYNC</span>
          <div className="flex flex-wrap gap-3">
            <Link to="#" className="hover:text-[var(--on-surface)]">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-[var(--on-surface)]">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-[var(--on-surface)]">
              Security
            </Link>
            <Link to="#" className="hover:text-[var(--on-surface)]">
              System Status
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}