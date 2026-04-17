import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import WebsiteDisclaimerPage from "../components/documents/WebsiteDisclaimerPage";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";

export async function generateMetadata({ params }) {
  const { locale } = params;
  const dict = await getDictionary(locale);

  return getPageMetadata({
    locale,
    dict,
    key: "websiteDisclaimer",
    path: "website-disclaimer",
    fallbackTitle: "Website Disclaimer | GTCFX",
    fallbackDescription:
      "The information provided on this website is for general informational purposes only and does not constitute investment advice, solicitation, or recommendation.",
  });
}

export default async function WebsiteDisclaimer({ params }) {
  const { locale } = params;
  const dict = await getDictionary(locale);
  const websiteDisclaimerPage = dict?.websiteDisclaimerPage || {};

  return (
    <>
      <InnerPageBanner
        title={websiteDisclaimerPage?.bannerTitle || "Website Disclaimer"}
        description={
          websiteDisclaimerPage?.bannerDescription ||
          "The information provided on this website is for general informational purposes only and does not constitute investment advice, solicitation, or recommendation."
        }
        backgroundImage="/breadcamp/legal.webp"
        mobileBackgroundImage="/breadcamp/legal-mobile.webp"
      />
      <WebsiteDisclaimerPage />
    </>
  );
}