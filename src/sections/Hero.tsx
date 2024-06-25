import React from "react";
import Link from "next/link";
import Image from "next/image";

import QuoteButton from "@/components/buttons/QuoteButton";

type Props = {};

function Hero({}: Props) {
  return (
    <section
      id="hero"
      className="relative bg-[url(../../public/images/hero5.jpg)] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-white/15 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-3xl text-start ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white sm:text-7xl/snug">
            We deliver <br /> solutions.
          </h1>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <div className="w-full sm:w-auto lg:hidden  rounded bg-rose-600 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500">
              <Link
                href="/request"
                className="uppercase block w-full flex justify-center gap-4 items-center rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Zahtev za upit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-message-question"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 9h8" />
                  <path d="M8 13h6" />
                  <path d="M14 18h-1l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
                  <path d="M19 22v.01" />
                  <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <QuoteButton />
    </section>
  );
}

export default Hero;
