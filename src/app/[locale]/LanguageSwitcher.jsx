'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function LanguageSwitcher({ locale }) {
  const pathname = usePathname();

  if (!pathname) {
    const target = locale === 'en' ? '/ar' : '/en';
    return (
      <Link href={target} className="text-gray-700 hover:text-gray-900 hover:underline">
        {locale === 'en' ? 'العربية' : 'English'}
      </Link>
    );
  }

  const segments = pathname.split('/');
  const currentLocale = segments[1];
  const nextLocale = currentLocale === 'ar' ? 'en' : 'ar';
  segments[1] = nextLocale;
  const targetPath = segments.join('/') || '/';

  return (
    <Link href={targetPath} className="text-gray-700 hover:text-gray-900 hover:underline">
      {nextLocale === 'ar' ? 'العربية' : 'English'}
    </Link>
  );
}

