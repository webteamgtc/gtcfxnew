'use client'
import React from "react";
 
const TieredLeverageFAQ = ({ copy }) => {
  const t = copy?.tieredLeverage || {};

  const faqs = [
    {
      title: t?.one?.ques,
      paragraphs: [t?.one?.ans],
    },
    {
      title: t?.two?.ques,
      paragraphs: [t?.two?.ans],
    },
    {
      title: t?.three?.ques,
      paragraphs: [t?.three?.ans],
    },
    {
      title: t?.four?.ques,
      paragraphs: [t?.four?.ans],
    },
    {
      title: t?.five?.ques,
      paragraphs: [t?.five?.ans],
    },
    {
      title: t?.six?.ques,
      paragraphs: [t?.six?.ans],
    }
  ].filter((x) => x.title);

  return (
    <section className="pt-12 ">
      <FrequentlyAskedQuestions heading={t?.heading} data={faqs} />
    </section>
  );
};

export default TieredLeverageFAQ;

const FrequentlyAskedQuestions = ({ heading, data }) => {
  if (!data || data.length < 1) return <></>;

  return (

    <div className="max-w-6xl mx-auto">
         <div className="relative text-center">
          <h2
            style={{ lineHeight: '4rem' }}
            className="HeadingH2 text-primary capitalize mb-10"
          >
             {heading || "FAQ's on Tiered Margin/Leverage"}
          </h2>
     </div>
      <div className="space-y-3">
        {data.map((item, index) => (
          <details
            key={`${item.title}-${index}`}
            className="group rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
              <span className="TextButton text-slate-900">
                {item.title}
              </span>
              <span className="text-slate-500 group-open:hidden text-lg">+</span>
              <span className="text-slate-500 hidden group-open:block text-lg">−</span>
            </summary>

            <div className="mt-2 space-y-6">
              {item.paragraphs
                .filter(Boolean)
                .map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className="TextSmall text-slate-700 ltr:text-left rtl:text-right"
                    dangerouslySetInnerHTML={{ __html: (paragraph) }}
                  />
                ))}
            </div>
          </details>
        ))}
      </div>
      </div>
  
  );
};
