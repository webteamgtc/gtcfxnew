"use client";

import TradingAdvantages from "./TradingAdvantages";
import TradingSplitSections from "./TradingSplitSections";
import TradingFaq from "./TradingFaq";
import MetalsIntroVisual from "./MetalsIntroVisual";

export default function TradingProductSections({ product }) {
  const introSection = product?.sections?.[0];
  const remainingSections = product?.sections?.slice?.(1);

  return (
    <>
      <TradingAdvantages
        items={product.advantages}
        heading={product.advantagesHeading}
      />
      <MetalsIntroVisual title={introSection?.title} paragraphs={introSection?.paragraphs} 
      image={introSection?.imageSrc}
      />

      <TradingSplitSections sections={remainingSections} />
      {product.disclaimer ? (
        <section className="bg-white px-4 py-8 md:pb-10">
          <div className="container max-w-4xl">
            <p className="text-center text-xs leading-relaxed text-slate-500 md:text-sm">
              {product.disclaimer}
            </p>
          </div>
        </section>
      ) : null}
      <TradingFaq
        items={product.faqs}
        title={product.faqTitle}
        subtitle={product.faqSubtitle}
      />
    </>
  );
}
