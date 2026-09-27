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
} from "lucide-react";
import useAuth from "../hooks/useAuth";



const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop";



export default function SignUpForm() {
  const {register,handleSubmit,watch,errors,isSubmitting,onRegisterSubmit,getPasswordStrength,Link}=useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const password = watch("password", "");
  const strength = getPasswordStrength(password);



  return (
    <div className="h-screen w-full bg-[#0a0a0f] text-slate-200 flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden">
      {/* LEFT PANEL */}
      <div className="relative hidden lg:flex lg:w-[42%] flex-col justify-between overflow-hidden border-r border-white/5 bg-[#0a0a12] p-8 lg:p-10 h-full">
        <img
          src={HERO_IMAGE_URL}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12]/40 via-[#0a0a12]/60 to-[#0a0a12]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a12]/20 via-transparent to-[#0a0a12]/40" />
        <div className="relative z-10">
          <span className="text-sm font-medium tracking-wide text-slate-300">
            Synthetix AI
          </span>
        </div>

        <div className="relative z-10 max-w-sm space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-violet-300">
            <Sparkles size={14} strokeWidth={2} />
            <span>Next-gen intelligence</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-semibold leading-snug text-white">
            Accelerate your team&rsquo;s intelligence.
          </h1>
          <p className="text-xs lg:text-sm leading-relaxed text-slate-400">
            Connect your enterprise data to our specialized AI models and
            unlock unparalleled strategic insights in seconds.
          </p>

          <div className="flex gap-10 pt-2">
            <div>
              <p className="text-base lg:text-lg font-semibold text-white">99.9%</p>
              <p className="text-xs text-slate-500">Uptime SLA</p>
            </div>
            <div>
              <p className="text-base lg:text-lg font-semibold text-white">ISO</p>
              <p className="text-xs text-slate-500">27001 Certified</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-4 border-t border-white/5 pt-3 text-xs text-slate-500">
          Synthetix AI
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex flex-1 flex-col justify-between h-full px-6 py-4 sm:px-10 lg:px-16 lg:py-6 overflow-y-auto lg:overflow-hidden">
        <div className="mx-auto my-auto w-full max-w-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Create your account
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
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
                className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-400"
              >
                FULL NAME
              </label>
              <div className="relative">
                <User
                  size={15}
                  strokeWidth={2}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className={`w-full rounded-xl border bg-[#0d0c12] py-2.5 pl-9 pr-3 text-xs text-white placeholder:text-slate-600 outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500 ${
                    errors.fullName ? "border-rose-500" : "border-white/10"
                  }`}
                  {...register("fullName", {
                    required: "Please enter your full name",
                    minLength: { value: 2, message: "Name is too short" },
                  })}
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-xs text-rose-400">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-400"
              >
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <Mail
                  size={15}
                  strokeWidth={2}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  className={`w-full rounded-xl border bg-[#0d0c12] py-2.5 pl-9 pr-3 text-xs text-white placeholder:text-slate-600 outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500 ${
                    errors.email ? "border-rose-500" : "border-white/10"
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
                <p className="mt-1 text-xs text-rose-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-400"
              >
                PASSWORD
              </label>
              <div className="relative">
                <Lock
                  size={15}
                  strokeWidth={2}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full rounded-xl border bg-[#0d0c12] py-2.5 pl-9 pr-9 text-xs text-white placeholder:text-slate-600 outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500 ${
                    errors.password ? "border-rose-500" : "border-white/10"
                  }`}
                  {...register("password", {
                    required: "Please create a password",
                    minLength: { value: 8, message: "Use at least 8 characters" },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>

              {password && (
                <div className="mt-1.5">
                  <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full transition-all ${strength.color}`}
                      style={{ width: `${strength.percent}%` }}
                    />
                  </div>
                  <p className="mt-0.5 text-[11px] text-violet-300">{strength.label}</p>
                </div>
              )}
              {errors.password && (
                <p className="mt-1 text-xs text-rose-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Terms */}
            <div>
              <label className="flex items-start gap-2 text-xs text-slate-400 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="mt-0.5 h-3.5 w-3.5 rounded border-white/20 bg-[#0d0c12] text-violet-600 focus:ring-violet-500"
                  {...register("agree", {
                    required: "You must accept the terms to continue",
                  })}
                />
                <span>
                  I agree to the{" "}
                  <Link to="#" className="text-violet-400 hover:text-violet-300 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="#" className="text-violet-400 hover:text-violet-300 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
              {errors.agree && (
                <p className="mt-1 text-xs text-rose-400">
                  {errors.agree.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-violet-600 py-2.5 text-xs font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-500 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Creating account…" : "Create Account"}
            </button>

            <div className="relative my-4 text-center">
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/10" />
              <span className="relative z-10 bg-[#0a0a0f] px-3 text-[11px] text-slate-500">
                or continue with
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#1c1b24] py-2.5 text-xs font-semibold text-slate-200 transition hover:bg-white/5 hover:border-white/20"
              >
                <Cloud size={15} className="text-slate-300" />
                <span>GOOGLE</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#1c1b24] py-2.5 text-xs font-semibold text-slate-200 transition hover:bg-white/5 hover:border-white/20"
              >
                <Terminal size={15} className="text-slate-300" />
                <span>GITHUB</span>
              </button>
            </div>

            <p className="mt-4 text-center text-xs text-slate-400">
              Already have an account?{" "}
              <Link to="/" className="font-semibold text-violet-400 hover:underline hover:text-violet-300">
                Log In
              </Link>
            </p>
          </form>
        </div>

        <div className="mx-auto mt-4 flex w-full max-w-sm flex-col gap-2 border-t border-white/5 pt-3 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>Synthetix AI</span>
          <div className="flex flex-wrap gap-3">
            <Link to="#" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="#" className="hover:text-slate-300">Terms of Service</Link>
            <Link to="#" className="hover:text-slate-300">Security</Link>
            <Link to="#" className="hover:text-slate-300">System Status</Link>
          </div>
        </div>
      </div>
    </div>
  );
}