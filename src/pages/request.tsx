import Layout from "@/components/layout";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <Layout>
      <div className="bg-white py-6 sm:py-8 lg:py-12 mt-24">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Zahtev za upit
            </h1>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Spremni da pojednostavite svoje logističke potrebe? Popunite
              formular ispod da biste dobili personalizovanu ponudu prilagođenu
              vašim zahtevima. Naš posvećeni tim obezbeđuje brze odgovore i
              tačne procene kako bi efikasno zadovoljio vaše potrebe. Dozvolite
              nam da budemo partner sa vama kako bismo vam pružili pouzdana i
              isplativa rešenja za vaše poslovanje.
            </p>
          </div>
          <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Ime*
              </label>
              <input
                name="first-name"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-yellow-200 transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Prezime*
              </label>
              <input
                name="last-name"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-yellow-200 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Telefon
              </label>
              <input
                name="company"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-yellow-200 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Kompanija
              </label>
              <input
                name="company"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-yellow-200 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Adresa Kompanije
              </label>
              <input
                name="company"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-yellow-200 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email*
              </label>
              <input
                name="email"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-yellow-200 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Naslov*
              </label>
              <input
                name="subject"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-yellow-200 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Upit*
              </label>
              <textarea
                name="message"
                className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-yellow-200 transition duration-100 focus:ring"
              ></textarea>
            </div>

            <div className="flex items-center justify-between sm:col-span-2">
              <button className="inline-block rounded-lg w-full bg-[#ED224F] px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-[#ED224F] transition duration-100 hover:bg-[#ED224F]/75 focus-visible:ring active:bg-[#ED224F] md:text-base">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
