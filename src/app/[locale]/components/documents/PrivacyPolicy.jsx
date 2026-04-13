"use client";

const policySections = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    type: "info",
    content: [
      "GTCFX needs to collect personal information from clients and prospective clients in order to provide products, services, and relevant information.",
      "Your privacy is very important to us, and we make it our priority to safeguard and secure confidential information relating to individuals.",
      "This Privacy Policy explains the measures GTCFX takes to collect, use, and manage personal information received from you or from third parties in relation to the products and services we provide.",
      "This Privacy Policy also outlines your rights in relation to the processing of your personal information.",
      "Our Privacy Policy is reviewed and updated regularly in order to comply with applicable data protection laws and privacy regulations.",
    ],
  },
  {
    id: "who-we-are",
    number: "02",
    title: "Who We Are",
    type: "info",
    content: [
      "For the purposes of this Privacy Policy, GTCFX includes GTC Global Trade Capital Co. Ltd and GTC Global Ltd.",
      "GTC Global Trade Capital Co. Ltd is a Financial Dealer registered in the Republic of Vanuatu and authorized by the Vanuatu Financial Services Commission with license number 40354.",
      "GTC Global Ltd is an investment dealer registered in Mauritius and authorized by the Financial Services Commission Mauritius with license number GB22200292.",
      "These entities operate under the GTCFX brand in accordance with their respective regulatory authorizations.",
    ],
  },
  {
    id: "privacy-protection",
    number: "03",
    title: "Privacy Protection",
    type: "highlight",
    content: [
      "GTCFX respects the privacy of all users who access its website and is committed to taking all reasonable steps to safeguard the privacy and confidential information of all clients and website visitors.",
      "We train our staff on the importance of protecting and respecting personal information and privacy.",
      "We have appointed a Data Protection Officer to help ensure that personal data is managed and processed in compliance with applicable laws and this Privacy Policy.",
      "Registered information is protected in several different ways and is only accessible by authorized staff.",
      "You are responsible for making sure your password remains confidential and is not disclosed to anyone else.",
      "Please note that although we take significant precautions to protect personal data, the transfer of information via the internet is not always entirely secure.",
    ],
    highlight:
      "Your personal data is stored under controlled access measures, and only authorized personnel may access registered information.",
  },
  {
    id: "personal-information-we-collect",
    number: "04",
    title: "Personal Information We Collect",
    type: "info",
    content: [
      "As part of the account opening and application process, you may be required to submit personal information so that we can assess your application and comply with legal and regulatory requirements.",
      "The information we may collect includes your full name, residential address, contact details, date of birth, place of birth, gender, and citizenship.",
      "We may collect information about your income and wealth, including source of funds, assets and liabilities, bank account information, trading statements, and financial statements.",
      "We may collect trading account balances, trading activity, inquiries, and our responses.",
      "We may collect profession and employment details, authentication data such as your signature, location data, and information about your trading performance, knowledge, and experience.",
      "We may collect verification information required to verify your identity, including passport, driver’s license, public record information, identification numbers, passport numbers, or tax registration numbers.",
      "We may also collect any other information customarily used to identify you and relevant to the services we provide to you.",
      "We obtain this information through your use of our services, websites, apps, account opening forms, demo account forms, customer support communications, payment providers, and publicly available sources.",
      "We also keep records of your trading behavior, including products traded, their performance, historical trade data, invested amounts, and product or service preferences.",
      "If you choose not to provide information that is necessary for a requested product or service, we may not be able to provide that product or service.",
      "We may record communications with you, whether electronic, by telephone, in person, or otherwise, in relation to our services and business relationship. These recordings are our property and may serve as evidence of communications between us.",
    ],
  },
  {
    id: "processing-of-your-personal-information",
    number: "05",
    title: "Processing of Your Personal Information",
    type: "info",
    content: [
      "We may process your personal data for the performance of a contract in order to provide products, services, onboarding, account acceptance, and account management.",
      "We may process your personal data in order to comply with legal obligations, including anti-money laundering laws, financial services laws, corporation laws, privacy laws, tax laws, and regulatory reporting obligations.",
      "We may process your personal information in order to safeguard legitimate interests pursued by us or by a third party, including risk management, product development, legal claims, IT security, asset security, access control, and anti-trespassing measures.",
      "We may process personal data on the basis of your consent where consent is required. You may revoke consent at any time, although previous lawful processing will not be affected.",
      "Once you open an account or subscribe to updates, we may use your personal information to provide products and services, review your ongoing needs, and help ensure we offer you the most suitable products and services available from us.",
      "We may use your personal information to investigate or settle enquiries or disputes in a timely and efficient manner.",
      "We may process your personal information to comply with applicable laws, court orders, judicial processes, or the requirements of any applicable regulatory authority.",
      "Our webpages and emails may contain web beacons, pixel tags, or similar tools that allow us to track receipt of communications, count website visitors, and measure the effectiveness of our content and communications.",
      "We may aggregate your personal information with the information of other clients on an anonymous basis for analysis, research, and market relevance.",
      "We may use your personal information for marketing purposes by email, phone, SMS, or other channels in order to keep you informed about our latest products and services.",
      "We may use personal data for internal business purposes, research, and record keeping, including the maintenance of records relating to communications and contractual obligations.",
      "We may send you legal or service-related notifications, including changes to products, services, features, or legal terms, even if you choose not to receive direct marketing communications.",
      "If you enter any of our premises, we may record your image on CCTV and record entry details for physical security reasons.",
    ],
  },
  {
    id: "disclosure-of-your-personal-information",
    number: "06",
    title: "Disclosure of Your Personal Information",
    type: "warning",
    content: [
      "GTCFX will not disclose client confidential information to a third party except where required by applicable law, rule, or regulation, where there is a duty to disclose, where legitimate business interests require disclosure, or at your request or with your consent.",
      "Disclosures are made on a need-to-know basis unless otherwise instructed by a regulatory authority.",
      "We may disclose your personal information to companies within GTCFX, including holding companies and subsidiaries.",
      "We may disclose personal data to associates, service providers, business service providers, and specialist advisers providing administrative, financial, legal, tax, compliance, insurance, research, or other services.",
      "We may disclose personal data to business introducers with whom we have a mutual business relationship.",
      "We may disclose personal data to business parties, credit providers, courts, tribunals, regulatory authorities, and anyone authorized by you.",
      "Where personal information is disclosed to payment processing companies, banks, or other business parties in connection with services requested by clients, those parties may store the information in order to comply with their own legal and operational obligations.",
      "Clients acknowledge and accept that GTCFX may analyze collected data for statistical purposes in order to improve business activities.",
    ],
  },
  {
    id: "transfers-outside-eea",
    number: "07",
    title: "Transfers Outside the EEA",
    type: "info",
    content: [
      "We may transfer your personal information outside the European Economic Area to other GTCFX companies and to service providers engaged on our behalf.",
      "Where we transfer your data outside the EEA, we will ensure that the transfer is lawful and that appropriate safeguards are in place in accordance with GDPR Article 46 or comparable legal requirements.",
      "By submitting your personal data, you consent to the processing of your information by GTCFX staff operating outside the EEA where necessary for the fulfillment of your requests, the processing of payment details, or the provision of support services.",
      "We take all reasonably necessary steps to ensure that your data is treated securely and in accordance with this Privacy Policy.",
    ],
  },
  {
    id: "your-collected-information",
    number: "08",
    title: "Tracking, Device Data and Cookies",
    type: "highlight",
    content: [
      "Tracking systems used on GTCFX websites may collect personal data in order to optimize the services provided to clients and prospective clients.",
      "We may collect device information to recognize the device used to access our websites and to provide the most appropriate version of the website.",
      "We may collect log information in order to track user actions and troubleshoot issues.",
      "We may collect location information based on your IP address in order to localize website content and improve user experience.",
      "Cookies are small pieces of data sent from our websites to your browser and stored on your device in order to provide a more relevant and personalized experience.",
      "Cookies may help present webpages according to your needs or preferences and improve overall browsing efficiency.",
      "You may not be able to access certain secure parts of our websites, including account areas, if you disable cookie acceptance.",
      "We may use remarketing features and third-party vendors to display ads to users who have previously visited our websites and shown interest in our products or services.",
      "GTCFX uses both session cookies and persistent cookies. Session cookies expire after a set period or when the browser is closed, while persistent cookies remain on your device for a longer period.",
      "For additional details about how cookies work, clients should refer to our Cookies Policy.",
    ],
    highlight:
      "Cookies, tracking systems, device recognition, and log information help improve security, personalization, support, and website performance.",
  },
  {
    id: "how-we-obtain-your-consent",
    number: "09",
    title: "How We Obtain Your Consent",
    type: "info",
    content: [
      "Where our use of your personal information requires your consent, such consent may be provided under the written terms governing our business relationship, under another contract with you, or through our communications with you.",
      "If we rely on your consent as the legal basis for holding and processing your personal information, you have the right to withdraw that consent at any time by contacting us using the contact details set out in this Privacy Policy.",
    ],
  },
  {
    id: "storage-and-retention",
    number: "10",
    title: "Storage of Your Personal Information and Retention Period",
    type: "info",
    content: [
      "We store personal information in secure computer systems, paper-based files, and other records, and we take measures to protect it from misuse, loss, unauthorized access, modification, or disclosure.",
      "We retain personal information for as long as we have a business relationship with you and for as long as necessary to fulfill legal, regulatory, and business requirements.",
      "When personal information is no longer required for the purpose for which it was collected, we will remove identifying details or securely destroy the records where appropriate.",
      "We may need to retain certain records for a significant period after the business relationship ends.",
      "For example, anti-money laundering laws may require us to retain copies of due diligence documents, supporting evidence, and records of transactions for at least 5 years after the relationship has ended.",
      "Recorded communications may also be retained in accordance with local regulatory requirements, typically for 5 years after the relationship ends, or longer where legitimate interests apply, such as the handling of a dispute.",
      "If you opt out of receiving marketing communications, we may retain your details on a suppression list so we know not to send you such communications.",
      "We may retain data for longer than 5 years if it cannot be deleted for legal, regulatory, or technical reasons.",
    ],
  },
  {
    id: "your-rights",
    number: "11",
    title: "Your Rights Regarding Your Personal Information",
    type: "gold",
    content: [
      "You have the right to request information about what personal data we process and to obtain a copy of that personal information within 30 days of your request, subject to possible administration fees for additional copies.",
      "You have the right to request rectification of inaccurate or incomplete personal information. Where possible, we will notify other recipients of the correction.",
      "You may request erasure of your personal information in certain circumstances, such as where we no longer need it or where consent is withdrawn, subject to our legal and regulatory retention obligations.",
      "You may request restriction of processing in certain circumstances, such as where you contest accuracy or object to processing.",
      "Under applicable law, including GDPR where relevant, you may have the right to data portability in a structured, commonly used, and machine-readable format, and may ask us to transfer that data to a third party where applicable.",
      "You may object to processing based on legitimate interests, direct marketing, or certain research-related activities, except where compelling legal grounds apply.",
      "If you do not want us to use your personal information, you may notify us, although this may mean we are unable to continue providing you with requested services, products, or information.",
      "You may update your personal information by contacting us at support@gtcfx.com, and we may request supporting documents where necessary.",
    ],
    highlight:
      "You may have rights of access, correction, deletion, restriction, portability, objection, and consent withdrawal, subject to legal and regulatory requirements.",
  },
  {
    id: "legal-disclaimer",
    number: "12",
    title: "Legal Disclaimer",
    type: "warning",
    content: [
      "GTCFX may disclose personally identifiable information where required by rules, regulations, legal proceedings, court orders, legal process, or governmental, intergovernmental, or regulatory bodies.",
      "GTCFX is not liable for the misuse or loss of personal information on websites or systems that GTCFX does not access or control.",
      "GTCFX is not liable for unlawful or unauthorized use of personal information resulting from misuse or misplacement of passwords, negligent or malicious intervention, or acts or omissions by you or a person authorized by you.",
    ],
  },
  {
    id: "how-to-contact-us",
    number: "13",
    title: "How to Contact Us",
    type: "info",
    content: [
      "If you have any questions or concerns regarding this Privacy Policy, please contact us by email.",
      "Email: support@gtcfx.com",
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
            Privacy Policy
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

export default function PrivacyPolicyPage() {
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
              Data Protection & Privacy
            </div>

            <h2 className="HeadingH2">
              Privacy <span className="text-secondary">Policy</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Important information regarding how we collect, use, process,
              store, protect, share, and retain your personal information, as
              well as the rights available to you.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[28px] border border-[#DCE7F8] bg-white/90 p-6 shadow-[0_12px_32px_rgba(15,59,140,0.06)] backdrop-blur md:p-8">
              <h2 className="text-xl font-semibold text-slate-900">
                About This Policy
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-slate-700">
                This Privacy Policy explains how GTCFX handles personal
                information in relation to its products, services, websites,
                applications, communications, and regulatory obligations.
              </p>
              <p className="mt-4 text-[15px] leading-8 text-slate-700">
                It also explains the legal bases on which we process your data,
                the parties with whom information may be shared, how long
                records may be retained, and the rights you may exercise in
                relation to your personal information.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#E7D4AE] bg-[linear-gradient(180deg,#FFFDF8_0%,#FFF7EA_100%)] p-6 shadow-[0_12px_32px_rgba(182,135,86,0.10)]">
              <div className="mb-3 inline-flex rounded-full bg-[#B68756] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                Key Notice
              </div>

              <div className="space-y-3">
                {[
                  "We collect personal data to provide services and meet legal obligations.",
                  "Your information may be shared only where lawful, necessary, or authorized.",
                  "We apply controls to protect confidentiality and restrict access.",
                  "Certain records may be retained for at least 5 years due to regulation.",
                  "You may have rights of access, correction, deletion, objection, and more.",
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
                    Contact support for privacy or data protection questions
                  </h2>

                  <p className="mt-3 max-w-2xl text-[15px] leading-8 text-slate-600">
                    If you need clarification regarding personal data
                    processing, disclosure, retention, your rights, or consent,
                    please contact the support team before proceeding.
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
                    href="#introduction"
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
