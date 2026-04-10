import { locales, defaultLocale } from "@/i18n/config";
import { fetchAllBlogsForSitemap } from "@/lib/strapiBlogs";

export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = (
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.gtcfx.com"
  ).replace(/\/$/, "");

  /* ------------------------------------------
     1. Static paths (no locale prefix segment for `en`)
  ------------------------------------------- */
  const staticPaths = [
    "/",
    "/about-us",
    "/why-gtc-group",
    "/regulations",
    "/careers",
    "/global-presence",
    "/contact-us",
    "/compensation-fund",
    "/awards",
    "/company-news",
    "/blogs",
    "/free-demo-account",
    "/economic-calendar",
    "/market-overview",
    "/earnings-calendar",
    "/deposit",
    "/account-types",
    "/forex",
    "/cfd-energy",
    "/precious-metals",
    "/commodities",
    "/indices",
    "/mt5-platform",
    "/mt4-platform",
    "/download-app",
    "/tutorial-videos",
    "/vps-hosting-services",
    "/copy-trading",
    "/dynamic-leverage",
    "/introductory-broker",
    "/glossary-faqs",
    "/swap-update",
    "/affiliate-program",
    "/liquidity-technology",
    "/restricted-countries",
    "/events-and-exhibitions",
    "/gtc-go-app",
    "/client-agreement-MU",
    "/client-agreement-VU",
    "/liquidity-providers",
    "/pamm-account",
    "/mam-account",
    "/privacy-policy",
    "/withdrawal-policy",
    "/kyc-compliance-policy",
    "/deposit-and-refund-policy",
    "/customer-due-diligence-policy",
  ];

  const staticUrls = [];

  staticPaths.forEach((path) => {
    locales.forEach((locale) => {
      let urlPath;
      if (locale === defaultLocale) {
        urlPath = path;
      } else {
        urlPath = path === "/" ? `/${locale}` : `/${locale}${path}`;
      }

      staticUrls.push(`
      <url>
        <loc>${baseUrl}${urlPath}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `);
    });
  });

  /* ------------------------------------------
     2. Blog post URLs — English only (`/blogs/{slug}`)
        Fetched like `blogs/page.jsx` via Strapi + pagination
  ------------------------------------------- */
  let blogUrls = [];

  try {
    const posts = await fetchAllBlogsForSitemap({
      locale: "en",
      pageSize: 100,
      cache: "no-store",
    });

    blogUrls = posts.map(
      ({ slug, lastmod }) => `
            <url>
              <loc>${baseUrl}/blogs/${encodeURIComponent(slug)}</loc>
              <lastmod>${lastmod}</lastmod>
            </url>
          `
    );
  } catch (error) {
    console.error("Error fetching blog URLs for sitemap:", error);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls.join("\n")}
  ${blogUrls.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
