import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
            <div className="grid min-h-screen lg:grid-cols-2">
                {/* Left panel (desktop only) */}
                <aside className="relative hidden lg:flex flex-col justify-between bg-black text-white">
                    {/* subtle gradient */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black to-neutral-900 opacity-90" />

                    <div className="relative p-10">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                            <Image src="/logo.svg" alt="Logo" width={26} height={26} />
                        </div>
                    </div>

                    <div className="relative p-10">
                        <h2 className="text-4xl font-semibold tracking-tight">Just Step In</h2>
                        <p className="mt-4 max-w-md text-sm text-white/70 leading-relaxed">
                            Join millions of athletes and fitness enthusiasts who trust our products for performance and comfort.
                        </p>

                        {/* dots */}
                        <div className="mt-6 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-white/80" />
                            <span className="h-2 w-2 rounded-full bg-white/30" />
                            <span className="h-2 w-2 rounded-full bg-white/30" />
                        </div>

                        <p className="mt-10 text-xs text-white/50">© 2026. All rights reserved.</p>
                    </div>
                </aside>

                {/* Right panel */}
                <main className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-10">
                    <div className="w-full max-w-md">
                        {/* Mobile header (since left panel is hidden) */}
                        <div className="mb-8 flex items-center justify-center lg:hidden">
                            <Link
                                href="/"
                                aria-label="Go to home"
                                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black shadow-sm"
                            >
                                <Image src="/logo.svg" alt="Logo" width={22} height={22} className="invert" />
                            </Link>
                        </div>

                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
