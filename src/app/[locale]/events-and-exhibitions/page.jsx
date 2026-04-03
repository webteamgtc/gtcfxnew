import { getDictionary } from "@/i18n/request";
import EventHero from "./components/HeroSection";
import KeyBenefitsSection from "./components/KeyBenefits";
import EventScheduleSection from "./components/EventSchedule";
import SpeakersSection from "./components/Speakers";
import ReviewsSection from "../components/common/ReviewsSection";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.metadata || {};
  return {
    title: meta.aboutTitle ?? "About - GTC FX",
    description: meta.aboutDescription,
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const about = dict.about || {};

  return (
    <>
      <EventHero /> 
      <KeyBenefitsSection />
     
      <SpeakersSection />
      <ReviewsSection />
      
   
  

      {/* other sections */}
    </>
  );
}
