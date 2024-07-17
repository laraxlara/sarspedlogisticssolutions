import Layout from "@/components/layout";
import RequestForm from "@/components/contact/RequestForm";
import { FormattedMessage } from "react-intl";

export default function Home() {
  return (
    <Layout>
      <div className="bg-white py-6 sm:py-8 lg:py-12 mt-24">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              <FormattedMessage id="requestPageTitle" />
            </h1>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              <FormattedMessage id="requestPageText" />
            </p>
          </div>
          <RequestForm />
        </div>
      </div>
    </Layout>
  );
}
