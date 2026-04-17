import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import CookiePolicy from "../components/documents/CookiePolicy";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";

export async function generateMetadata({ params }) {
  const { locale } = params;
  const dict = await getDictionary(locale);

  return getPageMetadata({
    locale,
    key: "cookiePolicy",
    dict,
    path: "cookie-policy",
    fallbackTitle: "Cookie Policy | How We Use Cookies | GTCFX",
    fallbackDescription:
      "Learn how GTCFX uses cookies and similar technologies to enhance your browsing experience and improve website functionality.",
  });
}

export default async function Page({ params }) {
  const { locale } = params;
  const dict = await getDictionary(locale);
  const cookiePolicyPage = dict?.cookiePolicyPage || {};

  return (
    <>
      <InnerPageBanner
        title={cookiePolicyPage?.bannerTitle || "Cookie Policy"}
        description={
          cookiePolicyPage?.bannerDescription ||
          "We use cookies to enhance functionality, analyze usage, and deliver a better user experience across our website."
        }
        backgroundImage="/breadcamp/legal.webp"
        mobileBackgroundImage="/breadcamp/legal-mobile.webp"
      />
      <CookiePolicy />
    </>
  );
}