import { getCanonicalUrl } from "@/lib/canonicalUrl";
import enMessages from "@/messages/en.json";
import { locales, localeHreflang, localeOpenGraph } from "@/i18n/config";
import { getDictionary } from "@/i18n/request";

const defaultMetaData = enMessages?.metaData || enMessages?.metadata || {};

const DEFAULT_METADATA = {
  title: "GTC FX",
  description: "Trading & Finance",
};

export async function getPageMetadata({
  locale = "en",
  key,
  dict: dictProp = null,
  path = "",
  fallbackTitle = DEFAULT_METADATA.title,
  fallbackDescription = DEFAULT_METADATA.description,
  fallbackImage = "/opengraph-image.jpg",
  /** When set, wins over JSON/dict `key` title (e.g. Strapi post title). */
  overrideTitle,
  /** When set, wins over JSON/dict `key` description. */
  overrideDescription,
  /** Absolute image URL for OG/Twitter (e.g. Strapi media). */
  overrideOgImageUrl,
}) {
  const dict = dictProp ?? (await getDictionary(locale));
  const dictMetaRoot = dict?.metaData || dict?.metadata || {};
  const pageMeta = defaultMetaData?.[key];
  const dictMeta = dictMetaRoot?.[key];
  const title =
    (typeof overrideTitle === "string" && overrideTitle.trim()) ||
    dictMeta?.title ||
    pageMeta?.title ||
    fallbackTitle;
  const description =
    (typeof overrideDescription === "string" && overrideDescription.trim()) ||
    dictMeta?.des ||
    pageMeta?.des ||
    fallbackDescription;
  const canonical = getCanonicalUrl(locale, path);
  const ogImage =
    typeof overrideOgImageUrl === "string" && overrideOgImageUrl.startsWith("http")
      ? overrideOgImageUrl
      : fallbackImage.startsWith("http")
        ? fallbackImage
        : getCanonicalUrl(locale, fallbackImage);
  const cleanPath = String(path || "").replace(/^\/+|\/+$/g, "");
  const isBlogPage =
    /^blogs(\/|$)/.test(cleanPath) ||
    /^latest-news(\/|$)/.test(cleanPath) ||
    /^company-news(\/|$)/.test(cleanPath) ||
    /^research(\/|$)/.test(cleanPath);

  const languageAlternates = isBlogPage
    ? { en: getCanonicalUrl("en", cleanPath) }
    : Object.fromEntries(
        locales.map((lc) => [
          localeHreflang[lc] || lc,
          getCanonicalUrl(lc, cleanPath),
        ])
      );

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languageAlternates,
        "x-default": getCanonicalUrl("en", cleanPath),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "GTCFX",
      type:
        typeof overrideTitle === "string" && overrideTitle.trim()
          ? "article"
          : "website",
      locale: localeOpenGraph[locale] || "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

