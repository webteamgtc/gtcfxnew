import enMetaData from "@/messages/metadata/en";
import { getCanonicalUrl } from "@/lib/canonicalUrl";

const metadataByLocale = {
  en: enMetaData,
};

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
  const localeMeta = metadataByLocale[locale] || metadataByLocale.en || {};
  const pageMeta = localeMeta?.[key];
  const dictMeta = dict?.metaData?.[key];
  const title = pageMeta?.title || dictMeta?.title || fallbackTitle;
  const description = pageMeta?.des || dictMeta?.des || fallbackDescription;
  const canonical = getCanonicalUrl(locale, path);
  const ogImage = fallbackImage.startsWith("http")
    ? fallbackImage
    : getCanonicalUrl(locale, fallbackImage);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "GTCFX",
      type: "website",
      locale: locale === "ar" ? "ar_AE" : "en_US",
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

