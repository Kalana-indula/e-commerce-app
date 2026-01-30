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
        return `$${price.toFixed(2)}`;
    }
}

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

    const badgeTone =
        badge?.toLowerCase().includes("off") || badge?.toLowerCase().includes("extra")
            ? "text-green"
            : "text-red";

    return (
        <Wrapper
            {...wrapperProps}
            className={[
                "group relative block overflow-hidden rounded-2xl",
                "bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]",
                // fixed size (with mobile-safe constraint)
                "w-[432px] h-[520px] max-w-full",
                className,
            ].join(" ")}
        >
            {/* Badge */}
            {badge && (
                <div className="absolute left-6 top-6 z-10">
          <span
              className={[
                  "inline-flex items-center rounded-full bg-white/90 px-5 py-2 text-sm font-semibold",
                  "shadow-sm ring-1 ring-black/5 backdrop-blur",
                  badgeTone,
              ].join(" ")}
          >
            {badge}
          </span>
                </div>
            )}

            {/* Image area */}
            <div className="relative w-full h-[380px] bg-light-200">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority={priorityImage}
                    sizes="(max-width: 768px) 100vw, 432px"
                    className="object-contain p-10 transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
            </div>

            {/* Bottom info */}
            <div className="h-[140px] bg-white px-6 py-5">
                <div className="flex items-start justify-between gap-4">
                    <p className="min-w-0 truncate text-sm font-semibold text-black">{title}</p>
                    {priceText && <p className="shrink-0 text-sm font-semibold text-black">{priceText}</p>}
                </div>

                <p className="mt-2 text-sm font-medium text-black/60">{subtitle}</p>
                <p className="mt-1 text-sm font-medium text-black/60">{meta}</p>
            </div>
        </Wrapper>
    );
}
