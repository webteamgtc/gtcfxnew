import { defaultLocale, locales } from "@/i18n/config";

function normalizeDocumentLocale(locale) {
  const raw = typeof locale === "string" ? locale.toLowerCase() : defaultLocale;
  if (!locales.includes(raw)) return defaultLocale;
  if (raw.startsWith("zh")) return "zh";
  return raw;
}

/**
 * Server-side document fetcher:
 * builds `${baseUrl}/${locale}.json` with fallback to English.
 */
export async function getLocalizedDocument(baseUrl, locale, revalidate = 3600) {
  if (!baseUrl || typeof baseUrl !== "string") return null;

  const normalizedLocale = normalizeDocumentLocale(locale);
  const orderedLocales =
    normalizedLocale === "en" ? ["en"] : [normalizedLocale, "en"];

  for (const lc of orderedLocales) {
    const url = `${baseUrl}/${encodeURIComponent(lc)}.json`;
    try {
      const res = await fetch(url, { next: { revalidate } });
      if (!res.ok) continue;
      const data = await res.json();
      return data;
    } catch {
      continue;
    }
  }

  return null;
}
