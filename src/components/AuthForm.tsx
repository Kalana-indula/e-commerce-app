"use client";

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useMemo, useState } from "react";
import SocialProviders from "@/src/components/SocialProviders";

export interface AuthFormProps {
    mode: "sign-in" | "sign-up";
    className?: string;
}

export default function AuthForm({ mode, className = "" }: AuthFormProps) {
    const [showPassword, setShowPassword] = useState(false);

    const copy = useMemo(() => {
        if (mode === "sign-in") {
            return {
                topText: "Don’t have an account?",
                topLinkText: "Sign Up",
                topLinkHref: "/sign-up",
                title: "Welcome Back!",
                subtitle: "Sign in to continue your journey",
                button: "Sign In",
            };
        }
        return {
            topText: "Already have an account?",
            topLinkText: "Sign In",
            topLinkHref: "/sign-in",
            title: "Join Today!",
            subtitle: "Create your account to get started",
            button: "Sign Up",
        };
    }, [mode]);

    return (
        <section className={className} aria-label={mode === "sign-in" ? "Sign in" : "Sign up"}>
            {/* top switch */}
            <div className="mb-8 flex items-center justify-end text-sm text-black/60">
                <span>{copy.topText}</span>
                <Link
                    href={copy.topLinkHref}
                    className="ml-2 font-semibold text-black underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
                >
                    {copy.topLinkText}
                </Link>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">{copy.title}</h1>
            <p className="mt-2 text-sm text-black/55">{copy.subtitle}</p>

            {/* socials */}
            <div className="mt-8">
                <SocialProviders mode={mode} />
            </div>

            {/* form */}
            <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
                aria-label={mode === "sign-in" ? "Email and password sign in" : "Create account form"}
            >
                {mode === "sign-up" && (
                    <div>
                        <label htmlFor="fullName" className="text-sm font-semibold text-black/80">
                            Full Name
                        </label>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            placeholder="Enter your full name"
                            autoComplete="name"
                            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black shadow-sm outline-none transition focus:border-black/20 focus:ring-2 focus:ring-[hsl(var(--ring))]"
                        />
                    </div>
                )}

                <div>
                    <label htmlFor="email" className="text-sm font-semibold text-black/80">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="johndoe@gmail.com"
                        autoComplete="email"
                        required
                        className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black shadow-sm outline-none transition focus:border-black/20 focus:ring-2 focus:ring-[hsl(var(--ring))]"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="text-sm font-semibold text-black/80">
                        Password
                    </label>

                    <div className="relative mt-2">
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="minimum 8 characters"
                            autoComplete={mode === "sign-in" ? "current-password" : "new-password"}
                            required
                            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 pr-12 text-sm text-black shadow-sm outline-none transition focus:border-black/20 focus:ring-2 focus:ring-[hsl(var(--ring))]"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword((v) => !v)}
                            className="absolute inset-y-0 right-2 inline-flex h-full items-center justify-center rounded-lg px-3 text-black/50 hover:text-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-2 w-full rounded-full bg-black px-5 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-black/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2"
                >
                    {copy.button}
                </button>

                {/* terms */}
                <p className="pt-1 text-center text-xs text-black/45 leading-relaxed">
                    By continuing, you agree to our{" "}
                    <Link href="#" className="underline underline-offset-4 hover:text-black/70">
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="underline underline-offset-4 hover:text-black/70">
                        Privacy Policy
                    </Link>
                    .
                </p>
            </form>
        </section>
    );
}
