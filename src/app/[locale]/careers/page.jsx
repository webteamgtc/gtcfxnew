import { getDictionary } from '@/i18n/request';
import InnerPageBanner from '../components/common/InnerPageBanner';
import CareersClient from "./CareersClient";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.metadata || {};
  return {
    title: meta.aboutTitle ?? 'Contact US  - GTC FX',
    description: meta.aboutDescription,
  };
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
