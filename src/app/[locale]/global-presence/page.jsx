import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import GlobalPresenceMapSection from "../components/about/GlobalPresenceMapSection";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.metadata || {};
  return {
    title: meta.aboutTitle ?? "About - GTC FX",
    description: meta.aboutDescription,
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const about = dict.about || {};

  return (
    <>
      <InnerPageBanner
        description="At GTCFX, we're a global team with a presence in over 22 destinations worldwide."
        backgroundImage="/breadcamp/new-about.webp"
        mobileBackgroundImage="/breadcamp/about-mobile.webp"
      />

    <GlobalPresenceMapSection />


      {/* other sections */}
    </>
  );
}
