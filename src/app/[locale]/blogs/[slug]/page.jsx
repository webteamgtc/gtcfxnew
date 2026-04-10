import InnerPageBanner from "../../components/common/InnerPageBanner";
import { getDictionary } from "@/i18n/request";
import SingleDetailPage from "../../components/blogs/SingleDetailPage";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";
import { fetchBlogBySlugForMetadata } from "@/lib/strapiBlogs";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const post = await fetchBlogBySlugForMetadata(slug, locale);

  const overrideTitle =
    post?.title?.trim() ? `${post.title.trim()} | GTCFX` : undefined;
  const overrideDescription = post?.description?.trim() || undefined;
  const overrideOgImageUrl =
    post?.imageUrl && String(post.imageUrl).startsWith("http")
      ? post.imageUrl
      : undefined;

  return getPageMetadata({
    locale,
    key: "blogs",
    path: `blogs/${slug}`,
    fallbackTitle: "Blogs - GTC FX",
    fallbackDescription: "Read market insights from GTCFX.",
    overrideTitle,
    overrideDescription,
    overrideOgImageUrl,
  });
}

export default async function CompanyNewsDetailPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const blogs = dict.blogs || {};
  const text = (key, fallback) =>
    typeof blogs?.[key] === "string" && blogs[key].length
      ? blogs[key]
      : fallback;

  return (
    <>
      <InnerPageBanner
        description={text("bannerDescription", "Market Insights & CFD Trading Strategies - GTCFX Blog")}
        backgroundImage="/breadcamp/contact.webp"
        mobileBackgroundImage="/breadcamp/contact-mobile.webp"
      />

      <SingleDetailPage url="blogs" />
    </>
  );
}
