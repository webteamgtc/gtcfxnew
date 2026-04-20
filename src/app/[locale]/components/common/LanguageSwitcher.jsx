"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useMemo, useState } from "react";
import { locales, defaultLocale } from "@/i18n/config";
import { usePathTranslation } from "@/app/[locale]/LocaleProvider";

/** Match middleware: default locale has no /en prefix in the browser URL. */
function getLocalizedPath(pathname, targetLocale) {
  if (!pathname) pathname = "/";
  const segments = pathname.split("/").filter(Boolean);

  if (
    segments.length > 0 &&
    locales.some((l) => l.toLowerCase() === segments[0].toLowerCase())
  ) {
    segments.shift();
  }

  const cleanPath = segments.length ? `/${segments.join("/")}` : "/";

  if (targetLocale === defaultLocale) {
    return cleanPath;
  }

  return cleanPath === "/"
    ? `/${targetLocale}`
    : `/${targetLocale}${cleanPath}`;
}

/** App locale → ISO 3166-1 alpha-2 for FlagCDN PNGs */
const FLAGCDN_COUNTRY = {
  en: "gb",
  ar: "ae",
  zh: "cn",
  "zh-tw": "tw",
  fr: "fr",
  es: "es",
  vi: "vn",
  hi: "in",
  it: "it",
  tr: "tr",
  id: "id",
  ml: "in",
  ms: "my",
  ps: "af",
  ru: "ru",
  ja: "jp",
  ko: "kr",
  fa: "ir",
  tl: "ph",
  pt: "pt",
  th: "th",
  ur: "pk",
};

export function flagCdnSrc(localeCode) {
  const key = String(localeCode || "en").toLowerCase();
  const iso = FLAGCDN_COUNTRY[key] || (key.length === 2 ? key : "gb");
  return `https://flagcdn.com/w320/${iso}.png`;
}

const LANGUAGE_CODES = [
  "en",
  "ar",
  "zh",
  "zh-tw",
  "es",
  "it",
  "fa",
  "tl",
  "fr",
  "vi",
  "hi",
  "ms",
  "tr",
  "id",
  "ps",
  "ru",
  "ja",
  "ko",
  "pt",
  "th",
  "ur",
];

const SHORT_LANGUAGE_CODES = ["en", "ar", "zh"];

function buildLanguages(t) {
  return LANGUAGE_CODES.map((code) => ({
    code,
    label: t(`languages.${code}.label`),
    name: t(`languages.${code}.label`),
    sub: t(`languages.${code}.sub`),
    flagAlt: t(`languages.${code}.label`),
  }));
}

export function LanguageDrawerPanel({
  locale = "en",
  variant = "desktop",
  onClose,
  hideHeader = false,
  showMobileClose = false,
  compactMobile = true,
}) {
  const pathname = usePathname();
  const t = usePathTranslation("common.languageSwitcher");

  const DRAWER_LANGUAGES = useMemo(() => buildLanguages(t), [t]);

  const isMobile = variant === "mobile";
  const isInline = variant === "mobile-inline";
  const isDropdown = variant === "mobile-dropdown";
  const isMobileLike = isMobile || isInline || isDropdown;

  const content = (
    <div
      className={`${
        isInline
          ? ""
          : "rounded-b-[16px] bg-[#f4f5f7] px-6 pb-8 pt-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)] lg:px-10 lg:pb-10 lg:pt-8"
      }`}
    >
      {!hideHeader && (
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[18px] font-semibold text-dark">
              {t("title")} 
            </span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22] text-sm text-white">
              →
            </span>
          </div>

          {isMobile && showMobileClose ? (
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#d9d9d9] bg-white text-[#111827] hover:bg-[#f7f7f7]"
              aria-label={t("closeLabel")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            </button>
          ) : (
            <div className="text-[13px] text-[#6b7280]">
              {t("currentLabel")}{" "}
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
            isMobileLike && compactMobile
              ? "grid-cols-3 sm:grid-cols-6"
              : isMobile || isInline
                ? "grid-cols-2"
                : "grid-cols-4"
          } gap-x-4 gap-y-2`}
        >
          {DRAWER_LANGUAGES.map((lang) => {
            const isActive = lang.code === locale;
            const codeLabel = (lang.code || "").toUpperCase();

            return (
              <Link
                key={lang.code}
                href={getLocalizedPath(pathname, lang.code)}
                onClick={() => onClose?.()}
                className={
                  isMobileLike && compactMobile
                    ? `flex items-center justify-start gap-2 rounded-[10px] border px-2 py-3 transition-colors duration-200 md:rounded-[14px] ${
                        isActive
                          ? "border-primary/30 bg-primary/5"
                          : "border-[#ececec] bg-white hover:bg-[#f7f7f7]"
                      }`
                    : `flex items-center gap-3 rounded-[10px] px-3 py-2 transition-colors duration-200 md:rounded-[12px] ${
                        isActive
                          ? "bg-white ring-1 ring-primary/20"
                          : "hover:bg-white/70"
                      }`
                }
              >
                <span className="relative inline-block h-6 w-6 shrink-0 overflow-hidden rounded-xl md:h-7 md:w-7">
                  <Image
                    src={flagCdnSrc(lang.code)}
                    alt={lang.flagAlt}
                    fill
                    sizes="(max-width: 768px) 24px, 32px"
                    quality={92}
                    className="object-center"
                  />
                </span>

                {isMobileLike && compactMobile ? (
                  <span className="text-[12px] font-semibold leading-none text-[#111827]">
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
  mobileIcon = "chevron",
  mobilePanel = "overlay",
  onMobileClick,
}) {
  const pathname = usePathname();
  const t = usePathTranslation("common.languageSwitcher");
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const DRAWER_LANGUAGES = useMemo(() => buildLanguages(t), [t]);
  const SHORT_LANGUAGES = useMemo(
    () =>
      SHORT_LANGUAGE_CODES.map((code) =>
        DRAWER_LANGUAGES.find((lang) => lang.code === code)
      ).filter(Boolean),
    [DRAWER_LANGUAGES]
  );

  const currentLanguage =
    DRAWER_LANGUAGES.find((lang) => lang.code === locale) ||
    SHORT_LANGUAGES[0];

  return (
    <div className="group relative">
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
            ? "h-10 border border-[#d9d9d9] bg-white px-3 text-[#111827] hover:bg-[#f7f7f7]"
            : "h-8 bg-primary px-3 text-white hover:opacity-90 xl:h-10"
        }`}
        aria-label={t("title")}
      >
        <span className="relative h-4 w-4 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={flagCdnSrc(currentLanguage.code)}
            alt={currentLanguage.flagAlt}
            fill
            sizes="16px"
            quality={92}
            className="object-contain object-center"
          />
        </span>

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
                href={getLocalizedPath(pathname, lang.code)}
                className={`flex items-center gap-3 rounded-[8px] px-3 py-2 text-[14px] transition-colors duration-200 ${
                  isActive
                    ? "bg-[#f3f6fb] font-medium text-primary"
                    : "text-primary hover:bg-[#f7f7f7]"
                }`}
              >
                <span className="relative h-[18px] w-[18px] shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={flagCdnSrc(lang.code)}
                    alt={lang.flagAlt}
                    fill
                    sizes="18px"
                    quality={92}
                    className="object-contain object-center"
                  />
                </span>
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