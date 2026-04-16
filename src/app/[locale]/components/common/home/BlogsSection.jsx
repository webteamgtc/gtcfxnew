import Image from "next/image";
import Link from "next/link";
import { fetchStrapiCollection, mapStrapiLocale } from "@/lib/strapi";
import BlogItem from "../BlogItem";
import BlogsSectionMobile from "./BlogsSectionMobile";

function IconClock({ className }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

const DEFAULT_STRAPI_API_BASE = "https://api.gtcfx.com/api";

const getApiBase = () =>
  (
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    process.env.STRAPI_API_URL ||
    DEFAULT_STRAPI_API_BASE
  ).replace(/\/$/, "");

function getImageUrl(post) {
  const attrs = post?.attributes ?? post ?? {};
  const media =
    attrs?.imageUrl?.data?.attributes?.url ||
    attrs?.image?.data?.attributes?.url ||
    attrs?.image?.url ||
    "";

  if (!media) return "/home/one.webp";
  if (String(media).startsWith("http")) return String(media);

  const base = (
    process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL || getApiBase()
  ).replace(/\/$/, "");

  return `${base}${media}`;
}

function getCategoryName(post, fallback) {
  const attrs = post?.attributes ?? post ?? {};
  return (
    attrs?.category?.data?.attributes?.name ||
    attrs?.category?.name ||
    fallback
  );
}

function getExcerpt(post, fallback) {
  const attrs = post?.attributes ?? post ?? {};
  return (
    attrs?.descreption ||
    attrs?.short_descreption ||
    attrs?.shortDescription ||
    fallback
  );
}

function formatDate(isoString, fallback = "Mar 26, 2026") {
  if (!isoString) return fallback;

  try {
    return new Date(isoString).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  } catch {
    return fallback;
  }
}

function getNestedValue(obj, path, fallback = "") {
  return path.split(".").reduce((acc, key) => acc?.[key], obj) ?? fallback;
}

async function getTranslations(locale = "en") {
  try {
    const messages = (await import(`@/messages/${locale}.json`)).default;
    return messages;
  } catch {
    const messages = (await import(`@/messages/en.json`)).default;
    return messages;
  }
}

async function getBlogs(locale, start = 0, limit = 3) {
  const populateParams = {
    "populate[imageUrl][fields][0]": "url",
    "populate[category][fields][0]": "name",
    "populate[category][fields][1]": "slug",
    "populate[author][fields][0]": "name",
    "populate[author][populate][authorImg][fields][0]": "url",
  };

  const attemptParams = [
    {
      ...populateParams,
      "filters[category][id][$eq]": 6,
      "pagination[start]": start,
      "pagination[limit]": limit,
    },
    {
      ...populateParams,
      "filters[category][$eq]": 6,
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
          locale: mapStrapiLocale(loc),
          populate: null,
          sort: "createdAt:desc",
          params,
          cache: "no-store",
        });

        if (Array.isArray(res?.data)) return res;
      } catch (error) {
        console.error("[blogs] blogs fetch attempt failed:", error?.message || error);
      }
    }

    return { data: [] };
  };

  let res = await tryLoad(locale);
  let usedLocale = mapStrapiLocale(locale);

  if ((!res?.data || res.data.length === 0) && locale !== "en") {
    res = await tryLoad("en");
    usedLocale = "en";
  }

  const rows = Array.isArray(res?.data) ? res.data : [];
  const total = Number(res?.meta?.pagination?.total || rows.length || 0);

  return {
    rows,
    total,
    usedLocale,
  };
}

