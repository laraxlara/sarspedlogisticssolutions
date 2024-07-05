import React from "react";

type Props = {};

function Features({}: Props) {
  return (
    <section id="features" className="bg-gray-100 text-white lg:h-[500px]">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-xl">
          <h5 className="text-3xl text-black font-bold sm:text-4xl">
            Ono što nas čini posebnim
          </h5>

          <p className="mt-4 text-gray-800">
            Verujemo u negovanje ne samo poslovnih odnosa, već i istinskog
            partnerstva sa našim klijentima i podizvođačima. Trudimo se da
            budemo više od samo pružaoca usluga – cilj nam je da budemo pouzdan
            saveznik, nudeći stalnu podršku i smernice na svakom koraku.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-[#ED224F] p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-target-arrow"
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
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 7a5 5 0 1 0 5 5" />
                <path d="M13 3.055a9 9 0 1 0 7.941 7.945" />
                <path d="M15 6v3h3l3 -3h-3v-3z" />
                <path d="M15 9l-3 3" />
              </svg>
            </span>

            <div>
              <h2 className="text-lg font-bold text-black">Naš cilj</h2>

              <p className="mt-1 text-sm text-gray-800">
                Naš cilj je da premašimo standardni nivo usluge u logistici.
                Promovišemo inovativna rešenja za rešavanje izazova logističke
                industrije koji se stalno menjaju. Posvećeni efikasnosti,
                tačnosti, sigurnosti i kontinuiranom radu na poboljšanju naših
                procesa težimo najvišem nivou zadovoljstva klijenata.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-[#ED224F] p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-users"
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
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
            </span>

            <div>
              <h2 className="text-lg font-bold text-black">Tim stručnjaka</h2>

              <p className="mt-1 text-sm text-gray-800">
                Tim iskusnih i obrazovanih logističkih stručnjaka pruža najbolja
                logistička rešenja uz održavanje konkurentnih cena naših usluga.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-[#ED224F] p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-truck"
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
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
              </svg>
            </span>

            <div>
              <h2 className="text-lg font-bold text-black">Moderna flota</h2>

              <p className="mt-1 text-sm text-gray-800">
                Imamo modernu flotu pouzdanih podizvođača koji su pažljivo
                odabrani. Ovo nam omogućava da našim klijentima ponudimo
                konzistentan i stabilan broj kamiona za pune (FTL) i zbirne
                (LTL) pošiljke.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
