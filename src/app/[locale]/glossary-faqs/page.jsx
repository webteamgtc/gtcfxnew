import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import RevealOnScroll from "../components/RevealOnScroll";
import GlossaryList from "./components/glossaryList";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.metadata || {};
  const g = dict.glossaryFaqs || dict.glossary || {};
  return {
    title: meta.glossaryFaqsTitle ?? "Glossary & FAQs | GTCFX",
    description:
      meta.glossaryFaqsDescription ??
      meta.glossaryFaqsDes ??
      g.des ??
      meta.description,
  };
}

export default async function GlossaryFaqsPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const glossaryFaqs = dict.glossaryFaqs || dict.glossary || {};

  return (
    <>
      <InnerPageBanner
        title={glossaryFaqs.title}
        description={glossaryFaqs.des}
        backgroundImage="/breadcamp/about.webp"
        mobileBackgroundImage="/breadcamp/about-mobile.webp"
      />
         <section className="bg-white py-10 md:py-14">
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
