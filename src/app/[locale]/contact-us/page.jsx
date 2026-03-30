import { getDictionary } from '@/i18n/request';
import InnerPageBanner from '../components/common/InnerPageBanner';

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

  return (
   <>
       <InnerPageBanner
  description="Your satisfaction is our top priority. We are dedicated to ensuring that you have a seamless and rewarding experience with our services."
   backgroundImage="/breadcamp/contact.webp"
    mobileBackgroundImage="/breadcamp/contact-mobile.webp"
/>

      {/* other sections */}
    </>
  );
}
