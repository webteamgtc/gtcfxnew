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
  const careers = dict.about.careers || {};
  return (
    <>
      <InnerPageBanner
        description={careers?.bannerText}
        backgroundImage="/breadcamp/career.webp"
        mobileBackgroundImage="/breadcamp/career-mobile.webp"
      />
      <CareersClient careers={careers} />
    </>
  );
}
