'use client'
import { GiChart } from "react-icons/gi";
import { SlSpeedometer } from "react-icons/sl";
import { LiaCoinsSolid } from "react-icons/lia";
import { TbArrowBigUpLineFilled } from "react-icons/tb";
import { BsSpeedometer2 } from "react-icons/bs";
import { FaPeopleRobbery } from "react-icons/fa6";

const DirectAccessSection = ({ copy }) => {

  const tradingBenefits = [
    {
      text: copy?.point1,
      icon: <GiChart />,
    },
    {
      text: copy?.point2,
      icon: <SlSpeedometer />,
    },
    {
      text: copy?.point3,
      icon: <LiaCoinsSolid />,
    },
    {
      text: copy?.point4,
      icon: <TbArrowBigUpLineFilled />,
    },
    {
      text: copy?.point5,
      icon: <BsSpeedometer2 />,
    },
    {
      text: copy?.point6,
      icon: <FaPeopleRobbery />,
    }
  ];


  return (
    <section className="container px-4 py-10 md:py-14">
      <div className="mb-8 text-center">
        <h2 className="HeadingH2 mb-2 text-slate-900">{copy?.heading}</h2>
        <p className="Text text-slate-700 max-w-4xl mx-auto">{copy?.desc}</p>
      </div>

      <div className="mt-6 space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          {tradingBenefits
            .filter((b) => b?.text)
            .map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-100 px-5 py-4 shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-slate-700">
                  {benefit.icon}
                </div>
                <div className="min-w-0">
                  <p className="HeadingH5 text-slate-900">{benefit.text}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default DirectAccessSection