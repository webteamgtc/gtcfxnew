// src/components/CompanyIntro.jsx
import React from "react";

const CompanyIntro = () => {
  const aboutItems = [
    {
      title: "Professional",
      paragraphs: [
        "GTCFX is a global leader in financial derivatives, established in 2012. The GTCFX brand encompasses multiple companies that provide a diverse range of online trading products, serving over 985,000 clients across more than 100 countries.",
        "GTCFX is recognized for its commitment to delivering top-tier financial services, with a strong emphasis on excellence and innovation.",
      ],
    },
    {
      title: "Regulated",
      paragraphs: [
        "GTC Global Ltd and GTC Global Trade Capital Co. Limited., who provide the services on this Website, operate under stringent regulatory oversight and adhere to high standards of anti-money laundering (AML) and know-your-customer (KYC) practices, maintaining integrity and reliability in the fintech industry.",
        "GTC Global Ltd and GTC Global Trade Capital Co. Limited. comply with the laws and regulations in Mauritius and Vanuatu respectively. Other entities within the GTC Financial Group have their own AML/CTF procedures that are designed in compliance with the local laws and regulations.",
      ],
    },
    {
      title: "Experienced",
      paragraphs: [
        "Since our establishment, we've firmly established our expertise in the trading arena.",
        "Throughout our journey, we've been trailblazers in shaping the financial services industry, consistently innovating exceptional products, services, and trading platforms that set new standards.",
      ],
    },
    {
      title: "Trusted",
      paragraphs: [
        "Our continuous growth and unwavering focus on customer satisfaction make us a trusted partner for those in search of top-notch financial derivatives solutions.",
        "Explore our comprehensive offerings and experience the excellence that has solidified our position as a global industry leader.",
      ],
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 items-center justify-center">
          <span className="rounded-full bg-[#b68756]/10 px-4 py-1.5 text-sm font-semibold text-[#b68756]">
            About GTCFX
          </span>

          <h2 className="HeadingH3 mt-4 text-primary">
            Globally Trusted & Multi-Regulated Broker
          </h2>

          <p className="Text md:leading-8">
            From regulation and reliability to innovation and trust, GTCFX is
            committed to delivering a professional trading experience across
            global markets.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:shadow-md md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                <div className="md:w-[220px] md:flex-shrink-0">
                  <h3 className="HeadingH4 text-secondary">{item.title}</h3>
                </div>

                <div className="h-px w-full bg-[#E5E7EB] md:hidden" />

                <div className="space-y-4">
                  {item.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="Text md:leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;