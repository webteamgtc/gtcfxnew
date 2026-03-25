import Image from "next/image";
import Link from "next/link";

export default function MainFooter() {
  const footerColumns = [
    {
      title: "WHY TRADE WITH GTCFX",
      links: [
        { label: "Low Spreads & Fast Execution", href: "/" },
        { label: "Multiple Account Types", href: "/" },
        { label: "24/7 Customer Support", href: "/" },
        { label: "Deep Liquidity & No Requotes", href: "/" },
      ],
    },
    {
      title: "ACCOUNTS",
      links: [{ label: "Account Types", href: "/" }],
    },
    {
      title: "OUR OFFERING",
      links: [
        { label: "GTCFX Copy Trading", href: "/" },
        { label: "GTC Trading Competitions", href: "/" },
        { label: "GTC Traders Club | VIP Club", href: "/" },
        { label: "Refer a Friend", href: "/" },
      ],
    },
    {
      title: "PLATFORM",
      links: [
        { label: "MetaTrader 4 (MT4)", href: "/" },
        { label: "MetaTrader 5 (MT5)", href: "/" },
        { label: "GTC GO App", href: "/" },
      ],
    },
    {
      title: "ABOUT GTCFX",
      links: [
        { label: "About Us", href: "/" },
        { label: "Careers", href: "/" },
        { label: "Regulation & Licensing", href: "/" },
        { label: "Legal Documents", href: "/" },
        { label: "Awards & Recognition", href: "/" },
        { label: "Corporate Responsibility", href: "/" },
        { label: "Contact Us", href: "/" },
        { label: "Help center", href: "/" },
      ],
    },
  ];

 const socialLinks = [
  { icon: "/icons/fb.svg", href: "/" },
  { icon: "/icons/insta.svg", href: "/" },
  { icon: "/icons/x.svg", href: "/" },
  { icon: "/icons/youtube.svg", href: "/" },
  { icon: "/icons/linkedin.svg", href: "/" },
  { icon: "/icons/tiktok.svg", href: "/" },
  { icon: "/icons/tele.svg", href: "/" },
];

  const disclaimers = [
    "This website is owned and operated by GTC Global SA (Pty) Ltd, a private limited company incorporated in South Africa (Company Number: 2020/810937/07) and licensed by the Financial Sector Conduct Authority of South Africa (FSP No. 51545) to operate as an Intermediary. Registered Address: 18 Cavendish Road, Clarement, Cape Town, Western Cape, 7708, South Africa. The financial services and products promoted on this website are offered by GTC Global Trade Capital Co. Limited, a company authorised by the Vanuatu Financial Services Commission of the Republic of Vanuatu (Company License Number: 40354). Registered Address: 1/Floor, B&P House, Kumul Highway, Port Vila, Vanuatu.",
    "GTC Global SA (Pty) Ltd and GTC Global Trade Capital Co. Limited are part of the GTC Financial Group which comprises a network of entities across the globe.",
    "Investing in derivative products carries significant risks and may not be suitable for all investors. The use of leverage in these instruments can increase both the level of risk and potential for losses. Before making any decision to engage in foreign exchange trading or Contracts for Difference (CFDs), it is essential to carefully consider your investment objectives, level of experience, and risk tolerance. You should only invest funds that you can afford to lose. We strongly encourage you to educate yourself thoroughly on the associated risks and, if you have any questions, seek advice from an independent financial or tax advisor.",
    "GTC Global SA (Pty) Ltd and GTC Global Trade Capital Co. Limited do not provide services to individuals residing in specific jurisdictions and/or jurisdictions where distribution of such services would be contrary to local law or regulations.",
    "Each entity within the GTC Financial Group operates independently. The financial products and services offered on this website are provided SOLELY by GTC Global Trade Capital Co. Limited.",
  ];

  return (
    <footer className=" bg-[#F1F2F4] pt-16 pb-10">
      <div className="container">
        {/* Top row */}
        <div className="flex flex-col gap-6 border-b border-[#d9d9d9] pb-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="HeadingH3">
            Connecting you to global markets, anytime, anywhere.
          </h2>

          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-[#7d7d7d] transition hover:bg-white"
              >
                <img
                  src={item.icon}
                  alt="social icon"
                  className="h-[20px] w-[20px] object-contain"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid gap-8 border-b border-[#d9d9d9] py-10 md:grid-cols-2 xl:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.02em] text-[#2f2f2f]">
                {column.title}
              </h3>

              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="TextSmall text-[#4f4f4f] transition hover:text-primary"
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
        <div className="flex flex-col gap-6 border-b border-[#d9d9d9] py-2 md:flex-row md:items-center md:justify-between">
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

  <Link href="/" className="relative w-[140px] h-[42px]">
    <Image
      src="/icons/app.svg"
      fill
      alt="Download on the App Store"
      className="object-contain"
    />
  </Link>

  <Link href="/" className="relative w-[140px] h-[42px]">
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
                <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#5a5a5a]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 md:flex-row md:items-center bg-white text-center justify-center text-primary py-2 text-xs md:text-sm rounded-lg">
          © COPYRIGHT 2026 GTCFX - ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
