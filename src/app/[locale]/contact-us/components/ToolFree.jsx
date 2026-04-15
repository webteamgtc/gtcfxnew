"use client";
import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { RiGlobalFill } from "react-icons/ri";
import { usePathTranslation } from "../../LocaleProvider";
const ToolFreeContact = ({ messages = {} }) => {
  const tAbout = usePathTranslation("about.contact-us");
  const tToolFree = usePathTranslation("contactUsToolFree");
  const text = (key, fallback) => {
    const fromAbout = tAbout(key, "");
    if (typeof fromAbout === "string" && fromAbout.trim().length > 0) {
      return fromAbout;
    }
    const fromMessages = messages?.[key];
    if (typeof fromMessages === "string" && fromMessages.trim().length > 0) {
      return fromMessages;
    }
    return tToolFree(key, fallback);
  };
  // Define an array of toll-free numbers with corresponding country flags and phone numbers
  const tollFreeNumbers = [
    {
      countryCode: "AE",
      phoneNumber: "800 667788",
      link: "tel:+971800667788",
      type: "global",
    },
   
    {
      countryCode: "CO",
      phoneNumber: "601 5086 288",
      link: "tel:+576015086288",
      type: "local",
    },
    {
      countryCode: "BR",
      phoneNumber: "213 5002 665",
      link: "tel:+552135002665",
      type: "local",
    },
    {
      countryCode: "SG",
      phoneNumber: "315 816 89",
      link: "tel:+6531581689",
      type: "local",
    },
    {
      countryCode: "IN",
      phoneNumber: "11 7181 6797",
      link: "tel:+911171816797",
      type: "local",
    },
  ];

  // Separate the toll-free numbers into global and local
  const globalTollFreeNumbers = tollFreeNumbers.filter(item => item.type === "global");
  const localTollFreeNumbers = tollFreeNumbers.filter(item => item.type === "local");

  const whatsapp = {
    label: text("live_chat", "Contact Us Via WhatsApp"),
    number: text("whatsappNumber", "+44 800 048 8461"),
    href: text("whatsappHref", "https://wa.me/448000488461"),
  };

  const globalPrimary = globalTollFreeNumbers[0] ?? tollFreeNumbers[0];
  const globalCall = {
    label: text("globalHeading", "Call Us Global Toll Free"),
    number: text("phone", text("globalPrimaryNumber", globalPrimary?.phoneNumber ?? "800 667788")),
    href: text("globalPrimaryHref", globalPrimary?.link ?? "tel:+971800667788"),
  };

  return (
    <section className="main-content">
      <div className=" mt-8">
        <div className="rounded-2xl bg-gray-100/80 px-4 py-4 md:px-8 md:py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-10">
            <Link
              href={whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center gap-4 rounded-2xl bg-white/60 px-5 py-4 transition hover:bg-white hover:shadow-sm"
            >
          <p className="text-green-500 text-4xl md:text-4xl">
                <FaWhatsapp />
              </p>
              <span className="min-w-0">
                <span className="block truncate HeadingH5">
                  {whatsapp.label}
                </span>
                <span className="block truncate pt-0.5 TextSmall">
                  {whatsapp.number}
                </span>
              </span>
            </Link>

            <Link
              href={globalCall.href}
              className="flex flex-1 items-center gap-4 rounded-2xl bg-white/60 px-5 py-4 transition hover:bg-white hover:shadow-sm"
            >
            <p className="text-secondary text-4xl md:text-5xl">
                <RiGlobalFill />
              </p>
              <span className="min-w-0">
                <span className="block truncate HeadingH5">
                  {globalCall.label}
                </span>
                <span className="block truncate pt-0.5 TextSmall">
                  {globalCall.number}
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolFreeContact;
