import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import GlossaryList from "./components/glossaryList";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";
import { translationTextByPath } from "@/i18n/tranlsationText";
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "glossaryFaqs",
    dict,
    path: "glossary-faqs",
    fallbackTitle: "Glossary and FAQs - GTC FX",
    fallbackDescription: "Explore key trading terms and find answers to common questions about GTCFX’s products, services, and trading conditions.",
  });
}
export default async function GlossaryFaqsPage({ params }) {
  const { locale } = await params;
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
         <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#fff] to-[#fff] py-10 md:py-16">
          <div className="container mx-auto">
            <GlossaryList
              browseByLetter={glossaryPage?.browseByLetter}
              noTerms={glossaryPage?.noTerms}
            />
          </div>
        </section>
     </>
  );
}
