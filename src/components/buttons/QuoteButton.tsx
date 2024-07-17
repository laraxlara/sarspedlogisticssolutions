import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

type Props = {};

function QuoteButton({}: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 3000);

    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        transition: "right 1.4s ease-in-out",
      }}
      className={`absolute hidden lg:flex top-[500px] ${
        isVisible ? "right-0" : "right-[-300px]"
      }
         bg-black/50 w-[400px] h-[200px] justify-center items-center transition ease-in-out delay-150`}
    >
      <Link
        href="/request"
        className="uppercase block w-full flex justify-center gap-4 items-center rounded bg-[#9E0606] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#C31F1F] focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
      >
        <FormattedMessage id="requestButton" />
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
  );
}

export default QuoteButton;
