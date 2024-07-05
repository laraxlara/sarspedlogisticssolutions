import Layout from "@/components/layout";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import Stats from "@/sections/Stats";
import About from "@/sections/About";
import Industries from "@/sections/Industries";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <Features />
      <About />
      <Industries />
      <Contact />
    </Layout>
  );
}
