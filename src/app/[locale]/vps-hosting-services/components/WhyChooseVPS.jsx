"use client";
import { BsAward, BsFillPersonLinesFill } from "react-icons/bs";
import { TbSettingsPin } from "react-icons/tb";
import { MdOutlineVideoSettings } from "react-icons/md";
import { FaUsersCog, FaUserLock } from "react-icons/fa";

import { usePathTranslation } from "@/app/[locale]/LocaleProvider";

export default function WhyChooseVPS({ copy }) {
  const translationText=usePathTranslation("primeTech.vpsHosting.whyVpsHosting");
  const productData = [
    {
      icon: <BsAward />,
      title: translationText("cards.cardOneTitle"),
      paragraph: translationText("cards.cardOnePara"),
      link: "",
    },
    {
      icon: <TbSettingsPin />,
      title: translationText("cards.cardTwoTitle"),
      paragraph: translationText("cards.cardTwoPara"),
      link: "",
    },
    {
      icon: <MdOutlineVideoSettings />,
      title: translationText("cards.cardThreeTitle"),
      paragraph: translationText("cards.cardThreePara"),
      link: "",
    },
    {
      icon: <FaUsersCog />,
      title: translationText("cards.cardFourTitle"),
      paragraph: translationText("cards.cardFourPara"),
      link: "",
    },
    {
      icon: <FaUserLock />,
      title: translationText("cards.cardFiveTitle"),
      paragraph: translationText("cards.cardFivePara"),
      link: "",
    },
    {
      icon: <BsFillPersonLinesFill />,
          title: translationText("cards.cardSixTitle"),
      paragraph: translationText("cards.cardSixPara"),
      link: "",
    },
  ];
  return (
    <section className="py-8 md:py-8 bg-white">
      <div className="container">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="HeadingH2">
            {translationText("title")}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {productData?.map((item, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-[24px] border border-[#D9DEE8] bg-[#F1F2F4] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#b68756]/10 text-[#b68756]">
                    <span className="text-[22px]" aria-hidden>
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="HeadingH4 text-primary">{item.title}</h3>
                </div>
              </div>

              <div className="my-5 h-px w-full bg-[#D9DEE8]" />

              <p className="TextSmall text-[#374151] ltr:text-left rtl:text-right">
                {item.paragraph}
              </p>

              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#263788] via-[#b68756] to-[#263788] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
