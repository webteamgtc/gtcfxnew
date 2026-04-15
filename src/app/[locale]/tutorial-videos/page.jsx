import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import TutorialVideosPageSection from "./components/TutorialVideosPageSection";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";
import { translationTextByPath } from "@/i18n/tranlsationText";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "tutorialVideo",
    dict,
    path: "tutorial-videos",
    fallbackTitle: "Tutorial Videos - GTC FX",
    fallbackDescription:
      "Browse our easy-to-follow video guides and get the help you need to trade with more confidence.",
  });
}

export default async function TutorialVideosPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const tutorialPage = dict?.tutorialPage || {};


  return (
    <>
      <InnerPageBanner
        title={tutorialPage?.bannerTitle}
        description={tutorialPage?.bannerDescription}
        backgroundImage="/breadcamp/tutorial.webp"
        mobileBackgroundImage="/breadcamp/tutorial-mobile.webp"
      />
        <TutorialVideosPageSection />

      {/* other sections */}
    </>
  );
}
