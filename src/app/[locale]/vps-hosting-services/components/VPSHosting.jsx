import { translationText } from "@/i18n/tranlsationText";
 
export default function VPSHosting({ copy }) {
  const title = translationText(
    "understandingVps.title",
    "Understanding VPS Hosting",
    copy
  );


  const para = translationText(
    "understandingVps.para",
    "VPS is a remote hosting service that provides an environment for MT4, MT5 platforms to ensure a low-latency trading experience with dependable uptime, making them a preferred choice for traders seeking swift execution. It’s particularly beneficial for traders who require 24/7 access, automation, and low-latency connectivity to financial markets.",
    copy
  );

  const parts = String(title).split("VPS");
  return (
    <section className="container py-8 md:py-12">
      <div className="max-w-4xl">
        <div className="mb-5 flex items-center gap-3 text-[#b68756]">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 2.75c-5.11 0-9.25 4.14-9.25 9.25S6.89 21.25 12 21.25 21.25 17.11 21.25 12 17.11 2.75 12 2.75Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M12 10.5v6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12 7.75h.01"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <span className="text-[22px] font-semibold text-primary md:text-[42px]">
            {parts.length > 1 ? (
              <>
                {parts[0]}
                <span className="text-[#b68756]">VPS</span>
                {parts.slice(1).join("VPS")}
              </>
            ) : (
              title
            )}
          </span>
        </div>

        <p className="mt-6 text-[15px] leading-7 text-[#374151] md:text-[17px] md:leading-8">
          {para}
        </p>
      </div>
    </section>
  );
}

