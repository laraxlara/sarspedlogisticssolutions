import Layout from "@/components/layout";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import Stats from "@/sections/Stats";
import About from "@/sections/About";
import Industries from "@/sections/Industries";
import Contact from "@/sections/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sarsped Logistics doo</title>
        <meta
          name="description"
          content="Sarsped Logistics doo pruža pouzdanu i kvalitetnu uslugu drumskog teretnog transporta na relacijama iz Skandinavije, Zapadne i Centralne Evrope do Balkana i obrnuto."
          key="desc"
        />
        <link rel="icon" href="/images/favicon.png" sizes="any" />
        <meta name="language" content="en" />

        <meta property="og:title" content="Sarsped Logistics doo" />
        <meta
          property="og:description"
          content="Sarsped Logistics doo pruža pouzdanu i kvalitetnu uslugu drumskog teretnog transporta na relacijama iz Skandinavije, Zapadne i Centralne Evrope do Balkana i obrnuto."
        />
        <meta
          name="keywords"
          content="Sarsped Logistics, pouzdana logistika, kvalitetan drumski teretni transport, Skandinavija, Zapadna Evropa, Centralna Evropa, Balkan, FTL, LTL, transportne usluge"
        />
        <meta property="og:image" content="/images/og.png" />
        <meta property="og:url" content="https://sarspedlogistics.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="/images/og.png" />
        <meta name="twitter:title" content="Sarsped Logistics doo" />
        <meta
          name="twitter:description"
          content="Sarsped Logistics doo pruža pouzdanu i kvalitetnu uslugu drumskog teretnog transporta na relacijama iz Skandinavije, Zapadne i Centralne Evrope do Balkana i obrnuto."
        />
        <meta name="twitter:image" content="/images/og.png" />
        <link rel="canonical" href="https://sarspedlogistics.com/" />
      </Head>
      <Layout>
        <Hero />
        <Stats />
        <Features />
        <About />
        <Industries />
        <Contact />
      </Layout>
    </>
  );
}
