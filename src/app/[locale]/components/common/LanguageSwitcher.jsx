"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useMemo, useState } from "react";

const SHORT_LANGUAGES = [
  { code: "en", label: "EN", flag: "/flags/gb.svg", alt: "English" },
  { code: "ar", label: "AR", flag: "/flags/ae.svg", alt: "Arabic" },
  { code: "zh", label: "ZH", flag: "/flags/HK.svg", alt: "Chinese" },
];

const DRAWER_LANGUAGES = [
  { code: "en", name: "English", sub: "Global", flagPath: "/flags/gb.svg", flagAlt: "English" },
  { code: "de", name: "Deutsch", sub: "German", flag: "DE" },
  { code: "ms", name: "Bahasa Melayu", sub: "Malaysian", flagPath: "/flags/MY.svg", flagAlt: "Malay" },
  { code: "zh", name: "中文简体", sub: "Chinese", flagPath: "/flags/HK.svg", flagAlt: "Chinese" },
  { code: "th", name: "ไทย", sub: "Thai", flag: "TH" },
  { code: "nl", name: "Dutch", sub: "Dutch", flag: "NL" },
  { code: "lt", name: "Lietuvių", sub: "Lithuanian", flag: "LT" },
  { code: "no", name: "Norsk", sub: "Norwegian", flag: "NO" },
  { code: "ru", name: "Русский", sub: "Russian", flag: "RU" },

  { code: "es", name: "Español", sub: "Spanish", flag: "ES" },
  { code: "ar", name: "العربية", sub: "Arabic", flagPath: "/flags/ae.svg", flagAlt: "Arabic" },
  { code: "ko", name: "한국어", sub: "Korean", flagPath: "/flags/KR.svg", flagAlt: "Korean" },
  { code: "hu", name: "Magyar", sub: "Hungarian", flag: "HU" },
  { code: "hi", name: "हिन्दी", sub: "Hindi", flagPath: "/flags/IN.svg", flagAlt: "Hindi" },
  { code: "sv", name: "Svenska", sub: "Swedish", flag: "SV" },
  { code: "da", name: "Dansk", sub: "Danish", flag: "DA" },
  { code: "ro", name: "Română", sub: "Romanian", flag: "RO" },

  { code: "pt", name: "Português", sub: "Portuguese", flag: "PT" },
  { code: "it", name: "Italiano", sub: "Italian", flag: "IT" },
  { code: "fr", name: "Français", sub: "French", flag: "FR" },
  { code: "id", name: "Bahasa Indonesia", sub: "Indonesian", flagPath: "/flags/ID.svg", flagAlt: "Indonesian" },
  { code: "cs", name: "Čeština", sub: "Czech", flag: "CS" },
  { code: "vi", name: "Tiếng Việt", sub: "Vietnamese", flagPath: "/flags/VN.svg", flagAlt: "Vietnamese" },
  { code: "uk", name: "Українська", sub: "Ukrainian", flag: "UK" },
  { code: "fi", name: "Suomi", sub: "Finnish", flag: "FI" },
  { code: "et", name: "Eesti", sub: "Estonian", flag: "ET" },
  { code: "tr", name: "Türkçe", sub: "Turkish", flag: "TR" },
];

