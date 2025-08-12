import About from "@/sections/about";
import Articles from "@/sections/articles";
import Contact from "@/sections/contact";
import Hero from "@/sections/hero";
import FrequentlyQuestions from "@/sections/questions";
import Testmonials from "@/sections/testmonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Testmonials />
      <FrequentlyQuestions />
      <Articles />
      <Contact />
    </>
  );
}