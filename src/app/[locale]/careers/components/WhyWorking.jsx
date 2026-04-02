'use client';
import React from 'react'
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineSlack } from "react-icons/ai";
import { PiHandHeartBold } from "react-icons/pi";
import { RiGlobalLine } from "react-icons/ri";
import { GrWorkshop } from "react-icons/gr";

const WhyWorking = ({ messages = {} }) => {
    const text = (key, fallback = "") => {
        const val = messages?.[key];
        return typeof val === "string" && val.length ? val : fallback;
    };

    const boxContents = [
        {
            icon: <PiHandHeartBold />,
            title: [text("heading1_1", "Innovative "), text("heading1_2", "Environment:")],
            description: text("desc1", ""),
            number: 1,
        },
        {
            icon: <AiOutlineSlack />,
            title: [text("heading2_1", "Collaborative "), text("heading2_2", "Culture:")],
            description: text("desc2", ""),
            number: 2,
        },
        {
            icon: <BsGraphUpArrow />,
            title: [text("heading3_1", "Professional "), text("heading3_2", "Growth:")],
            description: text("desc3", ""),
            number: 3,
        },
        {
            icon: <RiGlobalLine />,
            title: [text("heading4_1", "Global "), text("heading4_2", "Impact:")],
            description: text("desc4", ""),
            number: 4,
        },
    ];
    return (
        <section className=' relative z-30'>
            <div className='flex flex-col space-y-2' >
                <div
                >
                    <h2 className='HeadingH3 py-6 text-primary'>
                        {text("why-working", "Why Working in GTCFX?")}
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