import React from "react";
import Link from "next/link";
import Image from "next/image";
import ImageSvg from "@/components/svg/ImageSvg";

import a1 from "../../public/images/a4.jpg";
import a2 from "../../public/images/a5.jpg";
import a3 from "../../public/images/sajt.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <section
      id="about"
      className="max-w-screen-xl mx-auto overflow-hidden pt-20 pb-4 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark px-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <Image src={a1} alt="" className="w-full rounded-xl" />
                </div>
                <div className="py-3 sm:py-4">
                  <Image src={a2} alt="" className="w-full rounded-xl" />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <Image src={a3} alt="" className="w-full rounded-xl" />
                  <span className="absolute -right-7 -bottom-7 z-[-1]">
                    <ImageSvg />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="block text-lg text-[#ED224F] font-semibold">
                O nama
              </span>
              <h2 className="mb-5 text-3xl font-bold text-[#454444] sm:text-[40px]/[48px]">
                Logistika i transport robe.
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                <span className="text-[#ED224F] font-bold">
                  Sarsped logistics solutions d.o.o.
                </span>{" "}
                je pružalac logističkih usluga specijalizovan za organizaciju,
                optimizaciju i izvršenje međunarodnog i domaćeg drumskog
                transporta tereta u Evropi. Naša vizija je da postanemo sinonim
                za odličnu i pouzdanu uslugu drumskog transporta širom Evrope.
              </p>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                Težimo da budemo prepoznati kao lideri u logistici, pružajući
                vrhunsku uslugu 24/7, koja prevazilazi očekivanja naših
                klijenata i omogućava im da se fokusiraju na njihovo osnovno
                poslovanje. Takođe, posvećeni smo smanjenju našeg uticaja na
                okolinu usvajanjem praksi zelene logistike. Težimo da
                kontinuirano širimo i ojačavamo našu mrežu klijenata i
                podizvođača, negujući dugotrajna partnerstva koja pokreću
                zajednički rast i uspeh.
              </p>
              <Link
                href="javascript:void(0)"
                className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
