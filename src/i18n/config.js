/** URL segment + routing locale codes */
export const locales = [
  "en",
  "ar",
  "zh",
  "zh-tw",
  "ms",
  "tr",
  "ur",
  "hi",
  "id",
  "fr",
  "es",
  "pt",
  "vi",
  "fa",
  "tl",
  "th",
  "ru",
  "ko",
  "ps",
  "it",
];

export const defaultLocale = "en";

/**
 * Match Accept-Language to a configured locale (longer codes like zh-tw before zh).
 */
export function resolveLocaleFromAcceptLanguage(acceptHeader) {
  if (!acceptHeader || typeof acceptHeader !== "string") return defaultLocale;

  const tags = acceptHeader
    .split(",")
    .map((s) => s.split(";")[0].trim().toLowerCase().replace(/_/g, "-"));

  const byLength = [...locales].sort((a, b) => b.length - a.length);

  for (const tag of tags) {
    const exact = byLength.find((lc) => lc.toLowerCase() === tag);
    if (exact) return exact;
    for (const lc of byLength) {
      const l = lc.toLowerCase();
      if (tag === l || tag.startsWith(`${l}-`)) return lc;
    }
  }

  return defaultLocale;
}

/** BCP 47 hreflang values for <link rel="alternate"> */
export const localeHreflang = {
  en: "en",
  ar: "ar",
  zh: "zh-Hans",
  "zh-tw": "zh-TW",
  ms: "ms",
  tr: "tr",
  ur: "ur",
  hi: "hi",
  id: "id",
  fr: "fr",
  es: "es",
  pt: "pt",
  vi: "vi",
  fa: "fa",
  tl: "tl",
  th: "th",
  ru: "ru",
  ko: "ko",
  ps: "ps",
  it: "it",
};

/** Open Graph locale strings (underscore form) */
export const localeOpenGraph = {
  en: "en_US",
  ar: "ar_AE",
  zh: "zh_CN",
  "zh-tw": "zh_TW",
  ms: "ms_MY",
  tr: "tr_TR",
  ur: "ur_PK",
  hi: "hi_IN",
  id: "id_ID",
  fr: "fr_FR",
  es: "es_ES",
  pt: "pt_PT",
  vi: "vi_VN",
  fa: "fa_IR",
  tl: "fil_PH",
  th: "th_TH",
  ru: "ru_RU",
  ko: "ko_KR",
  ps: "ps_AF",
  it: "it_IT",
};

export const localeNames = {
  en: "English",
  ar: "العربية",
  zh: "中文",
  "zh-tw": "繁體中文",
  ms: "Bahasa Melayu",
  tr: "Türkçe",
  ur: "اردو",
  hi: "हिन्दी",
  id: "Bahasa Indonesia",
  fr: "Français",
  es: "Español",
  pt: "Português",
  vi: "Tiếng Việt",
  fa: "فارسی",
  tl: "Filipino",
  th: "ไทย",
  ru: "Русский",
  ko: "한국어",
  ps: "پښتو",
  it: "Italiano",
};

export const localeDir = {
  en: "ltr",
  ar: "rtl",
  zh: "ltr",
  "zh-tw": "ltr",
  ms: "ltr",
  tr: "ltr",
  ur: "rtl",
  hi: "ltr",
  id: "ltr",
  fr: "ltr",
  es: "ltr",
  pt: "ltr",
  vi: "ltr",
  fa: "rtl",
  tl: "ltr",
  th: "ltr",
  ru: "ltr",
  ko: "ltr",
  ps: "rtl",
  it: "ltr",
};
