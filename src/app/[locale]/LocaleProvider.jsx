'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { localeDir } from '@/i18n/config';

export function LocaleProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const segment = pathname?.split('/')[1];
    const locale = segment === 'ar' ? 'ar' : 'en';
    const dir = localeDir[locale];
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [pathname]);

  return <>{children}</>;
}
