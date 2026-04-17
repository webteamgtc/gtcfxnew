
import TradingProductSections from "./TradingProductSections";
import TradingHeroSection from "./TradingHeroSection";

export default function TradingProductView({ locale, product }) {
  return (
    <>
      <TradingHeroSection
        bottomItems={product?.bottomItems}
        title={product.bannerTitle}
        description={product.bannerDescription}
        backgroundImage={""}
        mobileBackgroundImage={""}
      />
      <TradingProductSections locale={locale} product={product} />
    </>
  );
}
