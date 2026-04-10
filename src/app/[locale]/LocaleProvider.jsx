'use client';

import { useEffect } from 'react';
import { localeDir, localeHreflang } from '@/i18n/config';

export function LocaleProvider({ children, locale = 'en' }) {
  useEffect(() => {
    const dir = localeDir[locale] || 'ltr';
    document.documentElement.lang = localeHreflang[locale] || locale;
    document.documentElement.dir = dir;
  }, [locale]);

  return <>{children}</>;
}
