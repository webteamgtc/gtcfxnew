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
  "tl",
  "th",
  "ru",
  "ps",
  "it",
];

export const defaultLocale = "en";

/**
 * Match Accept-Language to a configured locale (longer codes like zh-tw before zh).
 */
export function resolveLocaleFromAcceptLanguage(acceptHeader) {
  // Keep English as the default regardless of browser language.
  void acceptHeader;
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
  tl: "tl",
  th: "th",
  ru: "ru",
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
  tl: "fil_PH",
  th: "th_TH",
  ru: "ru_RU",
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
  tl: "Filipino",
  th: "ไทย",
  ru: "Русский",
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
  tl: "ltr",
  th: "ltr",
  ru: "ltr",
  ps: "rtl",
  it: "ltr",
};
