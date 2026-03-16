import { NextResponse } from 'next/server';
import { locales, defaultLocale } from '@/i18n/config';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  let locale = defaultLocale;
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferred = acceptLanguage
      .split(',')
      .map((s) => s.split(';')[0].trim().slice(0, 2));
    locale = locales.find((l) => preferred.includes(l)) ?? defaultLocale;
  }

  request.nextUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
};
