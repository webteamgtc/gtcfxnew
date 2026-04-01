"use client";

import { useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import SingleBlogSection from "../../components/common/SingleblogSection";
import BlogItem from "../../components/common/BlogItem";

const DEFAULT_STRAPI_API_BASE = "https://api.gtcfx.com/api";

const mapLocale = (locale) => (locale === "zh" ? "zh-Hans" : locale || "en");

const getApiBase = () =>
  (
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    process.env.STRAPI_API_URL ||
    DEFAULT_STRAPI_API_BASE
  ).replace(/\/$/, "");

const getAuthHeaders = () => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  return token ? { Authorization: `Bearer ${token}` } : {};
};

function getImageUrl(post) {
  const attrs = post?.attributes ?? post ?? {};
  const media =
    attrs?.imageUrl?.data?.attributes?.url ||
    attrs?.image?.data?.attributes?.url ||
    attrs?.image?.url ||
    "";
  if (!media) return "/home/one.webp";
  if (String(media).startsWith("http")) return String(media);
  const base = (process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL || getApiBase()).replace(/\/$/, "");
  return `${base}${media}`;
}

function getCategoryName(post) {
  const attrs = post?.attributes ?? post ?? {};
  return (
    attrs?.category?.data?.attributes?.name ||
    attrs?.category?.name ||
    "Company News"
  );
}

function getExcerpt(post) {
  const attrs = post?.attributes ?? post ?? {};
  return (
    attrs?.descreption || attrs?.short_descreption ||
    attrs?.shortDescription ||

    "Read the latest updates and announcements from our team."
  );
}

function formatDate(isoString) {
  if (!isoString) return "Mar 26, 2026";
  try {
    return new Date(isoString).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  } catch {
    return "Mar 26, 2026";
  }
}

async function fetchBlogsBatch(locale, start, limit) {
  const baseLocale = mapLocale(locale);
  const populateParams = {
    "populate[imageUrl][fields][0]": "url",
    "populate[category][fields][0]": "name",
    "populate[category][fields][1]": "slug",
    "populate[author][fields][0]": "name",
    "populate[author][populate][authorImg][fields][0]": "url",
  };

  const attempts = [
    {
      ...populateParams,
      "filters[category][id][$eq]": 7,
      "pagination[start]": start,
      "pagination[limit]": limit,
    },
    {
      ...populateParams,
      "filters[category][$eq]": 7,
      "pagination[start]": start,
      "pagination[limit]": limit,
    },
    {
      ...populateParams,
      "pagination[start]": start,
      "pagination[limit]": limit,
    },
  ];

  const runAttempt = async (loc) => {
    for (const params of attempts) {
      const qs = new URLSearchParams();
      qs.set("locale", loc);
      qs.set("sort", "createdAt:desc");
      Object.entries(params).forEach(([k, v]) => qs.set(k, String(v)));

      try {
        const res = await fetch(`${getApiBase()}/blogs?${qs.toString()}`, {
          headers: getAuthHeaders(),
          cache: "no-store",
        });
        if (!res.ok) continue;
        const json = await res.json();
        if (Array.isArray(json?.data)) return { ...json, usedLocale: loc };
      } catch {
        // Try next attempt
      }
    }
    return null;
  };

  let response = await runAttempt(baseLocale);
  if ((!response || !response?.data?.length) && baseLocale !== "en") {
    response = await runAttempt("en");
  }
  return response || { data: [], meta: { pagination: { total: 0 } }, usedLocale: baseLocale };
}

export default function CompanyNewsFeed({
  initialPosts = [],
  initialTotal = 0,
  initialLocale = "en",
  routeLocale = "en",
  pageLimit = 6,
  uiText = {},
}) {
  const [posts, setPosts] = useState(initialPosts);
  const [total, setTotal] = useState(initialTotal);
  const [start, setStart] = useState(initialPosts.length);
  const [loadingMore, setLoadingMore] = useState(false);
  const [effectiveLocale] = useState(initialLocale || "en");

  const hasMore = start < total;
  const featured = posts[0];
  const rest = useMemo(() => posts.slice(1), [posts]);

  const loadMore = async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    try {
      const res = await fetchBlogsBatch(effectiveLocale, start, pageLimit);
      const incoming = Array.isArray(res?.data) ? res.data : [];
      const nextTotal = Number(res?.meta?.pagination?.total || total);

      if (incoming.length > 0) {
        setPosts((prev) => [...prev, ...incoming]);
        setStart((prev) => prev + incoming.length);
      } else {
        setStart(nextTotal);
      }
      setTotal(nextTotal);
    } finally {
      setLoadingMore(false);
    }
  };

  if (!featured) {
    return (
      <div className="rounded-xl border border-[#E7E9F3] bg-white p-6 text-center">
        <p className="Text text-[#4D4D70]">
          {uiText.emptyState || "No company news available right now."}
        </p>
      </div>
    );
  }

  return (
    <>
      <SingleBlogSection posts={featured} />

      <InfiniteScroll
        dataLength={posts.length}
        next={loadMore}
        hasMore={hasMore}
        scrollThreshold={0.75}
        loader={
          <p className="TextSmall pt-6 text-center text-[#6B7280]">Loading...</p>
        }
        endMessage={
          <p className="TextSmall pt-6 text-center text-[#6B7280]">
            {uiText.endMessage || "No more items"}
          </p>
        }
      >
        {rest.length > 0 && (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, idx) => {
              const attrs = post?.attributes ?? post ?? {};
              const id = post?.id || `${attrs?.slug || "post"}-${idx}`;
              return (
                <BlogItem
                  key={id}
                  category={getCategoryName(post)}
                  title={attrs?.title || "Untitled Article"}
                  readTime={attrs?.readTime}
                  excerpt={getExcerpt(post)}
                  date={formatDate(attrs?.publishedAt || attrs?.createdAt)}
                  dateIso={attrs?.publishedAt || attrs?.createdAt || "2026-03-26"}
                  href={`/${routeLocale}/company-news/${attrs?.slug || attrs?.documentId || post?.slug || ""}`}
                  imageSrc={getImageUrl(post)}
                  imageAlt={attrs?.title || "news image"}
                />
              );
            })}
          </div>
        )}
      </InfiniteScroll>
    </>
  );
}
