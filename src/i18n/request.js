import { cache } from "react";

/** Shipped with the app (same as client hook: en / zh / ar use local JSON). */
const BUNDLED_LOCALE_LOADERS = {
  en: () => import('@/messages/en.json').then((m) => m.default),
  ar: () => import('@/messages/ar.json').then((m) => m.default),
  zh: () => import('@/messages/zh.json').then((m) => m.default),
};

const MESSAGES_S3_BASE =
  'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/messages';

async function loadEnglish() {
  return BUNDLED_LOCALE_LOADERS.en();
}

function isPlainObject(value) {
  return value != null && typeof value === "object" && !Array.isArray(value);
}

/**
 * Use English dictionary as the base and overlay locale values.
 * This avoids sprinkling English fallbacks across components.
 */
function deepMerge(baseInput, override) {
  const base = baseInput;
  if (!isPlainObject(base) || !isPlainObject(override)) {
    return override ?? base;
  }

  const merged = { ...base };
  for (const key of Object.keys(override)) {
    const baseValue = base[key];
    const overrideValue = override[key];
    merged[key] =
      isPlainObject(baseValue) && isPlainObject(overrideValue)
        ? deepMerge(baseValue, overrideValue)
        : overrideValue ?? baseValue;
  }
  return merged;
}

/**
 * Server-only: load messages for a locale (used by `[locale]/layout.jsx` and pages).
 * Bundled locales import from `@/messages`; others fetch from S3, fallback to English.
 */
export const getDictionary = cache(async function getDictionary(locale) {
  const english = await loadEnglish();
  if (!locale || locale === "en") {
    return english;
  }

  const bundled = BUNDLED_LOCALE_LOADERS[locale];
  if (bundled) {
    const localized = await bundled();
    return deepMerge(english, localized);
  }

  try {
    const url = `${MESSAGES_S3_BASE}/${encodeURIComponent(locale)}.json`;
    const res = await fetch(url, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      throw new Error(`messages ${res.status}`);
    }
    const localized = await res.json();
    return deepMerge(english, localized);
  } catch {
    return english;
  }
});
