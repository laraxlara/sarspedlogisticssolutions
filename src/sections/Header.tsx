import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";

import logo from "../../public/images/logo.png";
import uk from "../../public/images/uk.svg";

type Props = {};

const Header = (props: Props) => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };
  return (
    <header className="text-gray-600 body-font fixed top-0 z-20 bg-white w-full shadow-xl">
      <Navbar />
    </header>
  );
};

export default Header;
