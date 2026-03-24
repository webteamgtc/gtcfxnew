"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const languages = [
  {
    code: "en",
    label: "EN",
    flag: "/flags/gb.svg",
    alt: "English",
  },
  {
    code: "ar",
    label: "AR",
    flag: "/flags/ae.svg",
    alt: "Arabic",
  },
  {
    code: "zh",
    label: "ZH",
    flag: "/flags/zh-hans.webp",
    alt: "Chinese",
  },
];

export default function LanguageSwitcher({ locale = "en", mobile = false }) {
  const pathname = usePathname();

  const getLocalizedPath = (targetLocale) => {
    if (!pathname) return `/${targetLocale}`;

    const segments = pathname.split("/").filter(Boolean);

    if (segments.length > 0) {
      segments[0] = targetLocale;
      return `/${segments.join("/")}`;
    }

    return `/${targetLocale}`;
  };

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  return (
    <div className="relative group">
      <button
        type="button"
        className={`inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#2f2f2f] text-white transition-opacity duration-200 hover:opacity-90 ${
          mobile ? "h-11 px-5" : "h-10 px-3"
        }`}
        aria-label="Select language"
      >
        <Image
          src={currentLanguage.flag}
          alt={currentLanguage.alt}
          width={16}
          height={16}
          className="h-4 w-4 rounded-full object-cover"
        />
        <span className="text-[14px] font-medium leading-none">
          {currentLanguage.label}
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`invisible absolute right-0 top-full z-50 mt-2 min-w-[140px] rounded-[12px] border border-[#e8e8e8] bg-white p-2 opacity-0 shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-200 group-hover:visible group-hover:opacity-100 ${
          mobile ? "hidden" : "block"
        }`}
      >
        {languages.map((lang) => {
          const isActive = lang.code === locale;

          return (
            <Link
              key={lang.code}
              href={getLocalizedPath(lang.code)}
              className={`flex items-center gap-3 rounded-[8px] px-3 py-2 text-[14px] transition-colors duration-200 ${
                isActive
                  ? "bg-[#f3f6fb] font-medium text-primary"
                  : "text-[#2f2f2f] hover:bg-[#f7f7f7]"
              }`}
            >
              <Image
                src={lang.flag}
                alt={lang.alt}
                width={18}
                height={18}
                className="h-[18px] w-[18px] rounded-full object-cover"
              />
              <span>{lang.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}