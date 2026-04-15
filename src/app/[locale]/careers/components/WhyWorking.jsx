'use client';
import React from 'react'
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineSlack } from "react-icons/ai";
import { PiHandHeartBold } from "react-icons/pi";
import { RiGlobalLine } from "react-icons/ri";
import { GrWorkshop } from "react-icons/gr";
import { usePathTranslation } from "../../LocaleProvider";

const WhyWorking = ({ messages = {} }) => {
    const text = usePathTranslation("about.careers");

    const boxContents = [
        {
            icon: <PiHandHeartBold />,
            title: [text("heading1_1"), text("heading1_2")],
            description: text("desc1"),
            number: 1,
        },
        {
            icon: <AiOutlineSlack />,
            title: [text("heading2_1"), text("heading2_2")],
            description: text("desc2"),
            number: 2,
        },
        {
            icon: <BsGraphUpArrow />,
            title: [text("heading3_1"), text("heading3_2")],
            description: text("desc3"),
            number: 3,
        },
        {
            icon: <RiGlobalLine />,
            title: [text("heading4_1"), text("heading4_2")],
            description: text("desc4"),
            number: 4,
        },
    ];
    return (
        <section className=' relative z-30'>
            <div className='flex flex-col space-y-2' >
                <div
                >
                    <h2 className='HeadingH3 py-6 text-primary'>
                        {text("why-working")}
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                        {boxContents.map((box, index) => (
                            <div
                                key={index}
                                className="box-setting rounded-2xl border border-[#E3E7F7] bg-[#EEF2FF] p-5 shadow-sm"
                            >
                                <h3 className="HeadingH5 text-primary">
                                    <span className="font-bold">{box.number})</span>{" "}
                                    {box.title[0]}
                                    <span className="text-primary">{box.title[1]}</span>
                                </h3>
                                <p className="TextSmall mt-3 text-[#4B5563] ltr:text-left rtl:text-right">
                                    {box.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WhyWorking