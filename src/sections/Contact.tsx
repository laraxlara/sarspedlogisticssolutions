import React from "react";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";

type Props = {};

function Contact({}: Props) {
  const customStyle = {
    filter: "grayscale(1) contrast(1.2) opacity(0.4)",
  };
  return (
    <section
      id="contact"
      className="text-gray-600 body-font relative sm:h-screen"
    >
      <div className="container px-5 p-0 sm:py-24 mx-auto flex sm:flex-nowrap flex-wrap sm:h-screen">
        <div className="lg:w-3/4 md:w-1/2 h-[650px] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          {/* <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            style={customStyle}
          ></iframe> */}
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Profesora%20%C5%A0uvakovi%C4%87a%206%2C%2021000%20Novi%20Sad&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            style={customStyle}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs pb-4">
                ONESPED LOGISTICS D.O.O.
              </h2>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADRESA
              </h2>
              <p className="mt-1">Profesora Šuvakovića 6, 21000 Novi Sad</p>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                RADNO VREME
              </h2>
              <p className="mt-1">08 - 16</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <Link href="" className="text-[#ED224F] leading-relaxed">
                example@email.com
              </Link>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                VAT no:
              </h2>
              <p className="leading-relaxed">113377248</p>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                MB
              </h2>
              <p className="leading-relaxed">21856037</p>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                SWIFT CODE:
              </h2>
              <p className="leading-relaxed">RZBSRSBG</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Kontaktirajte nas
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Tu smo da pomognemo! Obratite nam se putem telefona ili e-pošte
            tokom našeg radnog vremena. Za podršku ili više informacija,
            popunite kontakt obrazac ispod.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
