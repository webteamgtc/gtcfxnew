"use client";

const policySections = [
  {
    id: "cookies-overview",
    number: "01",
    title: "Cookies",
    type: "info",
    content: [
      "Cookies are text files containing a small amount of information that are downloaded to your device when you visit a website.",
      "They enable us to recognize your computer when you return to one of our websites.",
      "Cookies are an essential tool used to keep our websites functioning correctly and securely.",
      "We also use cookies to make browsing quicker, easier, and more personalized, and to present more tailored advertising content.",
      "Some cookies are session cookies, which are stored temporarily while you browse the website.",
      "Other cookies are persistent cookies, which help websites remember returning visitors and display more relevant content and advertising.",
    ],
  },
  {
    id: "use-of-cookies",
    number: "02",
    title: "Use of Cookies",
    type: "highlight",
    content: [
      "Cookies are primarily used on our websites to enable you to log in and access secure functionality.",
      "They help save time and facilitate future access to the website.",
      "They assist us in understanding how users navigate through our website so we can improve our services, content, and communications.",
      "They may be used to collect and share device data in order to detect and prevent fraud and money laundering.",
      "They also help identify account and device irregularities and detect fraudulent transactions or abuse of our services.",
      "GTCFX may place cookies on your device to store information such as username, password, personal details, email address, and technical device information including model and IP address.",
      "This allows your browser to identify you as a user so you do not need to re-enter certain information each time you visit the website.",
      "These cookies cannot be used to run programs or deliver viruses to your device and can only be read by the web server that placed them.",
      "You may change your browser settings at any time to block some or all cookies from GTCFX, although doing so may affect website functionality.",
    ],
    highlight:
      "Blocking cookies may limit or prevent certain website features from functioning as intended.",
  },
  {
    id: "essential-cookies",
    number: "03",
    title: "Essential Cookies",
    type: "info",
    content: [
      "Essential cookies make our websites work correctly and securely.",
      "They allow you to browse the website and access secure areas.",
      "They help deliver content in the best format for your device.",
      "They allow smooth navigation throughout our websites.",
      "They keep you logged in so you do not have to log in repeatedly while using our site.",
      "If you disable these cookies, parts of the website may not work correctly or may not work at all.",
    ],
  },
  {
    id: "fraud-prevention-aml",
    number: "04",
    title: "Abuse, Fraud Prevention and AML",
    type: "warning",
    content: [
      "GTCFX must comply with local and international laws relating to the prevention of fraud and money laundering.",
      "These cookies help us protect both users and the business by verifying that users are genuine.",
      "They assist in identifying users who may have registered multiple accounts or are attempting unauthorized access.",
      "They help us recognize behavior that may indicate fraud, money laundering, illegal activity, or breaches of our terms and conditions.",
      "If you disable these cookies, you may not be able to use our websites.",
      "If you do not wish to accept this type of cookie, your only option may be to close your account and/or stop using our services.",
    ],
  },
  {
    id: "functionality-cookies",
    number: "05",
    title: "Functionality Cookies",
    type: "highlight",
    content: [
      "Functionality cookies allow us to remember choices you have made, such as your username.",
      "They help keep you logged in while you navigate through our websites.",
      "They enable you to use certain features, such as resetting your password.",
      "They also help us personalize your user experience across our websites.",
      "If you disable these cookies, you may still use the site, but certain features may not work as intended and you may need to log in repeatedly.",
      "You may also no longer see content that is relevant to you.",
    ],
    highlight:
      "Functionality cookies improve convenience and personalization, but the site can still be used if they are disabled.",
  },
  {
    id: "analytical-cookies",
    number: "06",
    title: "Analytical Cookies",
    type: "info",
    content: [
      "Analytical cookies collect information about how users and visitors use our websites and how the sites are performing.",
      "They may record metrics such as daily visits, popular pages, and whether users encounter error messages.",
      "They help us identify trends in how people use our website.",
      "They allow us to keep our content relevant and up to date.",
      "They count how often a page or email has been viewed and help us measure the effectiveness of our content and communication.",
      "They also help improve the performance and functioning of our applications and websites.",
      "These cookies may also assist us in correctly attributing referrals from marketing partners.",
      "If you disable these cookies, you will still be able to use and enjoy the online features of our websites.",
    ],
  },
  {
    id: "targeting-cookies",
    number: "07",
    title: "Targeting Cookies",
    type: "gold",
    content: [
      "Targeting cookies are used to deliver adverts and content that are more relevant to you.",
      "They help limit the number of times you see a particular advertisement.",
      "They help measure the effectiveness of advertising campaigns.",
      "These cookies remember that you have visited our website.",
      "We may share this information with other organizations for advertising purposes.",
      "They are also used to test and improve our products and services.",
      "If you disable these cookies, you will still be able to use the website, but the advertisements you see may not be tailored to your interests.",
    ],
    highlight:
      "Targeting cookies help personalize adverts and measure campaign performance, but are not required for general website access.",
  },
  {
    id: "manage-cookies",
    number: "08",
    title: "Manage Cookies",
    type: "info",
    content: [
      "Most browsers are preset to accept cookies by default.",
      "You can adjust your browser settings to prevent cookies or to notify you when cookies are being loaded.",
      "However, blocking all cookies may prevent you from accessing or using some features of GTCFX.",
    ],
  },
];

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 3l7 3v5c0 4.5-2.9 8.4-7 10-4.1-1.6-7-5.5-7-10V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12.2 11.3 14l3.7-3.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 9v4m0 3h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 8h.01M11 12h1v4h1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M20 7 10 17l-4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M5 12h14m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function getSectionStyles(type) {
  if (type === "warning") {
    return {
      iconWrap: "bg-[#FFF4F4] text-[#C26B6B]",
      bullet: "text-[#C26B6B]",
      highlightBox: "border-[#F3D2D2] bg-[#FFF7F7]",
      highlightIcon: "text-[#C26B6B]",
    };
  }

  if (type === "highlight") {
    return {
      iconWrap: "bg-[#EFF4FF] text-[#0F3B8C]",
      bullet: "text-[#0F3B8C]",
      highlightBox: "border-[#DCE7F8] bg-[#F8FBFF]",
      highlightIcon: "text-[#0F3B8C]",
    };
  }

  if (type === "gold") {
    return {
      iconWrap: "bg-[#FFF8EA] text-[#B68756]",
      bullet: "text-[#B68756]",
      highlightBox:
        "border-[#E7D4AE] bg-[linear-gradient(180deg,#FFFDF8_0%,#FFF7EA_100%)]",
      highlightIcon: "text-[#B68756]",
    };
  }

  return {
    iconWrap: "bg-[#EFF4FF] text-[#0F3B8C]",
    bullet: "text-[#0F3B8C]",
    highlightBox: "border-[#DCE7F8] bg-[#F8FBFF]",
    highlightIcon: "text-[#0F3B8C]",
  };
}

