import React from 'react'
import {ChevronDown, SlidersHorizontal} from "lucide-react";

interface HeaderProps {
    category: string;
}

const ProductListHeader = ({category}:HeaderProps) => {

    const title = (category?.charAt(0).toUpperCase()+category?.slice(1) || "New")+" (500)";

    return (
        <>
            <section className="w-full">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        {/* title */}
                        <h1 className="text-lg font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-xl">
                            {title}
                        </h1>

                        {/* actions */}
                        <div className="flex items-center justify-between gap-4 sm:justify-end">
                            {/* hide filters */}
                            <button
                                type="button"
                                className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--foreground))] hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
                                aria-label="Hide filters"
                            >
                                Hide Filters
                                <SlidersHorizontal className="h-4 w-4" />
                            </button>

                            {/* sort by dropdown trigger (UI only) */}
                            <button
                                type="button"
                                className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--foreground))] hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
                                aria-label="Sort by"
                            >
                                Sort By
                                <ChevronDown className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ProductListHeader;