function BlogCard({
  category,
  title,
  readTime,
  date,
  dateIso,
  href,
  imageSrc,
  imageAlt,
  readMoreText,
}) {
  return (
    <article className="flex h-full flex-col gap-2.5 md:gap-3">
      <div
        className="relative w-full shrink-0 overflow-hidden rounded-[10px] bg-[#d1d1d1] md:rounded-xl"
        style={{ aspectRatio: "16 / 9" }}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : null}

        <span className="absolute left-3 top-3 inline-flex w-fit items-center rounded-xl bg-secondary px-3 py-1 text-[11px] font-medium text-white md:px-3.5 md:py-1.5 md:text-xs">
          {category}
        </span>
      </div>

      <div className="mt-0.5 flex flex-1 flex-col gap-2 md:gap-2.5">
        <h3 className="HeadingH5">{title}</h3>

        <div className="mt-auto border-t border-primary/25 pt-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 flex-1 items-center gap-2 text-primary">
              <IconClock className="h-4 w-4 shrink-0 text-primary" />
              <time
                dateTime={dateIso}
                className="TextSmall font-normal leading-snug"
              >
                {readTime} · {date}
              </time>
            </div>

            <Link
              href={href}
              className="TextSmall shrink-0 font-normal text-primary underline decoration-primary underline-offset-[3px] transition hover:opacity-80"
            >
              {readMoreText}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default async function BlogsSection({ locale = "en" }) {
  const messages = await getTranslations(locale);
  const blogText = getNestedValue(messages, "home.homeBlogs", {});

  const firstBatch = await getBlogs(locale, 0, 3);
  const rows = Array.isArray(firstBatch?.rows) ? firstBatch.rows : [];
  const usedLocale = firstBatch?.usedLocale || locale;

  const headingBefore = blogText?.heading?.before || "Latest Insights ";
  const headingSeparator = blogText?.heading?.separator || "&";
  const headingAfter = blogText?.heading?.after || " Company Updates";
  const description =
    blogText?.description ||
    "Stay informed with the latest market insights, trading updates, and company news. Explore expert analysis, educational content, and important announcements from GTCFX.";
  const readMore = blogText?.readMore || "Read →";

  const fallbackTitle = blogText?.fallback?.title || "Untitled Article";
  const fallbackExcerpt =
    blogText?.fallback?.excerpt ||
    "Read the latest updates and announcements from our team.";
  const fallbackDate = blogText?.fallback?.date || "Mar 26, 2026";
  const fallbackReadTime = blogText?.fallback?.readTime || "5 min read";
  const fallbackCategory = blogText?.fallback?.category || "Blogs";
  const fallbackImageAlt = blogText?.fallback?.imageAlt || "news image";

  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <div className="mx-auto mb-10 flex max-w-4xl flex-col items-center gap-6 text-center md:mb-14">
          <h2 className="HeadingH2">
            {headingBefore}
            <span className="text-secondary"> {headingSeparator} </span>
            {headingAfter}
          </h2>

          <p className="Text">{description}</p>
        </div>

        <div className="hidden items-stretch gap-6 md:grid md:grid-cols-3 md:gap-8">
          {rows.map((post, idx) => {
            const attrs = post?.attributes ?? post ?? {};
            const id = post?.id || `${attrs?.slug || "post"}-${idx}`;
            const href = `/${usedLocale}/blogs/${attrs?.slug || attrs?.documentId || post?.slug || ""}`;

            return (
              <BlogItem
                key={id}
                category={getCategoryName(post, fallbackCategory)}
                title={attrs?.title || fallbackTitle}
                readTime={attrs?.readTime || fallbackReadTime}
                excerpt={getExcerpt(post, fallbackExcerpt)}
                date={formatDate(attrs?.publishedAt || attrs?.createdAt, fallbackDate)}
                dateIso={attrs?.publishedAt || attrs?.createdAt || "2026-03-26"}
                href={href}
                imageSrc={getImageUrl(post)}
                imageAlt={attrs?.title || fallbackImageAlt}
                readMoreText={readMore}
              />
            );
          })}
        </div>

        <div className="md:hidden">
          <BlogsSectionMobile
            items={rows.map((post, idx) => {
              const attrs = post?.attributes ?? post ?? {};
              const href = `/${usedLocale}/blogs/${attrs?.slug || attrs?.documentId || post?.slug || ""}`;

              return {
                category: getCategoryName(post, fallbackCategory),
                title: attrs?.title || fallbackTitle,
                readTime: attrs?.readTime || fallbackReadTime,
                date: formatDate(attrs?.publishedAt || attrs?.createdAt, fallbackDate),
                dateIso: attrs?.publishedAt || attrs?.createdAt || "2026-03-26",
                href,
                imageSrc: getImageUrl(post),
                imageAlt: attrs?.title || fallbackImageAlt,
                readMoreText: readMore,
              };
            })}
          />
        </div>
      </div>
    </section>
  );
}