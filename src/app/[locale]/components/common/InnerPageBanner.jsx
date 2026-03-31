"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function formatLabel(slug) {
  if (!slug) return "";

  const customLabels = {
    "about-us": "About Us",
    "global-presence": "Global Presence",
    "contact-us": "Contact Us",
    "prime-tech": "Prime & Tech",
    "why-gtcfx": "Why GTCFX",
    faq: "FAQ",
    blogs: "Blogs",
  };

  if (customLabels[slug]) return customLabels[slug];

  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function InnerPageBanner({
  title,
  description = "",
  backgroundImage = "/images/banner/default-banner.webp",
  mobileBackgroundImage = "/images/banner/default-banner-mobile.webp",
  height = "min-h-[0px] md:min-h-[500px] lg:min-h-[540px]",
  overlay = true,
  align = "left",
  className = "",
}) {
  const pathname = usePathname();

  const localeList = ["en", "ar", "zh"];
  const pathParts = pathname.split("/").filter(Boolean);

  const currentLocale = localeList.includes(pathParts[0]) ? pathParts[0] : "";
  const segments = pathParts.filter((segment) => !localeList.includes(segment));

  const homeHref = currentLocale ? `/${currentLocale}` : "/";

  const breadcrumbItems = [
    { label: "Home", href: homeHref },
    ...segments.map((segment, index) => {
      const href =
        (currentLocale ? `/${currentLocale}` : "") +
        "/" +
        segments.slice(0, index + 1).join("/");

      return {
        label: formatLabel(segment),
        href,
      };
    }),
  ];

  const pageTitle =
    title || formatLabel(segments[segments.length - 1]) || "Page Title";

  const overlayGradient = overlay
    ? ""
    : "";

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className={`relative w-full ${height}`}>
        {/* Mobile Background */}
        <div
          className="absolute inset-0 block bg-cover bg-center bg-no-repeat md:hidden"
          style={{
            backgroundImage: overlayGradient
              ? `${overlayGradient}, url('${mobileBackgroundImage}')`
              : `url('${mobileBackgroundImage}')`,
          }}
        />

        {/* Desktop Background */}
        <div
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
          style={{
            backgroundImage: overlayGradient
              ? `${overlayGradient}, url('${backgroundImage}')`
              : `url('${backgroundImage}')`,
          }}
        />



        {/* Content */}
        <div className="relative z-10 container">
          <div className="flex min-h-[500px] items-start pt-24 md:min-h-[400px] md:pt-28 lg:min-h-[450px] lg:pt-32">
            <div
              className={`w-full max-w-[720px] ${
                align === "center" ? "mx-auto text-center" : "text-left"
              }`}
            >
              {/* Breadcrumb */}
              <div className="mb-5 flex flex-wrap items-center gap-2 pt-16 text-sm font-semibold text-white md:text-base">
                {breadcrumbItems.map((item, index) => {
                  const isLast = index === breadcrumbItems.length - 1;

                  return (
                    <div
                      key={`${item.label}-${index}`}
                      className="flex items-center gap-2"
                    >
                      {!isLast ? (
                        <Link
                          href={item.href}
                          className="text-white transition hover:text-[#d7b082]"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="text-white/95">{item.label}</span>
                      )}

                      {!isLast && <span className="text-secondary">→</span>}
                    </div>
                  );
                })}
              </div>

              {/* Title */}
              <h2 className="HeadingH2 text-secondary">{pageTitle}</h2>

              {/* Description */}
              {description && (
                <p className="mt-5 max-w-[560px] text-base leading-7 text-white/95 md:text-lg md:leading-8">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}