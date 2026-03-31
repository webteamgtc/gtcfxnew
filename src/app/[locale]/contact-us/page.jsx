import { getDictionary } from '@/i18n/request';
import InnerPageBanner from '../components/common/InnerPageBanner';
import ContactForm from './components/ContactFrom';
import ToolFreeContact from './components/ToolFree';
import { MdOutlineContactPhone } from "react-icons/md";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.metadata || {};
  return {
    title: meta.aboutTitle ?? 'Contact US  - GTC FX',
    description: meta.aboutDescription,
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const about = dict.about || {};
  const contactUsForm = dict.contactUsForm || {};
  const contactUsToolFree = dict.contactUsToolFree || {};

  return (
    <>
      <InnerPageBanner
        description="We are dedicated to ensuring that you have a seamless and rewarding experience with our services."
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
              Get in                <span className="text-[#b68756]">Touch</span>

            </h2>
          </div>
          <p className="Text mt-3">
            Your satisfaction is our top priority. We are dedicated to ensuring that you have a seamless and rewarding experience with our services.
            Our team is committed to going above and beyond to meet your needs. Whether it's addressing your concerns, assisting you with technical issues, or providing expert guidance, we are here to serve you. Your success and contentment are at the heart of our mission, and we're always ready to assist you in any way we can.
          </p>
        </div>
        <ContactForm locale={locale} messages={contactUsForm} />
        <div className=''>
          <ToolFreeContact messages={contactUsToolFree} />
        </div>
      </div>
      {/* other sections */}
    </>
  );
}
