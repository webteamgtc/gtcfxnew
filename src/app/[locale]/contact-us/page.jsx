import { getDictionary } from '@/i18n/request';
import InnerPageBanner from '../components/common/InnerPageBanner';
import ContactForm from './components/ContactFrom';
import ToolFreeContact from './components/ToolFree';
import { MdOutlineContactPhone } from "react-icons/md";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "contactUs",
    dict,
    path: "contact-us",
    fallbackTitle: "Contact Us - GTC FX",
    fallbackDescription: "Need assistance? Get in touch with the GTCFX support team for fast, professional help. We’re here to guide your CFD trading journey with care.",
  });
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const englishDict = locale === "en" ? dict : await getDictionary("en");
  const about = dict.about || {};
  const contactUsForm = dict.contactUsForm || {};
  const defaultContactUsForm = englishDict.contactUsForm || {};
  const contactUs = about["contact-us"] || {};
  const text = (key, fallback) => {
    const value = contactUs?.[key];
    return typeof value === "string" && value.length ? value : fallback;
  };

  return (
    <>
      <InnerPageBanner
        title={text("title", "")}
        description={text(
          "sub_title1_1",
          ""
        )}
        backgroundImage="/breadcamp/contact.webp"
        mobileBackgroundImage="/breadcamp/contact-mobile.webp"
      />
      <div className='container mx-auto py-10'>
        <div className="mb-4">
          <div className="mb-5 flex items-center gap-3 text-[#b68756]">
            <p className="text-secondary text-4xl md:text-5xl">
              <MdOutlineContactPhone />
            </p>
            <h2 className="HeadingH3 text-primary">
              {text("title")}

            </h2>
          </div>
          <p className="Text mt-3">
            {text(
              "sub_title1_1"
            )}{" "}
            {text(
              "sub_title1_2"
            )}
          </p>
        </div>
        <ContactForm
          locale={locale}
          messages={contactUsForm}
          defaultMessages={defaultContactUsForm}
        />
        <div className=''>
          <ToolFreeContact messages={contactUs} />
        </div>
      </div>
      {/* other sections */}
    </>
  );
}
