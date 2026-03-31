import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import GlobalPresenceSection from "../components/about/GlobalPresenceSection";

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
        description="GTC Group LLC-FZ, a limited liability company registered in the UAE, owns the following entities globally, together the GTC Financial Group."
        backgroundImage="/breadcamp/regulation.webp"
        mobileBackgroundImage="/breadcamp/about-mobile.webp"
      />

    <GlobalPresenceSection />


      {/* other sections */}
    </>
  );
}
