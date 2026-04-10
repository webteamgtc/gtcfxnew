import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import RevealOnScroll from "../components/RevealOnScroll";
import GlossaryList from "./components/glossaryList";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";
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
  const glossaryFaqs = dict.glossaryFaqs || dict.glossary || {};

  return (
    <>
     <InnerPageBanner
             description="Explore key trading terms and find answers to common questions about GTCFX’s products, services, and trading conditions."
             backgroundImage="/breadcamp/faqs.webp"
             mobileBackgroundImage="/breadcamp/faq-mobile.webp"
           />
         <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#fff] to-[#fff] py-10 md:py-16">
          <div className="container mx-auto">
            <GlossaryList
              browseByLetter={glossaryFaqs.browseByLetter}
              noTerms={glossaryFaqs.noTerms}
            />
          </div>
        </section>
     </>
  );
}
