// "use client";
// import React from "react";
// import Image from "next/image";
// import { FaPlay } from "react-icons/fa";

// const LatestBlog = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       title: "GTCFX Golden Falcon Awards 2025: Global Trading Excellence Shines in Dubai",
//       image: "/blog-awards.jpg",
//       link: "#",
//     },
//     {
//       id: 2,
//       title: "GTC At The Green Peak Festival Abu Dhabi 2025",
//       image: "/blog-festival.jpg",
//       link: "#",
//     },
//     {
//       id: 3,
//       title: "Meet the winners of the 2nd Demo Trading Competition",
//       image: "/blog-competition.jpg",
//       link: "#",
//     },
//     {
//       id: 4,
//       title: "Simple Self-Defense Skills Everyone Should Learn for Safety",
//       image: "/blog-safety.jpg",
//       link: "#",
//     },
//   ];

//   return (
//     <section className="relative py-16 md:py-24">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <div className="relative w-full h-full">
//           <Image
//             src="/blog-background.jpg"
//             alt="Blog background"
//             fill
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-black/70"></div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="container relative z-10">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
//             Latest Blog
//           </h2>
//           <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
//             Explore Our Latest Insights and Updates
//           </h3>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {blogPosts.map((post) => (
//             <div
//               key={post.id}
//               className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="relative h-48">
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   fill
//                   className="object-cover"
//                 />
//                 {post.id === 1 && (
//                   <div className="absolute inset-0 flex items-center justify-center bg-black/40">
//                     <button className="w-16 h-16 bg-white/90 rounded-xl flex items-center justify-center hover:bg-white transition-colors">
//                       <FaPlay className="text-[#24358b] ml-1" />
//                     </button>
//                   </div>
//                 )}
//               </div>
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-[#24358b] mb-3 line-clamp-2">
//                   {post.title}
//                 </h3>
//                 <a
//                   href={post.link}
//                   className="text-[#24358b] hover:text-[#1d2a6f] font-medium text-sm transition-colors"
//                 >
//                   Read more →
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestBlog;


"use client";

import Image from "next/image";

export default function LatestBlogSection() {
  return (
    <section className="w-full bg-white md:pt-[60px] pt-2">
      <div className="mx-auto max-w-6xl px-4">
        {/* Top label */}
        <div className="flex items-center justify-center gap-[8px] md:text-[22px] text-[18px] text-[#000]">
          <span className="inline-block h-2 w-2 rounded-xl bg-[#293B93]" />
          <span>Latest Blogs</span>
        </div>

        {/* Heading */}
        <h2 className="text-center mt-[10px] md:text-[38px] text-[24px] font-extrabold md:leading-[1.2] leading-[1.3]  text-[#202020]">
          Explore Our Latest Insights and <br className="hidden sm:block" />
          Updates
        </h2>

        {/* Card Wrapper */}
        <div className="md:mt-12 mt-10 ">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left big card */}
            <div className="overflow-hidden rounded-[14px] bg-[#F6F6F7] p-3">
              {/* Image */}
              <div className="relative h-[300px] rounded-[14px] w-full">
                <Image
                  src="/event/blog-img1.svg"
                  alt="Blog cover"
                  fill
                  className="object-cover rounded-[14px] "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-xl bg-[#F2E9FF] text-[10px] text-[#7C3AED]">
                    ◎
                  </span>
                  <p className="md:text-[16px] text-[14px] font-normal text-[#707070]">Mamoona Anjum</p>
                </div>

                <h3 className="mt-4 md:text-[20px] text-[16px] font-extrabold leading-[1.35] text-[#000]">
                  GTCFX Golden Falcon Awards 2025: Global Trading Excellence
                  Shines in Dubai
                </h3>

                <p className="mt-3 md:text-[16px] text-[14px] leading-[1.2] text-[#787878]">
                  Highlighting Dubai’s status as a premier global hub, GTCFX
                  presented its glittering Annual Golden Falcon Awards 2025 at
                  the renowned Ain Dubai.
                </p>

                <div className="my-3 h-[2px] w-full bg-[#E9EDF5]" />


                <button className=" inline-flex items-center gap-2 md:text-[16px] text-[14px] font-semibold text-[#293B93]">
                  Read more <span className="text-[16px]">→</span>
                </button>
              </div>
            </div>

            {/* Right stacked cards */}
            <div className="flex flex-col gap-5">
              {/* Card 1 */}
              <div className="grid overflow-hidden rounded-[14px] bg-[#F6F6F7] p-3 sm:grid-cols-[170px_1fr]">
                <div className="relative h-[150px] w-full sm:h-full">
                  <Image
                    src="/event/blog-img2.svg"
                    alt="Blog cover"
                    fill
                    className="object-cover rounded-[14px]"
                  />
                </div>

                <div className="px-5 pb-5 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-xl bg-[#F2E9FF] text-[10px] text-[#7C3AED]">
                      ◎
                    </span>
                    <p className="md:text-[16px] text-[14px] font-normal text-[#707070]">Mamoona Anjum</p>
                  </div>

                  <h3 className="mt-2 md:text-[20px] text-[16px] font-extrabold leading-[1.35] text-[#000]">
                    GTC At The Green Peak Festival Abu Dhabi 2025
                  </h3>

                  <p className="mt-2 md:text-[16px] text-[14px] leading-[1.2] text-[#787878] ">
                    The Green Peak Festival 2025 held at the Abu Dhabi Energy
                    Center welcomed some of the best minds and visionary leaders
                    across the globe.
                  </p>
                  <div className="my-3 h-[2px] w-full bg-[#E9EDF5]" />

                  <button className=" inline-flex items-center gap-2 md:text-[16px] text-[14px] font-semibold text-[#293B93]">
                    Read more <span className="md:text-[14px] text-[12px]">→</span>
                  </button>
                </div>
              </div>

              <div className="grid overflow-hidden rounded-[14px] bg-[#F6F6F7] p-3 sm:grid-cols-[170px_1fr]">
                <div className="relative h-[150px] w-full sm:h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                    alt="Blog cover"
                    fill
                    className="object-cover rounded-[14px]"
                  />
                </div>

                <div className="px-5 pb-5 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-xl bg-[#F2E9FF] text-[10px] text-[#7C3AED]">
                      ◎
                    </span>
                    <p className="md:text-[16px] text-[14px] font-normal text-[#707070]">Mamoona Anjum</p>
                  </div>

                  <h3 className="mt-2 md:text-[20px] text-[16px] font-extrabold leading-[1.35] text-[#000]">
                    Simple Self-Defense Skills Everyone Should Learn
                  </h3>

                  <p className="mt-2 md:text-[16px] text-[14px] leading-[1.2] text-[#787878] ">
                    The excitement has reached its peak as the 2nd GTC Demo Trading Competition officially concludes, and the results speak volumes about the power of skill,
                  </p>
                  <div className="my-3 h-[2px] w-full bg-[#E9EDF5]" />

                  <button className=" inline-flex items-center gap-2 md:text-[16px] text-[14px] font-semibold text-[#293B93]">
                    Read more <span className="md:text-[14px] text-[12px]">→</span>
                  </button>
                </div>
              </div>
            </div>
            {/* end right */}
          </div>
        </div>
      </div>
    </section>
  );
}
