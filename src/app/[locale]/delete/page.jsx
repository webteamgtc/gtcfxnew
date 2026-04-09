import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import DeleteAccountPage from "./components/DeleteAccountPage";

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
        description="Request to delete your trading account securely and permanently. "
        backgroundImage="/breadcamp/delete.webp"
        mobileBackgroundImage="/breadcamp/delete-mobile.webp"
      />
      <DeleteAccountPage />

      {/* other sections */}
    </>
  );
}
