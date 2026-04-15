"use client";

import Image from "next/image";
import Link from "next/link";
import { localizedHref } from "@/i18n/localizedHref";
import { useLocale, usePathTranslation } from "../../LocaleProvider";

export default function MainFooter({ locale: localeProp = "en" }) {
  const locale = useLocale() || localeProp;
  const t = usePathTranslation("footerLink");
  const currentYear = new Date().getFullYear();
  const copyrightText = (t(
    "footerCopyRight.copyRightText",
    "© COPYRIGHT {year} GTCFX - ALL RIGHTS RESERVED"
  ) || "")
    .replace("{year}", String(currentYear))
    .replace(/\b(19|20)\d{2}\b/, String(currentYear));

  const footerColumns = [
    {
      title: t("link.label"),
      links: [
        { label: t("link.menu1"), href: "/about-us" },
        { label: t("link.menu2"), href: "/regulations" },
        { label: t("link.menu3"), href: "/awards" },
        { label: t("link.menu4"), href: "/compensation-fund" },
        { label: t("link.menu5"), href: "/global-presence" },
        { label: t("link.menu6"), href: "/why-gtc-group" },
        { label: t("link.menu7"), href: "/restricted-countries" },
        { label: t("link.menu8"), href: "/careers" },
        { label: t("link.menu9"), href: "/contact-us" },
        { label: t("link.menu10"), href: "/glossary-faqs" },
        { label: t("link.menu11"), href: "/company-news" },
        { label: t("link.menu12"), href: "/blogs" },
      ],
    },
    {
      title: t("rules.label", "Trading & Platforms"),
      links: [
        { label: t("rules.menu1"), href: "/forex" },
        { label: t("rules.menu2"  ), href: "/precious-metals" },
        { label: t("rules.menu3"), href: "/indices" },
        { label: t("rules.menu4"), href: "/commodities" },
        { label: t("rules.menu5"), href: "/indices" },
        { label: t("rules.menu6"), href: "/cfd-energy" },
        { label: t("rules.menu7"), href: "/mt4-platform" },
        { label: t("rules.menu8"), href: "/mt5-platform" },
        { label: t("rules.menu9"), href: "/download-app" },
        { label: t("rules.menu10"), href: "/download-app" },
      ],
    },
    {
      title: t("update.label"),
      links: [
        { label: t("update.menu1"), href: "/liquidity-technology" },
        { label: t("update.menu2"), href: "/copy-trading" },
        { label: t("update.menu3"), href: "/pamm-account" },
        { label: t("update.menu4"), href: "/mam-account" },
        { label: t("update.menu5"), href: "/tutorial-videos" },
        { label: t("update.menu6"), href: "/tutorial-videos" },
        { label: t("update.menu7"), href: "/tutorial-videos" },
        { label: t("update.menu8"), href: "/blogs" },
        { label: t("update.menu9"), href: "/vps-hosting-services" },
        { label: t("update.menu10"), href: "/legal-policies-client-agreements" },
      ],
    },
    {
      title: t("policy.label"),
      links: [
        { label: t("policy.menu1"), href: "/privacy-policy" },
        { label: t("policy.menu2"), href: "/withdraw" },
        { label: t("policy.menu3"), href: "/kyc-compliance-policy" },
        { label: t("policy.menu4"), href: "/deposit-and-refund-policy" },
        { label: t("policy.menu5"), href: "/website-disclaimer" },
        { label: t("policy.menu6"), href: "/swap-free-terms-and-conditions" },
        { label: t("policy.menu7"), href: "/risk-disclosure" },
        { label: t("policy.menu8"), href: "/company-news" },
        { label: t("policy.menu9"), href: "/blogs" },
        { label: t("policy.menu10"), href: "/website-disclaimer" },
      ],
    },
    {
      title: t("contact.label"),
      links: [
        {
          label: `${t("contact.menu1")} ${t("contact.num")}`.trim(),
          href: "tel:+971800667788",
        },
        {
          label: `${t("contact.menu2")} support@gtcfx.com`.trim(),
          href: "mailto:support@gtcfx.com",
        },
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
    t(
      "footerNotice.firstPara",
    ),
    `${t(
      "footerNotice.gtc_group_heading1",
    )} ${t(
      "footerNotice.gtc_group_para1",
    )}`.trim(),
    t(
      "footerNotice.gtc_multi_trading_para",
    ),
    `${t(
      "footerNotice.gtc_global_pty_heading",
    )} ${t(
      "footerNotice.gtc_global_pty_para",
    )}`.trim(),
    t(
      "footerNotice.eightPara",
    ),
  ].filter(Boolean);

  return (
    <footer className=" bg-[#F1F2F4] pt-10 pb-10">
      <div className="container">

             {/* Logo + App buttons */}
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

          <div className="flex flex-row items-center gap-4">

  <Link href="/" className="relative w-[160px] h-[45px]">
    <Image
      src="/icons/app.svg"
      fill
      alt="Download on the App Store"
      className="object-contain"
    />
  </Link>

  <Link href="/" className="relative  w-[160px] h-[45px]">
    <Image
      src="/icons/play.svg"
      fill
      alt="Get it on Google Play"
      className="object-contain"
    />
  </Link>

</div>
        </div>

        {/* Top row */}
        <div className="flex flex-col gap-6 border-b border-[#d9d9d9] pb-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="HeadingH3 hidden md:block">
            {t(
              "footerHeading",
            )}
          </h2>

          

          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex h-10 w-10 items-center justify-center  transition hover:bg-white"
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

        {/* Link columns */}
        <div className="grid gap-5 border-b border-[#d9d9d9] py-10 md:grid-cols-2 xl:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-[12px] md:text-base font-semibold uppercase tracking-[0.02em] text-secondary">
                {column.title}
              </h3>

              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={
                        link.href.startsWith("/") ? localizedHref(locale, link.href) : link.href
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

        {/* Logo + App buttons */}
        <div className="hidden md:flex flex-col gap-6 border-b border-[#d9d9d9] py-2 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center">
            <Image
  src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/logo-2024-new.webp"
  alt="GTCFX Logo"
  width={130}
  height={36}
  className="w-[130px] h-auto object-contain"
/>
         
          </div>

          <div className="flex flex-row items-center gap-4">

  <Link href="/" className="relative w-[160px] h-[45px]">
    <Image
      src="/icons/app.svg"
      fill
      alt="Download on the App Store"
      className="object-contain"
    />
  </Link>

  <Link href="/" className="relative  w-[160px] h-[45px]">
    <Image
      src="/icons/play.svg"
      fill
      alt="Get it on Google Play"
      className="object-contain"
    />
  </Link>

</div>
        </div>

        {/* Disclaimers */}
        <div className="pt-10">
       
          <ul className="space-y-4">
            {disclaimers.map((item, index) => (
              <li
                key={index}
                className="TextSmall flex items-start gap-3 text-[#5a5a5a]"
              >
                <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-xl bg-[#5a5a5a]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom */}
        <p className="text-xs mt-10 text-[#5a5a5a]">{copyrightText}</p>
      </div>
    </footer>
  );
}
