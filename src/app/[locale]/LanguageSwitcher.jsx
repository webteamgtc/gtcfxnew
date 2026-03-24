'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, defaultLocale, localeNames } from '@/i18n/config';

export function LanguageSwitcher({ locale }) {
  const pathname = usePathname() || '/';

  const getLocalizedPath = (targetLocale) => {
    const segments = pathname.split('/').filter(Boolean);

    // Remove current locale from path if present
    if (segments.length > 0 && locales.includes(segments[0])) {
      segments.shift();
    }

    const cleanPath = segments.length ? `/${segments.join('/')}` : '/';

    // Default locale should not have prefix
    if (targetLocale === defaultLocale) {
      return cleanPath;
    }

    return cleanPath === '/'
      ? `/${targetLocale}`
      : `/${targetLocale}${cleanPath}`;
  };

  return (
    <div className="flex items-center gap-3">
      {locales.map((lang) => {
        const isActive = lang === locale;

        return (
          <Link
            key={lang}
            href={getLocalizedPath(lang)}
            className={`transition hover:underline ${
              isActive ? 'font-semibold text-black' : 'text-gray-700'
            }`}
          >
            {localeNames[lang]}
          </Link>
        );
      })}
    </div>
  );
}