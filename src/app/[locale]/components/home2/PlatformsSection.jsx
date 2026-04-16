"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathTranslation } from "../../LocaleProvider";

export default function PlatformsSection() {
  const t = usePathTranslation("home.homePlatforms");

  const platforms = [
    {
      title: t("items.one.title"),
      description: t("items.one.description"),
      icon: t("items.one.icon"),
      link: t("items.one.link"),
    },
    {
      title: t("items.two.title"),
      description: t("items.two.description"),
      icon: t("items.two.icon"),
      link: t("items.two.link"),
    },
    {
      title: t("items.three.title"),
      description: t("items.three.description"),
      icon: t("items.three.icon"),
      link: t("items.three.link"),
    },
    {
      title: t("items.four.title"),
      description: t("items.four.description"),
      icon: t("items.four.icon"),
      link: t("items.four.link"),
    },
    {
      title: t("items.five.title"),
      description: t("items.five.description"),
      icon: t("items.five.icon"),
      link: t("items.five.link"),
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
          <div className="grid grid-cols-1 md:grid-cols-5 md:gap-6 md:bg-transparent md:px-0 md:py-0">
            {platforms.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 px-5 py-6 text-left transition hover:no-underline md:flex-col md:items-start md:justify-start md:px-0 md:py-0 ${
                  index !== platforms.length - 1
                    ? "border-b border-[#dddddd] md:border-b-0"
                    : ""
                }`}
              >
                <div className="relative h-[48px] w-[48px] shrink-0 md:mb-3 md:h-[50px] md:w-[50px]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h4 className="text-[16px] font-semibold leading-tight text-primary">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-[14px] leading-[1.4] text-[#4B5563]">
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