"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathTranslation } from "../../LocaleProvider";

export default function PlatformsSection() {
  const t = usePathTranslation("home.homePlatforms");

  const platforms = [

    {
      title: t("items.two.title"),
      description: t("items.two.description"),
     "icon": "/home/gtcfx.svg",
      link: t("items.two.link"),
    },
   
    {
      title: t("items.four.title"),
      description: t("items.four.description"),
      icon: "/home/mt4-platform.webp",
      link: "https://download.terminal.free/cdn/web/gtc.global.sa/mt4/gtcglobalsa4setup.exe",
    },
    {
      title: t("items.five.title"),
      description: t("items.five.description"),
      icon: "/home/mt5-platform.webp",
      link: "https://download.terminal.free/cdn/web/gtc.global.trade/mt5/gtcglobaltrade5setup.exe",
    },
  ];

  return (
    <section className="border border-gray-300 bg-gray-100 py-10 md:py-16">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="HeadingH2">
            {t("heading.beforeHighlight")}
            <br className="hidden md:block" />
            <span className="text-secondary">{t("heading.highlight")}</span>
          </h2>

          <p className="Text">{t("description")}</p>
        </div>

        {/* Center Image */}
        <div className="my-5 flex justify-center">
          <div className="relative aspect-[2/1] w-full max-w-[1000px]">
            <Image
              src={t("image.src")}
              alt={t("image.alt")}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Platforms */}
        <div className="mt-10 overflow-hidden rounded-[8px] bg-[#fff] md:bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 md:bg-transparent md:px-0 md:py-0">
            {platforms.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 px-5 py-6 text-center transition hover:no-underline md:flex-col md:items-center md:justify-center md:px-0 md:py-0 ${
                  index !== platforms.length - 1
                    ? "border-b border-[#dddddd] md:border-b-0"
                    : ""
                }`}
              >
                <div className="relative w-full h-12 shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h6 className="text-[16px] font-semibold leading-tight text-primary">
                    {item.title}
                  </h6>
                  <p className="mt-2 text-[14px] leading-[1.4] text-[#4B5563] text-center">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}