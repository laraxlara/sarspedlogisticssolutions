import "@/styles/globals.css";
import type { AppProps, AppType } from "next/app";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import en from "../../public/lang/en.json";
import sr from "../../public/lang/sr.json";

const messages = {
  sr,
  en,
};

type Locale = keyof typeof messages;

const MyApp: AppType = ({ Component, pageProps }) => {
  const { locale } = useRouter();
  return (
    <IntlProvider
      locale={locale as string}
      messages={messages[locale as Locale]}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
};
export default MyApp;
