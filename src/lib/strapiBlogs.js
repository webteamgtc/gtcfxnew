import {
  fetchStrapiCollection,
  mapStrapiLocale,
  toAbsoluteStrapiMediaUrl,
} from "@/lib/strapi";

function stripHtmlToPlain(html, maxLen = 320) {
  if (!html || typeof html !== "string") return "";
  const plain = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (plain.length <= maxLen) return plain;
  return `${plain.slice(0, maxLen - 1).trim()}…`;
}

/** Strapi category id for “blogs” listing (same as `src/app/[locale]/blogs/page.jsx`). */
const BLOG_CATEGORY_ID = 6;

function buildPopulateParams() {
  return {
    "populate[imageUrl][fields][0]": "url",
    "populate[category][fields][0]": "name",
    "populate[category][fields][1]": "slug",
    "populate[author][fields][0]": "name",
    "populate[author][populate][authorImg][fields][0]": "url",
  };
}

/**
 * One page of blogs from Strapi — same attempt order as the blogs page.
 */
export async function fetchBlogsStrapiPage(
  locale,
  start = 0,
  limit = 6,
  cache = "no-store"
) {
  const populateParams = buildPopulateParams();
  const attemptParams = [
    {
      ...populateParams,
      "filters[category][id][$eq]": BLOG_CATEGORY_ID,
      "pagination[start]": start,
      "pagination[limit]": limit,
    },
    {
      ...populateParams,
      "filters[category][$eq]": BLOG_CATEGORY_ID,
      "pagination[start]": start,
      "pagination[limit]": limit,
    },
    {
      ...populateParams,
      "pagination[start]": start,
      "pagination[limit]": limit,
    },
  ];

  const tryLoad = async (loc) => {
    for (const params of attemptParams) {
      try {
        const res = await fetchStrapiCollection("blogs", {
          locale: loc,
          populate: null,
          sort: "createdAt:desc",
          params,
          cache,
        });
        if (Array.isArray(res?.data)) return res;
      } catch (error) {
        console.error(
          "[strapiBlogs] fetch attempt failed:",
          error?.message || error
        );
      }
    }
    return { data: [] };
  };

  const mappedLocale = mapStrapiLocale(locale);
  let res = await tryLoad(mappedLocale);
  let usedLocale = mappedLocale;
  return {
    data: res?.data,
    meta: res?.meta,
    usedLocale,
  };
}

/**
 * All blog posts for sitemap (English URLs only: `/blogs/{slug}`).
 */
export async function fetchAllBlogsForSitemap({
  locale = "en",
  pageSize = 100,
  cache = "no-store",
} = {}) {
  const out = [];
  let start = 0;

  for (;;) {
    const { data } = await fetchBlogsStrapiPage(locale, start, pageSize, cache);
    const rows = Array.isArray(data) ? data : [];

    for (const entry of rows) {
      const attrs = entry?.attributes ?? entry;
      const slug = attrs?.slug;
      if (!slug) continue;
      const raw = attrs.updatedAt ?? attrs.publishedAt ?? attrs.createdAt;
      out.push({
        slug: String(slug),
        lastmod: raw ? new Date(raw).toISOString() : new Date().toISOString(),
      });
    }

    if (rows.length < pageSize) break;
    start += pageSize;
  }

  return out;
}

/**
 * Single blog by slug (server) — same filter/populate pattern as `SingleDetailPage`.
 */
export async function fetchBlogBySlugForMetadata(slug, routeLocale, cache = "no-store") {
  const decoded = decodeURIComponent(String(slug || "").trim());
  if (!decoded) return null;

  const params = {
    ...buildPopulateParams(),
    "filters[slug][$eq]": decoded,
    "pagination[start]": 0,
    "pagination[limit]": 1,
  };

  const load = async (loc) =>
    fetchStrapiCollection("blogs", {
      locale: loc,
      populate: null,
      sort: "createdAt:desc",
      params,
      cache,
    });

  const mapped = mapStrapiLocale(routeLocale);
  let res = await load(mapped);
  if ((!res?.data || res.data.length === 0) && mapped !== "en") {
    res = await load("en");
  }

  const row = res?.data?.[0];
  if (!row) return null;

  const attrs = row?.attributes ?? row ?? {};
  const title =
    (typeof attrs.title === "string" && attrs.title.trim()) ||
    (typeof attrs.name === "string" && attrs.name.trim()) ||
    "";

  const rawDesc =
    (typeof attrs.short_descreption === "string" && attrs.short_descreption.trim()) ||
    (typeof attrs.shortDescription === "string" && attrs.shortDescription.trim()) ||
    (typeof attrs.seo_description === "string" && attrs.seo_description.trim()) ||
    stripHtmlToPlain(attrs.descreption || attrs.description || "");

  const rel =
    attrs?.imageUrl?.data?.attributes?.url ||
    attrs?.imageUrl?.data?.url ||
    attrs?.imageUrl?.url ||
    "";
  const imageUrl = rel ? toAbsoluteStrapiMediaUrl(rel) : null;

  return {
    title: title || null,
    description: rawDesc || null,
    imageUrl,
  };
}
