import React, { ReactNode } from "react";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="overflow-x-hidden">
      <Header />

      <main>{props.children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
