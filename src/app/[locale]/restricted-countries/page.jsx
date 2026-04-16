import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import RestrictedCountriesPage from "./components/RestrictedCountriesPage";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";

export async function generateMetadata({ params }) {
  const { locale } = params;
  const dict = await getDictionary(locale);

  return getPageMetadata({
    locale,
    dict,
    key: "restrictedCountries",
    path: "restricted-countries",
    fallbackTitle: "Restricted Countries | GTCFX Service Availability",
    fallbackDescription:
      "Check the list of restricted countries for GTCFX services and ensure compliance before opening a trading account.",
  });
}

export default async function RestrictedCountries({ params }) {
  const { locale } = params;
  const dict = await getDictionary(locale);
  const restrictedCountriesPage = dict?.restrictedCountriesPage || {};

  return (
    <>
      <InnerPageBanner
        title={restrictedCountriesPage?.bannerTitle || "Restricted Countries"}
        description={
          restrictedCountriesPage?.bannerDescription ||
          "Due to regulatory requirements, GTCFX services are not available in certain jurisdictions."
        }
        backgroundImage="/breadcamp/rest-country.webp"
        mobileBackgroundImage="/breadcamp/rest-country-mobile.webp"
      />

      <RestrictedCountriesPage />
    </>
  );
}