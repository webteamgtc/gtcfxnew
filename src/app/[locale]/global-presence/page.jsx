import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import GlobalPresenceMapSection from "../components/about/GlobalPresenceMapSection";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "globalPresence",
    dict,
    path: "global-presence",
    fallbackTitle: "Global Presence - GTC FX",
    fallbackDescription: "Explore our global presence and see where we are located.",
  });
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const about = dict.about || {};

  return (
    <>
      <InnerPageBanner
        description="At GTCFX, we're a global team with a presence in over 22 destinations worldwide."
        backgroundImage="/breadcamp/globel.webp"
        mobileBackgroundImage="/breadcamp/globel-mobile.webp"
      />

    <GlobalPresenceMapSection />


      {/* other sections */}
    </>
  );
}
