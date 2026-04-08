import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import AssetSection from "./components/AssetSection";
import WhoServeSection from "./components/WhoServe";
import WhatWeOfferSection from "./components/WhatWeOffer";
import Counter from "../components/common/home/Counter";
import DirectAccessSection from "./components/DirectAccess";
import LiquditySection from "./components/LiquditySection";

export default async function LiquidityTechnologyPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const copy = dict?.primeTech?.liquidityTechnologyPage || {};
  const directAccessCopy = dict?.primeTech?.directAccess || {};
  const assetData = [
    {
        name: copy.Chooseliquidity.option1.title,
        description: copy.Chooseliquidity.option1.desc,
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon1.webp",
        alt: "Forex"
    },
    {
      name: copy.Chooseliquidity.option2.title,
        description: copy.Chooseliquidity.option2.desc,
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon8.webp",
        alt: "Crypto CFDs"
    },
    {
      name: copy.Chooseliquidity.option3.title,
        description: copy.Chooseliquidity.option3.desc,
      imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon6.webp",
      alt: "Indices"
  },
    {
      name: copy.Chooseliquidity.option4.title,
      description: copy.Chooseliquidity.option4.desc,
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon3.webp",
        alt: "CFDs"
    },
    {
      name: copy.Chooseliquidity.option5.title,
      description: copy.Chooseliquidity.option5.desc,
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon4.webp",
        alt: "Commodities"
    },{
            name: copy.Chooseliquidity.option6.title,
      description: copy.Chooseliquidity.option6.desc,
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon5.webp",
        alt: "Indices"
    }
];
  return (
    <div>
        <InnerPageBanner
        // description= {`${copy.bannerText.heading}`}
        backgroundImage="/breadcamp/mt5.webp"
        mobileBackgroundImage="/breadcamp/mt5-mobile.webp"
      />
      <LiquditySection copy={copy} />
      <AssetSection assetData={assetData} title={copy?.Chooseliquidity?.title} />
      <WhoServeSection copy={copy} />
      <DirectAccessSection copy={directAccessCopy} />
      <Counter/>
      <WhatWeOfferSection copy={copy} />
    </div>
  );
}