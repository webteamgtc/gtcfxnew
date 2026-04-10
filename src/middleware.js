import { NextResponse } from 'next/server';
import {
  locales,
  defaultLocale,
  resolveLocaleFromAcceptLanguage,
} from '@/i18n/config';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // ✅ 1. Redirect /en → /
  if (pathname === `/${defaultLocale}`) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  // ✅ 2. Redirect /en/... → /...
  if (pathname.startsWith(`/${defaultLocale}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(`/${defaultLocale}`, '') || '/';
    return NextResponse.redirect(url);
  }

  // Check if path already has locale
  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = resolveLocaleFromAcceptLanguage(
    request.headers.get('accept-language')
  );

  // Default locale → rewrite (clean URL)
  if (locale === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname === '/' ? '' : pathname}`;
    return NextResponse.rewrite(url);
  }

  // Other locales → redirect
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
};
