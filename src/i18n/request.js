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

/**
 * Server-only: load messages for a locale (used by `[locale]/layout.jsx` and pages).
 * Bundled locales import from `@/messages`; others fetch from S3, fallback to English.
 */
export async function getDictionary(locale) {
  const bundled = BUNDLED_LOCALE_LOADERS[locale];
  if (bundled) {
    return bundled();
  }

  try {
    const url = `${MESSAGES_S3_BASE}/${encodeURIComponent(locale)}.json`;
    const res = await fetch(url, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      throw new Error(`messages ${res.status}`);
    }
    return res.json();
  } catch {
    return loadEnglish();
  }
}
