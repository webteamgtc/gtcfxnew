'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SocialIcon from '@/app/lp-static/component/SocialIcon'
import { useTranslations } from 'next-intl'

const GtcGoFooter = () => {
      const t = useTranslations("footerLink");
  return (
    <section className='bg-gradient-to-l from-[#05175D] via-[#000021] to-[#05175D]'>
         <div className="container lg:flex justify-start items-center pt-8 border-t border-y-cyan-50 border-opacity-40 px-2 ">
          <div className="lg:basis-3/12 lg:flex flex-wrap items-center justify-center md:pr-10">
           <Link href="/" locale="en" aria-label="GTCFX">
              <Image
                src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/footer-logo.webp"
                width={150}
                height={53}
                alt="GTCFX official logo"
                className="mx-auto md:m-0"
                priority
              />
            </Link>
            <SocialIcon />
           
            <div className="relative w-full h-[150px] pt-5 ">
                <Image src="/footer-map.png" fill alt="GTC Map" className="object-contain" />
            </div>
          </div>
          <div className="lg:basis-9/12 text-xs text-white text-opacity-70 space-y-3 leading-5  pb-16">
            <p>
              {/* <span className="text-secondary">{t("footerNotice.yellow")}</span> */}
              {t("footerNotice.firstPara")}
            </p>
            <p>
              <span className="text-secondary">
                {t("footerNotice.gtc_group_heading1")}
              </span>
              {t("footerNotice.gtc_group_para1")}
            </p>

            <p>{t("footerNotice.gtc_multi_trading_para")}</p>
            <p>
              <span className="text-secondary">
                {t("footerNotice.gtc_global_pty_heading")}
              </span>
              {t("footerNotice.gtc_global_pty_para")}
            </p>
          
          
           
            <p>
            
              {t("footerNotice.eightPara")}{" "}
            </p>
         
          </div>
        </div>
    </section>
  )
}

export default GtcGoFooter