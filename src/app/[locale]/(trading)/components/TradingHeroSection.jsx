"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { locales } from "@/i18n/config";
import { LIVE_ACCOUNT_URL } from "../productConfig";

function formatLabel(slug) {
  if (!slug) return "";

  const customLabels = {
    "about-us": "About Us",
    "global-presence": "Global Presence",
    "contact-us": "Contact Us",
    "prime-tech": "Prime & Tech",
    "why-gtcfx": "Why GTCFX",
    "why-gtc-group": "Why GTC Group",
    faq: "FAQ",
    "glossary-faqs": "Glossary & FAQs",
    blogs: "Blogs",
    "cfd-trading": "Forex CFDs",
    metals: "Metals CFDs",
    "energy-cfds": "Energy CFDs",
  };

  if (customLabels[slug]) return customLabels[slug];

  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function TradingHeroSection({
  title,
  description = "",
  bottomItems,
  backgroundImage = "/images/banner/default-banner.webp",
  mobileBackgroundImage = "/images/banner/default-banner-mobile.webp",
  height = "min-h-[0px] md:min-h-[500px] lg:min-h-[540px]",
  overlay = true,
  align = "left",
  className = " ",
}) {
  const pathname = usePathname();

  const pathParts = pathname.split("/").filter(Boolean);

  const segments = pathParts.filter((segment) => !locales.includes(segment));

  const pageTitle =
    title || formatLabel(segments[segments.length - 1]) || "Page Title";
  return (
    <section className={` relative overflow-hidden bg-white ${className}`}>
      <div className="">
      <div
          className="pointer-events-none absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/map.svg')",
            backgroundSize: "1100px auto",
          }}
        />

        <div className="container relative z-10 py-14 md:py-16 min-h-[350px] mt-28 md:min-h-[400px] md:mt-32 lg:min-h-[450px] lg:mt-40">
            {/* World map background */}
  
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-[28px] font-extrabold leading-tight text-[#0B132B] md:text-[44px]">
              {pageTitle}
            </h1>

            {description && (
              <p className="mx-auto mt-3 max-w-[560px] text-[14px] leading-6 text-[#7F8498] md:text-[16px] md:leading-7">
                {description}
              </p>
            )}

            <div className="mt-6 flex justify-center">
              <Link
                href={LIVE_ACCOUNT_URL}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-b from-[#263788] to-[#101638] px-9 text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(38,55,136,0.22)] transition hover:brightness-110"
              >
                Open Live Account
              </Link>
            </div>
          </div>

          {/* Bottom visuals: metals row or product image */}
            <div className="mt-10  flex flex-wrap justify-center gap-3 md:mt-12 md:gap-3">
              {bottomItems && bottomItems.map((m) => (
                <div key={m.label} className="flex flex-col items-center">
                  <div className="mb-3 text-[10px] font-semibold tracking-[0.18em] text-[#6B7280]">
                    {m.label}
                  </div>
                  <div className="relative h-[70px] w-[110px] md:h-[100px] md:w-[170px]">
                    <Image
                      src={m.src}
                      alt={m.label}
                      fill
                      sizes="130px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}