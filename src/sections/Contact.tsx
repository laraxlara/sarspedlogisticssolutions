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
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Bulevar%20oslobo%C4%91enja%2078%20Novi%20Sad+()&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>{" "}
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs pb-4 uppercase">
                Sarsped logistics solutions d.o.o.
              </h2>
              <h4 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADRESA
              </h4>
              <p className="mt-1">Bulevar oslobođenja 78, 21000, Novi Sad</p>
              <h4 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                RADNO VREME
              </h4>
              <p className="mt-1">08 - 16</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h4 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h4>
              <a
                href="mailto: info@sarspedlogistics.com"
                className="text-[#ED224F] leading-relaxed"
              >
                info@sarspedlogistics.com
              </a>
              <h4 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PIB/VAT:
              </h4>
              <p className="leading-relaxed">114257660</p>
              <h4 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                MB
              </h4>
              <p className="leading-relaxed">21995908</p>
              <h4 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                Tel:
              </h4>
              <p className="leading-relaxed">+381645805763</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h6 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Kontaktirajte nas
          </h6>
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
