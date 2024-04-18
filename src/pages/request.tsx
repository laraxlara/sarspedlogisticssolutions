import Layout from "@/components/layout";
import RequestForm from "@/components/contact/RequestForm";

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
          <RequestForm />
        </div>
      </div>
    </Layout>
  );
}
