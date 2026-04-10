import { getDictionary } from "@/i18n/request";
import EventHero from "./components/HeroSection";
import KeyBenefitsSection from "./components/KeyBenefits";
import EventScheduleSection from "./components/EventSchedule";
import SpeakersSection from "./components/Speakers";
import ReviewsSection from "../components/common/ReviewsSection";
import { fetchStrapiCollection, mapStrapiLocale } from "@/lib/strapi";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "eventsAndExhibitions",
    dict,
    path: "events-and-exhibitions",
    fallbackTitle: "Events and Exhibitions - GTC FX",
    fallbackDescription: "Explore our upcoming events and exhibitions.",
  });
}

async function getEventsData(locale) {
  const mappedLocale = mapStrapiLocale(locale);

  const loadByLocale = async (loc) => {
    try {
      const res = await fetchStrapiCollection("comments", {
        locale: loc,
        populate: "*",
        sort: "createdAt:desc",
        params: {
          "pagination[start]": 0,
          "pagination[limit]": 500,
        },
        cache: "no-store",
      });
      return Array.isArray(res?.data) ? res : { data: [] };
    } catch (error) {
      console.error("[ifx-event-2026] Strapi events fetch failed:", error?.message || error);
      return { data: [] };
    }
  };

  let res = await loadByLocale(mappedLocale);
  if ((!res?.data || res.data.length === 0) && mappedLocale !== "en") {
    res = await loadByLocale("en");
  }

  return res;
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const eventsData = await getEventsData(locale);

  return (
    <>
      <EventHero messages={dict} />
      <KeyBenefitsSection />
      <EventScheduleSection eventsData={eventsData ?? { data: [] }} events={eventsData?.data ?? []} />
      <SpeakersSection />
      <ReviewsSection />
      {/* other sections */}
    </>
  );
}
