import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import WhyChooseGTC from "../components/about/WhyChooseGTC";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.metadata?.whyGtcGroup || {};

  return {
    title: meta.title ?? "Why Choose GTCFX | Benefits of Trading with GTCFX",
    description:
      meta.des ??
      "Discover the benefits of trading with GTCFX, including competitive spreads, fast execution, advanced platforms, and reliable global support.",
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const about = dict.about || {};

  return (
    <>
      <InnerPageBanner
        description={about?.["why-gtc-group"]?.bannerDescription}
        backgroundImage="/breadcamp/whygtc.webp"
        mobileBackgroundImage="/breadcamp/why-mobile.webp"
      />
      <WhyChooseGTC />
    </>
  );
}