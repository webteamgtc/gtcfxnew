import { getDictionary } from '@/i18n/request';
import InnerPageBanner from '../components/common/InnerPageBanner';
import CareersClient from "./CareersClient";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "career",
    dict,
    path: "careers",
    fallbackTitle: "career - GTC FX",
    fallbackDescription: "Explore our careers and join our team.",
  });
}

export default async function CareersPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const careers = dict.careers || {};
  const text = (key, fallback) =>
    typeof careers?.[key] === "string" && careers[key].length ? careers[key] : fallback;

  return (
    <>
      <InnerPageBanner
        description={text(
          "sub-title",
          "We are a leading financial technology company specializing in foreign exchange trading solutions."
        )}
        backgroundImage="/breadcamp/career.webp"
        mobileBackgroundImage="/breadcamp/career-mobile.webp"
      />
      <CareersClient careers={careers} />
    </>
  );
}
