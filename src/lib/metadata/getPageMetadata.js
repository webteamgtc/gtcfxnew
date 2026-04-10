import { getCanonicalUrl } from "@/lib/canonicalUrl";
import enMessages from "@/messages/en.json";
import { locales, localeHreflang, localeOpenGraph } from "@/i18n/config";

const defaultMetaData = enMessages?.metaData || enMessages?.metadata || {};

const DEFAULT_METADATA = {
  title: "GTC FX",
  description: "Trading & Finance",
};

export function getPageMetadata({
  locale = "en",
  key,
  dict = null,
  path = "",
  fallbackTitle = DEFAULT_METADATA.title,
  fallbackDescription = DEFAULT_METADATA.description,
  fallbackImage = "/opengraph-image.jpg",
}) {
  const dictMetaRoot = dict?.metaData || dict?.metadata || {};
  const pageMeta = defaultMetaData?.[key];
  const dictMeta = dictMetaRoot?.[key];
  const title = pageMeta?.title || dictMeta?.title || fallbackTitle;
  const description = pageMeta?.des || dictMeta?.des || fallbackDescription;
  const canonical = getCanonicalUrl(locale, path);
  const ogImage = fallbackImage.startsWith("http")
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
      type: "website",
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