function ContentsCard({ items }) {
  return (
    <aside className="lg:sticky lg:top-24">
      <div className="rounded-[28px] border border-[#DCE7F8] bg-white p-5 shadow-[0_12px_32px_rgba(15,59,140,0.06)]">
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0F3B8C]">
            Contents
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">
            Cookie Policy
          </h3>
        </div>

        <div className="space-y-3">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group flex items-center justify-between rounded-2xl border border-[#E5ECF7] bg-[#FCFDFF] px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0F3B8C]/30 hover:bg-[#F5F9FF] hover:text-[#0F3B8C]"
            >
              <span className="flex items-center gap-3">
                <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-lg bg-[#EFF4FF] px-2 text-xs font-semibold text-[#0F3B8C]">
                  {item.number}
                </span>
                <span>{item.title}</span>
              </span>

              <span className="text-[#0F3B8C] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ArrowRightIcon />
              </span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

function PolicySectionCard({ section }) {
  const styles = getSectionStyles(section.type);

  return (
    <section
      id={section.id}
      className="scroll-mt-28 rounded-[28px] border border-[#DCE7F8] bg-white p-6 shadow-[0_12px_32px_rgba(15,59,140,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0F3B8C]/25 hover:shadow-[0_18px_46px_rgba(15,59,140,0.10)] md:p-8"
    >
      <div className="mb-6 flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${styles.iconWrap}`}
        >
          {section.type === "warning" ? (
            <AlertIcon />
          ) : section.type === "gold" ? (
            <InfoIcon />
          ) : section.type === "highlight" ? (
            <ShieldIcon />
          ) : (
            <ShieldIcon />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center gap-3">
            <span className="inline-flex rounded-full bg-[#0F3B8C] px-3 py-1 text-xs font-semibold tracking-[0.16em] text-white">
              {section.number}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-[#D8E4F8] to-transparent" />
          </div>

          <h2 className="HeadingH5">{section.title}</h2>
        </div>
      </div>

      {section.highlight && (
        <div className={`mb-6 rounded-2xl border p-4 ${styles.highlightBox}`}>
          <div className="flex items-start gap-3">
            <div className={`mt-0.5 ${styles.highlightIcon}`}>
              <InfoIcon />
            </div>
            <p className="text-sm leading-7 text-slate-700">{section.highlight}</p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {section.content.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`mt-1 ${styles.bullet}`}>
              <CheckIcon />
            </div>
            <p className="text-[15px] leading-8 text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function CookiePolicy() {
  return (
    <div className="bg-[linear-gradient(180deg,#F4F8FF_0%,#FFFFFF_35%,#F8FBFF_100%)]">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#0F3B8C]/8 blur-3xl" />
          <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-[#B68756]/10 blur-3xl" />
        </div>

        <div className="container pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9E5F7] bg-white/80 px-4 py-2 text-sm font-medium text-[#0F3B8C] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#B68756]" />
              Website Data & Preferences
            </div>

            <h2 className="HeadingH2">
              Cookie <span className="text-secondary">Policy</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Important information regarding how cookies are used on our
              websites, including essential functions, fraud prevention,
              analytics, personalization, and cookie management options.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[28px] border border-[#DCE7F8] bg-white/90 p-6 shadow-[0_12px_32px_rgba(15,59,140,0.06)] backdrop-blur md:p-8">
              <h2 className="text-xl font-semibold text-slate-900">
                About This Policy
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-slate-700">
                This Cookie Policy explains what cookies are, how GTCFX uses
                them, and how they support website functionality, user
                experience, security, analytics, and advertising relevance.
              </p>
              <p className="mt-4 text-[15px] leading-8 text-slate-700">
                You may manage your cookie preferences through your browser
                settings, although disabling certain cookies may affect the
                functionality of our websites and services.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#E7D4AE] bg-[linear-gradient(180deg,#FFFDF8_0%,#FFF7EA_100%)] p-6 shadow-[0_12px_32px_rgba(182,135,86,0.10)]">
              <div className="mb-3 inline-flex rounded-full bg-[#B68756] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                Key Notice
              </div>

              <div className="space-y-3">
                {[
                  "Cookies help our websites function correctly and securely.",
                  "Some cookies are essential for login, navigation, and fraud prevention.",
                  "Disabling certain cookies may affect website performance or account access.",
                  "Analytical and targeting cookies help improve content and user experience.",
                  "Cookie preferences can be managed through browser settings.",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 text-[#B68756]">
                      <CheckIcon />
                    </div>
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
          <ContentsCard items={policySections} />

          <div className="space-y-6 md:space-y-8">
            {policySections.map((section) => (
              <PolicySectionCard key={section.id} section={section} />
            ))}

            <section className="rounded-[28px] border border-[#DCE7F8] bg-white p-6 shadow-[0_12px_32px_rgba(15,59,140,0.06)] md:p-8">
              <div className="grid gap-6 md:grid-cols-1 md:items-center">
                <div>
                  <div className="mb-3 inline-flex rounded-full bg-[#EFF4FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F3B8C]">
                    Need Assistance?
                  </div>

                  <h2 className="HeadingH4">
                    Contact support for cookie or website privacy questions
                  </h2>

                  <p className="mt-3 max-w-2xl text-[15px] leading-8 text-slate-600">
                    If you need clarification regarding website cookies,
                    essential functionality, fraud prevention controls, or how
                    to manage cookie preferences, please contact the support
                    team before proceeding.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-2xl bg-[#0F3B8C] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B2F70]"
                  >
                    Contact Support
                  </a>

                  <a
                    href="#cookies-overview"
                    className="inline-flex items-center justify-center rounded-2xl border border-[#D6E2F4] bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0F3B8C]/30 hover:text-[#0F3B8C]"
                  >
                    Back to Top
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
