import React, { useState } from "react";
import { Cloud, Terminal, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const {register,handleSubmit,watch,errors,isSubmitting,onLoginSubmit}=useAuth();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen h-screen w-full bg-[#0a090e] text-slate-200 flex flex-col justify-between items-center p-4 overflow-y-auto">
      {/* Background radial ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-950/20 via-transparent to-transparent pointer-events-none" />

      {/* Spacer for top vertical balancing */}
      <div className="w-full flex-1 min-h-[1rem]" />

      {/* LOGIN CARD */}
      <div className="relative z-10 w-full max-w-[400px] bg-[#14131a] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80 my-auto">
        {/* LOGO BADGE */}
        <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-white font-bold text-sm shadow-md shadow-violet-600/30">
          hub
        </div>

        {/* HEADER */}
        <h1 className="text-center text-xl font-bold text-white tracking-tight">
          Synthetix AI
        </h1>
        <p className="mt-1 text-center text-xs text-slate-400">
          Sign in to your workspace
        </p>

        {/* SOCIAL BUTTONS */}
        <div className="mt-5 grid grid-cols-2 gap-3">
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

        {/* DIVIDER */}
        <div className="relative my-5 text-center">
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/10" />
          <span className="relative z-10 bg-[#14131a] px-3 text-[11px] text-slate-500">
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
              className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-400"
            >
              EMAIL ADDRESS
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@company.com"
              className={`w-full rounded-xl border bg-[#0d0c12] py-2.5 px-3.5 text-xs text-white placeholder:text-slate-600 outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500 ${
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
            {errors.email && (
              <p className="mt-1 text-xs text-rose-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-[10px] font-bold uppercase tracking-wider text-slate-400"
              >
                PASSWORD
              </label>
              <Link
                to="#"
                className="text-xs text-violet-400 hover:underline hover:text-violet-300"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className={`w-full rounded-xl border bg-[#0d0c12] py-2.5 pl-3.5 pr-10 text-xs text-white placeholder:text-slate-600 outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500 ${
                  errors.password ? "border-rose-500" : "border-white/10"
                }`}
                {...register("password", {
                  required: "Please enter your password",
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-rose-400">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* CHECKBOX */}
          <div className="flex items-center gap-2 pt-0.5">
            <input
              id="remember"
              type="checkbox"
              className="h-3.5 w-3.5 rounded border-white/20 bg-[#0d0c12] text-violet-600 focus:ring-violet-500"
              {...register("remember")}
            />
            <label
              htmlFor="remember"
              className="text-xs text-slate-400 cursor-pointer select-none"
            >
              Stay signed in
            </label>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-violet-600 py-2.5 text-xs font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-500 active:scale-[0.99] disabled:opacity-60"
          >
            {isSubmitting ? "Signing in…" : "Sign In"}
          </button>
        </form>

        {/* SIGN UP LINK */}
        <p className="mt-5 text-center text-xs text-slate-400">
          Don&rsquo;t have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-violet-400 hover:underline hover:text-violet-300"
          >
            Sign Up
          </Link>
        </p>
      </div>

      {/* Spacer for bottom vertical balancing */}
      <div className="w-full flex-1 min-h-[1rem]" />

      {/* FOOTER */}
      <footer className="relative z-10 py-2 text-center text-[11px] text-slate-600">
        <p>&copy; 2024 Synthetix AI. Enterprise Intelligence Platforms.</p>
        <div className="mt-1 flex items-center justify-center gap-4">
          <Link to="#" className="text-violet-400 hover:text-violet-300 transition">
            Privacy Policy
          </Link>
          <Link to="#" className="text-violet-400 hover:text-violet-300 transition">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}