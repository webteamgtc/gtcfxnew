import { getDictionary } from "@/i18n/request";
import { locales, localeDir } from "@/i18n/config";
import { notoKufiArabic } from "@/app/fonts/notoKufiArabic";
import { notFound } from "next/navigation";
import { LocaleProvider } from "./LocaleProvider";
import MainHeader from "./components/common/MainHeader";
import MainFooter from "./components/common/MainFooter";
import { ToastContainer } from "react-toastify";
import StickyContactBar from "./components/common/StickyContactBar";
import ThirdPartyScripts from "./components/common/seo/ThirdPartyScripts";
import { getLocaleSeoMetadata } from "./components/common/seo/localeSeoMetadata";
import AppQRWidget from "./components/common/AppQRWidget";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getLocaleSeoMetadata(locale);
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!locales.includes(locale)) notFound();

  const dict = await getDictionary(locale);
  const isRTL = localeDir[locale] === "rtl";
  const isArabic = locale === "ar";

  return (
    <LocaleProvider locale={locale} messages={dict}>
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className={
          isArabic
            ? `min-h-screen ${notoKufiArabic.variable} font-arabic`
            : "min-h-screen"
        }
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSWH9QF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ThirdPartyScripts />

        <StickyContactBar />
        <MainHeader locale={locale} navigation={dict?.navigation} />
        <main>{children}</main>
        <MainFooter locale={locale} />
        <AppQRWidget />
        <ToastContainer autoClose={3000} />
      </div>
    </LocaleProvider>
  );
}