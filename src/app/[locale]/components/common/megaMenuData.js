import { translationText, translationTextByPath } from "@/i18n/tranlsationText";

const defaultNavText = {
  menu: {
    about: "About Us",
    account: "Account",
    trading: "Trading & Platform",
    prime: "Prime & Tech",
  },
  about: {
    lable: "About Us",
    firstcolumn: { heading: "Who We Are", option1: "About GTCFX", option2: "Why GTC Group", option3: "Regulations" },
    secondcolumn: { heading: "Company", option1: "Global Presence", option2: "Awards", option3: "Fund Security" },
    thirdcolumn: {
      heading: "Highlights",
      option1: "Market Insights",
      option2: "Company News",
      option3: "Earnings & Dividends Calendar",
      option4: "Economic Calendar & News",
      option5: "Trading Hours & Holidays",
    },
    fourthcolumn: { heading: "Get in Touch", option1: "Careers", option2: "Contact Us" },
  },
  account: {
    lable: "Account",
    firstcolumn: { heading: "Get Started", option1: "Open Live Account", option2: "Open Demo Account", option3: "Fund Your Account" },
    secondcolumn: { heading: "Accounts", option1: "Account Types" },
    thirdcolumn: { heading: "Events & Promotions", option1: "GTC Go App", option2: "Events & Exhibitions" },
    fourthcolumn: { heading: "Support", option1: "Glossary & FAQs", option2: "Tutorial Videos", option3: "Contact Us" },
  },
  trading: {
    lable: "Trading & Platform",
    firstcolumn: { heading: "Instruments", option1: "Forex CFDs", option2: "Energies CFDs", option3: "Commodities CFDs", option4: "Equity Indices CFDs", option5: "Metals CFDs" },
    secondcolumn: { heading: "Platforms", option1: "MT4 Trading Platform", option2: "MT5 Trading Platform", option3: "Download Trading Platform" },
    thirdcolumn: { heading: "Leverage & Swap", option1: "Dynamic Leverage", option2: "Swap Update", option3: "Swap-Free Trading at GTCFX" },
    fourthcolumn: { heading: "Partner with Us", option1: "IB Program", option2: "Affiliate Program", option3: "GTC Prime" },
  },
  prime: {
    lable: "Prime & Tech",
    firstcolumn: { heading: "Prime Services", option1: "Liquidity & Technology", option2: "Copy Trading" },
    secondcolumn: { heading: "Trading Tools", option1: "PAMM Account", option2: "MAM Account", option3: "VPS" },
    thirdcolumn: { heading: "Resources", option1: "Legal Documents", option2: "Restricted Countries", option3: "Margin Bonus", option4: "GTC AI Tools" },
    fourthcolumn: { heading: "Latest Offers", option1: "Golden Falcon Awards 2026", option2: "GTCVIP Loyalty Rewards" },
  },
};

const pick = (value, fallback) =>
  translationText("label", fallback, {
    label: typeof value === "string" ? value.trim() : value,
  });

export function getNavItems(navigation = {}) {
  return [
    {
      key: "about",
      label: translationTextByPath("menu.about", defaultNavText.menu.about, navigation),
    },
    {
      key: "account",
      label: translationTextByPath("menu.account", defaultNavText.menu.account, navigation),
    },
    {
      key: "trading",
      label: translationTextByPath("menu.trading", defaultNavText.menu.trading, navigation),
    },
    {
      key: "prime",
      label: translationTextByPath("menu.prime", defaultNavText.menu.prime, navigation),
    },
  ];
}

