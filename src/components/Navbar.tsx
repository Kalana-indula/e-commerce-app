"use client";

import Image from "next/image";
import Link from "next/link";
import {Menu} from "lucide-react";

type NavItem = {
    label: string;
    href: string;
};

export interface NavbarProps {
    logoSrc?: string; // e.g. "/brand/logo.svg"
    logoAlt?: string;
    cartCount?: number;
    className?: string;

    // icons from /public
    menuIconSrc?: string; // "/icons/menu.svg"
}

const NAV_LINKS: NavItem[] = [
    { label: "Men", href: "/men" },
    { label: "Women", href: "/women" },
    { label: "Kids", href: "/kids" },
    { label: "Collections", href: "/collections" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar({
                                   logoSrc = "/logo.svg",
                                   logoAlt = "Brand",
                                   cartCount = 2,
                                   className = "",
                                   menuIconSrc = "/icons/menu.svg",
                               }: NavbarProps) {
    return (
        <header
            className={[
                "w-full border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))]",
                className,
            ].join(" ")}
        >
            <div className="mx-auto max-w-7xl px-4 py-4 md:px-8">
                {/* Mobile layout */}
                <div className="relative flex items-center justify-between md:hidden">
                    {/* Left: hamburger */}
                    <button
                        type="button"
                        aria-label="Open menu"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[hsl(var(--muted))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
                    >
                        <Menu height={20} width={20} className="h-5 w-5"/>
                    </button>

                    {/* Center: logo (centered) */}
                    <Link
                        href="/"
                        aria-label="Go to home"
                        className="absolute left-1/2 -translate-x-1/2 inline-flex items-center"
                    >
                        <Image src={logoSrc} alt={logoAlt} width={44} height={22} priority className="h-5 w-auto invert" />
                    </Link>

                    {/* Right: Search + My Cart */}
                    <div className="flex items-center gap-6">
                        <Link
                            href="/search"
                            className="text-base font-semibold tracking-tight transition-opacity hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
                        >
                            Search
                        </Link>

                        <Link
                            href="/cart"
                            aria-label={`My Cart (${cartCount})`}
                            className="text-base font-semibold tracking-tight transition-opacity hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
                        >
                            My Cart ({cartCount})
                        </Link>
                    </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden items-center justify-between md:flex">
                    {/* Left: logo */}
                    <Link href="/" aria-label="Go to home" className="inline-flex items-center">
                        <Image src={logoSrc} alt={logoAlt} width={44} height={22} priority className="h-5 w-auto invert" />
                    </Link>

                    {/* Center: nav */}
                    <nav aria-label="Primary">
                        <ul className="flex items-center gap-8">
                            {NAV_LINKS.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-sm font-semibold tracking-tight transition-opacity hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right: actions */}
                    <div className="flex items-center gap-8">
                        <Link
                            href="/search"
                            className="text-sm font-semibold tracking-tight transition-opacity hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
                        >
                            Search
                        </Link>

                        <Link
                            href="/cart"
                            aria-label={`My Cart (${cartCount})`}
                            className="text-sm font-semibold tracking-tight transition-opacity hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
                        >
                            My Cart ({cartCount})
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
