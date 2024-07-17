import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { links } from "./NavbarLinks";

import logo from "../../../public/images/logo2.png";
import uk from "../../../public/images/uk.svg";
import serbia from "../../../public/images/serbia.svg";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

type Props = {};

function Navbar({}: Props) {
  const { locales } = useRouter();
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={logo} alt="Logo" width={300} />
        </Link>
        <button
          onClick={toggleNavbar}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg md:hidden hover:text-[#696868] focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          {isActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
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
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
        <div
          className={`${
            isActive ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-white md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white justify-center sm:justify-start items-start sm:items-center">
            {links.map((link) => (
              <li key={link.id} onClick={toggleNavbar}>
                <Link
                  href={link.url}
                  key={link.id}
                  className="block py-2 px-3 text-[#696868] rounded hover:bg-gray-100 md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  {link.title}
                </Link>
              </li>
            ))}

            <div className="flex justify-center items-center gap-6 md:gap-2 my-6 mx-4 flex-col md:flex-row">
              {[...locales!].sort().map((locale) =>
                locale === "en" ? (
                  <>
                    <Link
                      key={locale}
                      href="/"
                      className="bg-transparent overflow-y-hidden"
                      locale={locale}
                    >
                      <Image src={uk} width={27} alt="" />
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      key={locale}
                      href="/"
                      className="bg-transparent overflow-y-hidden"
                      locale={locale}
                    >
                      <Image src={serbia} width={27} alt="" />
                    </Link>
                  </>
                )
              )}
            </div>

            {/* <select
              id="language-select"
              onChange={handleLanguageChange}
              className="flex-shrink-0 z-10 inline-flex items-center px-2 text-sm font-medium text-center text-gray-600 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
              defaultValue="sr"
            >
              <option value="sr">Srpski</option>
              <option value="en">English</option>
              {/* <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg> */}
            <li className="ml-2">
              <a
                href="tel:+381645805763"
                className="bg-[#9E0606] hover:bg-[#C31F1F] text-gray-200 font-bold py-2 px-2 rounded inline-flex shadow-lg items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 icon icon-tabler icon-tabler-phone"
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
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
                <span>
                  <FormattedMessage id="callButton" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
