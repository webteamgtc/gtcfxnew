
"use client";

export default function KeyBenefitsSection() {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          {/* LEFT */}
          <div className="lg:col-span-6">
            {/* Top bullet */}
            <div className="flex items-center justify-center md:justify-start gap-2 md:text-[22px] text-[18px] text-secondary font-semibold">
              <span className="h-2 w-2 rounded-full bg-[#293B93]" />
              Key Benefits
            </div>

            <h2 className="HeadingH3 py-2">
              What Makes a GTCFX Event
              <br className="hidden md:block" />{" "}
              Different?
            </h2>


            <p className="Text">
              Every GTCFX event is designed with intention. Not to impress on
              the surface but to deliver real value, real conversations, and
              real industry insight.
            </p>

            {/* Divider */}
            <div className="mt-7 h-px w-full bg-[#E9EDF5]" />

            {/* Benefit 1 */}
            <div className="mt-6 flex gap-4">
              <div className="mt-[2px] flex h-12 w-12 p-3 items-center justify-center border border-[#E9EDF5] bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22] rounded-lg "
              >
                {/* small "N" icon box like screenshot */}
                <div className="grid  place-items-center ">
                  <img src="/event/icon-key.svg" alt="user" className="w-full h-full" />
                </div>
              </div>

              <div className="flex-1">
                <h4 className="md:text-[16px] text-[14px] font-extrabold text-[#000]">
                  Real Market Voices, Not Just Speakers
                </h4>
                <p className="mt-2 max-w-[520px] md:text-[16px] text-[14px] font-normal leading-[1.5] text-[#8D9099]">
                  Our sessions are led by professionals who work inside the
                  markets every day, traders, partners, and industry leaders who
                  speak from experience, not slides.
                </p>
              </div>
            </div>

            {/* Divider */}

            {/* Benefit 2 */}
            <div className="mt-6 flex gap-4">
              <div className="mt-[2px] flex h-12 w-12 p-3 items-center justify-center border border-[#E9EDF5] bg-white bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22] rounded-lg"
               
              >
                <div className="grid  place-items-center ">
                  <img src="/event/icon-key.svg" alt="user" className="w-full h-full" />
                </div>
              </div>

              <div className="flex-1">
                <h4 className="md:text-[16px] text-[14px] font-extrabold text-[#000]">
                  Practical Insight You Can Actually Use
                </h4>
                <p className="mt-2 max-w-[520px] md:text-[16px] text-[14px] font-normal leading-[1.5] text-[#8D9099]">
                  From market structure to strategy thinking, discussions focus
                  on ideas you can take back, reflect on, and apply whether
                  you're trading, managing teams, or growing a business.
                </p>
              </div>
            </div>

            <div className="mt-6 h-px w-full bg-[#E9EDF5]" />


            {/* Buttons */}
            <div className="md:mt-9 mt-6 flex flex-wrap items-center md:gap-6 gap-4">
              

              <div className="flex items-center gap-3">
                <div className="flex md:text-[16px] text-[14px] p-1 items-center justify-center bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22] rounded-lg"
                  
                >
                  {/* phone icon */}
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.6 10.8C7.9 13.3 9.9 15.3 12.4 16.6L14.2 14.8C14.5 14.5 14.9 14.4 15.3 14.5C16.5 14.9 17.8 15.1 19.1 15.1C19.6 15.1 20 15.5 20 16V19.1C20 19.6 19.6 20 19.1 20C11.9 20 6 14.1 6 6.9C6 6.4 6.4 6 6.9 6H10C10.5 6 10.9 6.4 10.9 6.9C10.9 8.2 11.1 9.5 11.5 10.7C11.6 11.1 11.5 11.5 11.2 11.8L9.4 13.6"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="leading-tight">
                  <div className=" md:text-[16px] text-[14px] leading-none font-extrabold text-[#000]">
                    Call Now!
                  </div>
                  <div className=" md:text-[16px] text-[14px] mt-1 leading-none text-[#6D6D6D]">
                  +971 800 667788
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES (no absolute positioning) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end overflow-visible">
            <div className="w-full max-w-[520px] overflow-visible">
              <div className="grid grid-cols-12 gap-4 overflow-visible">
                {/* Top image */}
                <div className="col-span-12 md:col-span-8 overflow-hidden rounded-[20px] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                  <img
                    src="/event/firstImg.webp"
                    alt="Top image"
                    className="h-[245px] md:h-[345px] w-full object-cover"
                  />
                </div>

                {/* Bottom image (overlapping via negative margin, not absolute) */}
                <div className="col-span-12 md:col-span-10 md:col-start-5 -mt-0 md:-mt-[140px] overflow-hidden rounded-[22px] bg-white shadow-[0_20px_55px_rgba(0,0,0,0.22)]">
                  <img
                    src="/event/brkImg.webp"
                    alt="Bottom image"
                    className="h-[245px] md:h-[345px] w-full object-cover"
                  />
                </div>

                {/* Orange doodle (top-right) – positioned via margins */}
                <div className="col-span-12 hidden md:flex justify-end -mt-[320px] md:-mt-[520px] mr-0 md:mr-[-6px] pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="87"
                    height="80"
                    viewBox="0 0 87 80"
                    fill="none"
                  >
                    <path
                      d="M72.5798 13.0586C78.7817 10.0262 83.9995 23.0348 85.0798 25.5586C86.7818 29.5346 82.0797 43.5346 74.5798 30.5586C68.0799 17.0348 65.0921 0.131698 49.0799 1.03468C31.5799 5.53465 83.5799 27.5346 72.0799 39.5346C57.8889 50.7908 51.4633 -1.26452 36.5798 9.05862C21.3071 19.6518 76.8353 38.9406 61.5798 49.5586C46.887 59.785 39.1436 8.31946 26.0798 20.5586C13.1504 32.6719 63.2109 47.1641 50.0798 59.0586C36.9035 70.9942 28.0741 18.9836 14.5798 30.5586C0.931862 42.2656 51.3859 56.9724 39.5798 70.5346C27.3833 84.5453 16.7613 27.4701 3.07975 40.0346C-10.4879 52.4946 47.4689 76.9741 29.0798 78.0586C23.919 78.363 20.7597 77.7554 16.0798 75.5586"
                      stroke="#D48755"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                {/* Orange waves (bottom-left) – positioned via margins */}
                <div className="col-span-12 hidden md:flex justify-start -mt-[90px] md:-mt-[130px] ml-4 md:ml-[50px] mb-[-28px] md:mb-[-55px] pointer-events-none">
                  <svg
                    width="56"
                    height="34"
                    viewBox="0 0 56 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-90"
                  >
                    <path
                      d="M4 8c6 6 14 6 20 0s14-6 20 0"
                      stroke="#D58A58"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 17c6 6 14 6 20 0s14-6 20 0"
                      stroke="#D58A58"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 26c6 6 14 6 20 0s14-6 20 0"
                      stroke="#D58A58"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