export function getMegaMenuData(navigation = {}) {
  const about = navigation?.about || {};
  const account = navigation?.account || {};
  const trading = navigation?.trading || {};
  const prime = navigation?.prime || {};

  return {
  about: {
    title: pick(about.lable, defaultNavText.about.lable),
    columns: [
      {
        heading: pick(about?.firstcolumn?.heading, defaultNavText.about.firstcolumn.heading),
        links: [
          { label: pick(about?.firstcolumn?.option1, defaultNavText.about.firstcolumn.option1), href: "/about-us" },
          { label: pick(about?.firstcolumn?.option2, defaultNavText.about.firstcolumn.option2), href: "/why-gtc-group" },
          { label: pick(about?.firstcolumn?.option3, defaultNavText.about.firstcolumn.option3), href: "/regulations" },
        ],
      },
      {
        heading: pick(about?.secondcolumn?.heading, defaultNavText.about.secondcolumn.heading),
        links: [
          { label: pick(about?.secondcolumn?.option1, defaultNavText.about.secondcolumn.option1), href: "/global-presence" },
          { label: pick(about?.secondcolumn?.option2, defaultNavText.about.secondcolumn.option2), href: "/awards" },
          { label: pick(about?.secondcolumn?.option3, defaultNavText.about.secondcolumn.option3), href: "/compensation-fund" },
        ],
      },
      {
        heading: pick(about?.thirdcolumn?.heading, defaultNavText.about.thirdcolumn.heading),
        links: [
          { label: pick(about?.thirdcolumn?.option1, defaultNavText.about.thirdcolumn.option1), href: "/blogs" },
          { label: pick(about?.thirdcolumn?.option2, defaultNavText.about.thirdcolumn.option2), href: "/company-news" },
          { label: pick(about?.thirdcolumn?.option3, defaultNavText.about.thirdcolumn.option3), href: "/earnings-calendar" },
          { label: pick(about?.thirdcolumn?.option4, defaultNavText.about.thirdcolumn.option4), href: "/economic-calendar" },
          { label: pick(about?.thirdcolumn?.option5, defaultNavText.about.thirdcolumn.option5), href: "/market-overview" },
        ],
      },
      {
        heading: pick(about?.fourthcolumn?.heading, defaultNavText.about.fourthcolumn.heading),
        links: [
          { label: pick(about?.fourthcolumn?.option1, defaultNavText.about.fourthcolumn.option1), href: "/careers" },
          { label: pick(about?.fourthcolumn?.option2, defaultNavText.about.fourthcolumn.option2), href: "/contact-us" },
        ],
      },
    ],
  },

  account: {
    title: pick(account.lable, defaultNavText.account.lable),
    columns: [
      {
        heading: pick(account?.firstcolumn?.heading, defaultNavText.account.firstcolumn.heading),
        links: [
          {
            label: pick(account?.firstcolumn?.option1, defaultNavText.account.firstcolumn.option1),
            href: "https://mygtcfx.com/getview?view=register&token=exhowww.z8owwwww",
            external: true,
          },
          { label: pick(account?.firstcolumn?.option2, defaultNavText.account.firstcolumn.option2), href: "/free-demo-account" },
          { label: pick(account?.firstcolumn?.option3, defaultNavText.account.firstcolumn.option3), href: "/deposit" },
        ],
      },
      {
        heading: pick(account?.secondcolumn?.heading, defaultNavText.account.secondcolumn.heading),
        links: [
          { label: pick(account?.secondcolumn?.option1, defaultNavText.account.secondcolumn.option1), href: "/account-types" },
        ],
      },
      {
        heading: pick(account?.thirdcolumn?.heading, defaultNavText.account.thirdcolumn.heading),
        links: [
          { label: pick(account?.thirdcolumn?.option1, defaultNavText.account.thirdcolumn.option1), href: "/gtc-go-app" },
          { label: pick(account?.thirdcolumn?.option2, defaultNavText.account.thirdcolumn.option2), href: "/events-and-exhibitions" },
        ],
      },
      {
        heading: pick(account?.fourthcolumn?.heading, defaultNavText.account.fourthcolumn.heading),
        links: [
          { label: pick(account?.fourthcolumn?.option1, defaultNavText.account.fourthcolumn.option1), href: "/glossary-faqs" },
          { label: pick(account?.fourthcolumn?.option2, defaultNavText.account.fourthcolumn.option2), href: "/tutorial-videos" },
          { label: pick(account?.fourthcolumn?.option3, defaultNavText.account.fourthcolumn.option3), href: "/contact-us" },
        ],
      },
    ],
  },

  trading: {
    title: pick(trading.lable, defaultNavText.trading.lable),
    columns: [
      {
        heading: pick(trading?.firstcolumn?.heading, defaultNavText.trading.firstcolumn.heading),
        links: [
          { label: pick(trading?.firstcolumn?.option1, defaultNavText.trading.firstcolumn.option1), href: "/forex" },
          { label: pick(trading?.firstcolumn?.option2, defaultNavText.trading.firstcolumn.option2), href: "/cfd-energy" },
          { label: pick(trading?.firstcolumn?.option3, defaultNavText.trading.firstcolumn.option3), href: "/commodities" },
          { label: pick(trading?.firstcolumn?.option4, defaultNavText.trading.firstcolumn.option4), href: "/indices" },
          { label: pick(trading?.firstcolumn?.option5, defaultNavText.trading.firstcolumn.option5), href: "/precious-metals" },
        ],
      },
      {
        heading: pick(trading?.secondcolumn?.heading, defaultNavText.trading.secondcolumn.heading),
        links: [
          { label: pick(trading?.secondcolumn?.option1, defaultNavText.trading.secondcolumn.option1), href: "/mt4-platform" },
          { label: pick(trading?.secondcolumn?.option2, defaultNavText.trading.secondcolumn.option2), href: "/mt5-platform" },
          { label: pick(trading?.secondcolumn?.option3, defaultNavText.trading.secondcolumn.option3), href: "/download-app" },
        ],
      },
      {
        heading: pick(trading?.thirdcolumn?.heading, defaultNavText.trading.thirdcolumn.heading),
        links: [
          { label: pick(trading?.thirdcolumn?.option1, defaultNavText.trading.thirdcolumn.option1), href: "/dynamic-leverage" },
          { label: pick(trading?.thirdcolumn?.option2, defaultNavText.trading.thirdcolumn.option2), href: "/swap-update" },
          { label: pick(trading?.thirdcolumn?.option3, defaultNavText.trading.thirdcolumn.option3), href: "/swap-free-trading" },
        ],
      },
      {
        heading: pick(trading?.fourthcolumn?.heading, defaultNavText.trading.fourthcolumn.heading),
        links: [
          {
            label: pick(trading?.fourthcolumn?.option1, defaultNavText.trading.fourthcolumn.option1),
            href: "https://reg.gtcfx.com/uae/partners-campaign",
            external: true,
          },
          {
            label: pick(trading?.fourthcolumn?.option2, defaultNavText.trading.fourthcolumn.option2),
            href: "https://www.gtcaffiliates.com/",
            external: true,
          },
          {
            label: pick(trading?.fourthcolumn?.option3, defaultNavText.trading.fourthcolumn.option3),
            href: "https://gtcprime.com/", 
            external: true,
          },
        ],
      },
    ],
  },

  prime: {
    title: pick(prime.lable, defaultNavText.prime.lable),
    columns: [
      {
        heading: pick(prime?.firstcolumn?.heading, defaultNavText.prime.firstcolumn.heading),
        links: [
          { label: pick(prime?.firstcolumn?.option1, defaultNavText.prime.firstcolumn.option1), href: "/liquidity-technology" },
          { label: pick(prime?.firstcolumn?.option2, defaultNavText.prime.firstcolumn.option2), href: "/copy-trading" },
      
        ],
      },
     
      {
        heading: pick(prime?.secondcolumn?.heading, defaultNavText.prime.secondcolumn.heading),
        links: [
          { label: pick(prime?.secondcolumn?.option1, defaultNavText.prime.secondcolumn.option1), href: "/pamm-account" },
          { label: pick(prime?.secondcolumn?.option2, defaultNavText.prime.secondcolumn.option2), href: "/mam-account" },
          { label: pick(prime?.secondcolumn?.option3, defaultNavText.prime.secondcolumn.option3), href: "/vps-hosting-services" },
        ],
      },
       {
        heading: pick(prime?.thirdcolumn?.heading, defaultNavText.prime.thirdcolumn.heading),
        links: [
          { label: pick(prime?.thirdcolumn?.option1, defaultNavText.prime.thirdcolumn.option1), href: "/legal-policies-client-agreements" },
          { label: pick(prime?.thirdcolumn?.option2, defaultNavText.prime.thirdcolumn.option2), href: "/restricted-countries" },
          { label: pick(prime?.thirdcolumn?.option3, defaultNavText.prime.thirdcolumn.option3), href: "/margin-bonus" },
          { label: pick(prime?.thirdcolumn?.option4, defaultNavText.prime.thirdcolumn.option4), href: "https://ai.gtcfx.com/", external: true },
        ],
      },
       {
        heading: pick(prime?.fourthcolumn?.heading, defaultNavText.prime.fourthcolumn.heading),
        links: [
          {
            label: pick(prime?.fourthcolumn?.option1, defaultNavText.prime.fourthcolumn.option1),
            href: "https://falconawards.gtcfx.com/",
            external: true,
          },
        
          {
            label: pick(prime?.fourthcolumn?.option2, defaultNavText.prime.fourthcolumn.option2),
            href: "https://www.gtcvip.com/",
            external: true,
          },
        ],
      },
    ],
  },
};
}