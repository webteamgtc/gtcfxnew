import { getDictionary } from '@/i18n/request';
import InnerPageBanner from '../components/common/InnerPageBanner';
import ContactForm from './components/ContactFrom';
import ToolFreeContact from './components/ToolFree';

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
        description="Your satisfaction is our top priority. We are dedicated to ensuring that you have a seamless and rewarding experience with our services."
        backgroundImage="/breadcamp/contact.webp"
        mobileBackgroundImage="/breadcamp/contact-mobile.webp"
      />
      <div className='container mx-auto py-10'>
        <ContactForm locale={locale} messages={contactUsForm} />
        <div className=''>
          <ToolFreeContact messages={contactUsToolFree} />
        </div>
      </div>
      {/* other sections */}
    </>
  );
}
