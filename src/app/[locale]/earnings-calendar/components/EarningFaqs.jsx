"use client";

import React, { useRef, useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';



const AccordionItem = ({ item, index, isOpen, toggle }) => {
  const contentRef = useRef(null);

  return (
    <div className="py-5">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => toggle(index)}
      >
        <span className="HeadingH5">
          {item.question}
        </span>
        <span className="text-2xl">
          {isOpen ? <HiChevronUp /> : <HiChevronDown />}
        </span>
      </button>
      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="mt-2 TextSmall">{item.answer}</div>
      </div>
    </div>
  );
};

const EarningsFaq = ({ messages = {} }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const t = (key, fallback = "") => {
    const value = messages?.[key];
    return typeof value === "string" && value.length ? value : fallback;
  };

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqItems = [
    {
      question: t("question1", "What affects stock and index CFDs around earnings dates?"),
      answer: t("answer1", "Earnings releases can increase volatility, spread changes, and margin requirements on related CFDs."),
    },
    {
      question: t("question2", "What is an ex-dividend date in CFD trading?"),
      answer: t("answer2", "It is the date when dividend adjustment is applied based on your open position direction."),
    },
    {
      question: t("question3", "Do long and short positions get treated differently?"),
      answer: t("answer3", "Yes. Long positions are generally credited while short positions are generally charged for dividend adjustments."),
    },
    {
      question: t("question4", "Why should I check the earnings calendar before trading?"),
      answer: t("answer4", "It helps you plan exposure, avoid surprises, and prepare for potential margin and volatility shifts."),
    },
    {
      question: t("question5", "Can one event impact multiple instruments?"),
      answer: t("answer5", "Yes. A single corporate event may affect several related index or stock CFDs."),
    },
    {
      question: t("question6", "How can I reduce risk during high-margin periods?"),
      answer: t("answer6", "Use smaller position sizes, monitor free margin, and keep a risk buffer before major events."),
    },
    {
      question: t("question7", "Where can I get help if I’m unsure?"),
      answer: t("answer7", "Contact support before market close for guidance on instrument details and margin impact."),
    },
  ];

  return (
    <section className="bg-white pb-8 md:py-8">
    <div className="container mx-auto">
      <h2 className="HeadingH3 md:mb-5 mb-3">
        {t("heading", "Frequently Asked Questions")}
      </h2>
      <div className="divide-y divide-gray-200">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            index={index}
            isOpen={openIndex === index}
            toggle={toggleAccordion}
          />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarningsFaq;
