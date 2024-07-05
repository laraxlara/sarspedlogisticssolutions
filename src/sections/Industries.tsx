import React from "react";
import Image from "next/image";

import a4 from "../../public/images/a4.jpg";
import a1 from "../../public/images/a1.jpg";
import a2 from "../../public/images/a2.jpg";
import sajt2 from "../../public/images/sajt2.jpg";
import hero1 from "../../public/images/hero1.jpg";

import b1 from "../../public/images/b1.jpg";

type Props = {};

function Industries({}: Props) {
  return (
    <div className="relative">
      <div className="bg-white absolute z-10 opacity-75 left-0 right-0 m-auto w-1/2 p-8 top-1/2 transform -translate-y-1/2">
        <h5 className="mb-5 text-3xl font-bold text-[#454444] sm:text-[40px]/[48px]">
          Tipovi robe.
        </h5>
        <p className=" text-sm md:text-lg">
          Mi razumemo da svaki naš klijent ima jedinstvene potrebe, te stoga
          nudimo fleksibilna logistička rešenja krojena po tim specifičnim
          zahtevima. Bez obzira na tip robe ili destinacije, mi ćemo naći
          rešenje za vas. Mi pružamo organizaciju transporta različitih roba,
          uključujući komercijalnu robu, opasne ADR materijale, robu koja
          podleže temperaturno kontrolisanim uslovima, robu podložnu pregledima,
          mašine itd.
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
                src={a4}
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 brightness-50"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </div>

            <div className="group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <Image
                src={hero1}
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
                src={sajt2}
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 brightness-50"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industries;
