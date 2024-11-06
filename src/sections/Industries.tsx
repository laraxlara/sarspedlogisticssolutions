import React from "react";
import Image from "next/image";

import a11 from "../../public/images/a11.jpg";
import a1 from "../../public/images/a1.jpg";
import a2 from "../../public/images/a2.jpg";
import kamionsarsped from "../../public/images/kamion sarsped.png";
import s2 from "../../public/images/s2.png";

import b1 from "../../public/images/b1.jpg";
import { FormattedMessage } from "react-intl";

function Industries() {
  return (
    <section id="industries" className="relative mb-8">
      <div className="bg-white absolute z-10 opacity-75 left-0 right-0 m-auto w-2/3 md:w-1/2 p-8 top-1/2 transform -translate-y-1/2">
        <h5 className="mb-5 text-3xl font-bold text-[#454444] sm:text-[40px]/[48px]">
          <FormattedMessage id="typesOfGoods" />
        </h5>
        <p className=" text-sm md:text-lg">
          <FormattedMessage id="typesOfGoodsText" />
        </p>
      </div>
      <div className="bg-white">
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3">
            <div className="group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:h-80">
              <Image
                src={a1}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 brightness-50"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </div>

            <div className="group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <Image
                src={s2}
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 brightness-50"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </div>

            <div className="group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <Image
                src={a11}
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 brightness-50"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </div>

            <div className="group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:h-80">
              <Image
                src={a2}
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 brightness-50"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </div>

            <div className="group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:h-80">
              <Image
                src={b1}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 brightness-50"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </div>

            <div className="group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <Image
                src={kamionsarsped}
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 brightness-50"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Industries;
