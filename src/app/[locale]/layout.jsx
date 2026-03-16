import { getDictionary } from '@/i18n/request';
import { locales } from '@/i18n/config';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { LocaleProvider } from './LocaleProvider';
import { LanguageSwitcher } from './LanguageSwitcher';

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
  const nav = dict.nav || {};

  return (
    <LocaleProvider>
      <header className="flex gap-6 border-b border-gray-200 px-8 py-4">
        <Link href={`/${locale}`} className="text-gray-700 hover:text-gray-900 hover:underline">
          {nav.home ?? 'Home'}
        </Link>
        <Link href={`/${locale}/about`} className="text-gray-700 hover:text-gray-900 hover:underline">
          {nav.about ?? 'About'}
        </Link>
        <span className="ms-auto">
          <LanguageSwitcher locale={locale} />
        </span>
      </header>
      <main className="mx-auto max-w-4xl px-8 py-8">{children}</main>
    </LocaleProvider>
  );
}
