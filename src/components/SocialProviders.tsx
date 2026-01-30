"use client";

import { Apple, Chrome } from "lucide-react";

export interface SocialProvidersProps {
    mode: "sign-in" | "sign-up";
    className?: string;
}

export default function SocialProviders({ mode, className = "" }: SocialProvidersProps) {
    const label = mode === "sign-in" ? "Or sign in with" : "Or sign up with";

    return (
        <div className={className}>
            <button
                type="button"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-black/[0.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
            >
        <span className="flex items-center justify-center gap-2">
          <Chrome className="h-5 w-5" />
          Continue with Google
        </span>
            </button>

            <button
                type="button"
                className="mt-3 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-black/[0.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
            >
        <span className="flex items-center justify-center gap-2">
          <Apple className="h-5 w-5" />
          Continue with Apple
        </span>
            </button>

            <div className="my-7 flex items-center gap-4">
                <span className="h-px flex-1 bg-black/10" />
                <span className="text-xs font-medium text-black/45">{label}</span>
                <span className="h-px flex-1 bg-black/10" />
            </div>
        </div>
    );
}
