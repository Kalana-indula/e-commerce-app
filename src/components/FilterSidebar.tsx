"use client";

import React, {useState} from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

type Option = { label: string; value: string };

type SectionProps = {
    title: string;
    defaultOpen?: boolean;
    options: Option[];
};

function FilterSection({ title, defaultOpen = true, options }: SectionProps) {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div className="border-t border-black/10 py-4">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={open}
            >
                <span className="text-sm font-semibold text-[hsl(var(--foreground))]">{title}</span>
                {open ? (
                    <ChevronUp className="h-4 w-4 text-black/60" />
                ) : (
                    <ChevronDown className="h-4 w-4 text-black/60" />
                )}
            </button>

            {open && (
                <div className="mt-3 space-y-3">
                    {options.map((opt) => (
                        <label key={opt.value} className="flex items-center gap-3 text-sm text-black/80">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-black/20 accent-black"
                            />
                            <span>{opt.label}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function FilterSidebar() {
    return (
        <aside className="w-full md:w-[220px] lg:w-[240px]">
            {/* Desktop sidebar */}
            <div className="hidden md:block">
                {/* top quick links (like screenshot) */}
                <nav aria-label="Filter categories" className="space-y-3 pb-4">
                    {["Low Top", "High Top", "Skateboarding", "Nike By You"].map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="block text-sm font-medium text-black/80 hover:text-black"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                <FilterSection
                    title="Gender"
                    options={[
                        { label: "Men", value: "men" },
                        { label: "Women", value: "women" },
                        { label: "Unisex", value: "unisex" },
                    ]}
                />

                <FilterSection
                    title="Kids"
                    options={[
                        { label: "Boys", value: "boys" },
                        { label: "Girls", value: "girls" },
                    ]}
                />

                <FilterSection
                    title="Shop By Price"
                    options={[
                        { label: "$25 - $50", value: "25-50" },
                        { label: "$50 - $100", value: "50-100" },
                        { label: "$100 - $150", value: "100-150" },
                        { label: "Over $150", value: "150+" },
                    ]}
                />

                <FilterSection
                    title="Shoe Height"
                    defaultOpen={false}
                    options={[
                        { label: "Low Top", value: "low" },
                        { label: "Mid Top", value: "mid" },
                        { label: "High Top", value: "high" },
                    ]}
                />

                <FilterSection
                    title="Sports"
                    options={[
                        { label: "Lifestyle", value: "lifestyle" },
                        { label: "Skateboarding", value: "skateboarding" },
                        { label: "Dance", value: "dance" },
                    ]}
                />
            </div>

            {/* Mobile: small horizontal strip (optional but responsive-friendly) */}
            <div className="md:hidden">
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {["Low Top", "High Top", "Skateboarding", "Nike By You", "Men", "Women", "Unisex"].map(
                        (chip) => (
                            <button
                                key={chip}
                                type="button"
                                className="whitespace-nowrap rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/80"
                            >
                                {chip}
                            </button>
                        )
                    )}
                </div>
            </div>
        </aside>
    );
}
