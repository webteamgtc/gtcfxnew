import { getDictionary } from '@/i18n/request';
import { locales } from '@/i18n/config';
import { notFound } from 'next/navigation';
import { LocaleProvider } from './LocaleProvider';
import MainHeader from './components/common/MainHeader';
import MainFooter from './components/common/MainFooter';
import TradingTicker from './components/home2/TradingTicker';
import { ToastContainer } from "react-toastify";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.metadata || {};

  return {
    title: meta.title ?? 'GTC FX',
    description: meta.description ?? 'Trading & Finance',
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!locales.includes(locale)) notFound();

  const dict = await getDictionary(locale);
  const isRTL = locale === 'ar';

  return (
    <LocaleProvider locale={locale} messages={dict}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen">
       
        <MainHeader locale={locale} />
        <main>{children}</main>
      <MainFooter locale={locale} /> 
      </div>
      <ToastContainer autoClose={3000} />
    </LocaleProvider>
  );
}