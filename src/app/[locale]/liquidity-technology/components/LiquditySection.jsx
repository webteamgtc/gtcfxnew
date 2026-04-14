import React from "react";
import Image from "next/image";

const LiquditySection = ({ copy }) => {
    return (
        <section className="relative overflow-hidden bg-[#F8FAFC] py-10 md:py-16">
            <div className="container relative z-10">
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                    <div className="flex flex-col gap-4">
                        <h1 className="HeadingH2 text-primary">
                            {copy?.banner?.title}
                        </h1>
                        <p className="Text text-[#374151]">
                            {copy?.banner?.subTitle}
                        </p>
                    </div>

                    <div className="relative mx-auto w-full max-w-[520px]">
                        <Image
                            src={"/signal-centre.webp"}
                            width={520}
                            height={500}
                            alt="Liquidity & Technology"
                            className="h-auto w-full object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute left-[-120px] top-20 h-[260px] w-[260px] rounded-xl bg-[#263788]/5 blur-3xl" />
            <div className="pointer-events-none absolute right-[-120px] bottom-10 h-[280px] w-[280px] rounded-xl bg-[#b68756]/10 blur-3xl" />
        </section>
    );
};

export default LiquditySection;
