import { BsAward, BsFillPersonLinesFill } from "react-icons/bs";
import { TbSettingsPin } from "react-icons/tb";
import { MdOutlineVideoSettings } from "react-icons/md";
import { FaUsersCog, FaUserLock } from "react-icons/fa";

import { translationText } from "@/i18n/tranlsationText";

export default function WhyChooseVPS({ copy }) {
  const productData = [
    {
      icon: <BsAward />,
      title: translationText("whyVpsHosting.cards.cardOneTitle", "Unmatched Performance", copy),
      paragraph: translationText("whyVpsHosting.cards.cardOnePara", "Unleash the full potential of your website or application with our high-performance VPS servers. Powered by cutting-edge technology and premium hardware, we ensure lightning-fast response times and seamless user experiences.", copy),
      link: "",
    },
    {
      icon: <TbSettingsPin />,
      title: translationText("whyVpsHosting.cards.cardTwoTitle", "Speedy Forex Trading", copy),
      paragraph: translationText("whyVpsHosting.cards.cardTwoPara", "Forex market demands quick execution. Our VPS ensures rapid trading, covering essential pairs like GBP/USD, EUR/USD, USD/JPY, and AUD/USD.", copy),
      link: "",
    },
    {
      icon: <MdOutlineVideoSettings />,
      title: translationText("whyVpsHosting.cards.cardThreeTitle", "Complete Control", copy),
      paragraph: translationText("whyVpsHosting.cards.cardThreePara", "Take the reins of your server with full root access. Customize and configure your VPS to suit your specific needs, with the freedom to install the software and applications that matter most to you.", copy),
      link: "",
    },
    {
      icon: <FaUsersCog />,
      title: translationText("whyVpsHosting.cards.cardFourTitle", "Scalability", copy),
      paragraph: translationText("whyVpsHosting.cards.cardFourPara", "As your business grows, your server can grow with it. Our scalable VPS solutions allow you to upgrade resources on-demand, ensuring your hosting never holds you back.", copy),
      link: "",
    },
    {
      icon: <FaUserLock />,
      title: translationText("whyVpsHosting.cards.cardFiveTitle", "Robust Security", copy),
      paragraph: translationText("whyVpsHosting.cards.cardFivePara", "Rest easy knowing your data is secure. Our VPS hosting is fortified with state-of-the-art security measures, including firewalls and regular backups, to protect your valuable information.", copy),
      link: "",
    },
    {
      icon: <BsFillPersonLinesFill />,
      title: translationText("whyVpsHosting.cards.cardSixTitle", "Expert Support", copy),
      paragraph: translationText("whyVpsHosting.cards.cardSixPara", "Our dedicated support team is here to assist you 24/7. From setup to troubleshooting, we're always ready to ensure your VPS hosting experience is smooth and hassle-free.", copy), 
      link: "",
    },
  ];
  return (
    <section className="py-8 md:py-8 bg-white">
      <div className="container">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="HeadingH2">
            {translationText("whyVpsHosting.title", "Why Choose Our VPS Hosting?", copy)}
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
