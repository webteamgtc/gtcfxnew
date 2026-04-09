import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import RestrictedCountriesPage from "./components/RestrictedCountriesPage";

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
        description="Due to regulatory requirements, GTCFX services are not available in certain jurisdictions. "
        backgroundImage="/breadcamp/rest-country.webp"
        mobileBackgroundImage="/breadcamp/rest-country-mobile.webp"
      />
      <RestrictedCountriesPage />

      {/* other sections */}
    </>
  );
}
