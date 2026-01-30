import Image from "next/image";
import Link from "next/link";

export interface CardProps {
    title: string;
    subtitle?: string; // e.g. "Men's Shoes"
    meta?: string; // e.g. "6 Colour"
    price?: number | string; // e.g. 98.3 or "$98.30"
    currency?: string; // used when price is number
    imageSrc: string; // from /public e.g. "/products/air-force-1.png"
    imageAlt?: string;
    badge?: string; // e.g. "Best Seller"
    href?: string; // optional clickable card
    className?: string;
    priorityImage?: boolean;
}

function formatPrice(price: number | string | undefined, currency: string) {
    if (price === undefined) return "";
    if (typeof price === "string") return price;

    try {
        return new Intl.NumberFormat(undefined, {
            style: "currency",
            currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(price);
    } catch {
        // fallback if currency code is invalid
        return `$${price.toFixed(2)}`;
    }
}

/**
 * Reusable product card (Nike-style):
 * - Large product image area
 * - Optional top-left pill badge
 * - Bottom dark info panel with left details + right price
 */
export default function Card({
                                 title,
                                 subtitle = "Men's Shoes",
                                 meta = "6 Colour",
                                 price = 98.3,
                                 currency = "USD",
                                 imageSrc,
                                 imageAlt = title,
                                 badge = "Best Seller",
                                 href,
                                 className = "",
                                 priorityImage = false,
                             }: CardProps) {
    const Wrapper = href ? Link : ("div" as any);
    const wrapperProps = href ? { href, "aria-label": title } : {};

    const priceText = formatPrice(price, currency);

    return (
        <Wrapper
            {...wrapperProps}
            className={[
                "group relative block w-full overflow-hidden rounded-3xl",
                "bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))]",
                "ring-1 ring-[hsl(var(--border))] transition-shadow hover:shadow-lg",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]",
                className,
            ].join(" ")}
        >
            {/* Badge */}
            {badge && (
                <div className="absolute left-4 top-4 z-10">
          <span className="inline-flex items-center rounded-full bg-white/90 px-6 py-2 text-sm font-semibold text-orange-600 shadow-sm">
            {badge}
          </span>
                </div>
            )}

            {/* Image area */}
            <div className="relative aspect-[3/4] w-full bg-[hsl(var(--background))]">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority={priorityImage}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-8 transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
            </div>

            {/* Bottom info panel */}
            <div className="bg-black px-6 py-7">
                <div className="flex items-end justify-between gap-6">
                    <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-white/25">{title}</p>
                        <p className="mt-3 text-2xl font-semibold tracking-tight text-white/30">{subtitle}</p>
                        <p className="mt-2 text-lg font-semibold text-white/25">{meta}</p>
                    </div>

                    {priceText && (
                        <p className="shrink-0 text-lg font-semibold text-white/25">{priceText}</p>
                    )}
                </div>
            </div>
        </Wrapper>
    );
}
