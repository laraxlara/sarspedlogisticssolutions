import React from "react";
import Image from "next/image";

import map from "../../public/images/map.png";

type Props = {};

function Stats({}: Props) {
  return (
    <section
      id="stats"
      className="relative text-gray-600 body-font max-w-screen-xl mx-auto"
    >
      <div className="absolute top-0 opacity-[0.5]">
        <img
          src="https://i.ibb.co/KjrPCyW/map.png"
          alt="world map image"
          className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden"
        />
        <img
          src="https://i.ibb.co/SXKj9Mf/map-bg.png"
          alt="mobile-image"
          className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0"
        />
      </div>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h4 className="title-font font-medium text-2xl mb-2 text-gray-900">
              <span className="text-[#ED224F] font-bold">ONESPED</span>{" "}
              prvenstveno uključuje puteve koji počinju ili završavaju na
              Balkanu.
            </h4>
            <div className="leading-relaxed">
              Posvećenost ONESPED flote nudi pouzdane usluge drumskog teretnog
              transporta klijentima na Balkanu, Skandinaviji, Centralnoj i
              Zapadnoj Evropi.
            </div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-2xl text-gray-900">
              28 trucks
            </h2>
            <p className="leading-relaxed">Balkans and Turkey</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-2xl text-gray-900">
              34 trucks
            </h2>
            <p className="leading-relaxed">Western Europe</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-2xl text-gray-900">
              32 trucks
            </h2>
            <p className="leading-relaxed">Scandinavia</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-2xl text-gray-900">
              19 trucks
            </h2>
            <p className="leading-relaxed">Central Europe</p>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <Image
            className="object-cover object-center w-full h-full"
            src={map}
            alt="stats"
          />
        </div>
      </div>
    </section>
  );
}

export default Stats;
