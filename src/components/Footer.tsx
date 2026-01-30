import Image from "next/image";
import Link from "next/link";

type FooterGroup = {
    label: string;
    items: { label: string; href: string }[];
};

type SocialItem = {
    label: string;
    href: string;
    iconSrc: string; // from /public
};

export interface FooterProps {
    logoSrc?: string; // "/brand/logo.svg"
    logoAlt?: string;
    groups?: FooterGroup[];
    socials?: SocialItem[];
    className?: string;
    copyrightName?: string;
    year?: number;
}

const DEFAULT_GROUPS: FooterGroup[] = [
    {
        label: "Featured",
        items: [
            { label: "Air Force 1", href: "/collections/air-force-1" },
            { label: "Huarache", href: "/collections/huarache" },
            { label: "Air Max 90", href: "/collections/air-max-90" },
            { label: "Air Max 95", href: "/collections/air-max-95" },
        ],
    },
    {
        label: "Shoes",
        items: [
            { label: "All Shoes", href: "/shoes" },
            { label: "Custom Shoes", href: "/shoes/custom" },
            { label: "Jordan Shoes", href: "/shoes/jordan" },
            { label: "Running Shoes", href: "/shoes/running" },
        ],
    },
    {
        label: "Clothing",
        items: [
            { label: "All Clothing", href: "/clothing" },
            { label: "Modest Wear", href: "/clothing/modest-wear" },
            { label: "Hoodies & Pullovers", href: "/clothing/hoodies" },
            { label: "Shirts & Tops", href: "/clothing/tops" },
        ],
    },
    {
        label: "Kids'",
        items: [
            { label: "Infant & Toddler Shoes", href: "/kids/infant-toddler" },
            { label: "Kids' Shoes", href: "/kids/shoes" },
            { label: "Kids' Jordan Shoes", href: "/kids/jordan" },
            { label: "Kids' Basketball Shoes", href: "/kids/basketball" },
        ],
    },
];

const DEFAULT_SOCIALS: SocialItem[] = [
    { label: "X", href: "#", iconSrc: "/x.svg" },
    { label: "Facebook", href: "#", iconSrc: "/facebook.svg" },
    { label: "Instagram", href: "#", iconSrc: "/instagram.svg" },
];

export default function Footer({
                                   logoSrc = "/logo.svg",
                                   logoAlt = "Brand",
                                   groups = DEFAULT_GROUPS,
                                   socials = DEFAULT_SOCIALS,
                                   className = "",
                                   copyrightName = "Your Store",
                                   year = new Date().getFullYear(),
                               }: FooterProps) {
    return (
        <footer className={["bg-black text-white", className].join(" ")}>
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-8">
                {/* Top section */}
                <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                    {/* Left: Logo */}
                    <div className="flex items-center gap-3">
                        <Link href="/" aria-label="Go to home" className="inline-flex items-center">
                            <Image src={logoSrc} alt={logoAlt} width={56} height={28} className="h-7 w-auto" />
                        </Link>
                    </div>

                    {/* Center: Groups */}
                    <div className="grid flex-1 grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
                        {groups.map((group) => (
                            <div key={group.label}>
                                <p className="text-sm font-semibold tracking-tight text-white">{group.label}</p>
                                <ul className="mt-6 space-y-4">
                                    {group.items.map((item) => (
                                        <li key={item.label}>
                                            <Link
                                                href={item.href}
                                                className="text-sm font-medium text-white/40 transition-colors hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Right: Social icons */}
                    <div className="flex items-start justify-start gap-3 lg:justify-end">
                        {socials.map((s) => (
                            <Link
                                key={s.label}
                                href={s.href}
                                aria-label={s.label}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                            >
                                <Image src={s.iconSrc} alt="" width={18} height={18} className="h-4.5 w-4.5" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* NEW: Nike-like bottom bar (responsive) */}
                <div className="mt-12 border-t border-white/10 pt-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        {/* Left: location + copyright */}
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                            <div className="flex items-center gap-2 text-sm font-medium text-white/70">
                                <Image
                                    src="/location.svg"
                                    alt=""
                                    width={16}
                                    height={16}
                                    className="h-4 w-4 opacity-90"
                                />
                                <span>Croatia</span>
                            </div>

                            <p className="text-xs font-medium text-white/40">
                                © {year} {copyrightName}. All rights reserved.
                            </p>
                        </div>

                        {/* Right: legal links */}
                        <nav aria-label="Footer legal" className="flex flex-wrap gap-x-6 gap-y-2">
                            <Link
                                href="#"
                                className="text-xs font-medium text-white/50 transition-colors hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                            >
                                Guides
                            </Link>
                            <Link
                                href="#"
                                className="text-xs font-medium text-white/50 transition-colors hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                            >
                                Terms of Sale
                            </Link>
                            <Link
                                href="#"
                                className="text-xs font-medium text-white/50 transition-colors hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                            >
                                Terms of Use
                            </Link>
                            <Link
                                href="#"
                                className="text-xs font-medium text-white/50 transition-colors hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                            >
                                Nike Privacy Policy
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}
