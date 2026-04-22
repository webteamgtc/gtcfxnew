"use client";

import Image from "next/image";
import Link from "next/link";
import { localizedHref } from "@/i18n/localizedHref";
import { useLocale, usePathTranslation } from "../../LocaleProvider";

export default function MainFooter({ locale: localeProp = "en" }) {
  const locale = useLocale() || localeProp;
  const t = usePathTranslation("footerLink");
  const year = new Date().getFullYear();

  const footerColumns = [
    {
      title: t("columns.trading.label", "Trading"),
      links: [
        { label: t("columns.trading.menu1", "Account Types"), href: "/account-types" },
        { label: t("columns.trading.menu2", "Deposit Funds"), href: "/deposit" },
     { label: t("columns.platforms.menu3", "GTC GO App"), href: "/gtc-go-app" },
        { label: t("columns.trading.menu5", "Dynamic Leverage"), href: "/dynamic-leverage" },
      ],
    },
    {
      title: t("columns.platforms.label", "Platforms"),
      links: [
        { label: t("columns.platforms.menu1", "MT4 Platform"), href: "/mt4-platform" },
        { label: t("columns.platforms.menu2", "MT5 Platform"), href: "/mt5-platform" },
       
        { label: t("columns.platforms.menu4", "Download Trading Platform"), href: "/download-app" },
        { label: t("columns.platforms.menu5", "VPS Hosting"), href: "/vps-hosting-services" },
      ],
    },
    {
      title: t("columns.tools.label", "Tools & Features"),
      links: [
        { label: t("columns.tools.menu1", "Copy Trading"), href: "/copy-trading" },
        { label: t("columns.tools.menu2", "PAMM Account"), href: "/pamm-account" },
        { label: t("columns.tools.menu3", "MAM Account"), href: "/mam-account" },
        { label: t("columns.tools.menu4", "Swap-Free Trading"), href: "/swap-free-trading" },
      
      ],
    },
    {
      title: t("columns.resources.label", "Resources"),
      links: [
        { label: t("columns.resources.menu1", "Website Disclaimer"), href: "/website-disclaimer" },
        { label: t("columns.resources.menu2", "Risk Disclosure"), href: "/risk-disclosure" },
        { label: t("columns.resources.menu3", "Restricted Countries"), href: "/restricted-countries" },
        { label: t("columns.resources.menu4", "Swap Free Terms & Conditions"), href: "/swap-free-terms-and-conditions" },
        { label: t("columns.resources.menu5", "Deposit & Refund Policy"), href: "/deposit-and-refund-policy" },
        { label: t("columns.resources.menu6", "KYC & Compliance Policy"), href: "/kyc-compliance-policy" },
        { label: t("columns.resources.menu7", "Cookie Policy"), href: "/cookie-policy" },
        { label: t("columns.resources.menu8", "Privacy Policy"), href: "/privacy-policy" },
      ],
    },
    {
      title: t("columns.companyLegal.label", "Company & Legal"),
      links: [
        { label: t("columns.companyLegal.menu1", "About Us"), href: "/about-us" },
        { label: t("columns.companyLegal.menu2", "Why GTC Group"), href: "/why-gtc-group" },
        { label: t("columns.companyLegal.menu3", "Global Presence"), href: "/global-presence" },
        { label: t("columns.companyLegal.menu4", "Regulations"), href: "/regulations" },
        { label: t("columns.companyLegal.menu5", "Market Insights"), href: "/blogs" },
        { label: t("columns.companyLegal.menu6", "Company Update"), href: "/company-news" },
        { label: t("columns.companyLegal.menu7", "Earnings Calendar"), href: "/earnings-calendar" },
      ],
    },
  ];

  const socialLinks = [
    { icon: "/icons/fb.svg", href: "https://www.facebook.com/GTCFXGlobalTradeCapital" },
    { icon: "/icons/insta.svg", href: "https://www.instagram.com/gtcfxofficial/" },
    { icon: "/icons/x.svg", href: "https://x.com/GTC_fx" },
    { icon: "/icons/youtube.svg", href: "https://www.youtube.com/channel/UCnKWakjm1b9Bm63xgwNFXHA" },
    { icon: "/icons/linkedin.svg", href: "https://linkedin.com/company/gtcfx-official" },
    { icon: "/icons/tiktok.svg", href: "https://www.tiktok.com/@gtcgroup_official" },
    { icon: "/icons/tele.svg", href: "https://t.me/gtc_vip_signal" },
  ];

  const disclaimers = [
    t("footerNotice.firstPara", ""),
    t("footerNotice.secondPara", ""),
    t("footerNotice.thirdPara", ""),
    t("footerNotice.fourthPara", ""),
    t("footerNotice.fifthPara", ""),
  ].filter(Boolean);

  const copyrightText = t(
    "footerCopyRight.copyRightText",
    "© COPYRIGHT {year} GTCFX - ALL RIGHTS RESERVED"
  ).replace("{year}", String(year));

  return (
    <footer className=" bg-[#F1F2F4] pt-10 pb-10">
      <div className="container">
        <div className="flex flex-col gap-6 md:border-b border-[#d9d9d9] py-2 md:flex-row md:items-center md:justify-between md:hidden mb-5">
          <div className="flex items-center">
            <Image
              src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/logo-2024-new.webp"
              alt="GTCFX Logo"
              width={130}
              height={36}
              className="w-[130px] h-auto object-contain"
            />
          </div>

        
        </div>

        <div className="flex flex-col gap-6 border-b border-[#d9d9d9] pb-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="HeadingH3 hidden md:block">
            {t("footerHeading", "Connecting you to global markets, anytime, anywhere.")}
          </h2>

          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex h-10 w-10 items-center justify-center transition hover:bg-white"
              >
                <img
                  src={item.icon}
                  alt="social icon"
                  className="h-[50px] w-[50px] md:w-32 md:h-32 object-contain"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-5 border-b border-[#d9d9d9] py-10 md:grid-cols-2 xl:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h5 className="mb-4 text-[12px] md:text-base font-semibold uppercase tracking-[0.02em] text-secondary">
                {column.title}
              </h5>

              <ul className="space-y-2.5">
                {column.links.map((link,idx) => (
                  <li key={`${column.title}-${link.href}-${idx}`}>
                    <Link
                      href={
                        link.href.startsWith("/")
                          ? localizedHref(locale, link.href)
                          : link.href
                      }
                      className="TextSmall text-[#4f4f4f] transition hover:no-underline hover:text-secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hidden md:flex flex-col gap-6 border-b border-[#d9d9d9] py-2 md:flex-row md:items-center md:justify-between bg-white px-4 md:py-3">
          <div className="flex items-center">
            <Image
              src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/logo-2024-new.webp"
              alt="GTCFX Logo"
              width={220}
              height={79}
              className="w-[220px] h-auto object-contain"
            />
          </div>

          <div className="flex flex-row items-center gap-4">
            <Link href="/" className="relative w-[160px] h-[45px]">
              <Image
                src="/icons/app.svg"
                fill
                alt={t("storeButtons.appStoreAlt", "Download on the App Store")}
                className="object-contain"
              />
            </Link>

            <Link href="/" className="relative  w-[160px] h-[45px]">
              <Image
                src="/icons/play.svg"
                fill
                alt={t("storeButtons.googlePlayAlt", "Get it on Google Play")}
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        <div className="pt-10">
          <ul className="space-y-4">
            {disclaimers.map((item, index) => (
              <li
                key={index}
                className="TextSmall flex items-start gap-3 text-[#5a5a5a]"
              >
                <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#5a5a5a]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="TextSmall mt-6 text-xs">
          {copyrightText}
        </div>
      </div>
    </footer>
  );
}
