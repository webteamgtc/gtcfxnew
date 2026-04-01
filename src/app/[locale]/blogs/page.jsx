import { MdOutlineNewspaper } from "react-icons/md";
import { getDictionary } from "@/i18n/request";
import {
  fetchStrapiCollection,
  mapStrapiLocale,
} from "@/lib/strapi";
import InnerPageBanner from "../components/common/InnerPageBanner";
import BlogFeeds from "./components/BlogFeeds";

export const dynamic = "force-dynamic";

async function getBlogs(locale, start = 0, limit = 6) {
  const populateParams = {
    "populate[imageUrl][fields][0]": "url",
    "populate[category][fields][0]": "name",
    "populate[category][fields][1]": "slug",
    "populate[author][fields][0]": "name",
    "populate[author][populate][authorImg][fields][0]": "url",
  };

  const attemptParams = [
    // Some Strapi setups expect relation filtering with id path
    {
      ...populateParams,
      "filters[category][id][$eq]": 6,
      "pagination[start]": start,
      "pagination[limit]": limit,
    },
    // Keep previous style as a secondary attempt
    {
      ...populateParams,
      "filters[category][$eq]": 6,
      "pagination[start]": start,
      "pagination[limit]": limit,
    },
    // Final fallback: no category filter
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
          cache: "no-store",
        });
        if (Array.isArray(res?.data)) return res;
      } catch (error) {
        console.error("[blogs] blogs fetch attempt failed:", error?.message || error);
      }
    }
    return { data: [] };
  };

  const mappedLocale = mapStrapiLocale(locale);
  let res = await tryLoad(mappedLocale);
  let usedLocale = mappedLocale;
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

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.metadata || {};
  return {
    title: meta.blogsTitle ?? "Blogs - GTC FX",
    description: meta.blogsDescription,
  };
}

export default async function CompanyNewsPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const blogs = dict.blogs || {};
  const text = (key, fallback) => {
    const value = blogs?.[key];
    return typeof value === "string" && value.length ? value : fallback;
  };

  const firstBatch = await getBlogs(locale, 0, 6);
  const uiText = {
    readMore: text("readMore", "Read More"),
    emptyState: text("emptyState", "No blogs available right now."),
    endMessage: text("endMessage", "No more items"),
  };

  return (
    <>
      <InnerPageBanner
        description={text(
          "bannerDescription",
          "Market Insights & CFD Trading Strategies - GTCFX Blog"
        )}
        backgroundImage="/breadcamp/blog.webp"
        mobileBackgroundImage="/breadcamp/blog-mobile.webp"
      />

      <section className="container mx-auto py-10">
        <div className="mb-6">
          <div className="mb-4 flex items-center gap-3 text-[#b68756]">
            <p className="text-secondary text-4xl md:text-5xl">
              <MdOutlineNewspaper />
            </p>
            <h2 className="HeadingH3 text-primary">
                {text("titlePrefix", "Blogs")}{" "}
             </h2>
          </div>
          <p className="Text mt-2 max-w-4xl">
            {text(
              "intro",
              "Stay ahead with GTCFX Blog — your source for CFD market news, trading tips, and strategies to help you trade smarter and grow consistently."
            )}
          </p>
        </div>
        <BlogFeeds
          initialPosts={firstBatch.rows}
          initialTotal={firstBatch.total}
          initialLocale={firstBatch.usedLocale}
          routeLocale={locale}
          pageLimit={6}
          uiText={uiText}
        />
      </section>
    </>
  );
}
