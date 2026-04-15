'use client';

import { createContext, useCallback, useContext, useEffect, useMemo } from 'react';
import { localeDir, localeHreflang } from '@/i18n/config';
import { translationTextByPath } from '@/i18n/tranlsationText';

const LocaleContext = createContext({ locale: 'en', messages: {} });

export function LocaleProvider({ children, locale = 'en', messages = {} }) {
  useEffect(() => {
    const dir = localeDir[locale] || 'ltr';
    document.documentElement.lang = localeHreflang[locale] || locale;
    document.documentElement.dir = dir;
  }, [locale]);

  const value = useMemo(() => ({ locale, messages }), [locale, messages]);

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleMessages() {
  return useContext(LocaleContext)?.messages || {};
}

export function useLocale() {
  return useContext(LocaleContext)?.locale || 'en';
}

/**
 * Client helper so components can call `t("path.to.key", "fallback")`
 * without passing `messages` into each call.
 */
export function usePathTranslation(basePath = '') {
  const messages = useLocaleMessages();

  return useCallback(
    (path, fallback = '') => {
      const key = basePath ? `${basePath}.${path}` : path;
      return translationTextByPath(key, fallback, messages);
    },
    [basePath, messages]
  );
}
