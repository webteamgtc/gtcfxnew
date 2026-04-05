
import TradingProductSections from "./TradingProductSections";
import TradingHeroSection from "./TradingHeroSection";

export default function TradingProductView({ locale, product }) {
  return (
    <>
      <TradingHeroSection
        title={product.bannerTitle}
        description={product.bannerDescription}
        backgroundImage={""}
        mobileBackgroundImage={""}
        rightImage={product.rightImage}
      />
      <TradingProductSections locale={locale} product={product} />
    </>
  );
}
