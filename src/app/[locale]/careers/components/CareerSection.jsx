'use client';
import React, { useState } from 'react'
import { FaLongArrowAltRight, FaChevronDown, FaChevronUp, FaBriefcase } from 'react-icons/fa';
import { HiOutlineBriefcase, HiOutlineClock, HiOutlineAcademicCap } from 'react-icons/hi';

const CareerSection = ({ messages = {}, onJobSelect }) => {
    const text = (key, fallback = "") => {
        const val = messages?.[key];
        return typeof val === "string" && val.length ? val : fallback;
    };
    const jobText = (key, fallback = "") => {
        const val = messages?.jobUi?.[key];
        return typeof val === "string" && val.length ? val : fallback;
    };

    const [expandedJobs, setExpandedJobs] = useState({});

    const toggleJobDetails = (index) => {
        setExpandedJobs((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    const applyButtonClass =
        "inline-flex items-center justify-center rounded-xl transition text-center duration-300 font-medium hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary whitespace-nowrap bg-gradient-to-r hover:from-[#B68756] hover:via-[#995F22] hover:to-[#995F22] from-[#263788] via-[#101638] to-[#263788] text-white hover:opacity-90 px-6 py-3 TextButton";

    const boxContents = [
        {
            icon: <FaBriefcase />,
            title: "HR Recruiter (LATAM Office)",
            titleES: "Reclutador(a) de RR. HH. y Contador(a) – Medio Tiempo (Remoto, México)",
            description: "We are a Dubai-based company looking to build a long-term collaboration with a part-time HR recruiter and accountant based in Mexico. This is a fully remote role with flexible hours, ideal for someone who wants to work from home and support an international team.",
            number: 2,
            fullDescription: {
                companyOverview: "We are a Dubai-based company looking to build a long-term collaboration with a part-time HR recruiter and accountant based in Mexico. This is a fully remote role with flexible hours, ideal for someone who wants to work from home and support an international team.",
                companyOverviewES: "Somos una empresa basada en Dubai que busca establecer una colaboración a largo plazo con un(a) reclutador(a) de RR. HH. y contador(a) de medio tiempo residente en México. Es un puesto 100% remoto, con horario flexible, ideal para alguien que desee trabajar desde casa y apoyar a un equipo internacional.",
                responsibilities: {
                    hrRecruitment: {
                        title: "HR Recruitment / Reclutamiento de RR. HH.",
                        items: [
                            "Post job openings on local and international platforms (e.g., LinkedIn, Indeed, Mexican job boards). / Publicar vacantes en portales de empleo locales e internacionales (por ejemplo, LinkedIn, Indeed y bolsas de trabajo en México).",
                            "Source and screen candidates in Mexico and Latin America according to our requirements. / Buscar y prefiltrar candidatos en México y Latinoamérica de acuerdo con nuestros requisitos.",
                            "Conduct initial interviews (video/phone) and evaluate candidates' skills, experience, and cultural fit. / Realizar entrevistas iniciales (por videollamada o teléfono) y evaluar habilidades, experiencia y compatibilidad cultural.",
                            "Coordinate interviews between candidates and U.S.-based managers. / Coordinar entrevistas entre los candidatos y los responsables de contratación en Estados Unidos.",
                            "Maintain an organized candidate pipeline and provide regular status updates. / Mantener un pipeline de candidatos organizado y enviar reportes periódicos de avance."
                        ]
                    },
                    basicAccounting: {
                        title: "Basic Accounting / Contabilidad básica",
                        items: [
                            "Support with basic bookkeeping tasks and expense tracking. / Apoyar con tareas básicas de contabilidad y control de gastos.",
                            "Prepare simple monthly reports (income, expenses, basic summaries) for the management team. / Preparar reportes mensuales simples (ingresos, egresos, resúmenes básicos) para el equipo directivo.",
                            "Coordinate with our external accountant/CPA in the U.S. by providing requested documentation and data. / Coordinar con nuestro contador/CPA externo en Estados Unidos, proporcionando la documentación e información requerida."
                        ]
                    }
                },
                requirements: [
                    "Based in Mexico and legally able to work as an independent contractor. / Residir en México y poder trabajar legalmente como contratista independiente.",
                    "Native Spanish speaker with good English communication skills (written and spoken). / Español nativo con buen nivel de inglés (oral y escrito).",
                    "2+ years of experience in recruitment, HR or talent acquisition. / Mínimo 2 años de experiencia en reclutamiento, RR. HH. o adquisición de talento.",
                    "Previous experience with basic accounting, bookkeeping or administrative finance tasks. / Experiencia previa en tareas básicas de contabilidad, registro contable o finanzas administrativas.",
                    "Comfortable working remotely, managing your own schedule, and communicating mainly online. / Comodidad trabajando en remoto, gestionando su propio horario y comunicándose principalmente en línea.",
                    "Organized, detail-oriented, and able to work independently with minimal supervision. / Persona organizada, detallista y capaz de trabajar de manera autónoma con supervisión mínima."
                ],
                compensation: [
                    "Fixed monthly payment: USD 1,000 (part-time, remote). / Pago mensual fijo: USD 1,000 (medio tiempo, remoto).",
                    "Additional commission per successful hire (amount to be defined per profile or per project). / Comisión adicional por cada contratación exitosa (monto a definir según el perfil o proyecto).",
                    "Long-term collaboration opportunity with potential for increased responsibilities and compensation based on performance. / Oportunidad de colaboración a largo plazo, con posibilidad de incrementar responsabilidades y compensación según el desempeño."
                ],
                howToApply: "Please send your CV (in English or Spanish), a brief introduction, and your availability (hours per week) to: [your email]. Mention \"Part-time HR Recruiter & Accountant – Mexico\" in the subject line. / Envía tu CV (en inglés o español), una breve presentación y tu disponibilidad (horas por semana) a: [tu correo]. Indica en el asunto: «Reclutador(a) de RR. HH. y Contador(a) – Medio Tiempo México»."
            }
        },
        {
            icon: <FaBriefcase />,
            title: "EFX Associate",
            description: "We are seeking a highly skilled and motivated EFX Associate to join our team. As the EFX Associate, you will play a crucial role in managing our bridge configuration on Primexm, overseeing pricing feeds, verifying symbol settings on trading platforms (MT4, MT5, C-Trader), and expanding our product offerings through strategic outreach to Liquidity Providers (LPs).",
            number: 3,
            fullDescription: {
                positionOverview: "We are seeking a highly skilled and motivated EFX Associate to join our team. As the EFX Associate, you will play a crucial role in managing our bridge configuration on Primexm, overseeing pricing feeds, verifying symbol settings on trading platforms (MT4, MT5, C-Trader), and expanding our product offerings through strategic outreach to Liquidity Providers (LPs). This role requires meticulous attention to detail, strong technical skills, and the ability to collaborate effectively with cross-functional teams. The ideal candidate should have a deep understanding of forex trading, bridge technology, LP management, and a proactive approach to automation and process improvement.",
                responsibilities: [
                    {
                        title: "Bridge Configuration and Symbol Settings",
                        items: [
                            "Handle bridge configuration on Primexm, ensuring accurate pricing feeds and seamless connectivity.",
                            "Verify and maintain precise symbol settings on MT4, MT5, and C-Trader platforms, ensuring consistency and accuracy."
                        ]
                    },
                    {
                        title: "LP Outreach and Expansion",
                        items: [
                            "Reach out to Liquidity Providers to expand our product offering and improve trading capabilities.",
                            "Collaborate with LPs to negotiate and configure new offerings while maintaining strong relationships."
                        ]
                    },
                    {
                        title: "LP Pricing Configuration",
                        items: [
                            "Configure Liquidity Provider pricing on the bridge, ensuring accurate and competitive rates for traders.",
                            "Monitor pricing feeds and make adjustments as needed to align with market conditions."
                        ]
                    },
                    {
                        title: "Collaboration and Investigations",
                        items: [
                            "Work closely with Middle Office and Technology teams to handle complex investigations related to trade flow, positions, and platform connectivity.",
                            "Collaborate with internal teams to resolve issues and ensure smooth trade execution."
                        ]
                    },
                    {
                        title: "Automation and Process Improvement",
                        items: [
                            "Identify opportunities for automation and process improvement within the EFX domain.",
                            "Collaborate with the Technology team to develop and implement automated solutions that enhance efficiency."
                        ]
                    },
                    {
                        title: "Plugin Evaluation and Integration",
                        items: [
                            "Search for plugins and solutions to improve trading operations and reduce workload.",
                            "Collaborate with the Technology team to evaluate, integrate, and test new plugins."
                        ]
                    }
                ],
                requirements: [
                    "Bachelor's degree in Finance, Economics, Computer Science, or a related field.",
                    "Minimum of 3 to 5 years of experience in the forex trading industry, specifically in bridge configuration, LP management, and trading platform operations.",
                    "Proficiency in working with bridge technology, particularly Primexm, and experience with pricing feeds.",
                    "Strong understanding of trading platforms such as MT4, MT5, and C-Trader, including symbol settings.",
                    "Proven track record in building and maintaining relationships with Liquidity Providers.",
                    "Excellent analytical skills with the ability to investigate and troubleshoot complex trading issues.",
                    "Knowledge of automation principles and a proactive mindset to drive automation initiatives.",
                    "Effective communication skills to collaborate across different departments and with external partners.",
                    "Problem-solving orientation with the ability to work effectively under pressure.",
                    "Detail-oriented approach and commitment to data accuracy and integrity."
                ],
                closingStatement: "Join our innovative team as an EFX Associate, and contribute to the dynamic forex trading environment by managing bridge configurations, expanding our product offerings, and driving automation. If you're passionate about the intricacies of forex trading technology and have a proven record of LP management, apply now to join us on this exciting journey of growth and advancement."
            }
        },
        {
            icon: <FaBriefcase />,
            title: "Senior Business Development Manager",
            description: "We are looking to hire Senior Business Development Manager, you will be responsible for identifying and developing new business opportunities. You will work to expand the client base, increase trading volumes, and drive revenue growth for the company.",
            number: 4,
            fullDescription: {
                aboutTheJob: "We are looking to hire Senior Business Development Manager, you will be responsible for identifying and developing new business opportunities. You will work to expand the client base, increase trading volumes, and drive revenue growth for the company.",
                keyResponsibilities: [
                    "Identify and target potential clients, including individual traders, institutional investors, and corporate clients, to onboard them to the company's Forex trading platform.",
                    "Stay updated on global financial markets and currency exchange trends, and use this knowledge to identify potential trading opportunities and market niches.",
                    "Build and maintain strong relationships with existing clients, introducing brokers, and other key stakeholders to enhance client retention and loyalty.",
                    "Develop and implement effective sales strategies, including lead generation, cold calling, email campaigns, and participation in industry events and conferences.",
                    "Stay well-informed about the company's Forex trading products, services, and trading platforms to effectively communicate their benefits to potential clients.",
                    "Ensure that all client acquisition activities comply with relevant regulations and company policies, including anti-money laundering (AML) and know-your-customer (KYC) procedures.",
                    "Maintain accurate records of client interactions, sales activities, and revenue generated, and provide regular reports to management.",
                    "Analyze market trends and competitor activities to identify opportunities for business growth and improvement."
                ],
                qualifications: [
                    "Bachelor's degree in finance, business, economics, or a related field (Master's degree may be preferred).",
                    "Proven 5 years of experience in sales or business development within the Forex or financial services industry.",
                    "Should have own book of clients.",
                    "In-depth knowledge of Forex markets, trading strategies, and financial instruments.",
                    "Strong interpersonal and communication skills with the ability to build rapport with clients.",
                    "Understanding of financial regulations and compliance standards in the Forex industry.",
                    "Excellent analytical and problem-solving skills.",
                    "Proficiency in using trading platforms and financial software.",
                    "Self-motivated and results-oriented with a drive to meet and exceed sales targets.",
                    "Willingness to travel and attend industry events and conferences as necessary."
                ]
            }
        },
    ];

    return (
        <section className='relative z-30 mt-5'>
            <div className='flex flex-col space-y-2'>
                <div>
                    <h2 className='HeadingH3 py-6 text-primary'>{text("jobs", "Current Jobs")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {boxContents.map((box, index) => (
                            <div
                                key={index}
                                className="group relative h-fit bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-300 overflow-hidden"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Header Section */}
                                <div className="p-5 md:p-6 pb-4">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3 flex-1">
                                            <div className="text-secondary text-3xl md:text-4xl flex-shrink-0">
                                                {box.icon}
                                            </div>
                                            <h3 className="HeadingH5 text-primary leading-tight">
                                                {box.title}
                                            </h3>
                                        </div>
                                        <div className="flex-shrink-0 ml-3">
                                            <span className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 text-secondary text-lg font-bold rounded-xl">
                                                {box.number}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Short Description */}
                                    <p className="TextSmall text-gray-600 leading-relaxed mb-4 line-clamp-3">
                                        {box.description}
                                    </p>

                                    {/* Quick Info Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-xl">
                                            <HiOutlineBriefcase className="text-sm" />
                                            {jobText("fullTime", "Full-time")}
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 text-xs rounded-xl">
                                            <HiOutlineClock className="text-sm" />
                                            {jobText("flexible", "Flexible")}
                                        </span>
                                    </div>
                                </div>

                                {/* Expandable Details Section */}
                                {box.fullDescription && (
                                    <div className="border-t border-gray-200">
                                        <button
                                            type="button"
                                            onClick={() => toggleJobDetails(index)}
                                            className="w-full px-5 md:px-6 py-4 flex items-center justify-between text-primary hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            <span className="TextButton font-medium">
                                                {expandedJobs[index]
                                                    ? jobText("hideDetails", "Hide Details")
                                                    : jobText("viewFullDescription", "View Full Job Description")}
                                            </span>
                                            {expandedJobs[index] ? (
                                                <FaChevronUp className="text-secondary" />
                                            ) : (
                                                <FaChevronDown className="text-secondary" />
                                            )}
                                        </button>

                                        {expandedJobs[index] && (
                                            <div className="px-5 md:px-6 pb-6 space-y-6 transition-all duration-300 ease-in-out">
                                                        {box.fullDescription.companyOverview && (
                                                            <div>
                                                                <h4 className="HeadingH5 text-primary mb-2 flex items-center gap-2">
                                                                    <HiOutlineBriefcase className="text-secondary" />
                                                                    {jobText("aboutCompany", "About the Company / Sobre la empresa")}
                                                                </h4>
                                                                <div className="space-y-2">
                                                                    <p className="TextSmall text-gray-700 leading-relaxed">
                                                                        <span className="font-medium">EN:</span>{" "}
                                                                        {box.fullDescription.companyOverview}
                                                                    </p>
                                                                    {box.fullDescription.companyOverviewES && (
                                                                        <p className="TextSmall text-gray-700 leading-relaxed">
                                                                            <span className="font-medium">ES:</span>{" "}
                                                                            {box.fullDescription.companyOverviewES}
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {box.fullDescription.positionOverview && (
                                                            <div>
                                                                <h4 className="HeadingH5 text-primary mb-2">
                                                                    {jobText("positionOverview", "Position Overview")}
                                                                </h4>
                                                                <p className="TextSmall text-gray-700 leading-relaxed">
                                                                    {box.fullDescription.positionOverview}
                                                                </p>
                                                            </div>
                                                        )}

                                                        {box.fullDescription.aboutTheJob && (
                                                            <div>
                                                                <h4 className="HeadingH5 text-primary mb-2 flex items-center gap-2">
                                                                    <HiOutlineBriefcase className="text-secondary" />
                                                                    {jobText("aboutJob", "About the Job")}
                                                                </h4>
                                                                <p className="TextSmall text-gray-700 leading-relaxed">
                                                                    {box.fullDescription.aboutTheJob}
                                                                </p>
                                                            </div>
                                                        )}

                                                        {box.fullDescription.keyResponsibilities && (
                                                            <div>
                                                                <h4 className="HeadingH5 text-primary mb-3">
                                                                    {jobText("keyResponsibilities", "Key Responsibilities")}
                                                                </h4>
                                                                <ul className="space-y-2">
                                                                    {box.fullDescription.keyResponsibilities.map((responsibility, idx) => (
                                                                        <li
                                                                            key={idx}
                                                                            className="TextSmall text-gray-700 leading-relaxed flex items-start gap-2"
                                                                        >
                                                                            <span className="text-secondary mt-1.5 flex-shrink-0">•</span>
                                                                            <span>{responsibility}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}

                                                        {box.fullDescription.responsibilities && Array.isArray(box.fullDescription.responsibilities) && (
                                                            <div>
                                                                <h4 className="HeadingH5 text-primary mb-3">
                                                                    {jobText("responsibilities", "Responsibilities")}
                                                                </h4>
                                                                <div className="space-y-4">
                                                                    {box.fullDescription.responsibilities.map((responsibilityGroup, idx) => (
                                                                        <div key={idx}>
                                                                            <h5 className="TextButton font-semibold text-primary mb-2">
                                                                                {idx + 1}. {responsibilityGroup.title}
                                                                            </h5>
                                                                            <ul className="space-y-1.5 ml-4">
                                                                                {responsibilityGroup.items.map((item, itemIdx) => (
                                                                                    <li
                                                                                        key={itemIdx}
                                                                                        className="TextSmall text-gray-700 leading-relaxed flex items-start gap-2"
                                                                                    >
                                                                                        <span className="text-secondary mt-1.5 flex-shrink-0">o</span>
                                                                                        <span>{item}</span>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {box.fullDescription.responsibilities && (
                                                            <div>
                                                                <h4 className="HeadingH5 text-primary mb-3">
                                                                    {jobText("responsibilitiesBilingual", "Responsibilities / Responsabilidades")}
                                                                </h4>

                                                                {box.fullDescription.responsibilities.hrRecruitment && (
                                                                    <div className="mb-4">
                                                                        <h5 className="TextButton font-semibold text-primary mb-2">
                                                                            {box.fullDescription.responsibilities.hrRecruitment.title}
                                                                        </h5>
                                                                        <ul className="space-y-2">
                                                                            {box.fullDescription.responsibilities.hrRecruitment.items.map((item, idx) => (
                                                                                <li
                                                                                    key={idx}
                                                                                    className="TextSmall text-gray-700 leading-relaxed flex items-start gap-2"
                                                                                >
                                                                                    <span className="text-secondary mt-1.5 flex-shrink-0">•</span>
                                                                                    <span>{item}</span>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                )}

                                                                {box.fullDescription.responsibilities.basicAccounting && (
                                                                    <div>
                                                                        <h5 className="TextButton font-semibold text-primary mb-2">
                                                                            {box.fullDescription.responsibilities.basicAccounting.title}
                                                                        </h5>
                                                                        <ul className="space-y-2">
                                                                            {box.fullDescription.responsibilities.basicAccounting.items.map((item, idx) => (
                                                                                <li
                                                                                    key={idx}
                                                                                    className="TextSmall text-gray-700 leading-relaxed flex items-start gap-2"
                                                                                >
                                                                                    <span className="text-secondary mt-1.5 flex-shrink-0">•</span>
                                                                                    <span>{item}</span>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}

                                                        {box.fullDescription.systemsInvolved && (
                                                            <div>
                                                                <h4 className="HeadingH5 text-primary mb-3">
                                                                    {jobText("systemsInvolved", "Systems Involved")}
                                                                </h4>
                                                                <ul className="space-y-1">
                                                                    {box.fullDescription.systemsInvolved.map((system, idx) => (
                                                                        <li key={idx} className="TextSmall text-gray-700 flex items-start gap-2">
                                                                            <span className="text-secondary mt-1.5 flex-shrink-0">•</span>
                                                                            <span>{system}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}

                                                        {box.fullDescription.basicQueries && (
                                                            <div>
                                                                <h4 className="HeadingH5 text-primary mb-3">
                                                                    {jobText("basicQueries", "Basic Day-to-Day Queries")}
                                                                </h4>
                                                                <ul className="space-y-1">
                                                                    {box.fullDescription.basicQueries.map((query, idx) => (
                                                                        <li key={idx} className="TextSmall text-gray-700 flex items-start gap-2">
                                                                            <span className="text-secondary mt-1.5 flex-shrink-0">•</span>
                                                                            <span>{query}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}

                                                        {box.fullDescription.shiftHours && (
                                                            <div>
                                                                <h4 className="HeadingH5 text-primary mb-2 flex items-center gap-2">
                                                                    <HiOutlineClock className="text-secondary" />
                                                                    {jobText("shiftHours", "Shift Hours")}
                                                                </h4>
                                                                <p className="TextSmall text-gray-700 leading-relaxed">
                                                                    {box.fullDescription.shiftHours}
                                                                </p>
                                                            </div>
                                                        )}

                                                        {box.fullDescription.qualifications && (
                                                            <div>
                                                                <h4 className="HeadingH5 text-primary mb-3 flex items-center gap-2">
                                                                    <HiOutlineAcademicCap className="text-secondary" />
                                                                    {jobText("qualifications", "Qualifications")}
                                                                </h4>
                                                                <ul className="space-y-2">
                                                                    {box.fullDescription.qualifications.map((qual, idx) => (
                                                                        <li
                                                                            key={idx}
                                                                            className="TextSmall text-gray-700 leading-relaxed flex items-start gap-2"
                                                                        >
                                                                            <span className="text-secondary mt-1.5 flex-shrink-0">•</span>
                                                                            <span>{qual}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}

                                                        {box.fullDescription.requirements && (
                                                            <div>
                                                                <h4 className="HeadingH5 text-primary mb-3 flex items-center gap-2">
                                                                    <HiOutlineAcademicCap className="text-secondary" />
                                                                    {jobText("requirements", "Requirements / Requisitos")}
                                                                </h4>
                                                                <ul className="space-y-2">
                                                                    {box.fullDescription.requirements.map((req, idx) => (
                                                                        <li
                                                                            key={idx}
                                                                            className="TextSmall text-gray-700 leading-relaxed flex items-start gap-2"
                                                                        >
                                                                            <span className="text-secondary mt-1.5 flex-shrink-0">•</span>
                                                                            <span>{req}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}

                                                        {box.fullDescription.whatWeOffer && (
                                                            <div className="rounded-2xl border border-gray-200 bg-[#F9FAFB] p-4">
                                                                <h4 className="HeadingH5 text-primary mb-3">
                                                                    {jobText("whatWeOffer", "What We Offer")}
                                                                </h4>
                                                                <ul className="space-y-2">
                                                                    {box.fullDescription.whatWeOffer.map((offer, idx) => (
                                                                        <li
                                                                            key={idx}
                                                                            className="TextSmall text-gray-700 leading-relaxed flex items-start gap-2"
                                                                        >
                                                                            <span className="text-secondary mt-1.5 flex-shrink-0">✓</span>
                                                                            <span>{offer}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}

                                                        {box.fullDescription.compensation && (
                                                            <div className="rounded-2xl border border-gray-200 bg-[#F9FAFB] p-4">
                                                                <h4 className="HeadingH5 text-primary mb-3">
                                                                    {jobText("compensation", "Compensation / Compensación")}
                                                                </h4>
                                                                <ul className="space-y-2">
                                                                    {box.fullDescription.compensation.map((item, idx) => (
                                                                        <li
                                                                            key={idx}
                                                                            className="TextSmall text-gray-700 leading-relaxed flex items-start gap-2"
                                                                        >
                                                                            <span className="text-secondary mt-1.5 flex-shrink-0">$</span>
                                                                            <span>{item}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}

                                                        {box.fullDescription.howToApply && (
                                                            <div className="rounded-2xl border border-[#D6E4FF] bg-[#EEF4FF] p-4">
                                                                <h4 className="HeadingH5 text-primary mb-2">
                                                                    {jobText("howToApply", "How to Apply / Cómo postular")}
                                                                </h4>
                                                                <p className="TextSmall text-gray-700 leading-relaxed">
                                                                    {box.fullDescription.howToApply}
                                                                </p>
                                                            </div>
                                                        )}

                                                        {box.fullDescription.closingStatement && (
                                                            <div className="rounded-2xl border border-secondary/20 bg-gradient-to-r from-secondary/10 to-primary/10 p-4">
                                                                <p className="TextSmall text-gray-700 leading-relaxed italic">
                                                                    {box.fullDescription.closingStatement}
                                                                </p>
                                                            </div>
                                                        )}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="px-6 pb-6 pt-4 flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => onJobSelect && onJobSelect(box.title)}
                                        className={`flex-1 ${applyButtonClass}`}
                                    >
                                        {text("apply", "Apply")} <FaLongArrowAltRight className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CareerSection