export function LanguageDrawerPanel({
  locale = "en",
  variant = "desktop", // desktop | mobile | mobile-inline | mobile-dropdown
  onClose,
  hideHeader = false,
  showMobileClose = false,
  compactMobile = true,
}) {
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

  const isMobile = variant === "mobile";
  const isInline = variant === "mobile-inline";
  const isDropdown = variant === "mobile-dropdown";
  const isMobileLike = isMobile || isInline || isDropdown;

  const content = (
    <div
      className={`${
        isInline
          ? ""
          : "rounded-b-[16px] bg-[#f4f5f7] px-6 pb-8 pt-6 lg:px-10 lg:pb-10 lg:pt-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
      }`}
    >
      {!hideHeader && (
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[18px] font-semibold text-dark">Select language</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22] text-sm text-white">
              →
            </span>
          </div>
          {isMobile && showMobileClose ? (
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#d9d9d9] bg-white text-[#111827] hover:bg-[#f7f7f7]"
              aria-label="Close language drawer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          ) : (
            <div className="text-[13px] text-[#6b7280]">
              Current:{" "}
              <span className="font-medium text-dark">
                {locale?.toUpperCase?.() || "EN"}
              </span>
            </div>
          )}
        </div>
      )}

      <div
        className={`${
          isInline
            ? "max-h-[320px]"
            : isMobile
              ? "max-h-[60vh]"
              : "max-h-[70vh]"
        } overflow-auto p-1`}
      >
        <div
          className={`grid ${
            isMobileLike && compactMobile ? "grid-cols-3 sm:grid-cols-6" : isMobile || isInline ? "grid-cols-2" : "grid-cols-4"
          } gap-x-4 gap-y-2`}
        >
          {DRAWER_LANGUAGES.map((lang) => {
            const isActive = lang.code === locale;
            const codeLabel = (lang.code || "").toUpperCase();
            return (
              <Link
                key={lang.code}
                href={getLocalizedPath(lang.code)}
                onClick={() => onClose?.()}
                className={
                  isMobileLike && compactMobile
                    ? `flex items-center justify-start gap-2 md:rounded-[14px] rounded-[10px] border px-2 py-3 transition-colors duration-200 ${
                        isActive
                          ? "border-primary/30 bg-primary/5"
                          : "border-[#ececec] bg-white hover:bg-[#f7f7f7]"
                      }`
                    : `flex items-center gap-3 md:rounded-[12px] rounded-[10px] px-3 py-2 transition-colors duration-200 ${
                        isActive ? "bg-white ring-1 ring-primary/20" : "hover:bg-white/70"
                      }`
                }
              >
                <span className="inline-flex md:h-8 h-6 md:w-8 w-6 shrink-0 items-center justify-center">
                  {lang.flagPath ? (
                    <Image
                      src={lang.flagPath}
                      alt={lang.flagAlt || lang.name}
                      width={18}
                      height={18}
                      className="md:h-8 h-6 md:w-8 w-6 rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-[12px] font-semibold text-[#111827]">
                      {lang.flag || codeLabel}
                    </span>
                  )}
                </span>
                {isMobileLike && compactMobile ? (
                  <span className="text-[12px] font-semibold text-[#111827] leading-none">
                    {codeLabel}
                  </span>
                ) : (
                  <span className="min-w-0">
                    <span className="block truncate text-[14px] font-medium text-dark">
                      {lang.name}
                    </span>
                    <span className="block truncate text-[12px] text-[#6b7280]">
                      {lang.sub}
                    </span>
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );

  if (!isMobile && !isInline && !isDropdown) {
    return (
      <div className="absolute left-0 right-0 top-full z-40 hidden lg:block">
        {content}
      </div>
    );
  }

  if (isInline) {
    return <div className="md:mt-4">{content}</div>;
  }

  if (isDropdown) {
    return (
      <div className="absolute left-0 right-0 top-full z-50 mt-2 lg:hidden">
        {content}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute left-0 right-0 top-[72px] max-h-[calc(100vh-72px)] overflow-auto">
        {content}
      </div>
    </div>
  );
}

export default function LanguageSwitcher({
  locale = "en",
  mobile = false,
  disableMenu = false,
  mobileIcon = "chevron", // chevron | hamburger
  mobilePanel = "overlay", // overlay | dropdown | none
  onMobileClick,
}) {
  const pathname = usePathname();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

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
    SHORT_LANGUAGES.find((lang) => lang.code === locale) || SHORT_LANGUAGES[0];

  return (
    <div className="relative group">
      <button
        type="button"
        onClick={() => {
          if (mobile) {
            if (typeof onMobileClick === "function") return onMobileClick();
            if (mobilePanel !== "none") setMobileDrawerOpen((v) => !v);
          }
        }}
        className={`inline-flex items-center justify-center gap-2 rounded-[10px] transition-colors duration-200 ${
          mobile
            ? "h-10 px-3 bg-white text-[#111827] border border-[#d9d9d9] hover:bg-[#f7f7f7]"
            : "h-10 px-3 bg-[#2f2f2f] text-white hover:opacity-90"
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

        {mobile ? (
          mobileIcon === "hamburger" ? (
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
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          ) : (
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
          )
        ) : (
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
        )}
      </button>

      {!mobile && !disableMenu && (
        <div className="invisible absolute right-0 top-full z-50 mt-2 min-w-[140px] rounded-[12px] border border-[#e8e8e8] bg-white p-2 opacity-0 shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
          {SHORT_LANGUAGES.map((lang) => {
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
      )}

      {mobile && mobileDrawerOpen && (
        <LanguageDrawerPanel
          locale={locale}
          variant={mobilePanel === "dropdown" ? "mobile-dropdown" : "mobile"}
          onClose={() => setMobileDrawerOpen(false)}
        />
      )}
    </div>
  );
}