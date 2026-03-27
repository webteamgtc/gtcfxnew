"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MegaMenuPanel from "./MegaMenuPanel";
import { megaMenuData } from "./megaMenuData";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";
import DownloadQR from "./DownloadQR";

export default function MainHeader({ locale = "en" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "About Us", key: "about" },
    { label: "Account", key: "account" },
    { label: "Trading & Platform", key: "trading" },
    { label: "Prime & Tech", key: "prime" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSection = (key) => {
    setMobileExpanded((prev) => (prev === key ? null : key));
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full py-3 transition-all duration-300 ${
        scrolled ? "bg-white/10 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div
          className={`relative bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 ${
            activeMegaMenu ? "rounded-t-[16px]" : "rounded-[16px]"
          }`}
          onMouseLeave={() => setActiveMegaMenu(null)}
        >
          <div
            className={`flex items-center justify-between px-5 lg:px-6 transition-all duration-300 ${
              activeMegaMenu ? "rounded-t-[16px] rounded-b-none" : "rounded-[16px]"
            } ${scrolled ? "min-h-[58px] md:min-h-[74px]" : "min-h-[60px] md:min-h-[85px]"}`}
          >
            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/logo-2024-new.webp"
                width={200}
                height={72}
                alt="GTCFX"
                priority
                className={`cursor-pointer object-contain transition-all duration-300 ${
                  scrolled
                    ? "w-[120px] h-[42px] md:w-[150px] md:h-[54px]"
                    : "w-[130px] h-[47px] md:w-[120px] md:h-[53px] lg:w-[200px] lg:h-[72px]"
                }`}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
              {navItems.map((item) => {
                const isActive = activeMegaMenu === item.key;

                return (
                  <button
                    key={item.key}
                    type="button"
                    onMouseEnter={() => setActiveMegaMenu(item.key)}
                    className={`flex items-center gap-2 text-[15px] font-medium leading-none transition-colors duration-200 ${
                      isActive ? "text-primary" : "text-[#2f2f2f] hover:text-primary"
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isActive ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                );
              })}
            </nav>

            {/* Desktop Right */}
            <div className="hidden items-center gap-2.5 lg:flex">
              <Link
                href="/login"
                className="inline-flex h-10 items-center justify-center rounded-[10px] border border-[#d7d7d7] px-5 text-[14px] font-medium text-[#333] transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                Log in
              </Link>

              <Link
                href="/partner-with-us"
                className="inline-flex h-10 items-center justify-center rounded-[10px] bg-gradient-to-r from-[#263788] via-[#101638] to-[#263788] px-5 text-[14px] md:text-[px] font-medium text-white transition-opacity duration-200 hover:opacity-90"
              >
                Partner With Us
              </Link>

              <LanguageSwitcher locale={locale} />
              <DownloadQR />
            </div>

            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#d9d9d9] text-dark lg:hidden"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M18 6L6 18"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <MegaMenuPanel menu={megaMenuData[activeMegaMenu]} />

          {mobileOpen && (
            <div className="border-t border-[#ececec] px-5 py-5 lg:hidden">
              <nav className="flex flex-col">
                {navItems.map((item) => {
                  const isExpanded = mobileExpanded === item.key;
                  const menu = megaMenuData[item.key];

                  return (
                    <div key={item.key} className="border-b border-[#ececec] py-3">
                      <button
                        type="button"
                        onClick={() => toggleMobileSection(item.key)}
                        className="flex w-full items-center justify-between text-left text-[15px] font-medium text-[#2f2f2f]"
                      >
                        <span>{item.label}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {isExpanded && menu && (
                        <div className="mt-4 space-y-5 pb-2">
                          {menu.columns.map((column) => (
                            <div key={column.heading}>
                              <h4 className="mb-3 text-[14px] font-semibold text-dark">
                                {column.heading}
                              </h4>

                              <ul className="space-y-3">
                                {column.links.map((link) => (
                                  <li key={link.label}>
                                    <Link
                                      href={link.href}
                                      className="text-[14px] text-[#4b4b4b]"
                                      onClick={() => {
                                        setMobileOpen(false);
                                        setMobileExpanded(null);
                                      }}
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/login"
                  className="inline-flex h-11 items-center justify-center rounded-[10px] border border-[#d9d9d9] px-5 text-[14px] font-medium text-[#333]"
                  onClick={() => setMobileOpen(false)}
                >
                  Log in
                </Link>

                <Link
                  href="/partner-with-us"
                  className="inline-flex h-11 items-center justify-center rounded-[10px] bg-gradient-to-r from-[#263788] via-[#101638] to-[#263788] px-5 text-[14px] font-medium text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Partner With Us
                </Link>

                <LanguageSwitcher locale={locale} />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}