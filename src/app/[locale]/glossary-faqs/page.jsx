import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import GlossaryList from "./components/glossaryList";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";

export async function generateMetadata({ params }) {
  const { locale } = params;
  const dict = await getDictionary(locale);

  return getPageMetadata({
    locale,
    key: "glossaryFaqs",
    dict,
    path: "glossary-faqs",
    fallbackTitle: "Trading Glossary & FAQs | GTCFX",
    fallbackDescription:
      "Explore key trading terms and FAQs to better understand financial markets and improve your trading knowledge.",
  });
}

export default async function GlossaryFaqsPage({ params }) {
  const { locale } = params;
  const dict = await getDictionary(locale);
  const glossaryPage = dict?.glossaryPage || {};

  return (
    <>
      <InnerPageBanner
        title={glossaryPage?.bannerTitle}
        description={glossaryPage?.bannerDescription}
        backgroundImage="/breadcamp/faqs.webp"
        mobileBackgroundImage="/breadcamp/faq-mobile.webp"
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-white py-10 md:py-16">
        <div className="container">
          <GlossaryList
            browseByLetter={glossaryPage?.browseByLetter}
            noTerms={glossaryPage?.noTerms}
          />
        </div>
      </section>
    </>
  );
}